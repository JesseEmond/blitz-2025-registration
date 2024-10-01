from game_message import *

# TODO: What do the styles/personalities mean?

# Seen in games. Crash if we've never seen a style so that we know.
# TODO: Stop crashing on new types, for safety
KNOWN_PERSONALITIES = ["lazy", "tease"]
KNOWN_STYLES = ["bull", "hawk", "shark", "goldfish", "deer", "hawk", "owl"]


# Safety of a tile: tiles distance to an enemy.
SafetyGrid = list[list[int]]  # [x][y]
def get_tile_safety_grid(game_map: GameMap, threats: list[Threat]) -> SafetyGrid:
    safety = [[2**32 for _ in range(game_map.height)] for _ in range(game_map.width)]
    unique_threat_pos = {t.position for t in threats}
    # Set initial safety score to threats -- 0 safety
    for pos in unique_threat_pos:
        safety[pos.x][pos.y] = 0
    scored = unique_threat_pos
    queue = list(unique_threat_pos)
    while queue:
        pos = queue.pop(0)
        for d in Direction:
            next_pos = pos.offset(d)
            if not game_map.is_empty(next_pos) or next_pos in scored:
                continue
            safety[next_pos.x][next_pos.y] = safety[pos.x][pos.y] + 1
            scored.add(next_pos)
            queue.append(next_pos)
    return safety


class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")

    def get_next_move(self, game_message: TeamGameState):
        """
        Here is where the magic happens, for now the moves are not very good. I bet you can do better ;)
        """
        for threat in game_message.threats:
            if threat.personality not in KNOWN_PERSONALITIES:
                raise NotImplementedError(threat.personality)
            if threat.style not in KNOWN_STYLES:
                raise NotImplementedError(threat.style)
        tile_safety = get_tile_safety_grid(game_message.map, game_message.threats)

        best_option = None
        best_option_safety = None
        for direction in Direction:
            # Don't walk into walls
            if not game_message.can_go(direction):
                continue
            next_pos = game_message.yourCharacter.position.offset(direction)
            safety = tile_safety[next_pos.x][next_pos.y]
            # Walk towards safety
            if best_option is None or safety > best_option_safety:
                best_option = direction
                print(f"Option {best_option} has safety {safety}, instead of {best_option_safety}!")
                best_option_safety = safety
        # If we're immediately safe, try to go to safest point on the map
        walk_to = None
        my_pos = game_message.yourCharacter.position
        if best_option and tile_safety[my_pos.x][my_pos.y] > 2:
            best_dist = 0
            for y in range(game_message.map.height):
                for x in range(game_message.map.width):
                    safety = tile_safety[x][y]
                    dist = game_message.yourCharacter.distances[x][y]
                    if dist is not None and safety >= best_option_safety:
                        if best_option_safety == safety and dist >= best_dist:
                            continue
                        print(f"Option {safety} (dist {dist}) is better than {best_option_safety}")
                        best_option_safety = safety
                        best_dist = dist
                        walk_to = Position(x, y)
        actions = []
        if walk_to is not None:
            actions.append(MoveToAction(walk_to))
        elif best_option is not None:
            actions.append(direction_to_action(best_option))

        # You can clearly do better than the random actions above! Have fun!
        return actions
