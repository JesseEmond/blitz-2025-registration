# Blitz 2025 Registration - /dev/null  
It's this time of year again -- time to put an unnecessary amount of time and overkill in a Coveo Blitz registration challenge.

Now don't worry; this year there's no need to [reverse engineer V8 assembly to predict randomness](https://github.com/JesseEmond/blitz-2024-registration/tree/main) (2024), [simulate ants](https://github.com/JesseEmond/blitz-2023-inscription) (2023), or play [Tetris on steroids](https://github.com/JesseEmond/blitz-2022-inscription) (2022) -- this year we're playing with **Hot Wheels Pacman**.

... I *might* be lying. There *might* have been some assembly involved this year, too. I can't help it. *BUT HEY* we ended up with the theoretically maximum, **10,005 points, on all possible maps**!

That makes it all worth it, right?

*... right?*
## The Challenge  
We're essentially roleplaying this movie, but with cars:

![poster for the movie Catch me if you can with Leonardo DiCaprio and Tom Hanks](readme_media/catch_me_if_you_can.png)
_We get to be Leonardo DiCaprio, while Coveo HR is Tom Hanks._

But the game really looks like this:
![Example of a game, we see a 2D grid made up of streets and walls, with a red car in the center left, with dark cars positioned elsewhere on the roads](readme_media/game_example.png)
Our car is the red one (objectively the fastest color), and we are told that Coveo HR is trying to catch us with all those other cars because we forgot to complete our timesheet last quarter, and we want to avoid them for as long as possible (... _what is happening in Coveo offices!?_).

We're presented with a turn-based game.

Each **turn**, our bot must pick an action: move **up**, **down**, **left**, or **right** (or "move to position", and Coveo gracefully does the pathfinding for us).

Our bot must pick its action each turn **within 100ms** based on the game state we receive from the server, which notably contains information about each **threat**:
- Position & direction;
- "Personality" (what's that?)
- "Style" (what's that?)

Our bot gets scored by how many ticks it survived (1 tick is worth 5 points). There is a maximum of 2,000 ticks per game. Thus, the maximum possible score is **10k points** (in reality, as you'll see: 10,005 points).

... And that's pretty much all the info we get.

We can play a few games to find out the following as well:
- There's a couple of different maps;
- `style` can be a couple of different values:
	- `goldfish`
	- `bull`
	- `deer`
	- `shark`
	- `owl`
	- `hawk`
- `personality` seems to always be `lazy`, but maybe that can change...? (spoiler: it can);
- We can send an empty list of actions to stay still on a tick.

A game with an early bot AI might look like this (every movement of the red car is controlled by our bot):
![video of a game where the red car mostly stays still away from the enemy cars and moves when they get close. The game ends with two enemy cars catching a red car stuck in a corridor](readme_media/example_game_1280pts.mp4)
In the game above, we survived for 256 ticks, worth **1,280 points**.
## Let's Start Simple
### Simple, but in Python  

![Python programming language logo made out of metal](readme_media/shiny_python.png)
_Python, but shiny._

We can kick off our Blitz journey with incremental improvements to a Python bot while we become more familiar with the challenge:
- Pick a random direction, but don't pick directions that have walls;
- Don't walk on top of a threat (note: but we don't know how threats move, so who knows!);
- Walk towards "safety", or spots that have a higher distance to any possible threat;
- When not immediately at risk (e.g. a threat with distance 2 near us), move towards the safest point on the map.

My memory is a bit fuzzy, but I think the example video I shared above was effectively doing this. It's not horrible, we can get a bit over 1,000 points with this!

But surely we can do better?
### Simple, but in Rust  

![Python programming language logo made out of metal, but covered in rust](readme_media/rusty_python.png)
_"Python"._

First, why already rewrite in Rust? Couldn't we do a ton more to improve this bot?

Pragmatically, that's certainly the case. But I know myself; I know I'll try to push the challenge a bit and try to do a search for good moves and make use of our 100ms budget, and I'll be glad to not have the language become a crutch at some point in that process and to have invested early in the intended "final state". Plus, it's a good excuse to practice & learn Rust more!

To do this, a lot of our [2024 setup](https://github.com/JesseEmond/blitz-2024-registration/tree/main?tab=readme-ov-file) can be reused. We can make our Python code be a very thin bot that only calls into a real Rust implementation that does the real work. For that, we can use [pyo3](https://pyo3.rs/v0.22.6/). See commit [`7aa519e`](https://github.com/JesseEmond/blitz-2025-registration/commit/7aa519e411554596e982e3ea84409f477dab1873) for an example of how to do that.

Once we're done recoding our bot in Rust, we can then start looking in the future a bit when considering a move. A simple approach is to pretend that enemy threats are all purely random, and sample their possible actions multiple times to get a probabilistic idea of how good a move is.

But presumably some threats are somewhat intelligent ("`shark`"? that can't be good for us), so we can go to the other extreme and instead start doing a [minimax](https://en.wikipedia.org/wiki/Minimax) search with some heuristic, pretending that enemies are *really* trying to give us a bad time. We can do this by using some heuristic like "threats are as far as possible to us", and also treat the game as if it was turn-based for enemies even (i.e. pretend that game turns are: player, enemy 1, enemy 2, enemy 3, enemy 4, player, enemy 1, ...). The search graph would then look like:
![search graph visualization where the first layer is a root node with two options, the second layer are nodes with options for enemy 1, the next layer are nodes with options for enemy 2, the next layer are options for the player once more, and an implied continuity](readme_media/search_graph_example.png)

I started with that, with a search depth of 10.

But this is not ideal either, because the threats are probably not actively searching for our possible moves in the future like a game of chess, they likely have some set logic that we don't quite know about. So this will make a very pessimistic bot that thinks that threats will always get them soon, and be surprised when they don't really. 
Sometimes our bot will run into threats, even, because it assumes that regardless of what actions it takes, the threats will catch it in the next couple turns, so what does it matter if it's on turn 1 instead of 5? (some of this is because our heuristic should reward surviving longer, but still).

It's as if it thinks it's getting chased by this creature:
![generated image of a mutant animal that has antlers, body, and ears of a deer, the face of an owl, the tail of a goldfish, and the fin of a shark](readme_media/merged_animal.png)
_All fear the Goldeerowl._

Wouldn't it be great if we didn't have to model the enemies as seers that can counter our every moves, and instead really understood how a `shark` or a `goldfish` thinks?
  
## Let's ~~Cheat~~ See the Future  
Faced with enemies with unknown logic, we could approach this in multiple ways:
- Make educated guesses for what the threat "styles" might mean ("owl", "shark", "bull", "deer", etc.) and play many games to test our theories;
- Treat this as a Reinforcement Learning problem, play many many offline games and learn useful patterns (e.g. using [Q-Learning](https://en.wikipedia.org/wiki/Q-learning));
- Craft heuristics that humans intuitively follow when playing a game like this;
- Replicate the server's logic exactly and treat this as a search problem;
- etc.

All these are valuable and would give very interesting bots that can perform well.

For me, I get the most fun from a Blitz challenge by trying to answer, assuming no time constraint, "what would an optimal bot do?", and do a mini version of that with the given time budget. This is why I wasted a bunch of time [trying to get Held-Karp to work for TSP](https://github.com/JesseEmond/blitz-2023-inscription?tab=readme-ov-file#%EF%B8%8F-exact-solver-held-karp), calculated [probabilities of perfect score when packing tetrominoes](https://github.com/JesseEmond/blitz-2022-inscription?tab=readme-ov-file#probability-of-a-perfect-score), and took a deep dive into reverse engineering last year's binary to [perfectly predict the server's random number generation](https://github.com/JesseEmond/blitz-2024-registration/tree/main?tab=readme-ov-file#rabbit-hole-2-nostradamus).

What would an optimal bot look like, here?

Close your eyes.

Imagine a bot that searches for the best sequence of moves by looking many moves ahead while knowing _exactly_ how the bots would react *(how are you reading this?)*

That would be nice, right? But that would mean that we'd have to perfectly replicate the server... and _that_ would mean that we need to reverse enginee-- oh.

Oh no.

Not again?
  
### Reading Assembly for Virtual Points in a Competition I Can't Participate In  

Similarly to [last year](https://github.com/JesseEmond/blitz-2024-registration/tree/main?tab=readme-ov-file#rabbit-hole-1-what-if-blitz-was-a-ctf), we're given a linux executable binary with the server's logic in it. All the answers to our questions are in it, we just have to work a little (alright, a lot) to get them.

If we were to open the binary in [Ghidra](https://ghidra-sre.org/), we'd have a bad time and it would look quite complex for the game we're dealing with. The reason for that is because the binary is not just a binary of the challenge, it's a *full NodeJS interpreter* binary!

Similar to last year, Coveo is packaging a NodeJS application using [vercel/pkg](https://github.com/vercel/pkg), and Vercel pkg works like this:
- Start from the source code of a NodeJS interpreter (C++);
- Apply patches to the NodeJS source to do the following:
	- Add all of the application's JS code (compiled to internal V8 bytecode) as a hardcoded string in the binary;
	- Change the *main* function to run a Vercel bootstrapping JS file that will pretend that operations like *import* are reading from the filesystem, when in reality they read from that hardcoded constant in the binary;

If you care about the details here, see [this section](https://github.com/JesseEmond/blitz-2024-registration/tree/main?tab=readme-ov-file#rabbit-hole-1-what-if-blitz-was-a-ctf) from last year.

Ultimately, there has unfortunately not been much movement in the open-source tooling for reversing such files, and I regretted not spending time improving the tooling here since last year.

But, thankfully, this year's application is packaged using the same NodeJS version, so we can even reuse our work from last year as-is and it worked! We are able to recover the V8 assembly!

The trick is again this:
- Similar to how Vercel patches the C++ of the NodeJS interpreter to package a NodeJS application in it, we can _also_ patch the C++ to do our bidding.
- Here, our bidding involves using internal V8 functions to print disassembled code, right after loading it.
- Then, we use that binary to read the challenge's unpackaged serialized JS files to recover V8 assembly.

So, for a file like `ation_types.js` that defines the actions like go up, go down, etc., we'll get something like:
```
=== [0x2bb5c29a4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2bb5c29a4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2bb5c29a4dbc @    4 : c4                Star0 
  398 S> 0x2bb5c29a4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x2bb5c29a4dc1: [FixedArray] in OldSpace
 - map: 0x3ccb09b012e1 <Map>
 - length: 1
           0: 0x2bb5c29a4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2bb5c29a52e1 <ByteArray[7]>
0x2bb5c29a4dd9 points to: [0x2bb5c29a4e48]
=== [0x2bb5c29a4e48] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2bb5c29a4e48 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2bb5c29a4e4b @    3 : 1a fa             PushContext r0
   76 S> 0x2bb5c29a4e4d @    5 : 21 01 00          LdaGlobal [1], [0]
         0x2bb5c29a4e50 @    8 : c2                Star2 
   83 E> 0x2bb5c29a4e51 @    9 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2bb5c29a4e55 @   13 : c3                Star1 
         0x2bb5c29a4e56 @   14 : 13 03             LdaConstant [3]
         0x2bb5c29a4e58 @   16 : c0                Star4 
   98 E> 0x2bb5c29a4e59 @   17 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2bb5c29a4e5d @   21 : bf                Star5 
         0x2bb5c29a4e5e @   22 : 19 03 f7          Mov a0, r3
   83 E> 0x2bb5c29a4e61 @   25 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x2bb5c29a4e66 @   30 : 0e                LdaUndefined 
  158 E> 0x2bb5c29a4e67 @   31 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  190 S> 0x2bb5c29a4e6b @   35 : 13 06             LdaConstant [6]
         0x2bb5c29a4e6d @   37 : c2                Star2 
  190 E> 0x2bb5c29a4e6e @   38 : 62 04 f8 09       CallUndefinedReceiver1 a1, r2, [9]
  190 E> 0x2bb5c29a4e72 @   42 : 25 02             StaCurrentContextSlot [2]
  229 S> 0x2bb5c29a4e74 @   44 : 21 01 00          LdaGlobal [1], [0]
         0x2bb5c29a4e77 @   47 : c2                Star2 
  236 E> 0x2bb5c29a4e78 @   48 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2bb5c29a4e7c @   52 : c3                Star1 
         0x2bb5c29a4e7d @   53 : 13 05             LdaConstant [5]
         0x2bb5c29a4e7f @   55 : c0                Star4 
  251 E> 0x2bb5c29a4e80 @   56 : 7c 07 0b 29       CreateObjectLiteral [7], [11], #41

[... 64 more lines of this]
```
If you want to explore this, look at [this directory](https://github.com/JesseEmond/blitz-2025-registration/tree/main/disassembled_js/490a918d96484178d4b23d814405ac87) and read files that end in `.disass.js` (example: [`action_types.disass.js`](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/actions/action_types.disass.js)).

If we were to write this as JS-like code, it might look like:
```js
function func_unknown()
{
    r0 = func_unknown_00000251A459DD69
    return func_unknown_00000251A459DD69
}
function func_unknown_00000251A459DD69(a0, a1, a2, a3, a4)
{
    r1 = Scope[0]
    Scope[1][2] = null
    Scope[1][3] = null
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["ActionFactory"] = func_ActionFactory_00000251A459DF19
    Scope[1][2] = a1("../geometry/vector")
    Scope[1][3] = a1("./action_types")
    return undefined
}
function func_ActionFactory_00000251A459DF19(a0)
{
    if (!typeof(a0["type"]) == string)
    	|| (a0["type"]["length"] === 0)
    {
        r1 = ("invalid action type" + String(a0["type"]))
        ACCU = "Error"
        ACCU = "Error"(r1)
    }
    switch ()
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_LEFT"]:
    {
        r1 = new {"type": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_LEFT"]
        return r1
    }
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_RIGHT"]:
    {
        r1 = new {"type": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_RIGHT"]
        return r1
    }
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_UP"]:
    {
        r1 = new {"type": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_UP"]
        return r1
    }
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_DOWN"]:
    {
        r1 = new {"type": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_DOWN"]
        return r1
    }
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_TO"]:
    {
        r1 = new {"type": null, "position": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_TO"]
        r1["position"] = Scope[1][2]["Vector"]["fromPosition"](a0["position"])
        return r1
    }
    default:
    {}
    r2 = ("invalid action type" + String(a0["type"]))
    ACCU = "Error"
    ACCU = "Error"(r2)
}
```

And, just like last year, this still looks a bit weird (e.g. `__esModule`...?) in part because **Coveo Devs are using TypeScript**. In other words, we're staring at V8 assembly that was compiled from JavaScript, which was transpiled from TypeScript, and trying to figure out what's going on.

You can visualize it like this:
![Two images side-by-side: Margot Robbie happy in a pink car, with caption "Coveo Devs" and Cillian Murphy in a suit and a hat looking very serious in a grayscale image, with caption "Us". At the bottom there is a green box that has the text "TypeScript => Javascript => V8 bytecode"](readme_media/coveo_devs_typescript_vs_us_v8.png)

However, this year this was a _lot_ easier to work with. [willtrnr](https://github.com/willtrnr) came to the rescue and wrote an auto conversion from the V8 assembly to much more readable JS-like code. **THANK YOU!**

Instead of parsing V8 assembly, we can instead look at semi-decompiled JS in files `.decomp.js`. If you want to "read the server's code" (well, decompiled JS from the final V8), look for these files in [this same directory](https://github.com/JesseEmond/blitz-2025-registration/tree/main/disassembled_js/490a918d96484178d4b23d814405ac87).

Finally, there is still value in improving this tooling moving forward. vercel/pkg is now [archived and deprecated](https://github.com/vercel/pkg/commit/9066ceeb391d9c7ba6aba650109c2fa3f8e088eb) because NodeJS now supports [single executable applications](https://nodejs.org/api/single-executable-applications.html). However, if we look into how this works, it's still storing a [V8 code cache](https://nodejs.org/api/single-executable-applications.html#v8-code-cache-support), but stored using a different [packaging mechanism](https://github.com/nodejs/postject).
### Recovering The Server's Code (or not, idk we have assembly)  
TODO approach: play a bunch of games, store per-tick info for each (TODO util ptr), replay games offline (TODO util ptr), check assertions vs. our simulation. Start with very little assertions, gradually add more until we can full predict everything from the reverse engineered code (e.g. if our simulation is wrong, we misread the reverse engineered code). TODO now lying a bit because I initially was running games via python each time and would wait to see an assertion break, which made it quite painful to debug failures => switched to standalone that deterministically replays existing games at some point, much faster iterations  
TODO won't go into details and exact same code, because 1) we don't have access to it, we just have our reinterpretation of it, and 2) a lot of it not necessarily worth calling out for our purposes of writing a bot, will mostly provide ptrs to decompiled code for the interested & provide python-like pseudocode/highlights at times  
TODO remember our objective: perfectly replicate server simulation logic, to be able to simulate and perfectly predict the bots  
TODO parts of interest: overall tick structure, threat common logic (e.g. rng, when to they move), threat types, and map loading  
  
#### Per-Tick Structure  
The server, on each tick, does the following:  
```js 
function playOneTick(tick) {
	this.currentTickNumber = tick;
	if (this.isGameComplete()) {  // player is dead / tick 2000 reached?
		let results = this.getGameResults();
		console.log("Your score is:" + results.score);
		return { gameComplete: true, gameResults: { results: results } };
	}
	if (tick > 0) {
		await this.fetchAndApplyPlayerCommands();
	}
	this.updateGame();  // This updates the threats
	return {
		gameComplete: false,
		gameState: this.serializeForViewer(),
		errorsPerTeam: Object.fromEntries(this.lastTickErrors().entries()),
	};
}
```  

Essentially:
- Check for game over;
- Apply player action;
- Update threats.
  
#### Common Threat Logic  
Now, before going into the logic of each threat, it's helpful to describe a few utility classes and methods that are available and will be used in the per-threat logic.  
  
##### Random Number Generation  
Each threat [stores](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L448) an internal seed that starts at `0`. Every time a new number is generated, that seed is incremented. You'll see that the random number generation is a bit unique, and honestly I'm not sure how feasible it would be to clone the server's logic if we weren't reversing the assembly here!  
```js
class Threat {
	constructor(/*...*/) {
		// [...]
		this._seed = 0;
		// [...]
	}
	randomNumber() {
		let x = Math.sin(this._seed++) * 10000;
		return x - Math.floor(x);
	}
}
```  
([source](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L411-L418))
  
Note that the above, if used for all RNG purposes, gives perfect per-threat determinism! This means that we don't have to guess or recover an initial seed to clone the game -- we already know it (`0`).

TODO notes on randomness? Plot values & say could be explored? Effectively this: [https://stackoverflow.com/a/19303725](https://stackoverflow.com/a/19303725)  
  
##### Possible Directions  
A couple threats will consider "what are my possible directions" when making choices. The [decompiled code](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L123-L228) for it is a bit verbose, but the important bits are:
- It will only return directions where there is no wall;
- It will process the directions in the order `[left, right, up, down]`.
The latter is important to match the server's logic exactly.

The code is equivalent to something like:
```js
class Threat {
	// ...
	getPossibleDirections() {
		return ["left", "right", "up", "down"].filter(function(dir) {
			// movement in x/y space
			let dx = dir == "left" ? -1 : (dir == "right" ? +1 : 0);
			let dy = dir == "up" ? -1 : (dir == "down" ? +1 : 0);
			// position after move
			let x = this._position.x + dx;
			let y = this._position.y + dy;
			return x >= 0 && x < this._map.length &&  // x inbounds
				y >= 0 && y < this._map[x].length &&  // y inbounds
				this._map[x][y] == MAP_EMPTY;  // not a wall
		});
	}
}
```
##### Move Ticks  
Challenge participants might have noticed that threats don't move on every tick. But, when they move, they all move at the same time. Furthermore, at a certain point they all speed up at the same time, along with a "personality" change.

[This](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L53-L90) is why:
```js
class Threat {
	constructor(/*...*/) {
		// ...
		this.personality = "lazy";
		this.tickSpeedMap = { lazy: 5, tease: 4, awake: 3, hungry: 2, insane: 1 };
	}
	// ...
	update(state) {
		if (state.tick > 900) { 
			this.personality = "insane";
		} else if (state.tick > 700) {
			this.personality = "hungry";
		} else if (state.tick > 500) {
			this.personality = "awake";
		} else if (state.tick > 300) {
			this.personality = "tease";
		}
		++this.nbOfTicksSinceLastMove;
		if (this.nbOfTicksSinceLastMove >= this.tickSpeedMap[this.personality]) {
			this.nbOfTicksSinceLastMove = 0;
			this.move(state);
		}
	}
}
```  
([update source](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L53-L90), [ctor source](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L441-L450))

In other words, threats start by moving every 5 ticks, then after 301 ticks they move every 4 ticks, then after 501 ticks they move every 3 ticks, until 901 ticks where they start moving every tick. This is interesting, because we might expect that surviving >900 ticks is not that far from surviving up to the maximum of 2000 ticks (in practice, it's not that simple).
##### Pathfinding  
The game has utils with pathfinding logic. We'll see that not all threats rely on this for pathfinding, but it appears in a couple of places.

I won't copy [the code](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/utils/pathfinding.decomp.js) here because it's a non-trivial amount, but it computes, for every possible starting square, the shortest distance to every other square on the grid. Let me use this as a chance to plug [Amit's A-Star pages](https://www.redblobgames.com/pathfinding/a-star/introduction.html#breadth-first-search) for great pointers to really understand pathfinding algorithms and internalize how they work.
In terms of cloning this, the exact details of how closest distances are computed aren't that important to us, because the utils really only save the cost for every possible `(from, to)` pairs, they don't store a specific move sequence to reach each pair (in other words, the `came_from` mapping is not preserved).

Just know that the code uses a `internalGetDistances(from)` method that will return costs to other possible `to` positions, and that instead of returning a grid of positions, it encodes 2D positions as an integer with `width * y + x`.

We really care about how `getPath` works, since the threats use this to pick their next move (i.e. to move to the next cell on the path). It works like the following:
```js
class PathfindingGrid {
	internalGetDistances(from) { /* ... */ }
	isPositionValid(pos) { /* ... */ }
	getPath(from, to) {
		// ... some validation checks
		// Find distances to our target 'to'.
		let distances = this.internalGetDistances(to);
		let path = [];
		// Start with the known total 'dist', keep picking the next
		// neighbor that brings us to 'dist-1'.
		let dist = distances[from.y * this._width + from.x];
		let current = from;
		while (!current.equals(to)) {
			current = this.getNeighbors(current).find(
				(pos) => distances[pos.y * this._width + pos.x] == dist - 1);
			path.push(current);
			--dist;
		}
		return path;
	}
	getNeighbors(pos) {
		return [new Vector(pos.x - 1, pos.y),
		 new Vector(pos.x + 1, pos.y),
		 new Vector(pos.x, pos.y - 1),
		 new Vector(pos.x, pos.y + 1)].filter(
			 (p) => this.isPositionValid(p) && this._grid[p.x][p.y] === 0);
	}
}
```

I included the implementation of `getNeighbors` above, because that's effectively all we need to clone the server's logic -- to pick the next neighbor in the `left, right, up, down` order that brings us closer to `to`.

##### Spawning Orientation  
When a threat is created, it generates its orientation [randomly](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L381-L401):
```js
class Threat {
	constructor(/*...*/) {
		this._seed = 0;
		// ...
		this._direction = this.getRandomDirection();
	}
	getRandomDirection(except) {
		// Optionally support directions to avoid, but note not used here.
		let except = except || [];
		let options = ["up", "down", "left", "right"].filter(
			(dir) => !except.includes(dir));
		return options[Math.floor(this.randomNumber() * options.length)];
	}
}
```

I highlight this for a couple of reasons:
- This call to `randomNumber` will increment the seed, and we want to clone the server's RNG correctly, so we need to clone this to really start our `_seed` at 1;
- The logic of some threats relies on orientation, so replicating this matters;

But also, recall that `randomNumber()` does `Math.sin(seed) * 10000`, and `sin(0)` is, well, `0`. So the first `randomNumber()` **will always be exactly 0**! We can see this by noticing that **all threats start the game looking `up`** (first element in the list):
![Image of the game where all cars are facing up](readme_media/first_direction_always_up.png)

This might be deliberate and is really not a big deal -- even if it was seed `424242` they would all have the same orientation from generating the same first random number to index in an array of length 4 anyway, but I thought it was worth calling out the first-is-always-`0.000000...` to be aware of the implications of using a simpler/custom random number generator. :)

#### Threats Logic  
Now let's reimplement each threat, one at a time. The order I list them in matches the order I implemented them in, based on what looked easier to understand & clone from a glance at the decompiled JS.

It is funny that we get a peek into the internal names for each threat here, with a special mention for `tse_le_fantome_orange_dans_pacman.js`!
  
##### Goldfish (aka girouette)  
This one's really the simplest. It wanders aimlessly in the world without a specific goal (✨ relatable ✨).  
  
It picks its next move on each tick fully randomly from its available destinations: 
```js
class GirouetteThreat extends Threat {  // AKA Goldfish
	get_next_move() {
		let options = this.getPossibleDirections();
		return options[Math.floor(this.randomNumber() * options.length)];
	}
}
```
([decompiled JS](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/girouette.decomp.js), [Rust re-implementation](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/bot/src/simulation.rs#L108-L112))
  
##### Bull (aka straight_ahead)  
This one's also simple. If it can keep moving in the direction it is facing (if the `direction` of the threat is in `getPossibleDirections()`), it will do so.  
If it can't, it will pick a random direction like the Goldfish does:  
```js
class StraightAheadThreat extends Threat {
	get_next_move() {
		let options = this.getPossibleDirections();
		if (options.find((dir) => dir == this.direction)) {
			return this.direction;
		} else {
			return options[Math.floor(this.randomNumber() * options.length)];
		}
	}
}
```  
([decompiled JS](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/straight_ahead_threat.decomp.js), [Rust re-implementation](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/bot/src/simulation.rs#L115-L124))
##### Deer (aka tse_le_fantome_orange_dans_pacman)  
This one's a bit funny. Like the internal name implies, this is "y'know, like the orange ghost in Pacman". If we read on [the pacman orange ghost Clyde](https://gameinternals.com/understanding-pac-man-ghost-behavior), we learn that it will chase Pacman when they're far apart, but will change its mind once it gets close. Here, the deer will chase us when we're far, and go back to its spawn point when we're too close.

See it as: go near player, BUT NOT THAT CLOSE.

It will check how far it is from the player, via Euclidean distance, to pick its "target":  
- If the distance is <= 6 (player is "close"), target its own spawn point;  
- Else (player is "far"), target the player.  

Then, it will consider its possible directions (`getPossibleDirections()`):  
- If only one is possible, it will just pick that one.  
- Else, it will only consider positions that are not "behind" it, and pick the one that reduces its Euclidean distance to its target the most.  
- For equivalent options (same distance to target), it will favor the order returned by `getPossibleDirections()` (this is because modern JS Array sort is now stable (it wasn't before!?) -- our packaged NodeJS has version v18.5.0, which uses V8 version v10.2.154.4, and V8 has (only!?) had stable sort [since v7.0](https://v8.dev/blog/array-sort)).  
  
In code:  
```js
class LeFantomeOrangeDansPacmanThreat extends Threat {
	get_next_move() {
		let options = this.getPossibleDirections();
		if (options.length === 1) {
			return options[0];
		}
		// Don't go "backwards", based on our current direction.
		let options = options.filter(
			(dir) => dir != this.oppositeDirections[this.direction]);
		let dist = this.getSquaredDistance(this.position, this.characterPosition);
		// Far away from player? Chase them. Close? Go back to spawn.
		let target = dist > (6 * 6)) ? this.characterPosition : this.spawnPosition;
		options.sort(function(a, b) {
			let a_dist = this.getSquaredDistance(a, target);
			let b_dist = this.getSquaredDistance(b, target);
			return a_dist - b_dist;  // pick closest (smallest dist first)
		});
		return options[0];
	}
}
```  
([decompiled JS](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/tse_le_fantome_orange_dans_pacman.decomp.js), [Rust re-implementation](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/bot/src/simulation.rs#L127-L142))

##### Shark (aka aggressive)  
At a high level, this bot is pathfinding directly towards us. This means that whatever move we do, if we're not moving away from this bot, it inches closer and closer for the kill ([DUN-DUN DUN-DUN DUN-DUN 🦈](https://www.youtube.com/watch?v=ZvCI-gNK_y4)).  
  
But it's also an interesting one, because it uses its own pathfinding logic and does not use the pathfinding utils presented earlier. Crucially, it implements pathfinding in a unique way that can yield different paths from the utils version (but equivalent cost-wise). We care about this when cloning the server.
  
Let me summarize this with pseudo code here:
```python
def get_next_move():
	path = get_aggressive_path(game_map, from_pos, to_pos)
	return move_towards(path[0])  # Move in direction to follow path

def get_aggressive_path(game_map, from_pos, to_pos):
	all_empty_positions = []
	for x in range(game_map.width):
		for y in range(game_map.height):
			if game_map.is_empty(Pos(x, y)):
				all_empty_positions.append(Pos(x, y))
	cost = {p: Infinity for p in all_empty_positions}
	cost[from_pos] = 0
	came_from = {}
	unseen = game_map.all_empty_positions()
	while unseen:
		unseen.sort(function(a, b) { cost[b] - cost[a]})
		pos = unseen.pop()
		prev_cost = cost[pos]
		new_cost = prev_cost + 1
		# Neighbors order: left, right, up, down
		for neighbor in game_map.get_neighbors(pos):
			if new_cost >= cost[neighbor]:
				continue
			cost[neighbor] = new_cost
			came_from[neighbor] = pos
	path = []
	current = to_pos
	while current != from_pos:
		path.insert(0, current)
		current = came_from[current]
```  
([decompiled JS](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/aggressive.decomp.js), [Rust re-implementation](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/bot/src/pathfinding.rs#L61-L122))

For all things pathfinding, I highly recommend (again) [Amit's pages](https://theory.stanford.edu/~amitp/GameProgramming/) as a resource, I'll be reusing some of the vocabulary from there. Overall, the above `get_aggressive_path` for pathfinding purposes works correctly, and looks fairly similar to a typical Dijkstra search.

What stands out, however, is the sort of all yet-unseen positions on each loop. The choice to sort the frontier queue every time a new node is picked is a costly one that can subtly impact the pathfinding outputs if not replicated. This is fine of course for a server that processes a single tick, but you'll see later that this is a challenge for us if we want to rapidly simulate the server many times in 100ms when searching for our next move.
  
##### Owl (aka surveillance)  
This one is a bit more funky (guessing the specifics without reverse engineering sounds... challenging):  
- When tick % 60 < 10, store the position of the player;  
- Pathfind towards the stored player position.  
  
Notably, this is now relying on the pathfinding utils.  
```js
class SurveillanceThreat extends Threat {
	get_next_move(state) {
		if (state.tick % 60 < 10) {
			this._lastTargetSeenPosition = state.character.position;
		}
		return this.getSurveillancePath(state);
	}
	getSurveillancePath(state) {
		// This is using the utils from above.
		let path = state.pathfindingGrid.getPath(
			this.position, this._lastTargetSeenPosition);
		// Move in the direction of the next tile
		let target = path[1];
		if (target) {
			if (target.position.x > this.position.x) return "right";
			if (target.position.x < this.position.x) return "left";
			if (target.position.y > this.position.y) return "down";
			return "up";
		}
		return null;
	}
}
```  
([decompiled JS](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/surveillance.decomp.js), [Rust re-implementation](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/bot/src/simulation.rs#L149-L166))

##### Hawk (aka sheriff)  
This one is even funkier! Guessing the specifics without reverse engineering sounds... Well, infeasible; It does "line of sight" checks, has an idle state, remembers when the player was last seen, and has a concept of "best intersections". It has it all! It's effectively a state machine that switches between states that I'll call: **chasing**, **positioning**, or **idling**.
  
Let's break it down:  
- In any state, if the player is in the hawk's line of sight (same x or same y, no walls in between), go in **chasing** mode (remember that position as "last seen", set "idle rounds" to 0).  
- In **chasing mode**:  
	- Walk towards the "last seen" position (using pathfinding utils);  
	- Once reached, forget "last seen", set "idle rounds" to 0, and go in **idling** mode.  
- In **idling mode**:  
	- Increment "idle rounds";  
	- If "idle rounds" > 5, set "idle position" to a random "good intersection", set "idle rounds" to 0, and enter **positioning** mode;  
	- Else, do nothing.  
- In **positioning** mode:  
	- Walk towards the "idle position" (using pathfinding utils);  
	- Once reached, forget "idle position", set "idle rounds" to -5, and go in **idling** mode.  
  
In pseudo-code:  
```python
def get_next_move(self, state):
	if state.grid.is_player_in_direct_line_of_sign(self.position, state.player):
		self.target_last_seen = state.player  # Enter "chasing"
		self.idle_position = None
		self.idle_rounds = 0
	if self.target_last_seen:  # "chasing" mode
		if self.position == self.target_last_seen:
			self.target_last_seen = None  # Enter "idling"
			self.idle_rounds = 0
			return None
		else:
			path = state.grid.pathfinding.get_path(
				self.position, self.target_last_seen)
			return self.follow_path(path)
	elif self.idle_position:  # "positioning" mode
		if self.position == self.idle_position:
			self.idle_position = None  # Enter "idling"
			self.idle_rounds = -5
			return None
		else:
			path = state.grid.pathfinding.get_path(
				self.position, self.idle_position)
			return self.follow_path(path)
	else:  # "idling" mode
		self.idle_rounds += 1
		if self.idle_rounds > 5:
			self.idle_position = self.get_random_intersection(grid)
			self.idle_rounds = 0
		return None
```  
([decompiled JS](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/sheriff.disass.js), [Rust re-implementation](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/bot/src/simulation.rs#L169-L215))

I talked about random "good intersections", what's that all about? I invite you to experience the pleasure of reverse engineering it yourself: [V8 assembly](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/sheriff.disass.js).

Okay, V8 assembly is maybe a bit rough, here's pseudo-JS for you to reverse:
```js
function func_getRowLength_00000343ED31FC19(a0)
{
    r1 = a0["y"]
    r2 = 0
    r6 = (a0["y"] - 1)
    while (true)
    {
        if (!r6 >= 0) break
        r7 = this["_grid"]
        r7 = r7[r0]
        r7 = r7[r6]
        if (r7 === 1)
        {
            r2 = (r2 + 1)
            continue
        }
        break
        r6 = (r6 - 1)
    }
    r5 = (a0["y"] + 1)
    while (true)
    {
        r8 = this["_grid"]
        r8 = r8[r0]
        if (!r5 < r8["length"]) break
        r7 = this["_grid"]
        r7 = r7[r0]
        r7 = r7[r5]
        if (r7 === 1)
        {
            r2 = (r2 + 1)
            continue
        }
        break
        r5 = (r5 + 1)
    }
    r4 = (a0["x"] - 1)
    while (true)
    {
        if (!r4 >= 0) break
        r7 = this["_grid"]
        r7 = r7[r4]
        r7 = r7[r1]
        if (r7 === 1)
        {
            r2 = (r2 + 1)
            continue
        }
        break
        r4 = (r4 - 1)
    }
    r3 = (a0["x"] + 1)
    while (true)
    {
        r8 = this["_grid"]
        if (!r3 < r8["length"]) break
        r7 = this["_grid"]
        r7 = r7[r3]
        r7 = r7[r1]
        if (r7 === 1)
        {
            r2 = (r2 + 1)
            continue
        }
        break
        r3 = (r3 + 1)
    }
    return r2
}
function func_getIntersections_00000343ED31F769(a0)
{
    r0 = []
    r7 = 1
    r4 = 1
    r5 = 1
    while (true)
    {
        r8 = r4
        if (r5 == 1)
        {
            r5 = 0
        }
        else
        {
            r8 = (r8 + 1)
        }
        r6 = 1
        if (r8 < (a0["length"] - 1))
        {
            break
        }
        while (true)
        {
            if (!r6 == 1) continue
            r9 = 1
            r1 = 1
            r2 = 1
            while (true)
            {
                r10 = r1
                if (r2 == 1)
                {
                    r2 = 0
                }
                else
                {
                    r10 = (r10 + 1)
                }
                r3 = 1
                r14 = a0[r8]
                if (r10 < (r14["length"] - 1))
                {
                    continue
                }
                while (true)
                {
                    if (!r3 == 1) continue
                    r13 = a0[r8]
                    r13 = r13[r10]
                    if (!r13 === 1) continue
                    r14 = new [0, 0, 0, 0]
                    r15 = a0[(r8 - 1)]
                    r14[0] = r15[r10]
                    r15 = a0[(r8 + 1)]
                    r14[1] = r15[r10]
                    r15 = a0[r8]
                    r14[2] = r15[(r10 - 1)]
                    r15 = a0[r8]
                    r14[3] = r15[(r10 + 1)]
                    r11 = r14
                    r13 = r14["filter"](func_unknown_00000343ED31F9E9)
                    if (!r13["length"] >= 3) continue
                    ACCU = Scope[1][2]["Vector"]
                    r16 = r8
                    r17 = r10
                    r15 = Scope[1][2]["Vector"](r16, r17)
                    ACCU = r0["push"](r15)
                    r3 = 0
                    r1 = r10
                    ACCU = r1
                }
                if (!r3 == 1) continue
                continue
            }
            r6 = 0
            r4 = r8
            ACCU = r4
        }
        if (!r6 == 1) continue
        break
    }
    return r0
}
function func_unknown_00000343ED31F9E9(a0)
{
    return a0 === 1
}
function func_computeBestIntersection_00000343ED31F471(a0)
{
    r1 = Scope[1]
    Scope[2][2] = this
    r0 = Scope[2][2]["getIntersections"](a0)
    ACCU = r0["sort"](func_unknown_00000343ED31F5C9)
    return r0["slice"](0, 10)
}
function func_unknown_00000343ED31F5C9(a0, a1)
{
    r0 = Scope[2][2]["getRowLength"](a0)
    r1 = Scope[2][2]["getRowLength"](a1)
    return (r1 - r0)
}
function func_getRandomIntersection_00000343ED31F2D9()
{
    r0 = this["_bestIntersections"]
    r3 = this["randomNumber"]
    r4 = this["_bestIntersections"]
    r3 = (r3 * r4["length"])
    return r0["Math"["floor"](r3)]
}
```
([source](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/sheriff.decomp.js))

Alright I'll spare you -- here's what it does (or read [Rust](https://github.com/JesseEmond/blitz-2025-registration/blob/a179249c7b6a6c618dab7975739a3f4ee013114f/bot/src/grid.rs#L150-L170), if you prefer):
- List all the "intersection points", defined as positions that have at least 3 empty neighbors (i.e. not a corner tile or a corridor tile);
- Sort them (descending) by how many "visible tiles" (here `getRowLength`) can be seen up/down/left/right from that position without a wall in the way;
- Keep the top 10.

Intuitively, remember that our Sheriff here -- ahem, hawk -- chases players that it sees in a "line of sight" (no walls between direct horizontal or vertical line between player and the hawk). This intersections business strategically places the hawk at spots where it covers a lot of visible tiles.

#### Maps  
Our local version of the game has a `maps` folder, with 6 `challenge` maps in it. From running a couple of games on the server, we see that the server is running the same maps that we have locally.

To really replicate the server from tick 0, we want to load the maps just like the server is doing. This is not strictly necessary -- we can copy the state of the server that we receive on tick 0, but doing this enables us to do cool things like:
- Play full games in Rust without needing a server on the side (faster games when testing, or adding custom rules for fun);
- Easily run on all maps and gather statistics of how well our bot performs.

The game loading logic is [here](https://github.com/JesseEmond/blitz-2025-registration/blob/main/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/maps/map_loader.decomp.js), but essentially it parses a super tiny PNG that looks like this:
![Very small image with high constrast pixels showing the layout of a map](readme_media/map_layout.png)
and where each pixel is a tile and each color maps to a specific entity type (a threat, a player spawn, a wall).

If you squint, you can kind of see that it's this one:
![Image of the game, showing the same road layouts as the previous layout image](readme_media/map_layout_real.png)

When we receive tick 0, we can check all the maps we know about and find out which one it is (& verify that we _do_ indeed know about all the maps shown to us on the server).
  
## TODO Cloning + Search + Jump Over  

TODO: add subsections

TODO: reword & move to simple bot
We can start our proper bot by ignoring all our hard work from above and do a minimax-like search with a heuristic eval of "threats are as far as possible". I started with this, with a depth of 10 -- where a "turn" here means either simulating a player movement or an enemy move (pretend that the game turns are: player, enemy 1, enemy 2, enemy 3, enemy 4, player, enemy 1, ...)

But for threats that we know how to predict, we can skip the work of looking at all their possible moves and just pick the move we _know_ it will take. This is akin to getting a search depth "for free" when we encounter this threat type (well, not free, at a compute cost of simulating it). Note that as we simulate more and more threat types, this extra compute cost becomes noticeable and we must reduce our search depth to keep it reasonable. We gradually end up with a shallower search to stay in the time budget, but we fully know what will happen when we explore a possibility (& are still looking at more of _our_ moves ahead -- less "turns" spent on enemies).

This also means that optimizing our simulation can really pay off -- we unblock budget to do a deeper search of more moves ahead.

Here are some of the optimizations I implemented (measuring them using [benchmarks](https://github.com/bheisler/criterion.rs) and finding optimization opportunities with [profiling](https://nnethercote.github.io/perf-book/profiling.html)), with relative speedups applied incrementally based on the previous item:
- _get_aggressive_path_ **60% relative speedup**: Instead of working with a 2D grid & positions, assign empty tiles a unique ID (quick lookup index in a 2D grid) and treat it as a smaller 1D array. Use this representation to easily replace `HashMap` for pathfinding `cost` and `came_from` as vectors [`c40df79`](https://github.com/JesseEmond/blitz-2025-registration/commit/c40df79659b0e837d5bbbf2e2b5e8ea0f48424c7);
- _get_aggressive_path_ **96% relative speedup**: Avoid sorting the entire frontier on each loop iteration, but while preserving the behavior of the JS implementation that sorts each time [`2710622`](https://github.com/JesseEmond/blitz-2025-registration/commit/27106223aae66a9a31c3afe42de1de9efa4d3724) -- will detail below;
- _get_aggressive_path_ **93% relative speedup** (when player is near): Early exit pathfinding when the target is found, relevant in real play when we're getting chased and the Shark gets closer and closer [`0d6de5f`](https://github.com/JesseEmond/blitz-2025-registration/commit/0d6de5f9049854b39488dfc745a66ec3a4db66ca)
- _get_aggressive_path_ **50% speedup**: after refactor that creates a common interface for slow & fast pathfinding implementation, to unit test correctness of optimization ([`16ca111`](https://github.com/JesseEmond/blitz-2025-registration/commit/16ca1119677ebf5a3b3828f307385fb88a72975b)), speedup suspected due to removing `next_frontier` deque and just using the one frontier with simpler buffers ([`2af1797`](https://github.com/JesseEmond/blitz-2025-registration/commit/2af1797f9ae3b629776ac365fc3f454b6d017ea8)) -- will detail below;
- Precompute neighbors of each tiles on the first tick [`239c202`](https://github.com/JesseEmond/blitz-2025-registration/commit/239c202d6247371b42c3f6c96db8d22b3992426a);
- Precompute paths for all possible empty tile pairs [`4563896`](https://github.com/JesseEmond/blitz-2025-registration/commit/4563896952d6a4ad90f529803a7edd881a854591);

TODO get aggressive path remove sort trick

TODO tested and ... jump over!? + show video, would not have noticed without the search, wow, sure enough the server only checks for death at XYZ  

TODO won 10k pts!  
  
TODO highlight + free bird
TODO fast vid  
TODO slow vid  
  
## TODO Winning, but fully  
TODO .. but that's one map, testing locally, bot doesn't get this on all maps... :( we want a fully winning bot -- 10k on all possible maps.  
  
### TODO Markov Search Grammar + Search  
TODO switched to MCTS, but recalled a lot of tuning last year & wanted to have some fun implementing [https://arxiv.org/pdf/1208.4692](https://arxiv.org/pdf/1208.4692)  
TODO grammar over Markov Search algorithms, TODO each component  
TODO with those, can define algo X, algo Y, algo Z, MCTS  
TODO design of classes based on other rust lib TODO  
TODO started with random sampling, that gave decent results, then started implementing other components and trying to beat it, but was hard to tell if my MCTS version (todo better because xyz, but less samples than random sampling) was better  
  
### TODO Iterate & Measure  
TODO how to compare two bots' performance?  
TODO A/B testing tangent  
TODO stats class reminder, sign test, p-value, per-map & overall  
TODO battle mode locally  
TODO sampling better than iterative sampling  
TODO parallelism in battles  
TODO intuitively, mcts really should do better for this game...  
  
### The Last 20% (80% of my time)  
TODO important fixes to my impl of paper, speedup of search (precompute moves, precompute all pathfinding pairs, scale rewards to 0-1, greedy policy, "not dead" heuristic that does a fake game over check that server wouldn't do)  
TODO finally a win (todo commit picture) [https://github.com/JesseEmond/blitz-2025-registration/commit/3b2ac8b70c29377a67e59d9876dcadda5fbd0aee](https://github.com/JesseEmond/blitz-2025-registration/commit/3b2ac8b70c29377a67e59d9876dcadda5fbd0aee)  
TODO picture with all maps 10k  
  
## TODO Winning, but Without Jumps  
TODO looking at games, I saw a lot of "jumping over" enemies, which felt a bit cheap -- was worried that this is a feature that many might not discover without reversing the code, so wanted to also make sure that our bot could win if that move was not possible, since it's harder if we can't jump over enemies when we're in a bad spot  
TODO fun part with replicating the server -- we can change its logic! For that, added mode to be able to run with `--allow_jump_over=false`, and our bot is still able to get 10K everywhere!  
TODO example video?  
  
## TODO Conclusion  
TODO

# Dev Instructions

## Setup

```sh
cd bot
python3 -m venv venv
./venv/bin/pip install -r dev-requirements.txt  # Note! Not requirements.txt!
```

## Local bot test

Because we run Rust called from Python, the command to run the program is a bit
more involved. For simplicity, it is available in `run.sh`:

```sh
cd bot
./run.sh
```

This will:
- Build the Rust binary with `maturin`
- Install the built wheel program (force reinstall it)
- Run `application.py`

## Upload new version

```sh
cd bot
./package.sh
```

This will create a `devnull.zip` file.

Then:
- Navigate to the website
- Upload `devnull.zip`
- Wait for the build to complete
- Run `Try us!`

## Tools

### Local rust play

You can run a full game locally without needing a local server, since we clone
the server's logic.

The local version of the game has multiple options (see `--help`), but the
primary ones useful for development are:

**Run a random map**
```
cd bot
cargo run
```

**Run a specific map**
```
cd bot
cargo run -- --map challenge1
```

**Run on all maps**

We can eval all maps with some parallelism to speed up the eval, with multiple
samples per map to get an average.

> [!WARNING]
> Running with excessive parallelism will artificially reduce search budgets
> from context switching and underestimate scores.

```
cd bot
cargo run -- --all --parallelism=8 --samples=5
```

### Save local games

```
cd bot
SAVE_JSONL_PATH=games/1.jsonl run.sh
```

This will save each tick's `game_message` and the bot's action as a JSON file,
one tick per line.

### Replay local games

This is useful to exercise our simulation logic, ensure it matches the server's.

```
cd bot
./replay.sh games/1.jsonl
```

To replay all `*.jsonl` files in `games/`, you can use the utility `./replay_all.sh`.
