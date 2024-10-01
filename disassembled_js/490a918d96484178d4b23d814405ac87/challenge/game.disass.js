<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2aafa1ca4f18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2aafa1ca4f18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2aafa1ca4f1c @    4 : c4                Star0 
 6480 S> 0x2aafa1ca4f1d @    5 : a9                Return 
Constant pool (size = 1)
0x2aafa1ca4f21: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 1
           0: 0x2aafa1ca4f39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2aafa1ca8a51 <ByteArray[8]>
0x2aafa1ca4f39 points to: [0x2aafa1ca4fa8]
=== [0x2aafa1ca4fa8] DISASSEMBLY ===
Parameter count 6
Register count 21
Frame size 168
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2aafa1ca4fa8 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x2aafa1ca4fab @    3 : 1a f9             PushContext r1
         0x2aafa1ca4fad @    5 : 10                LdaTheHole 
         0x2aafa1ca4fae @    6 : 25 02             StaCurrentContextSlot [2]
         0x2aafa1ca4fb0 @    8 : 10                LdaTheHole 
         0x2aafa1ca4fb1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x2aafa1ca4fb3 @   11 : 10                LdaTheHole 
         0x2aafa1ca4fb4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x2aafa1ca4fb6 @   14 : 10                LdaTheHole 
         0x2aafa1ca4fb7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x2aafa1ca4fb9 @   17 : 10                LdaTheHole 
         0x2aafa1ca4fba @   18 : 25 06             StaCurrentContextSlot [6]
         0x2aafa1ca4fbc @   20 : 10                LdaTheHole 
         0x2aafa1ca4fbd @   21 : 25 07             StaCurrentContextSlot [7]
   76 S> 0x2aafa1ca4fbf @   23 : 21 01 00          LdaGlobal [1], [0]
         0x2aafa1ca4fc2 @   26 : c1                Star3 
   83 E> 0x2aafa1ca4fc3 @   27 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x2aafa1ca4fc7 @   31 : c2                Star2 
         0x2aafa1ca4fc8 @   32 : 13 03             LdaConstant [3]
         0x2aafa1ca4fca @   34 : bf                Star5 
   98 E> 0x2aafa1ca4fcb @   35 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2aafa1ca4fcf @   39 : be                Star6 
         0x2aafa1ca4fd0 @   40 : 19 03 f6          Mov a0, r4
   83 E> 0x2aafa1ca4fd3 @   43 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x2aafa1ca4fd8 @   48 : 0e                LdaUndefined 
  166 E> 0x2aafa1ca4fd9 @   49 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  193 S> 0x2aafa1ca4fdd @   53 : 13 06             LdaConstant [6]
         0x2aafa1ca4fdf @   55 : c1                Star3 
  193 E> 0x2aafa1ca4fe0 @   56 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  193 E> 0x2aafa1ca4fe4 @   60 : 25 02             StaCurrentContextSlot [2]
  236 S> 0x2aafa1ca4fe6 @   62 : 13 07             LdaConstant [7]
         0x2aafa1ca4fe8 @   64 : c1                Star3 
  236 E> 0x2aafa1ca4fe9 @   65 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  236 E> 0x2aafa1ca4fed @   69 : 25 03             StaCurrentContextSlot [3]
  281 S> 0x2aafa1ca4fef @   71 : 13 08             LdaConstant [8]
         0x2aafa1ca4ff1 @   73 : c1                Star3 
  281 E> 0x2aafa1ca4ff2 @   74 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  281 E> 0x2aafa1ca4ff6 @   78 : 25 04             StaCurrentContextSlot [4]
  322 S> 0x2aafa1ca4ff8 @   80 : 13 09             LdaConstant [9]
         0x2aafa1ca4ffa @   82 : c1                Star3 
  322 E> 0x2aafa1ca4ffb @   83 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  322 E> 0x2aafa1ca4fff @   87 : 25 05             StaCurrentContextSlot [5]
  369 S> 0x2aafa1ca5001 @   89 : 13 0a             LdaConstant [10]
         0x2aafa1ca5003 @   91 : c1                Star3 
  369 E> 0x2aafa1ca5004 @   92 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  369 E> 0x2aafa1ca5008 @   96 : 25 06             StaCurrentContextSlot [6]
  406 S> 0x2aafa1ca500a @   98 : 13 0b             LdaConstant [11]
         0x2aafa1ca500c @  100 : c1                Star3 
  406 E> 0x2aafa1ca500d @  101 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  406 E> 0x2aafa1ca5011 @  105 : 25 07             StaCurrentContextSlot [7]
         0x2aafa1ca5013 @  107 : 81 0c             CreateBlockContext [12]
         0x2aafa1ca5015 @  109 : 1a f8             PushContext r2
         0x2aafa1ca5017 @  111 : 10                LdaTheHole 
         0x2aafa1ca5018 @  112 : 25 02             StaCurrentContextSlot [2]
         0x2aafa1ca501a @  114 : 10                LdaTheHole 
         0x2aafa1ca501b @  115 : be                Star6 
         0x2aafa1ca501c @  116 : 80 0e 00 02       CreateClosure [14], [0], #2
         0x2aafa1ca5020 @  120 : c1                Star3 
         0x2aafa1ca5021 @  121 : 13 0d             LdaConstant [13]
         0x2aafa1ca5023 @  123 : c0                Star4 
         0x2aafa1ca5024 @  124 : 80 0f 01 02       CreateClosure [15], [1], #2
         0x2aafa1ca5028 @  128 : bd                Star7 
         0x2aafa1ca5029 @  129 : 80 10 02 02       CreateClosure [16], [2], #2
         0x2aafa1ca502d @  133 : bc                Star8 
         0x2aafa1ca502e @  134 : 80 11 03 02       CreateClosure [17], [3], #2
         0x2aafa1ca5032 @  138 : bb                Star9 
         0x2aafa1ca5033 @  139 : 80 12 04 02       CreateClosure [18], [4], #2
         0x2aafa1ca5037 @  143 : ba                Star10 
         0x2aafa1ca5038 @  144 : 80 13 05 02       CreateClosure [19], [5], #2
         0x2aafa1ca503c @  148 : b9                Star11 
         0x2aafa1ca503d @  149 : 80 14 06 02       CreateClosure [20], [6], #2
         0x2aafa1ca5041 @  153 : b8                Star12 
         0x2aafa1ca5042 @  154 : 80 15 07 02       CreateClosure [21], [7], #2
         0x2aafa1ca5046 @  158 : b7                Star13 
         0x2aafa1ca5047 @  159 : 80 16 08 02       CreateClosure [22], [8], #2
         0x2aafa1ca504b @  163 : b6                Star14 
         0x2aafa1ca504c @  164 : 80 17 09 02       CreateClosure [23], [9], #2
         0x2aafa1ca5050 @  168 : b5                Star15 
         0x2aafa1ca5051 @  169 : 80 18 0a 02       CreateClosure [24], [10], #2
         0x2aafa1ca5055 @  173 : 18 ea             Star r16
         0x2aafa1ca5057 @  175 : 80 19 0b 02       CreateClosure [25], [11], #2
         0x2aafa1ca505b @  179 : 18 e9             Star r17
         0x2aafa1ca505d @  181 : 80 1a 0c 02       CreateClosure [26], [12], #2
         0x2aafa1ca5061 @  185 : 18 e8             Star r18
         0x2aafa1ca5063 @  187 : 80 1b 0d 02       CreateClosure [27], [13], #2
         0x2aafa1ca5067 @  191 : 18 e7             Star r19
         0x2aafa1ca5069 @  193 : 80 1c 0e 02       CreateClosure [28], [14], #2
         0x2aafa1ca506d @  197 : 18 e6             Star r20
         0x2aafa1ca506f @  199 : 19 f7 f5          Mov r3, r5
         0x2aafa1ca5072 @  202 : 65 28 00 f6 11    CallRuntime [DefineClass], r4-r20
         0x2aafa1ca5077 @  207 : c0                Star4 
         0x2aafa1ca5078 @  208 : 0b f5             Ldar r5
         0x2aafa1ca507a @  210 : 25 02             StaCurrentContextSlot [2]
         0x2aafa1ca507c @  212 : 1b f8             PopContext r2
         0x2aafa1ca507e @  214 : c4                Star0 
 6151 S> 0x2aafa1ca507f @  215 : 0b fa             Ldar r0
 6178 E> 0x2aafa1ca5081 @  217 : 32 03 05 07       SetNamedProperty a0, [5], [7]
 6267 S> 0x2aafa1ca5085 @  221 : 7c 1d 15 29       CreateObjectLiteral [29], [21], #41
         0x2aafa1ca5089 @  225 : c1                Star3 
 6328 E> 0x2aafa1ca508a @  226 : 21 1e 16          LdaGlobal [30], [22]
         0x2aafa1ca508d @  229 : bf                Star5 
 6333 E> 0x2aafa1ca508e @  230 : 2d f5 1f 18       GetNamedProperty r5, [31], [24]
         0x2aafa1ca5092 @  234 : c0                Star4 
 6333 E> 0x2aafa1ca5093 @  235 : 5d f6 f5 1a       CallProperty0 r4, r5, [26]
         0x2aafa1ca5097 @  239 : 33 f7 20 1c       DefineNamedOwnProperty r3, [32], [28]
         0x2aafa1ca509b @  243 : 0b f7             Ldar r3
 6307 E> 0x2aafa1ca509d @  245 : 32 fa 21 1e       SetNamedProperty r0, [33], [30]
         0x2aafa1ca50a1 @  249 : 0e                LdaUndefined 
 6477 S> 0x2aafa1ca50a2 @  250 : a9                Return 
Constant pool (size = 34)
0x2aafa1ca50a9: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 34
           0: 0x2aafa1ca51c9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x337a8b6c5ab9 <String[6]: #Object>
           2: 0x337a8b6c4c11 <String[14]: #defineProperty>
           3: 0x2aafa1ca5309 <String[10]: #__esModule>
           4: 0x2aafa1ca5329 <ObjectBoilerplateDescription[3]>
           5: 0x2aafa1ca5351 <String[18]: #Blitz2025Challenge>
           6: 0x2aafa1ca5379 <String[13]: #@blitz/engine>
           7: 0x2aafa1ca5399 <String[16]: #./actions/action>
           8: 0x2aafa1ca53b9 <String[7]: #./error>
           9: 0x2aafa1ca53d1 <String[17]: #./maps/map_loader>
          10: 0x2aafa1ca53f9 <String[8]: #./random>
          11: 0x2aafa1ca5411 <String[7]: #./world>
          12: 0x2aafa1ca5429 <ScopeInfo CLASS_SCOPE>
          13: 0x2aafa1ca5471 <FixedArray[7]>
          14: 0x2aafa1ca58c9 <SharedFunctionInfo Blitz2025Challenge>
          15: 0x2aafa1ca5e91 <SharedFunctionInfo loadMap>
          16: 0x2aafa1ca60b1 <SharedFunctionInfo registerTeam>
          17: 0x2aafa1ca61e9 <SharedFunctionInfo setup>
          18: 0x2aafa1ca6481 <SharedFunctionInfo playOneTick>
          19: 0x2aafa1ca6a01 <SharedFunctionInfo fetchAndApplyPlayerCommands>
          20: 0x2aafa1ca7161 <SharedFunctionInfo applyActions>
          21: 0x2aafa1ca76c9 <SharedFunctionInfo isGameComplete>
          22: 0x2aafa1ca7ba1 <SharedFunctionInfo getGameResults>
          23: 0x2aafa1ca7e49 <SharedFunctionInfo updateGame>
          24: 0x2aafa1ca7f91 <SharedFunctionInfo addStatsForTeam>
          25: 0x2aafa1ca8071 <SharedFunctionInfo serializeConstants>
          26: 0x2aafa1ca8151 <SharedFunctionInfo serializeForTeam>
          27: 0x2aafa1ca8449 <SharedFunctionInfo serializeForViewer>
          28: 0x2aafa1ca86d9 <SharedFunctionInfo serializeCommon>
          29: 0x2aafa1ca88e1 <ObjectBoilerplateDescription[9]>
          30: 0x081b27b9a991 <String[4]: #Math>
          31: 0x081b27b9aba1 <String[6]: #random>
          32: 0x2aafa1ca5b81 <String[11]: #RANDOM_SEED>
          33: 0x2aafa1ca5af1 <String[20]: #DEFAULT_GAME_OPTIONS>
Handler Table (size = 0)
Source Position Table (size = 81)
0x2aafa1ca89c1 <ByteArray[81]>
Boilerplate at 0x2aafa1ca5329: 
0x2aafa1ca5329: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x337a8b6c2059 <Map>
 - length: 3
           0: 8
           1: 0x337a8b6c6419 <String[5]: #value>
           2: 0x337a8b6c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x2aafa1ca5471 has 7 elements:
0x2aafa1ca5471: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 7
           0: 17
           1: 0x2aafa1ca54b9 <DescriptorArray[5]>
           2: 0x337a8b6c3301 <NumberDictionary[7]>
           3: 0x337a8b6c1329 <FixedArray[0]>
           4: 0x2aafa1ca55a9 <DescriptorArray[14]>
           5: 0x337a8b6c3301 <NumberDictionary[7]>
           6: 0x337a8b6c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x11 (17)
Element[1]
0x2aafa1ca54b9: [DescriptorArray] in OldSpace
 - map: 0x337a8b6c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x337a8b6c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x081b27bb4fe1 <AccessorInfo>
  [1]: 0x337a8b6c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x081b27bb4f71 <AccessorInfo>
  [2]: 0x337a8b6c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 4, attrs: [___]) @ 0x081b27bb5051 <AccessorInfo>
  [3]: 0x337a8b6c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x2aafa1ca5579 <ClassPositions 426, 6150>
  [4]: 0x2aafa1ca5591: [String] in OldSpace: #loadMap (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[2]
0x337a8b6c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x337a8b6c1329: [FixedArray] in ReadOnlySpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 0
Element[4]
0x2aafa1ca55a9: [DescriptorArray] in OldSpace
 - map: 0x337a8b6c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 14
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x337a8b6c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 9, attrs: [W_C]) @ 1
  [1]: 0x2aafa1ca5711: [String] in OldSpace: #registerTeam (const data descriptor, p: 10, attrs: [W_C]) @ 4
  [2]: 0x81b27b888a1: [String] in OldSpace: #setup (const data descriptor, p: 0, attrs: [W_C]) @ 5
  [3]: 0x2aafa1ca5749: [String] in OldSpace: #playOneTick (const data descriptor, p: 1, attrs: [W_C]) @ 6
  [4]: 0x2aafa1ca5769: [String] in OldSpace: #fetchAndApplyPlayerCommands (const data descriptor, p: 13, attrs: [W_C]) @ 7
  [5]: 0x2aafa1ca5799: [String] in OldSpace: #applyActions (const data descriptor, p: 6, attrs: [W_C]) @ 8
  [6]: 0x2aafa1ca57b9: [String] in OldSpace: #isGameComplete (const data descriptor, p: 7, attrs: [W_C]) @ 9
  [7]: 0x2aafa1ca57d9: [String] in OldSpace: #getGameResults (const data descriptor, p: 8, attrs: [W_C]) @ 10
  [8]: 0x2aafa1ca57f9: [String] in OldSpace: #updateGame (const data descriptor, p: 3, attrs: [W_C]) @ 11
  [9]: 0x2aafa1ca5819: [String] in OldSpace: #addStatsForTeam (const data descriptor, p: 2, attrs: [W_C]) @ 12
  [10]: 0x2aafa1ca5839: [String] in OldSpace: #serializeConstants (const data descriptor, p: 5, attrs: [W_C]) @ 13
  [11]: 0x2aafa1ca5861: [String] in OldSpace: #serializeForTeam (const data descriptor, p: 11, attrs: [W_C]) @ 14
  [12]: 0x2aafa1ca5881: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 4, attrs: [W_C]) @ 15
  [13]: 0x2aafa1ca58a9: [String] in OldSpace: #serializeCommon (const data descriptor, p: 12, attrs: [W_C]) @ 16
Element[5]
0x337a8b6c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x337a8b6c1329: [FixedArray] in ReadOnlySpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 0
0x2aafa1ca58c9 points to: [0x2aafa1ca5938]
=== [0x2aafa1ca5938] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  522 S> 0x2aafa1ca5938 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x2aafa1ca593b @    3 : c3                Star1 
  518 E> 0x2aafa1ca593c @    4 : 69 f9 fa 00 02    Construct r1, r0-r0, [2]
  516 E> 0x2aafa1ca5941 @    9 : 32 02 01 04       SetNamedProperty <this>, [1], [4]
  537 S> 0x2aafa1ca5945 @   13 : 0d 01             LdaSmi [1]
  560 E> 0x2aafa1ca5947 @   15 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  573 S> 0x2aafa1ca594b @   19 : 0b 03             Ldar a0
  585 E> 0x2aafa1ca594d @   21 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  603 S> 0x2aafa1ca5951 @   25 : 16 02             LdaCurrentContextSlot [2]
  635 E> 0x2aafa1ca5953 @   27 : aa 04             ThrowReferenceErrorIfHole [4]
         0x2aafa1ca5955 @   29 : c2                Star2 
  654 E> 0x2aafa1ca5956 @   30 : 2d f8 05 0a       GetNamedProperty r2, [5], [10]
         0x2aafa1ca595a @   34 : c2                Star2 
         0x2aafa1ca595b @   35 : 7e f8 29 0c       CloneObject r2, #41, [12]
         0x2aafa1ca595f @   39 : c3                Star1 
         0x2aafa1ca5960 @   40 : 19 f9 f8          Mov r1, r2
         0x2aafa1ca5963 @   43 : 19 04 f7          Mov a1, r3
  691 E> 0x2aafa1ca5966 @   46 : 68 0e f8 02       InvokeIntrinsic [_CopyDataProperties], r2-r3
         0x2aafa1ca596a @   50 : 0b f8             Ldar r2
  616 E> 0x2aafa1ca596c @   52 : 32 02 06 0e       SetNamedProperty <this>, [6], [14]
  719 S> 0x2aafa1ca5970 @   56 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x2aafa1ca5974 @   60 : aa 07             ThrowReferenceErrorIfHole [7]
         0x2aafa1ca5976 @   62 : c3                Star1 
  728 E> 0x2aafa1ca5977 @   63 : 2d f9 08 10       GetNamedProperty r1, [8], [16]
         0x2aafa1ca597b @   67 : c3                Star1 
  735 E> 0x2aafa1ca597c @   68 : 2d f9 09 12       GetNamedProperty r1, [9], [18]
         0x2aafa1ca5980 @   72 : c4                Star0 
         0x2aafa1ca5981 @   73 : 13 0a             LdaConstant [10]
         0x2aafa1ca5983 @   75 : c2                Star2 
  761 E> 0x2aafa1ca5984 @   76 : 2d 02 06 15       GetNamedProperty <this>, [6], [21]
         0x2aafa1ca5988 @   80 : c1                Star3 
  769 E> 0x2aafa1ca5989 @   81 : 2d f7 0b 17       GetNamedProperty r3, [11], [23]
         0x2aafa1ca598d @   85 : 77                ToString 
         0x2aafa1ca598e @   86 : 39 f8 14          Add r2, [20]
         0x2aafa1ca5991 @   89 : c2                Star2 
  735 E> 0x2aafa1ca5992 @   90 : 5e fa f9 f8 19    CallProperty1 r0, r1, r2, [25]
  793 S> 0x2aafa1ca5997 @   95 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
  808 E> 0x2aafa1ca599b @   99 : aa 0c             ThrowReferenceErrorIfHole [12]
         0x2aafa1ca599d @  101 : c3                Star1 
  817 E> 0x2aafa1ca599e @  102 : 2d f9 0d 1b       GetNamedProperty r1, [13], [27]
         0x2aafa1ca59a2 @  106 : c3                Star1 
  829 E> 0x2aafa1ca59a3 @  107 : 2d 02 06 1d       GetNamedProperty <this>, [6], [29]
         0x2aafa1ca59a7 @  111 : c2                Star2 
  837 E> 0x2aafa1ca59a8 @  112 : 2d f8 0b 1f       GetNamedProperty r2, [11], [31]
         0x2aafa1ca59ac @  116 : c2                Star2 
         0x2aafa1ca59ad @  117 : 0b f9             Ldar r1
  804 E> 0x2aafa1ca59af @  119 : 69 f9 f8 01 21    Construct r1, r2-r2, [33]
  802 E> 0x2aafa1ca59b4 @  124 : 32 02 0e 23       SetNamedProperty <this>, [14], [35]
  859 S> 0x2aafa1ca59b8 @  128 : 16 02             LdaCurrentContextSlot [2]
  870 E> 0x2aafa1ca59ba @  130 : aa 04             ThrowReferenceErrorIfHole [4]
         0x2aafa1ca59bc @  132 : c2                Star2 
  889 E> 0x2aafa1ca59bd @  133 : 2d f8 0f 25       GetNamedProperty r2, [15], [37]
         0x2aafa1ca59c1 @  137 : c3                Star1 
  902 E> 0x2aafa1ca59c2 @  138 : 2d 02 06 27       GetNamedProperty <this>, [6], [39]
         0x2aafa1ca59c6 @  142 : c1                Star3 
  910 E> 0x2aafa1ca59c7 @  143 : 2d f7 10 29       GetNamedProperty r3, [16], [41]
         0x2aafa1ca59cb @  147 : c1                Star3 
  925 E> 0x2aafa1ca59cc @  148 : 2d 02 06 2b       GetNamedProperty <this>, [6], [43]
         0x2aafa1ca59d0 @  152 : c0                Star4 
  933 E> 0x2aafa1ca59d1 @  153 : 2d f6 11 2d       GetNamedProperty r4, [17], [45]
         0x2aafa1ca59d5 @  157 : c0                Star4 
  889 E> 0x2aafa1ca59d6 @  158 : 5f f9 f8 f7 f6 2f CallProperty2 r1, r2, r3, r4, [47]
  868 E> 0x2aafa1ca59dc @  164 : 32 02 12 31       SetNamedProperty <this>, [18], [49]
         0x2aafa1ca59e0 @  168 : 0e                LdaUndefined 
  954 S> 0x2aafa1ca59e1 @  169 : a9                Return 
Constant pool (size = 19)
0x2aafa1ca59e9: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 19
           0: 0x337a8b6c5691 <String[3]: #Map>
           1: 0x2aafa1ca5a91 <String[14]: #lastTickErrors>
           2: 0x2aafa1ca5ab1 <String[17]: #currentTickNumber>
           3: 0x2aafa1ca5ad9 <String[6]: #engine>
           4: 0x2aafa1ca5351 <String[18]: #Blitz2025Challenge>
           5: 0x2aafa1ca5af1 <String[20]: #DEFAULT_GAME_OPTIONS>
           6: 0x081b27b8cbb9 <String[7]: #options>
           7: 0x2aafa1ca5271 <String[8]: #engine_1>
           8: 0x081b27b86461 <String[6]: #logger>
           9: 0x081b27b9c1f9 <String[4]: #info>
          10: 0x2aafa1ca5b61 <String[13]: #Random seed: >
          11: 0x2aafa1ca5b81 <String[11]: #RANDOM_SEED>
          12: 0x2aafa1ca52d9 <String[8]: #random_1>
          13: 0x2aafa1ca5ba1 <String[6]: #Random>
          14: 0x081b27ba8a51 <String[3]: #rng>
          15: 0x2aafa1ca5591 <String[7]: #loadMap>
          16: 0x2aafa1ca5bd1 <String[8]: #MAP_NAME>
          17: 0x2aafa1ca5be9 <String[14]: #MAP_DIFFICULTY>
          18: 0x081b27b89ea9 <String[3]: #map>
Handler Table (size = 0)
Source Position Table (size = 84)
0x2aafa1ca5c21 <ByteArray[84]>
0x2aafa1ca5e91 points to: [0x2aafa1ca5f00]
=== [0x2aafa1ca5f00] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1006 S> 0x2aafa1ca5f00 @    0 : 0b 03             Ldar a0
         0x2aafa1ca5f02 @    2 : 1d                TestUndetectable 
         0x2aafa1ca5f03 @    3 : 99 19             JumpIfFalse [25] (0x2aafa1ca5f1c @ 28)
 1041 S> 0x2aafa1ca5f05 @    5 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x2aafa1ca5f09 @    9 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2aafa1ca5f0b @   11 : c3                Star1 
 1061 E> 0x2aafa1ca5f0c @   12 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x2aafa1ca5f10 @   16 : c3                Star1 
 1071 E> 0x2aafa1ca5f11 @   17 : 2d f9 02 02       GetNamedProperty r1, [2], [2]
         0x2aafa1ca5f15 @   21 : c4                Star0 
 1071 E> 0x2aafa1ca5f16 @   22 : 5e fa f9 04 04    CallProperty1 r0, r1, a1, [4]
 1097 S> 0x2aafa1ca5f1b @   27 : a9                Return 
 1121 S> 0x2aafa1ca5f1c @   28 : 0b 03             Ldar a0
         0x2aafa1ca5f1e @   30 : 20 01             TestTypeOf #1
         0x2aafa1ca5f20 @   32 : 99 37             JumpIfFalse [55] (0x2aafa1ca5f57 @ 87)
 1168 S> 0x2aafa1ca5f22 @   34 : 13 03             LdaConstant [3]
 1180 E> 0x2aafa1ca5f24 @   36 : 6c 03 06          TestEqualStrict a0, [6]
         0x2aafa1ca5f27 @   39 : 99 19             JumpIfFalse [25] (0x2aafa1ca5f40 @ 64)
 1206 S> 0x2aafa1ca5f29 @   41 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x2aafa1ca5f2d @   45 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2aafa1ca5f2f @   47 : c3                Star1 
 1226 E> 0x2aafa1ca5f30 @   48 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x2aafa1ca5f34 @   52 : c3                Star1 
 1236 E> 0x2aafa1ca5f35 @   53 : 2d f9 02 07       GetNamedProperty r1, [2], [7]
         0x2aafa1ca5f39 @   57 : c4                Star0 
 1236 E> 0x2aafa1ca5f3a @   58 : 5e fa f9 04 09    CallProperty1 r0, r1, a1, [9]
 1262 S> 0x2aafa1ca5f3f @   63 : a9                Return 
 1312 S> 0x2aafa1ca5f40 @   64 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x2aafa1ca5f44 @   68 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2aafa1ca5f46 @   70 : c3                Star1 
 1332 E> 0x2aafa1ca5f47 @   71 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x2aafa1ca5f4b @   75 : c3                Star1 
 1342 E> 0x2aafa1ca5f4c @   76 : 2d f9 04 0b       GetNamedProperty r1, [4], [11]
         0x2aafa1ca5f50 @   80 : c4                Star0 
 1342 E> 0x2aafa1ca5f51 @   81 : 5e fa f9 03 0d    CallProperty1 r0, r1, a0, [13]
 1367 S> 0x2aafa1ca5f56 @   86 : a9                Return 
 1419 S> 0x2aafa1ca5f57 @   87 : 0b 03             Ldar a0
 1434 S> 0x2aafa1ca5f59 @   89 : a9                Return 
Constant pool (size = 5)
0x2aafa1ca5f61: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 5
           0: 0x2aafa1ca52b9 <String[12]: #map_loader_1>
           1: 0x2aafa1ca5f99 <String[9]: #MapLoader>
           2: 0x2aafa1ca5fb9 <String[13]: #loadRandomMap>
           3: 0x337a8b6c17d1 <String[0]: #>
           4: 0x2aafa1ca5fd9 <String[15]: #loadFromMapName>
Handler Table (size = 0)
Source Position Table (size = 50)
0x2aafa1ca5ff9 <ByteArray[50]>
0x2aafa1ca60b1 points to: [0x2aafa1ca6120]
=== [0x2aafa1ca6120] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1503 S> 0x2aafa1ca6120 @    0 : 0b 03             Ldar a0
 1520 E> 0x2aafa1ca6122 @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x2aafa1ca6126 @    6 : 0e                LdaUndefined 
 1532 S> 0x2aafa1ca6127 @    7 : a9                Return 
Constant pool (size = 1)
0x2aafa1ca6129: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 1
           0: 0x2aafa1ca6141 <String[11]: #_engineTeam>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2aafa1ca6161 <ByteArray[9]>
0x2aafa1ca61e9 points to: [0x2aafa1ca6258]
=== [0x2aafa1ca6258] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x2aafa1ca6258 @    0 : 19 fe f9          Mov <closure>, r1
         0x2aafa1ca625b @    3 : 19 02 f8          Mov <this>, r2
 1549 E> 0x2aafa1ca625e @    6 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x2aafa1ca6262 @   10 : c4                Star0 
         0x2aafa1ca6263 @   11 : 19 ff f9          Mov <context>, r1
 1571 S> 0x2aafa1ca6266 @   14 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2aafa1ca626a @   18 : 1d                TestUndetectable 
         0x2aafa1ca626b @   19 : 99 11             JumpIfFalse [17] (0x2aafa1ca627c @ 36)
 1604 S> 0x2aafa1ca626d @   21 : 21 01 02          LdaGlobal [1], [2]
         0x2aafa1ca6270 @   24 : c2                Star2 
         0x2aafa1ca6271 @   25 : 13 02             LdaConstant [2]
         0x2aafa1ca6273 @   27 : c1                Star3 
         0x2aafa1ca6274 @   28 : 0b f8             Ldar r2
 1610 E> 0x2aafa1ca6276 @   30 : 69 f8 f7 01 04    Construct r2, r3-r3, [4]
 1604 E> 0x2aafa1ca627b @   35 : a7                Throw 
 1652 S> 0x2aafa1ca627c @   36 : 15 ff 07 01       LdaImmutableContextSlot <context>, [7], [1]
 1669 E> 0x2aafa1ca6280 @   40 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2aafa1ca6282 @   42 : c1                Star3 
 1677 E> 0x2aafa1ca6283 @   43 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x2aafa1ca6287 @   47 : c1                Star3 
 1688 E> 0x2aafa1ca6288 @   48 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x2aafa1ca628c @   52 : c0                Star4 
 1702 E> 0x2aafa1ca628d @   53 : 2d 02 06 0a       GetNamedProperty <this>, [6], [10]
         0x2aafa1ca6291 @   57 : bf                Star5 
 1712 E> 0x2aafa1ca6292 @   58 : 2d 02 00 0c       GetNamedProperty <this>, [0], [12]
         0x2aafa1ca6296 @   62 : be                Star6 
 1730 E> 0x2aafa1ca6297 @   63 : 2d 02 07 0e       GetNamedProperty <this>, [7], [14]
         0x2aafa1ca629b @   67 : bd                Star7 
         0x2aafa1ca629c @   68 : 0b f7             Ldar r3
 1665 E> 0x2aafa1ca629e @   70 : 69 f7 f6 04 10    Construct r3, r4-r7, [16]
 1663 E> 0x2aafa1ca62a3 @   75 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
         0x2aafa1ca62a7 @   79 : 0e                LdaUndefined 
         0x2aafa1ca62a8 @   80 : c1                Star3 
         0x2aafa1ca62a9 @   81 : 19 fa f8          Mov r0, r2
         0x2aafa1ca62ac @   84 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1740 S> 0x2aafa1ca62b0 @   88 : a9                Return 
         0x2aafa1ca62b1 @   89 : c2                Star2 
         0x2aafa1ca62b2 @   90 : 82 f8 09          CreateCatchContext r2, [9]
         0x2aafa1ca62b5 @   93 : c3                Star1 
         0x2aafa1ca62b6 @   94 : 10                LdaTheHole 
         0x2aafa1ca62b7 @   95 : a6                SetPendingMessage 
         0x2aafa1ca62b8 @   96 : 0b f9             Ldar r1
         0x2aafa1ca62ba @   98 : 1a f8             PushContext r2
         0x2aafa1ca62bc @  100 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca62be @  102 : c0                Star4 
         0x2aafa1ca62bf @  103 : 19 fa f7          Mov r0, r3
         0x2aafa1ca62c2 @  106 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x2aafa1ca62c6 @  110 : a9                Return 
Constant pool (size = 10)
0x2aafa1ca62c9: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 10
           0: 0x2aafa1ca6141 <String[11]: #_engineTeam>
           1: 0x337a8b6c4de1 <String[5]: #Error>
           2: 0x2aafa1ca6329 <String[19]: #No team registered!>
           3: 0x2aafa1ca52f1 <String[7]: #world_1>
           4: 0x2aafa1ca6351 <String[5]: #World>
           5: 0x081b27b8cbb9 <String[7]: #options>
           6: 0x081b27ba8a51 <String[3]: #rng>
           7: 0x081b27b89ea9 <String[3]: #map>
           8: 0x2aafa1ca6369 <String[5]: #world>
           9: 0x2aafa1ca6381 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  14,  89)  ->    89 (prediction=3, data=1)
Source Position Table (size = 37)
0x2aafa1ca63d9 <ByteArray[37]>
0x2aafa1ca6481 points to: [0x2aafa1ca64f0]
=== [0x2aafa1ca64f0] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x2aafa1ca64f0 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @137 }
         0x2aafa1ca64f4 @    4 : 19 fe f8          Mov <closure>, r2
         0x2aafa1ca64f7 @    7 : 19 02 f7          Mov <this>, r3
 1763 E> 0x2aafa1ca64fa @   10 : 68 02 f8 02       InvokeIntrinsic [_AsyncFunctionEnter], r2-r3
         0x2aafa1ca64fe @   14 : c4                Star0 
         0x2aafa1ca64ff @   15 : 19 ff f8          Mov <context>, r2
 1841 S> 0x2aafa1ca6502 @   18 : 0b 03             Ldar a0
 1864 E> 0x2aafa1ca6504 @   20 : 32 02 01 00       SetNamedProperty <this>, [1], [0]
 1889 S> 0x2aafa1ca6508 @   24 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2aafa1ca650c @   28 : c1                Star3 
 1889 E> 0x2aafa1ca650d @   29 : 5d f7 02 04       CallProperty0 r3, <this>, [4]
         0x2aafa1ca6511 @   33 : 97 4c             JumpIfToBooleanFalse [76] (0x2aafa1ca655d @ 109)
 1942 S> 0x2aafa1ca6513 @   35 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x2aafa1ca6517 @   39 : c1                Star3 
 1942 E> 0x2aafa1ca6518 @   40 : 5d f7 02 08       CallProperty0 r3, <this>, [8]
         0x2aafa1ca651c @   44 : c3                Star1 
 1972 S> 0x2aafa1ca651d @   45 : 21 04 0a          LdaGlobal [4], [10]
         0x2aafa1ca6520 @   48 : c0                Star4 
 1980 E> 0x2aafa1ca6521 @   49 : 2d f6 05 0c       GetNamedProperty r4, [5], [12]
         0x2aafa1ca6525 @   53 : c1                Star3 
         0x2aafa1ca6526 @   54 : 13 06             LdaConstant [6]
         0x2aafa1ca6528 @   56 : bf                Star5 
         0x2aafa1ca6529 @   57 : 0c                LdaZero 
 2009 E> 0x2aafa1ca652a @   58 : 2f f9 0f          GetKeyedProperty r1, [15]
         0x2aafa1ca652d @   61 : be                Star6 
 2013 E> 0x2aafa1ca652e @   62 : 2d f4 07 11       GetNamedProperty r6, [7], [17]
         0x2aafa1ca6532 @   66 : 77                ToString 
         0x2aafa1ca6533 @   67 : 39 f5 0e          Add r5, [14]
         0x2aafa1ca6536 @   70 : bf                Star5 
 1980 E> 0x2aafa1ca6537 @   71 : 5e f7 f6 f5 13    CallProperty1 r3, r4, r5, [19]
 2035 S> 0x2aafa1ca653c @   76 : 7c 08 15 08       CreateObjectLiteral [8], [21], #8
         0x2aafa1ca6540 @   80 : c1                Star3 
 2077 E> 0x2aafa1ca6541 @   81 : 7c 09 16 29       CreateObjectLiteral [9], [22], #41
         0x2aafa1ca6545 @   85 : c0                Star4 
         0x2aafa1ca6546 @   86 : 0b f9             Ldar r1
 2079 E> 0x2aafa1ca6548 @   88 : 33 f6 0a 17       DefineNamedOwnProperty r4, [10], [23]
         0x2aafa1ca654c @   92 : 0b f6             Ldar r4
         0x2aafa1ca654e @   94 : 33 f7 0b 19       DefineNamedOwnProperty r3, [11], [25]
         0x2aafa1ca6552 @   98 : 0b f7             Ldar r3
         0x2aafa1ca6554 @  100 : c0                Star4 
         0x2aafa1ca6555 @  101 : 19 fa f7          Mov r0, r3
         0x2aafa1ca6558 @  104 : 68 04 f7 02       InvokeIntrinsic [_AsyncFunctionResolve], r3-r4
 2091 S> 0x2aafa1ca655c @  108 : a9                Return 
 2115 S> 0x2aafa1ca655d @  109 : 0c                LdaZero 
 2124 E> 0x2aafa1ca655e @  110 : 6e 03 1b          TestGreaterThan a0, [27]
         0x2aafa1ca6561 @  113 : 99 2c             JumpIfFalse [44] (0x2aafa1ca658d @ 157)
 2226 S> 0x2aafa1ca6563 @  115 : 2d 02 0c 1c       GetNamedProperty <this>, [12], [28]
         0x2aafa1ca6567 @  119 : c1                Star3 
 2226 E> 0x2aafa1ca6568 @  120 : 5d f7 02 1e       CallProperty0 r3, <this>, [30]
         0x2aafa1ca656c @  124 : c0                Star4 
         0x2aafa1ca656d @  125 : 19 fa f7          Mov r0, r3
         0x2aafa1ca6570 @  128 : 68 01 f7 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r3-r4
 2215 E> 0x2aafa1ca6574 @  132 : af fa fa 03 00    SuspendGenerator r0, r0-r2, [0]
         0x2aafa1ca6579 @  137 : b0 fa fa 03       ResumeGenerator r0, r0-r2
         0x2aafa1ca657d @  141 : c1                Star3 
         0x2aafa1ca657e @  142 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x2aafa1ca6582 @  146 : c0                Star4 
         0x2aafa1ca6583 @  147 : 0c                LdaZero 
         0x2aafa1ca6584 @  148 : 1c f6             TestReferenceEqual r4
         0x2aafa1ca6586 @  150 : 98 05             JumpIfTrue [5] (0x2aafa1ca658b @ 155)
         0x2aafa1ca6588 @  152 : 0b f7             Ldar r3
         0x2aafa1ca658a @  154 : a8                ReThrow 
         0x2aafa1ca658b @  155 : 0b f7             Ldar r3
 2280 S> 0x2aafa1ca658d @  157 : 2d 02 0d 20       GetNamedProperty <this>, [13], [32]
         0x2aafa1ca6591 @  161 : c1                Star3 
 2280 E> 0x2aafa1ca6592 @  162 : 5d f7 02 22       CallProperty0 r3, <this>, [34]
 2302 S> 0x2aafa1ca6596 @  166 : 7c 0e 24 0c       CreateObjectLiteral [14], [36], #12
         0x2aafa1ca659a @  170 : c1                Star3 
 2372 E> 0x2aafa1ca659b @  171 : 2d 02 0f 25       GetNamedProperty <this>, [15], [37]
         0x2aafa1ca659f @  175 : c0                Star4 
 2372 E> 0x2aafa1ca65a0 @  176 : 5d f6 02 27       CallProperty0 r4, <this>, [39]
         0x2aafa1ca65a4 @  180 : 33 f7 10 29       DefineNamedOwnProperty r3, [16], [41]
 2421 E> 0x2aafa1ca65a8 @  184 : 21 11 2b          LdaGlobal [17], [43]
         0x2aafa1ca65ab @  187 : bf                Star5 
 2428 E> 0x2aafa1ca65ac @  188 : 2d f5 12 2d       GetNamedProperty r5, [18], [45]
         0x2aafa1ca65b0 @  192 : c0                Star4 
 2445 E> 0x2aafa1ca65b1 @  193 : 2d 02 13 2f       GetNamedProperty <this>, [19], [47]
         0x2aafa1ca65b5 @  197 : bd                Star7 
 2460 E> 0x2aafa1ca65b6 @  198 : 2d f3 14 31       GetNamedProperty r7, [20], [49]
         0x2aafa1ca65ba @  202 : be                Star6 
 2460 E> 0x2aafa1ca65bb @  203 : 5d f4 f3 33       CallProperty0 r6, r7, [51]
         0x2aafa1ca65bf @  207 : be                Star6 
 2428 E> 0x2aafa1ca65c0 @  208 : 5e f6 f5 f4 35    CallProperty1 r4, r5, r6, [53]
         0x2aafa1ca65c5 @  213 : 33 f7 15 37       DefineNamedOwnProperty r3, [21], [55]
         0x2aafa1ca65c9 @  217 : 0b f7             Ldar r3
         0x2aafa1ca65cb @  219 : c0                Star4 
         0x2aafa1ca65cc @  220 : 19 fa f7          Mov r0, r3
         0x2aafa1ca65cf @  223 : 68 04 f7 02       InvokeIntrinsic [_AsyncFunctionResolve], r3-r4
 2508 S> 0x2aafa1ca65d3 @  227 : a9                Return 
         0x2aafa1ca65d4 @  228 : c1                Star3 
         0x2aafa1ca65d5 @  229 : 82 f7 16          CreateCatchContext r3, [22]
         0x2aafa1ca65d8 @  232 : c2                Star2 
         0x2aafa1ca65d9 @  233 : 10                LdaTheHole 
         0x2aafa1ca65da @  234 : a6                SetPendingMessage 
         0x2aafa1ca65db @  235 : 0b f8             Ldar r2
         0x2aafa1ca65dd @  237 : 1a f7             PushContext r3
         0x2aafa1ca65df @  239 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca65e1 @  241 : bf                Star5 
         0x2aafa1ca65e2 @  242 : 19 fa f6          Mov r0, r4
         0x2aafa1ca65e5 @  245 : 68 03 f6 02       InvokeIntrinsic [_AsyncFunctionReject], r4-r5
         0x2aafa1ca65e9 @  249 : a9                Return 
Constant pool (size = 23)
0x2aafa1ca65f1: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 23
           0: 137
           1: 0x2aafa1ca5ab1 <String[17]: #currentTickNumber>
           2: 0x2aafa1ca57b9 <String[14]: #isGameComplete>
           3: 0x2aafa1ca57d9 <String[14]: #getGameResults>
           4: 0x337a8b6c4a09 <String[7]: #console>
           5: 0x081b27b8ac99 <String[3]: #log>
           6: 0x2aafa1ca66d1 <String[15]: #Your score is: >
           7: 0x2aafa1ca66f1 <String[5]: #score>
           8: 0x2aafa1ca6709 <ObjectBoilerplateDescription[5]>
           9: 0x2aafa1ca6781 <ObjectBoilerplateDescription[3]>
          10: 0x2aafa1ca67a9 <String[7]: #results>
          11: 0x2aafa1ca6761 <String[11]: #gameResults>
          12: 0x2aafa1ca5769 <String[27]: #fetchAndApplyPlayerCommands>
          13: 0x2aafa1ca57f9 <String[10]: #updateGame>
          14: 0x2aafa1ca67c1 <ObjectBoilerplateDescription[9]>
          15: 0x2aafa1ca5881 <String[18]: #serializeForViewer>
          16: 0x2aafa1ca6819 <String[9]: #gameState>
          17: 0x337a8b6c5ab9 <String[6]: #Object>
          18: 0x081b27b9a849 <String[11]: #fromEntries>
          19: 0x2aafa1ca5a91 <String[14]: #lastTickErrors>
          20: 0x081b27b8eb79 <String[7]: #entries>
          21: 0x2aafa1ca6839 <String[13]: #errorsPerTeam>
          22: 0x2aafa1ca68c1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 228)  ->   228 (prediction=3, data=2)
Source Position Table (size = 79)
0x2aafa1ca6919 <ByteArray[79]>
Boilerplate at 0x2aafa1ca6709: 
0x2aafa1ca6709: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x337a8b6c2059 <Map>
 - length: 5
           0: 8
           1: 0x2aafa1ca6741 <String[12]: #gameComplete>
           2: 0x337a8b6c1729 <true>
           3: 0x2aafa1ca6761 <String[11]: #gameResults>
           4: 0x337a8b6c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2aafa1ca6781: 
0x2aafa1ca6781: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x337a8b6c2059 <Map>
 - length: 3
           0: 8
           1: 0x2aafa1ca67a9 <String[7]: #results>
           2: 0x337a8b6c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2aafa1ca67c1: 
0x2aafa1ca67c1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x337a8b6c2059 <Map>
 - length: 9
           0: 8
           1: 0x2aafa1ca6741 <String[12]: #gameComplete>
           2: 0x337a8b6c1789 <false>
           3: 0x2aafa1ca6819 <String[9]: #gameState>
           4: 0x337a8b6c1501 <Odd Oddball: uninitialized>
           5: 0x2aafa1ca6839 <String[13]: #errorsPerTeam>
           6: 0x337a8b6c1501 <Odd Oddball: uninitialized>
           7: 0x2aafa1ca6859 <String[8]: #commands>
           8: 0x2aafa1ca6871 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x337a8b6c1329 <FixedArray[0]>>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2aafa1ca6a01 points to: [0x2aafa1ca6a70]
=== [0x2aafa1ca6a70] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x2aafa1ca6a70 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @57 }
 2552 E> 0x2aafa1ca6a74 @    4 : 83 01 01          CreateFunctionContext [1], [1]
         0x2aafa1ca6a77 @    7 : 1a f8             PushContext r2
         0x2aafa1ca6a79 @    9 : 0b 02             Ldar <this>
         0x2aafa1ca6a7b @   11 : 25 02             StaCurrentContextSlot [2]
         0x2aafa1ca6a7d @   13 : 19 fe f7          Mov <closure>, r3
         0x2aafa1ca6a80 @   16 : 19 02 f6          Mov <this>, r4
         0x2aafa1ca6a83 @   19 : 68 02 f7 02       InvokeIntrinsic [_AsyncFunctionEnter], r3-r4
         0x2aafa1ca6a87 @   23 : c4                Star0 
         0x2aafa1ca6a88 @   24 : 19 ff f7          Mov <context>, r3
 2593 S> 0x2aafa1ca6a8b @   27 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6a8d @   29 : bf                Star5 
 2604 E> 0x2aafa1ca6a8e @   30 : 2d f5 02 00       GetNamedProperty r5, [2], [0]
         0x2aafa1ca6a92 @   34 : bf                Star5 
 2611 E> 0x2aafa1ca6a93 @   35 : 2d f5 03 02       GetNamedProperty r5, [3], [2]
         0x2aafa1ca6a97 @   39 : c0                Star4 
 2611 E> 0x2aafa1ca6a98 @   40 : 5d f6 f5 04       CallProperty0 r4, r5, [4]
         0x2aafa1ca6a9c @   44 : bf                Star5 
         0x2aafa1ca6a9d @   45 : 19 fa f6          Mov r0, r4
         0x2aafa1ca6aa0 @   48 : 68 01 f6 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r4-r5
 2593 E> 0x2aafa1ca6aa4 @   52 : af fa fa 04 00    SuspendGenerator r0, r0-r3, [0]
         0x2aafa1ca6aa9 @   57 : b0 fa fa 04       ResumeGenerator r0, r0-r3
         0x2aafa1ca6aad @   61 : c0                Star4 
         0x2aafa1ca6aae @   62 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x2aafa1ca6ab2 @   66 : bf                Star5 
         0x2aafa1ca6ab3 @   67 : 0c                LdaZero 
         0x2aafa1ca6ab4 @   68 : 1c f5             TestReferenceEqual r5
         0x2aafa1ca6ab6 @   70 : 98 05             JumpIfTrue [5] (0x2aafa1ca6abb @ 75)
         0x2aafa1ca6ab8 @   72 : 0b f6             Ldar r4
         0x2aafa1ca6aba @   74 : a8                ReThrow 
         0x2aafa1ca6abb @   75 : 19 f6 f9          Mov r4, r1
 2643 S> 0x2aafa1ca6abe @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6ac0 @   80 : c0                Star4 
 2669 E> 0x2aafa1ca6ac1 @   81 : 21 04 06          LdaGlobal [4], [6]
         0x2aafa1ca6ac4 @   84 : bf                Star5 
 2665 E> 0x2aafa1ca6ac5 @   85 : 69 f5 fa 00 08    Construct r5, r0-r0, [8]
 2663 E> 0x2aafa1ca6aca @   90 : 32 f6 05 0a       SetNamedProperty r4, [5], [10]
 2704 S> 0x2aafa1ca6ace @   94 : 2d f9 06 0c       GetNamedProperty r1, [6], [12]
         0x2aafa1ca6ad2 @   98 : c0                Star4 
         0x2aafa1ca6ad3 @   99 : 80 07 00 02       CreateClosure [7], [0], #2
         0x2aafa1ca6ad7 @  103 : be                Star6 
 2704 E> 0x2aafa1ca6ad8 @  104 : 5e f6 f9 f4 0e    CallProperty1 r4, r1, r6, [14]
         0x2aafa1ca6add @  109 : 0e                LdaUndefined 
         0x2aafa1ca6ade @  110 : bf                Star5 
         0x2aafa1ca6adf @  111 : 19 fa f6          Mov r0, r4
         0x2aafa1ca6ae2 @  114 : 68 04 f6 02       InvokeIntrinsic [_AsyncFunctionResolve], r4-r5
 3664 S> 0x2aafa1ca6ae6 @  118 : a9                Return 
         0x2aafa1ca6ae7 @  119 : c0                Star4 
         0x2aafa1ca6ae8 @  120 : 82 f6 08          CreateCatchContext r4, [8]
         0x2aafa1ca6aeb @  123 : c1                Star3 
         0x2aafa1ca6aec @  124 : 10                LdaTheHole 
         0x2aafa1ca6aed @  125 : a6                SetPendingMessage 
         0x2aafa1ca6aee @  126 : 0b f7             Ldar r3
         0x2aafa1ca6af0 @  128 : 1a f6             PushContext r4
         0x2aafa1ca6af2 @  130 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6af4 @  132 : be                Star6 
         0x2aafa1ca6af5 @  133 : 19 fa f5          Mov r0, r5
         0x2aafa1ca6af8 @  136 : 68 03 f5 02       InvokeIntrinsic [_AsyncFunctionReject], r5-r6
         0x2aafa1ca6afc @  140 : a9                Return 
Constant pool (size = 9)
0x2aafa1ca6b01: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 9
           0: 57
           1: 0x2aafa1ca6b59 <ScopeInfo FUNCTION_SCOPE>
           2: 0x2aafa1ca5ad9 <String[6]: #engine>
           3: 0x2aafa1ca6bb9 <String[20]: #getCommandsFromTeams>
           4: 0x337a8b6c5691 <String[3]: #Map>
           5: 0x2aafa1ca5a91 <String[14]: #lastTickErrors>
           6: 0x081b27b8a021 <String[7]: #forEach>
           7: 0x2aafa1ca6bf9 <SharedFunctionInfo>
           8: 0x2aafa1ca70b1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  27, 119)  ->   119 (prediction=3, data=3)
Source Position Table (size = 33)
0x2aafa1ca7109 <ByteArray[33]>
0x2aafa1ca6bf9 points to: [0x2aafa1ca6c68]
=== [0x2aafa1ca6c68] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2828 S> 0x2aafa1ca6c68 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2aafa1ca6c6c @    4 : c4                Star0 
 2936 S> 0x2aafa1ca6c6d @    5 : 97 f0             JumpIfToBooleanFalse [240] (0x2aafa1ca6d5d @ 245)
         0x2aafa1ca6c6f @    7 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6c71 @    9 : c3                Star1 
 2956 E> 0x2aafa1ca6c72 @   10 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2aafa1ca6c76 @   14 : 97 e7             JumpIfToBooleanFalse [231] (0x2aafa1ca6d5d @ 245)
         0x2aafa1ca6c78 @   16 : 19 ff f9          Mov <context>, r1
 3025 S> 0x2aafa1ca6c7b @   19 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x2aafa1ca6c7f @   23 : 1d                TestUndetectable 
         0x2aafa1ca6c80 @   24 : 99 0e             JumpIfFalse [14] (0x2aafa1ca6c8e @ 38)
 3068 S> 0x2aafa1ca6c82 @   26 : 21 03 06          LdaGlobal [3], [6]
         0x2aafa1ca6c85 @   29 : c2                Star2 
         0x2aafa1ca6c86 @   30 : 13 04             LdaConstant [4]
         0x2aafa1ca6c88 @   32 : c1                Star3 
 3074 E> 0x2aafa1ca6c89 @   33 : 62 f8 f7 08       CallUndefinedReceiver1 r2, r3, [8]
 3068 E> 0x2aafa1ca6c8d @   37 : a7                Throw 
 3162 S> 0x2aafa1ca6c8e @   38 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6c90 @   40 : c1                Star3 
 3167 E> 0x2aafa1ca6c91 @   41 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x2aafa1ca6c95 @   45 : c2                Star2 
         0x2aafa1ca6c96 @   46 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6c98 @   48 : c0                Star4 
 3185 E> 0x2aafa1ca6c99 @   49 : 2d f6 01 0c       GetNamedProperty r4, [1], [12]
         0x2aafa1ca6c9d @   53 : c0                Star4 
 3167 E> 0x2aafa1ca6c9e @   54 : 5f f8 f7 f6 fa 0e CallProperty2 r2, r3, r4, r0, [14]
         0x2aafa1ca6ca4 @   60 : 8a b9             Jump [185] (0x2aafa1ca6d5d @ 245)
         0x2aafa1ca6ca6 @   62 : c2                Star2 
         0x2aafa1ca6ca7 @   63 : 82 f8 06          CreateCatchContext r2, [6]
         0x2aafa1ca6caa @   66 : c3                Star1 
         0x2aafa1ca6cab @   67 : 10                LdaTheHole 
         0x2aafa1ca6cac @   68 : a6                SetPendingMessage 
         0x2aafa1ca6cad @   69 : 0b f9             Ldar r1
         0x2aafa1ca6caf @   71 : 1a f8             PushContext r2
 3278 S> 0x2aafa1ca6cb1 @   73 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x2aafa1ca6cb5 @   77 : aa 07             ThrowReferenceErrorIfHole [7]
         0x2aafa1ca6cb7 @   79 : c0                Star4 
 3287 E> 0x2aafa1ca6cb8 @   80 : 2d f6 08 10       GetNamedProperty r4, [8], [16]
         0x2aafa1ca6cbc @   84 : c0                Star4 
 3294 E> 0x2aafa1ca6cbd @   85 : 2d f6 09 12       GetNamedProperty r4, [9], [18]
         0x2aafa1ca6cc1 @   89 : c1                Star3 
         0x2aafa1ca6cc2 @   90 : 13 0a             LdaConstant [10]
         0x2aafa1ca6cc4 @   92 : bf                Star5 
         0x2aafa1ca6cc5 @   93 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2aafa1ca6cc9 @   97 : be                Star6 
 3314 E> 0x2aafa1ca6cca @   98 : 2d f4 01 15       GetNamedProperty r6, [1], [21]
         0x2aafa1ca6cce @  102 : be                Star6 
 3326 E> 0x2aafa1ca6ccf @  103 : 2d f4 0b 17       GetNamedProperty r6, [11], [23]
         0x2aafa1ca6cd3 @  107 : 77                ToString 
         0x2aafa1ca6cd4 @  108 : 39 f5 14          Add r5, [20]
         0x2aafa1ca6cd7 @  111 : bf                Star5 
         0x2aafa1ca6cd8 @  112 : 13 0c             LdaConstant [12]
         0x2aafa1ca6cda @  114 : 39 f5 14          Add r5, [20]
         0x2aafa1ca6cdd @  117 : bf                Star5 
 3360 E> 0x2aafa1ca6cde @  118 : 21 0d 19          LdaGlobal [13], [25]
         0x2aafa1ca6ce1 @  121 : bd                Star7 
 3365 E> 0x2aafa1ca6ce2 @  122 : 2d f3 0e 1b       GetNamedProperty r7, [14], [27]
         0x2aafa1ca6ce6 @  126 : be                Star6 
 3365 E> 0x2aafa1ca6ce7 @  127 : 5e f4 f3 fa 1d    CallProperty1 r6, r7, r0, [29]
         0x2aafa1ca6cec @  132 : 77                ToString 
         0x2aafa1ca6ced @  133 : 39 f5 14          Add r5, [20]
         0x2aafa1ca6cf0 @  136 : bf                Star5 
         0x2aafa1ca6cf1 @  137 : 13 0f             LdaConstant [15]
         0x2aafa1ca6cf3 @  139 : 39 f5 14          Add r5, [20]
         0x2aafa1ca6cf6 @  142 : bf                Star5 
         0x2aafa1ca6cf7 @  143 : 17 02             LdaImmutableCurrentContextSlot [2]
 3390 E> 0x2aafa1ca6cf9 @  145 : 77                ToString 
         0x2aafa1ca6cfa @  146 : 39 f5 14          Add r5, [20]
         0x2aafa1ca6cfd @  149 : bf                Star5 
 3294 E> 0x2aafa1ca6cfe @  150 : 5e f7 f6 f5 1f    CallProperty1 r3, r4, r5, [31]
 3420 S> 0x2aafa1ca6d03 @  155 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6d05 @  157 : c1                Star3 
 3441 E> 0x2aafa1ca6d06 @  158 : 21 03 06          LdaGlobal [3], [6]
 3430 E> 0x2aafa1ca6d09 @  161 : 71 f7 21          TestInstanceOf r3, [33]
         0x2aafa1ca6d0c @  164 : 99 4f             JumpIfFalse [79] (0x2aafa1ca6d5b @ 243)
 3474 S> 0x2aafa1ca6d0e @  166 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2aafa1ca6d12 @  170 : c0                Star4 
 3479 E> 0x2aafa1ca6d13 @  171 : 2d f6 01 22       GetNamedProperty r4, [1], [34]
         0x2aafa1ca6d17 @  175 : c0                Star4 
 3491 E> 0x2aafa1ca6d18 @  176 : 2d f6 10 24       GetNamedProperty r4, [16], [36]
         0x2aafa1ca6d1c @  180 : c1                Star3 
         0x2aafa1ca6d1d @  181 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6d1f @  183 : bf                Star5 
 3491 E> 0x2aafa1ca6d20 @  184 : 5e f7 f6 f5 26    CallProperty1 r3, r4, r5, [38]
 3535 S> 0x2aafa1ca6d25 @  189 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2aafa1ca6d29 @  193 : bf                Star5 
 3540 E> 0x2aafa1ca6d2a @  194 : 2d f5 11 28       GetNamedProperty r5, [17], [40]
         0x2aafa1ca6d2e @  198 : bf                Star5 
 3555 E> 0x2aafa1ca6d2f @  199 : 2d f5 12 2a       GetNamedProperty r5, [18], [42]
         0x2aafa1ca6d33 @  203 : c0                Star4 
         0x2aafa1ca6d34 @  204 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2aafa1ca6d38 @  208 : be                Star6 
 3564 E> 0x2aafa1ca6d39 @  209 : 2d f4 01 2c       GetNamedProperty r6, [1], [44]
         0x2aafa1ca6d3d @  213 : be                Star6 
 3576 E> 0x2aafa1ca6d3e @  214 : 2d f4 0b 2e       GetNamedProperty r6, [11], [46]
         0x2aafa1ca6d42 @  218 : be                Star6 
 3555 E> 0x2aafa1ca6d43 @  219 : 5e f6 f5 f4 30    CallProperty1 r4, r5, r6, [48]
         0x2aafa1ca6d48 @  224 : c0                Star4 
         0x2aafa1ca6d49 @  225 : 9e 11             JumpIfUndefinedOrNull [17] (0x2aafa1ca6d5a @ 242)
 3579 E> 0x2aafa1ca6d4b @  227 : 2d f6 13 32       GetNamedProperty r4, [19], [50]
         0x2aafa1ca6d4f @  231 : c1                Star3 
         0x2aafa1ca6d50 @  232 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca6d52 @  234 : bf                Star5 
 3581 E> 0x2aafa1ca6d53 @  235 : 5e f7 f6 f5 34    CallProperty1 r3, r4, r5, [52]
         0x2aafa1ca6d58 @  240 : 8a 03             Jump [3] (0x2aafa1ca6d5b @ 243)
         0x2aafa1ca6d5a @  242 : 0e                LdaUndefined 
         0x2aafa1ca6d5b @  243 : 1b f8             PopContext r2
         0x2aafa1ca6d5d @  245 : 0e                LdaUndefined 
 3656 S> 0x2aafa1ca6d5e @  246 : a9                Return 
Constant pool (size = 20)
0x2aafa1ca6d61: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 20
           0: 0x2aafa1ca6e11 <String[7]: #command>
           1: 0x2aafa1ca6141 <String[11]: #_engineTeam>
           2: 0x2aafa1ca6e29 <String[7]: #actions>
           3: 0x337a8b6c4de1 <String[5]: #Error>
           4: 0x2aafa1ca6e41 <String[35]: #Command invalid: 'actions' missing.>
           5: 0x2aafa1ca5799 <String[12]: #applyActions>
           6: 0x2aafa1ca6e79 <ScopeInfo CATCH_SCOPE>
           7: 0x2aafa1ca5271 <String[8]: #engine_1>
           8: 0x081b27b86461 <String[6]: #logger>
           9: 0x081b27b86309 <String[5]: #error>
          10: 0x2aafa1ca6ec9 <String[6]: #Team '>
          11: 0x337a8b6c52d9 <String[2]: #id>
          12: 0x2aafa1ca6ee1 <String[29]: #': Error processing command '>
          13: 0x081b27b9c529 <String[4]: #JSON>
          14: 0x081b27b8ee51 <String[9]: #stringify>
          15: 0x2aafa1ca6f49 <String[4]: #' : >
          16: 0x2aafa1ca6f61 <String[11]: #reportError>
          17: 0x2aafa1ca5a91 <String[14]: #lastTickErrors>
          18: 0x337a8b6c50e9 <String[3]: #get>
          19: 0x081b27b89551 <String[4]: #push>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  19,  60)  ->    62 (prediction=1, data=1)
Source Position Table (size = 89)
0x2aafa1ca6fb9 <ByteArray[89]>
0x2aafa1ca7161 points to: [0x2aafa1ca71d0]
=== [0x2aafa1ca71d0] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3682 E> 0x2aafa1ca71d0 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x2aafa1ca71d3 @    3 : 1a fa             PushContext r0
         0x2aafa1ca71d5 @    5 : 0b 02             Ldar <this>
         0x2aafa1ca71d7 @    7 : 25 02             StaCurrentContextSlot [2]
         0x2aafa1ca71d9 @    9 : 0b 03             Ldar a0
         0x2aafa1ca71db @   11 : 25 03             StaCurrentContextSlot [3]
 3722 S> 0x2aafa1ca71dd @   13 : 2d 04 01 00       GetNamedProperty a1, [1], [0]
         0x2aafa1ca71e1 @   17 : c2                Star2 
 3730 E> 0x2aafa1ca71e2 @   18 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2aafa1ca71e6 @   22 : c3                Star1 
         0x2aafa1ca71e7 @   23 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2aafa1ca71eb @   27 : c1                Star3 
 3730 E> 0x2aafa1ca71ec @   28 : 5e f9 f8 f7 04    CallProperty1 r1, r2, r3, [4]
         0x2aafa1ca71f1 @   33 : 0e                LdaUndefined 
 4319 S> 0x2aafa1ca71f2 @   34 : a9                Return 
Constant pool (size = 4)
0x2aafa1ca71f9: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 4
           0: 0x2aafa1ca7229 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2aafa1ca6e29 <String[7]: #actions>
           2: 0x081b27b8a021 <String[7]: #forEach>
           3: 0x2aafa1ca72b9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 15)
0x2aafa1ca7691 <ByteArray[15]>
0x2aafa1ca72b9 points to: [0x2aafa1ca7328]
=== [0x2aafa1ca7328] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x2aafa1ca7328 @    0 : 19 ff f9          Mov <context>, r1
 3809 S> 0x2aafa1ca732b @    3 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
         0x2aafa1ca732f @    7 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2aafa1ca7331 @    9 : c1                Star3 
 3822 E> 0x2aafa1ca7332 @   10 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x2aafa1ca7336 @   14 : c2                Star2 
 3836 E> 0x2aafa1ca7337 @   15 : 62 f8 03 02       CallUndefinedReceiver1 r2, a0, [2]
         0x2aafa1ca733b @   19 : c4                Star0 
 3870 S> 0x2aafa1ca733c @   20 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca733e @   22 : c1                Star3 
 3875 E> 0x2aafa1ca733f @   23 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x2aafa1ca7343 @   27 : c1                Star3 
         0x2aafa1ca7344 @   28 : 9e 17             JumpIfUndefinedOrNull [23] (0x2aafa1ca735b @ 51)
 3880 E> 0x2aafa1ca7346 @   30 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x2aafa1ca734a @   34 : c2                Star2 
         0x2aafa1ca734b @   35 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x2aafa1ca734d @   37 : c0                Star4 
 3905 E> 0x2aafa1ca734e @   38 : 2d f6 04 08       GetNamedProperty r4, [4], [8]
         0x2aafa1ca7352 @   42 : c0                Star4 
 3882 E> 0x2aafa1ca7353 @   43 : 5f f8 f7 f6 fa 0a CallProperty2 r2, r3, r4, r0, [10]
         0x2aafa1ca7359 @   49 : 8a 03             Jump [3] (0x2aafa1ca735c @ 52)
         0x2aafa1ca735b @   51 : 0e                LdaUndefined 
         0x2aafa1ca735c @   52 : 8a a6             Jump [166] (0x2aafa1ca7402 @ 218)
         0x2aafa1ca735e @   54 : c2                Star2 
         0x2aafa1ca735f @   55 : 82 f8 05          CreateCatchContext r2, [5]
         0x2aafa1ca7362 @   58 : c3                Star1 
         0x2aafa1ca7363 @   59 : 10                LdaTheHole 
         0x2aafa1ca7364 @   60 : a6                SetPendingMessage 
         0x2aafa1ca7365 @   61 : 0b f9             Ldar r1
         0x2aafa1ca7367 @   63 : 1a f8             PushContext r2
 3976 S> 0x2aafa1ca7369 @   65 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x2aafa1ca736d @   69 : aa 06             ThrowReferenceErrorIfHole [6]
         0x2aafa1ca736f @   71 : c0                Star4 
 3985 E> 0x2aafa1ca7370 @   72 : 2d f6 07 0c       GetNamedProperty r4, [7], [12]
         0x2aafa1ca7374 @   76 : c0                Star4 
 3992 E> 0x2aafa1ca7375 @   77 : 2d f6 08 0e       GetNamedProperty r4, [8], [14]
         0x2aafa1ca7379 @   81 : c1                Star3 
         0x2aafa1ca737a @   82 : 13 09             LdaConstant [9]
         0x2aafa1ca737c @   84 : bf                Star5 
 4024 E> 0x2aafa1ca737d @   85 : 21 0a 11          LdaGlobal [10], [17]
         0x2aafa1ca7380 @   88 : bd                Star7 
 4029 E> 0x2aafa1ca7381 @   89 : 2d f3 0b 13       GetNamedProperty r7, [11], [19]
         0x2aafa1ca7385 @   93 : be                Star6 
 4029 E> 0x2aafa1ca7386 @   94 : 5e f4 f3 03 15    CallProperty1 r6, r7, a0, [21]
         0x2aafa1ca738b @   99 : 77                ToString 
         0x2aafa1ca738c @  100 : 39 f5 10          Add r5, [16]
         0x2aafa1ca738f @  103 : bf                Star5 
         0x2aafa1ca7390 @  104 : 13 0c             LdaConstant [12]
         0x2aafa1ca7392 @  106 : 39 f5 10          Add r5, [16]
         0x2aafa1ca7395 @  109 : bf                Star5 
 3992 E> 0x2aafa1ca7396 @  110 : 5e f7 f6 f5 17    CallProperty1 r3, r4, r5, [23]
 4076 S> 0x2aafa1ca739b @  115 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca739d @  117 : c1                Star3 
 4097 E> 0x2aafa1ca739e @  118 : 21 0d 19          LdaGlobal [13], [25]
 4086 E> 0x2aafa1ca73a1 @  121 : 71 f7 1b          TestInstanceOf r3, [27]
         0x2aafa1ca73a4 @  124 : 99 5c             JumpIfFalse [92] (0x2aafa1ca7400 @ 216)
 4126 S> 0x2aafa1ca73a6 @  126 : 15 f8 03 00       LdaImmutableContextSlot r2, [3], [0]
         0x2aafa1ca73aa @  130 : c0                Star4 
 4137 E> 0x2aafa1ca73ab @  131 : 2d f6 0e 1c       GetNamedProperty r4, [14], [28]
         0x2aafa1ca73af @  135 : c1                Star3 
         0x2aafa1ca73b0 @  136 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca73b2 @  138 : bf                Star5 
 4137 E> 0x2aafa1ca73b3 @  139 : 5e f7 f6 f5 1e    CallProperty1 r3, r4, r5, [30]
 4177 S> 0x2aafa1ca73b8 @  144 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2aafa1ca73bc @  148 : bf                Star5 
 4182 E> 0x2aafa1ca73bd @  149 : 2d f5 0f 20       GetNamedProperty r5, [15], [32]
         0x2aafa1ca73c1 @  153 : bf                Star5 
 4197 E> 0x2aafa1ca73c2 @  154 : 2d f5 10 22       GetNamedProperty r5, [16], [34]
         0x2aafa1ca73c6 @  158 : c0                Star4 
         0x2aafa1ca73c7 @  159 : 15 f8 03 00       LdaImmutableContextSlot r2, [3], [0]
         0x2aafa1ca73cb @  163 : be                Star6 
 4212 E> 0x2aafa1ca73cc @  164 : 2d f4 04 08       GetNamedProperty r6, [4], [8]
         0x2aafa1ca73d0 @  168 : be                Star6 
 4197 E> 0x2aafa1ca73d1 @  169 : 5e f6 f5 f4 24    CallProperty1 r4, r5, r6, [36]
         0x2aafa1ca73d6 @  174 : c0                Star4 
         0x2aafa1ca73d7 @  175 : 9e 28             JumpIfUndefinedOrNull [40] (0x2aafa1ca73ff @ 215)
 4215 E> 0x2aafa1ca73d9 @  177 : 2d f6 11 26       GetNamedProperty r4, [17], [38]
         0x2aafa1ca73dd @  181 : c1                Star3 
         0x2aafa1ca73de @  182 : 15 ff 04 03       LdaImmutableContextSlot <context>, [4], [3]
 4226 E> 0x2aafa1ca73e2 @  186 : aa 12             ThrowReferenceErrorIfHole [18]
         0x2aafa1ca73e4 @  188 : bf                Star5 
 4234 E> 0x2aafa1ca73e5 @  189 : 2d f5 13 28       GetNamedProperty r5, [19], [40]
         0x2aafa1ca73e9 @  193 : bf                Star5 
         0x2aafa1ca73ea @  194 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2aafa1ca73ec @  196 : bd                Star7 
         0x2aafa1ca73ed @  197 : 0b f5             Ldar r5
         0x2aafa1ca73ef @  199 : 19 03 f4          Mov a0, r6
 4222 E> 0x2aafa1ca73f2 @  202 : 69 f5 f4 02 2a    Construct r5, r6-r7, [42]
         0x2aafa1ca73f7 @  207 : bf                Star5 
 4217 E> 0x2aafa1ca73f8 @  208 : 5e f7 f6 f5 2c    CallProperty1 r3, r4, r5, [44]
         0x2aafa1ca73fd @  213 : 8a 03             Jump [3] (0x2aafa1ca7400 @ 216)
         0x2aafa1ca73ff @  215 : 0e                LdaUndefined 
         0x2aafa1ca7400 @  216 : 1b f8             PopContext r2
         0x2aafa1ca7402 @  218 : 0e                LdaUndefined 
 4311 S> 0x2aafa1ca7403 @  219 : a9                Return 
Constant pool (size = 20)
0x2aafa1ca7409: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 20
           0: 0x2aafa1ca5289 <String[8]: #action_1>
           1: 0x2aafa1ca74b9 <String[13]: #ActionFactory>
           2: 0x2aafa1ca6369 <String[5]: #world>
           3: 0x2aafa1ca74d9 <String[11]: #applyAction>
           4: 0x337a8b6c52d9 <String[2]: #id>
           5: 0x2aafa1ca74f9 <ScopeInfo CATCH_SCOPE>
           6: 0x2aafa1ca5271 <String[8]: #engine_1>
           7: 0x081b27b86461 <String[6]: #logger>
           8: 0x081b27b86309 <String[5]: #error>
           9: 0x2aafa1ca7531 <String[23]: #Error applying action '>
          10: 0x081b27b9c529 <String[4]: #JSON>
          11: 0x081b27b8ee51 <String[9]: #stringify>
          12: 0x081b27bb4c49 <String[1]: #'>
          13: 0x337a8b6c4de1 <String[5]: #Error>
          14: 0x2aafa1ca6f61 <String[11]: #reportError>
          15: 0x2aafa1ca5a91 <String[14]: #lastTickErrors>
          16: 0x337a8b6c50e9 <String[3]: #get>
          17: 0x081b27b89551 <String[4]: #push>
          18: 0x2aafa1ca52a1 <String[7]: #error_1>
          19: 0x2aafa1ca7571 <String[11]: #ActionError>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (   3,  52)  ->    54 (prediction=1, data=1)
Source Position Table (size = 76)
0x2aafa1ca75b1 <ByteArray[76]>
0x2aafa1ca76c9 points to: [0x2aafa1ca7738]
=== [0x2aafa1ca7738] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 4339 E> 0x2aafa1ca7738 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x2aafa1ca773b @    3 : 1a f9             PushContext r1
         0x2aafa1ca773d @    5 : 10                LdaTheHole 
         0x2aafa1ca773e @    6 : 25 02             StaCurrentContextSlot [2]
         0x2aafa1ca7740 @    8 : 10                LdaTheHole 
         0x2aafa1ca7741 @    9 : 25 03             StaCurrentContextSlot [3]
 4361 S> 0x2aafa1ca7743 @   11 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x2aafa1ca7747 @   15 : 1d                TestUndetectable 
         0x2aafa1ca7748 @   16 : 99 04             JumpIfFalse [4] (0x2aafa1ca774c @ 20)
 4388 S> 0x2aafa1ca774a @   18 : 12                LdaFalse 
 4401 S> 0x2aafa1ca774b @   19 : a9                Return 
 4456 S> 0x2aafa1ca774c @   20 : 2d 02 01 02       GetNamedProperty <this>, [1], [2]
         0x2aafa1ca7750 @   24 : c1                Star3 
 4462 E> 0x2aafa1ca7751 @   25 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x2aafa1ca7755 @   29 : c2                Star2 
 4462 E> 0x2aafa1ca7756 @   30 : 5d f8 f7 06       CallProperty0 r2, r3, [6]
         0x2aafa1ca775a @   34 : c2                Star2 
 4421 S> 0x2aafa1ca775b @   35 : 2d f8 03 08       GetNamedProperty r2, [3], [8]
         0x2aafa1ca775f @   39 : 25 02             StaCurrentContextSlot [2]
 4436 S> 0x2aafa1ca7761 @   41 : 2d f8 04 0a       GetNamedProperty r2, [4], [10]
         0x2aafa1ca7765 @   45 : 25 03             StaCurrentContextSlot [3]
 4517 S> 0x2aafa1ca7767 @   47 : 2d 02 01 0c       GetNamedProperty <this>, [1], [12]
         0x2aafa1ca776b @   51 : c0                Star4 
 4523 E> 0x2aafa1ca776c @   52 : 2d f6 05 0e       GetNamedProperty r4, [5], [14]
         0x2aafa1ca7770 @   56 : c1                Star3 
 4523 E> 0x2aafa1ca7771 @   57 : 5d f7 f6 10       CallProperty0 r3, r4, [16]
         0x2aafa1ca7775 @   61 : c1                Star3 
 4543 E> 0x2aafa1ca7776 @   62 : 2d f7 06 12       GetNamedProperty r3, [6], [18]
         0x2aafa1ca777a @   66 : c2                Star2 
         0x2aafa1ca777b @   67 : 80 07 00 02       CreateClosure [7], [0], #2
         0x2aafa1ca777f @   71 : c0                Star4 
 4544 E> 0x2aafa1ca7780 @   72 : 5e f8 f7 f6 14    CallProperty1 r2, r3, r4, [20]
         0x2aafa1ca7785 @   77 : c4                Star0 
 4796 S> 0x2aafa1ca7786 @   78 : 96 13             JumpIfToBooleanTrue [19] (0x2aafa1ca7799 @ 97)
 4821 E> 0x2aafa1ca7788 @   80 : 2d 02 08 16       GetNamedProperty <this>, [8], [22]
         0x2aafa1ca778c @   84 : c2                Star2 
 4846 E> 0x2aafa1ca778d @   85 : 2d 02 09 18       GetNamedProperty <this>, [9], [24]
         0x2aafa1ca7791 @   89 : c1                Star3 
 4854 E> 0x2aafa1ca7792 @   90 : 2d f7 0a 1a       GetNamedProperty r3, [10], [26]
 4839 E> 0x2aafa1ca7796 @   94 : 6e f8 1c          TestGreaterThan r2, [28]
 4865 S> 0x2aafa1ca7799 @   97 : a9                Return 
Constant pool (size = 11)
0x2aafa1ca77a1: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 11
           0: 0x2aafa1ca7809 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2aafa1ca6369 <String[5]: #world>
           2: 0x2aafa1ca78b9 <String[20]: #getCharacterPosition>
           3: 0x081b27b98ac9 <String[1]: #x>
           4: 0x081b27b98ae1 <String[1]: #y>
           5: 0x2aafa1ca7911 <String[18]: #getThreatPositions>
           6: 0x081b27b89f49 <String[4]: #some>
           7: 0x2aafa1ca7951 <SharedFunctionInfo>
           8: 0x2aafa1ca5ab1 <String[17]: #currentTickNumber>
           9: 0x081b27b8cbb9 <String[7]: #options>
          10: 0x2aafa1ca7b19 <String[10]: #TICK_COUNT>
Handler Table (size = 0)
Source Position Table (size = 48)
0x2aafa1ca7b39 <ByteArray[48]>
0x2aafa1ca7951 points to: [0x2aafa1ca79c0]
=== [0x2aafa1ca79c0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 4602 S> 0x2aafa1ca79c0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2aafa1ca79c4 @    4 : c4                Star0 
         0x2aafa1ca79c5 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4608 E> 0x2aafa1ca79c7 @    7 : aa 01             ThrowReferenceErrorIfHole [1]
 4604 E> 0x2aafa1ca79c9 @    9 : 6c fa 02          TestEqualStrict r0, [2]
         0x2aafa1ca79cc @   12 : 99 23             JumpIfFalse [35] (0x2aafa1ca79ef @ 47)
 4637 E> 0x2aafa1ca79ce @   14 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
         0x2aafa1ca79d2 @   18 : c4                Star0 
         0x2aafa1ca79d3 @   19 : 17 03             LdaImmutableCurrentContextSlot [3]
 4643 E> 0x2aafa1ca79d5 @   21 : aa 03             ThrowReferenceErrorIfHole [3]
 4639 E> 0x2aafa1ca79d7 @   23 : 6c fa 05          TestEqualStrict r0, [5]
         0x2aafa1ca79da @   26 : 99 15             JumpIfFalse [21] (0x2aafa1ca79ef @ 47)
 4673 S> 0x2aafa1ca79dc @   28 : 21 04 06          LdaGlobal [4], [6]
         0x2aafa1ca79df @   31 : c3                Star1 
 4681 E> 0x2aafa1ca79e0 @   32 : 2d f9 05 08       GetNamedProperty r1, [5], [8]
         0x2aafa1ca79e4 @   36 : c4                Star0 
         0x2aafa1ca79e5 @   37 : 13 06             LdaConstant [6]
         0x2aafa1ca79e7 @   39 : c2                Star2 
 4681 E> 0x2aafa1ca79e8 @   40 : 5e fa f9 f8 0a    CallProperty1 r0, r1, r2, [10]
 4749 S> 0x2aafa1ca79ed @   45 : 11                LdaTrue 
 4761 S> 0x2aafa1ca79ee @   46 : a9                Return 
         0x2aafa1ca79ef @   47 : 0e                LdaUndefined 
 4784 S> 0x2aafa1ca79f0 @   48 : a9                Return 
Constant pool (size = 7)
0x2aafa1ca79f9: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 7
           0: 0x081b27b98ac9 <String[1]: #x>
           1: 0x2aafa1ca7879 <String[10]: #characterX>
           2: 0x081b27b98ae1 <String[1]: #y>
           3: 0x2aafa1ca7899 <String[10]: #characterY>
           4: 0x337a8b6c4a09 <String[7]: #console>
           5: 0x081b27b8ac99 <String[3]: #log>
           6: 0x2aafa1ca7a41 <String[43]: #______________Character died_______________>
Handler Table (size = 0)
Source Position Table (size = 32)
0x2aafa1ca7a81 <ByteArray[32]>
0x2aafa1ca7ba1 points to: [0x2aafa1ca7c10]
=== [0x2aafa1ca7c10] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4903 S> 0x2aafa1ca7c10 @    0 : 79 00 00 04       CreateArrayLiteral [0], [0], #4
         0x2aafa1ca7c14 @    4 : c3                Star1 
         0x2aafa1ca7c15 @    5 : 0c                LdaZero 
         0x2aafa1ca7c16 @    6 : c4                Star0 
         0x2aafa1ca7c17 @    7 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x2aafa1ca7c1b @   11 : c2                Star2 
 4979 E> 0x2aafa1ca7c1c @   12 : 2d 02 02 03       GetNamedProperty <this>, [2], [3]
 4997 E> 0x2aafa1ca7c20 @   16 : 47 05 02          MulSmi [5], [2]
         0x2aafa1ca7c23 @   19 : 33 f8 03 05       DefineNamedOwnProperty r2, [3], [5]
 5031 E> 0x2aafa1ca7c27 @   23 : 2d 02 04 07       GetNamedProperty <this>, [4], [7]
         0x2aafa1ca7c2b @   27 : c1                Star3 
         0x2aafa1ca7c2c @   28 : 9e 08             JumpIfUndefinedOrNull [8] (0x2aafa1ca7c34 @ 36)
 5042 E> 0x2aafa1ca7c2e @   30 : 2d f7 05 09       GetNamedProperty r3, [5], [9]
         0x2aafa1ca7c32 @   34 : 8a 03             Jump [3] (0x2aafa1ca7c35 @ 37)
         0x2aafa1ca7c34 @   36 : 0e                LdaUndefined 
         0x2aafa1ca7c35 @   37 : 9e 04             JumpIfUndefinedOrNull [4] (0x2aafa1ca7c39 @ 41)
         0x2aafa1ca7c37 @   39 : 8a 04             Jump [4] (0x2aafa1ca7c3b @ 43)
         0x2aafa1ca7c39 @   41 : 13 06             LdaConstant [6]
         0x2aafa1ca7c3b @   43 : 33 f8 07 0b       DefineNamedOwnProperty r2, [7], [11]
 5093 E> 0x2aafa1ca7c3f @   47 : 2d 02 04 0d       GetNamedProperty <this>, [4], [13]
         0x2aafa1ca7c43 @   51 : c1                Star3 
         0x2aafa1ca7c44 @   52 : 9e 08             JumpIfUndefinedOrNull [8] (0x2aafa1ca7c4c @ 60)
 5104 E> 0x2aafa1ca7c46 @   54 : 2d f7 08 0f       GetNamedProperty r3, [8], [15]
         0x2aafa1ca7c4a @   58 : 8a 03             Jump [3] (0x2aafa1ca7c4d @ 61)
         0x2aafa1ca7c4c @   60 : 0e                LdaUndefined 
         0x2aafa1ca7c4d @   61 : 9e 04             JumpIfUndefinedOrNull [4] (0x2aafa1ca7c51 @ 65)
         0x2aafa1ca7c4f @   63 : 8a 04             Jump [4] (0x2aafa1ca7c53 @ 67)
         0x2aafa1ca7c51 @   65 : 13 06             LdaConstant [6]
         0x2aafa1ca7c53 @   67 : 33 f8 09 11       DefineNamedOwnProperty r2, [9], [17]
         0x2aafa1ca7c57 @   71 : 0b f8             Ldar r2
         0x2aafa1ca7c59 @   73 : 36 f9 fa 13       StaInArrayLiteral r1, r0, [19]
         0x2aafa1ca7c5d @   77 : 0b f9             Ldar r1
 5143 S> 0x2aafa1ca7c5f @   79 : a9                Return 
Constant pool (size = 10)
0x2aafa1ca7c61: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 10
           0: 0x2aafa1ca7cc1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2aafa1ca7cd9 <FixedArray[1]>>
           1: 0x2aafa1ca7cf1 <ObjectBoilerplateDescription[9]>
           2: 0x2aafa1ca5ab1 <String[17]: #currentTickNumber>
           3: 0x2aafa1ca66f1 <String[5]: #score>
           4: 0x2aafa1ca6141 <String[11]: #_engineTeam>
           5: 0x2aafa1ca7d91 <String[10]: #externalId>
           6: 0x337a8b6c17d1 <String[0]: #>
           7: 0x2aafa1ca7d61 <String[6]: #teamId>
           8: 0x337a8b6c58f1 <String[4]: #name>
           9: 0x2aafa1ca7d79 <String[8]: #teamName>
Handler Table (size = 0)
Source Position Table (size = 24)
0x2aafa1ca7db1 <ByteArray[24]>
Boilerplate at 0x2aafa1ca7cf1: 
0x2aafa1ca7cf1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x337a8b6c2059 <Map>
 - length: 9
           0: 8
           1: 0x2aafa1ca7d49 <String[4]: #rank>
           2: 1
           3: 0x2aafa1ca66f1 <String[5]: #score>
           4: 0x337a8b6c1501 <Odd Oddball: uninitialized>
           5: 0x2aafa1ca7d61 <String[6]: #teamId>
           6: 0x337a8b6c1501 <Odd Oddball: uninitialized>
           7: 0x2aafa1ca7d79 <String[8]: #teamName>
           8: 0x337a8b6c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2aafa1ca7e49 points to: [0x2aafa1ca7eb8]
=== [0x2aafa1ca7eb8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 5182 S> 0x2aafa1ca7eb8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2aafa1ca7ebc @    4 : c3                Star1 
         0x2aafa1ca7ebd @    5 : 9e 0d             JumpIfUndefinedOrNull [13] (0x2aafa1ca7eca @ 18)
 5187 E> 0x2aafa1ca7ebf @    7 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2aafa1ca7ec3 @   11 : c4                Star0 
 5189 E> 0x2aafa1ca7ec4 @   12 : 5d fa f9 04       CallProperty0 r0, r1, [4]
         0x2aafa1ca7ec8 @   16 : 8a 03             Jump [3] (0x2aafa1ca7ecb @ 19)
         0x2aafa1ca7eca @   18 : 0e                LdaUndefined 
         0x2aafa1ca7ecb @   19 : 0e                LdaUndefined 
 5203 S> 0x2aafa1ca7ecc @   20 : a9                Return 
Constant pool (size = 2)
0x2aafa1ca7ed1: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 2
           0: 0x2aafa1ca6369 <String[5]: #world>
           1: 0x081b27b83f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 12)
0x2aafa1ca7f09 <ByteArray[12]>
0x2aafa1ca7f91 points to: [0x2aafa1ca8000]
=== [0x2aafa1ca8000] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
         0x2aafa1ca8000 @    0 : 0e                LdaUndefined 
 5250 S> 0x2aafa1ca8001 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 6)
0x2aafa1ca8009 <ByteArray[6]>
0x2aafa1ca8071 points to: [0x2aafa1ca80e0]
=== [0x2aafa1ca80e0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5287 S> 0x2aafa1ca80e0 @    0 : 7d                CreateEmptyObjectLiteral 
 5297 S> 0x2aafa1ca80e1 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 8)
0x2aafa1ca80e9 <ByteArray[8]>
0x2aafa1ca8151 points to: [0x2aafa1ca81c0]
=== [0x2aafa1ca81c0] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5372 S> 0x2aafa1ca81c0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2aafa1ca81c4 @    4 : c3                Star1 
 5372 E> 0x2aafa1ca81c5 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2aafa1ca81c9 @    9 : c3                Star1 
         0x2aafa1ca81ca @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2aafa1ca81ce @   14 : c4                Star0 
 5411 E> 0x2aafa1ca81cf @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2aafa1ca81d3 @   19 : c0                Star4 
 5417 E> 0x2aafa1ca81d4 @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x2aafa1ca81d8 @   24 : c1                Star3 
 5417 E> 0x2aafa1ca81d9 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x2aafa1ca81dd @   29 : c2                Star2 
         0x2aafa1ca81de @   30 : 19 fa f9          Mov r0, r1
         0x2aafa1ca81e1 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x2aafa1ca81e5 @   37 : 13 03             LdaConstant [3]
         0x2aafa1ca81e7 @   39 : c3                Star1 
 5488 E> 0x2aafa1ca81e8 @   40 : 2d 02 03 0c       GetNamedProperty <this>, [3], [12]
         0x2aafa1ca81ec @   44 : c0                Star4 
 5503 E> 0x2aafa1ca81ed @   45 : 2d f6 04 0e       GetNamedProperty r4, [4], [14]
         0x2aafa1ca81f1 @   49 : c1                Star3 
 5503 E> 0x2aafa1ca81f2 @   50 : 5e f7 f6 03 10    CallProperty1 r3, r4, a0, [16]
         0x2aafa1ca81f7 @   55 : c1                Star3 
         0x2aafa1ca81f8 @   56 : 9e 13             JumpIfUndefinedOrNull [19] (0x2aafa1ca820b @ 75)
 5514 E> 0x2aafa1ca81fa @   58 : 2d f7 05 12       GetNamedProperty r3, [5], [18]
         0x2aafa1ca81fe @   62 : c2                Star2 
         0x2aafa1ca81ff @   63 : 80 06 00 02       CreateClosure [6], [0], #2
         0x2aafa1ca8203 @   67 : c0                Star4 
 5516 E> 0x2aafa1ca8204 @   68 : 5e f8 f7 f6 14    CallProperty1 r2, r3, r4, [20]
         0x2aafa1ca8209 @   73 : 8a 03             Jump [3] (0x2aafa1ca820c @ 76)
         0x2aafa1ca820b @   75 : 0e                LdaUndefined 
         0x2aafa1ca820c @   76 : 9e 04             JumpIfUndefinedOrNull [4] (0x2aafa1ca8210 @ 80)
         0x2aafa1ca820e @   78 : 8a 04             Jump [4] (0x2aafa1ca8212 @ 82)
         0x2aafa1ca8210 @   80 : 7b 16             CreateEmptyArrayLiteral [22]
         0x2aafa1ca8212 @   82 : 37 fa f9 00 17    DefineKeyedOwnPropertyInLiteral r0, r1, #0, [23]
         0x2aafa1ca8217 @   87 : 0b fa             Ldar r0
 5563 S> 0x2aafa1ca8219 @   89 : a9                Return 
Constant pool (size = 7)
0x2aafa1ca8221: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 7
           0: 0x2aafa1ca58a9 <String[15]: #serializeCommon>
           1: 0x2aafa1ca6369 <String[5]: #world>
           2: 0x2aafa1ca8269 <String[18]: #serializeForPlayer>
           3: 0x2aafa1ca5a91 <String[14]: #lastTickErrors>
           4: 0x337a8b6c50e9 <String[3]: #get>
           5: 0x081b27b89ea9 <String[3]: #map>
           6: 0x2aafa1ca8291 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 30)
0x2aafa1ca83a1 <ByteArray[30]>
0x2aafa1ca8291 points to: [0x2aafa1ca8300]
=== [0x2aafa1ca8300] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5537 S> 0x2aafa1ca8300 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 5544 S> 0x2aafa1ca8304 @    4 : a9                Return 
Constant pool (size = 1)
0x2aafa1ca8309: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 1
           0: 0x337a8b6c5721 <String[7]: #message>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2aafa1ca8321 <ByteArray[8]>
0x2aafa1ca8449 points to: [0x2aafa1ca84b8]
=== [0x2aafa1ca84b8] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 5626 S> 0x2aafa1ca84b8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2aafa1ca84bc @    4 : c2                Star2 
 5630 E> 0x2aafa1ca84bd @    5 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x2aafa1ca84c1 @    9 : c2                Star2 
 5635 E> 0x2aafa1ca84c2 @   10 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x2aafa1ca84c6 @   14 : c3                Star1 
         0x2aafa1ca84c7 @   15 : 78 03 06 01       CreateRegExpLiteral [3], [6], #1
         0x2aafa1ca84cb @   19 : c1                Star3 
 5635 E> 0x2aafa1ca84cc @   20 : 5e f9 f8 f7 07    CallProperty1 r1, r2, r3, [7]
         0x2aafa1ca84d1 @   25 : c4                Star0 
 5695 S> 0x2aafa1ca84d2 @   26 : 2d 02 04 09       GetNamedProperty <this>, [4], [9]
         0x2aafa1ca84d6 @   30 : c2                Star2 
 5695 E> 0x2aafa1ca84d7 @   31 : 5d f8 02 0b       CallProperty0 r2, <this>, [11]
         0x2aafa1ca84db @   35 : c2                Star2 
         0x2aafa1ca84dc @   36 : 7e f8 29 0d       CloneObject r2, #41, [13]
         0x2aafa1ca84e0 @   40 : c3                Star1 
 5734 E> 0x2aafa1ca84e1 @   41 : 2d 02 05 0f       GetNamedProperty <this>, [5], [15]
         0x2aafa1ca84e5 @   45 : bf                Star5 
 5740 E> 0x2aafa1ca84e6 @   46 : 2d f5 06 11       GetNamedProperty r5, [6], [17]
         0x2aafa1ca84ea @   50 : c0                Star4 
 5740 E> 0x2aafa1ca84eb @   51 : 5d f6 f5 13       CallProperty0 r4, r5, [19]
         0x2aafa1ca84ef @   55 : c1                Star3 
         0x2aafa1ca84f0 @   56 : 19 f9 f8          Mov r1, r2
         0x2aafa1ca84f3 @   59 : 68 0e f8 02       InvokeIntrinsic [_CopyDataProperties], r2-r3
         0x2aafa1ca84f7 @   63 : 13 07             LdaConstant [7]
         0x2aafa1ca84f9 @   65 : c2                Star2 
         0x2aafa1ca84fa @   66 : 0b fa             Ldar r0
 5783 E> 0x2aafa1ca84fc @   68 : 97 1a             JumpIfToBooleanFalse [26] (0x2aafa1ca8516 @ 94)
         0x2aafa1ca84fe @   70 : 0c                LdaZero 
 5800 E> 0x2aafa1ca84ff @   71 : 2f fa 15          GetKeyedProperty r0, [21]
         0x2aafa1ca8502 @   74 : c0                Star4 
 5804 E> 0x2aafa1ca8503 @   75 : 2d f6 08 17       GetNamedProperty r4, [8], [23]
         0x2aafa1ca8507 @   79 : c1                Star3 
         0x2aafa1ca8508 @   80 : 13 09             LdaConstant [9]
         0x2aafa1ca850a @   82 : bf                Star5 
         0x2aafa1ca850b @   83 : 13 0a             LdaConstant [10]
         0x2aafa1ca850d @   85 : be                Star6 
 5804 E> 0x2aafa1ca850e @   86 : 5f f7 f6 f5 f4 19 CallProperty2 r3, r4, r5, r6, [25]
         0x2aafa1ca8514 @   92 : 8a 04             Jump [4] (0x2aafa1ca8518 @ 96)
         0x2aafa1ca8516 @   94 : 13 0b             LdaConstant [11]
         0x2aafa1ca8518 @   96 : 37 f9 f8 00 1b    DefineKeyedOwnPropertyInLiteral r1, r2, #0, [27]
         0x2aafa1ca851d @  101 : 0b f9             Ldar r1
 5838 S> 0x2aafa1ca851f @  103 : a9                Return 
Constant pool (size = 12)
0x2aafa1ca8521: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 12
           0: 0x081b27b89ea9 <String[3]: #map>
           1: 0x337a8b6c58f1 <String[4]: #name>
           2: 0x081b27b9ae01 <String[5]: #match>
           3: 0x2aafa1ca85a9 <String[11]: #(-?[a-z]+)+>
           4: 0x2aafa1ca58a9 <String[15]: #serializeCommon>
           5: 0x2aafa1ca6369 <String[5]: #world>
           6: 0x2aafa1ca5881 <String[18]: #serializeForViewer>
           7: 0x2aafa1ca85c9 <String[7]: #mapName>
           8: 0x081b27b9ae31 <String[7]: #replace>
           9: 0x0a9ebbd71899 <String[1]: #->
          10: 0x081b27ba2789 <String[1]: #_>
          11: 0x337a8b6c17d1 <String[0]: #>
Handler Table (size = 0)
Source Position Table (size = 37)
0x2aafa1ca8629 <ByteArray[37]>
0x2aafa1ca86d9 points to: [0x2aafa1ca8748]
=== [0x2aafa1ca8748] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 5926 S> 0x2aafa1ca8748 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x2aafa1ca874c @    4 : c4                Star0 
 5963 E> 0x2aafa1ca874d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x2aafa1ca8751 @    9 : c3                Star1 
 5963 E> 0x2aafa1ca8752 @   10 : 5d f9 02 03       CallProperty0 r1, <this>, [3]
         0x2aafa1ca8756 @   14 : 33 fa 02 05       DefineNamedOwnProperty r0, [2], [5]
 6021 E> 0x2aafa1ca875a @   18 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x2aafa1ca875e @   22 : 33 fa 03 09       DefineNamedOwnProperty r0, [3], [9]
 6063 E> 0x2aafa1ca8762 @   26 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x2aafa1ca8766 @   30 : 33 fa 04 0d       DefineNamedOwnProperty r0, [4], [13]
         0x2aafa1ca876a @   34 : 0b fa             Ldar r0
 6142 S> 0x2aafa1ca876c @   36 : a9                Return 
Constant pool (size = 5)
0x2aafa1ca8771: [FixedArray] in OldSpace
 - map: 0x337a8b6c12e1 <Map>
 - length: 5
           0: 0x2aafa1ca87a9 <ObjectBoilerplateDescription[7]>
           1: 0x2aafa1ca5839 <String[18]: #serializeConstants>
           2: 0x081b27b889d1 <String[9]: #constants>
           3: 0x2aafa1ca5ab1 <String[17]: #currentTickNumber>
           4: 0x2aafa1ca8811 <String[4]: #tick>
Handler Table (size = 0)
Source Position Table (size = 21)
0x2aafa1ca8829 <ByteArray[21]>
Boilerplate at 0x2aafa1ca87a9: 
0x2aafa1ca87a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x337a8b6c2059 <Map>
 - length: 7
           0: 8
           1: 0x081b27b889d1 <String[9]: #constants>
           2: 0x337a8b6c1501 <Odd Oddball: uninitialized>
           3: 0x2aafa1ca5ab1 <String[17]: #currentTickNumber>
           4: 0x337a8b6c1501 <Odd Oddball: uninitialized>
           5: 0x2aafa1ca8811 <String[4]: #tick>
           6: 0x337a8b6c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2aafa1ca88e1: 
0x2aafa1ca88e1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x337a8b6c2059 <Map>
 - length: 9
           0: 8
           1: 0x2aafa1ca5b81 <String[11]: #RANDOM_SEED>
           2: 0x337a8b6c1501 <Odd Oddball: uninitialized>
           3: 0x2aafa1ca7b19 <String[10]: #TICK_COUNT>
           4: 2000
           5: 0x2aafa1ca8939 <String[22]: #RESPAWN_COOLDOWN_TICKS>
           6: 10
           7: 0x2aafa1ca8961 <String[31]: #CHEAT_DO_NOT_OBFUSCATE_TEAM_IDS>
           8: 0x337a8b6c1789 <false>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
