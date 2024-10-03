<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1a9e24824f28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1a9e24824f28 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1a9e24824f2c @    4 : c4                Star0 
 6480 S> 0x1a9e24824f2d @    5 : a9                Return 
Constant pool (size = 1)
0x1a9e24824f31: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 1
           0: 0x1a9e24824f49 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1a9e24828a61 <ByteArray[8]>
0x1a9e24824f49 points to: [0x1a9e24824fb8]
=== [0x1a9e24824fb8] DISASSEMBLY ===
Parameter count 6
Register count 21
Frame size 168
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1a9e24824fb8 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x1a9e24824fbb @    3 : 1a f9             PushContext r1
         0x1a9e24824fbd @    5 : 10                LdaTheHole 
         0x1a9e24824fbe @    6 : 25 02             StaCurrentContextSlot [2]
         0x1a9e24824fc0 @    8 : 10                LdaTheHole 
         0x1a9e24824fc1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1a9e24824fc3 @   11 : 10                LdaTheHole 
         0x1a9e24824fc4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x1a9e24824fc6 @   14 : 10                LdaTheHole 
         0x1a9e24824fc7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x1a9e24824fc9 @   17 : 10                LdaTheHole 
         0x1a9e24824fca @   18 : 25 06             StaCurrentContextSlot [6]
         0x1a9e24824fcc @   20 : 10                LdaTheHole 
         0x1a9e24824fcd @   21 : 25 07             StaCurrentContextSlot [7]
   76 S> 0x1a9e24824fcf @   23 : 21 01 00          LdaGlobal [1], [0]
         0x1a9e24824fd2 @   26 : c1                Star3 
   83 E> 0x1a9e24824fd3 @   27 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x1a9e24824fd7 @   31 : c2                Star2 
         0x1a9e24824fd8 @   32 : 13 03             LdaConstant [3]
         0x1a9e24824fda @   34 : bf                Star5 
   98 E> 0x1a9e24824fdb @   35 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x1a9e24824fdf @   39 : be                Star6 
         0x1a9e24824fe0 @   40 : 19 03 f6          Mov a0, r4
   83 E> 0x1a9e24824fe3 @   43 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x1a9e24824fe8 @   48 : 0e                LdaUndefined 
  166 E> 0x1a9e24824fe9 @   49 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  193 S> 0x1a9e24824fed @   53 : 13 06             LdaConstant [6]
         0x1a9e24824fef @   55 : c1                Star3 
  193 E> 0x1a9e24824ff0 @   56 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  193 E> 0x1a9e24824ff4 @   60 : 25 02             StaCurrentContextSlot [2]
  236 S> 0x1a9e24824ff6 @   62 : 13 07             LdaConstant [7]
         0x1a9e24824ff8 @   64 : c1                Star3 
  236 E> 0x1a9e24824ff9 @   65 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  236 E> 0x1a9e24824ffd @   69 : 25 03             StaCurrentContextSlot [3]
  281 S> 0x1a9e24824fff @   71 : 13 08             LdaConstant [8]
         0x1a9e24825001 @   73 : c1                Star3 
  281 E> 0x1a9e24825002 @   74 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  281 E> 0x1a9e24825006 @   78 : 25 04             StaCurrentContextSlot [4]
  322 S> 0x1a9e24825008 @   80 : 13 09             LdaConstant [9]
         0x1a9e2482500a @   82 : c1                Star3 
  322 E> 0x1a9e2482500b @   83 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  322 E> 0x1a9e2482500f @   87 : 25 05             StaCurrentContextSlot [5]
  369 S> 0x1a9e24825011 @   89 : 13 0a             LdaConstant [10]
         0x1a9e24825013 @   91 : c1                Star3 
  369 E> 0x1a9e24825014 @   92 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  369 E> 0x1a9e24825018 @   96 : 25 06             StaCurrentContextSlot [6]
  406 S> 0x1a9e2482501a @   98 : 13 0b             LdaConstant [11]
         0x1a9e2482501c @  100 : c1                Star3 
  406 E> 0x1a9e2482501d @  101 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  406 E> 0x1a9e24825021 @  105 : 25 07             StaCurrentContextSlot [7]
         0x1a9e24825023 @  107 : 81 0c             CreateBlockContext [12]
         0x1a9e24825025 @  109 : 1a f8             PushContext r2
         0x1a9e24825027 @  111 : 10                LdaTheHole 
         0x1a9e24825028 @  112 : 25 02             StaCurrentContextSlot [2]
         0x1a9e2482502a @  114 : 10                LdaTheHole 
         0x1a9e2482502b @  115 : be                Star6 
         0x1a9e2482502c @  116 : 80 0e 00 02       CreateClosure [14], [0], #2
         0x1a9e24825030 @  120 : c1                Star3 
         0x1a9e24825031 @  121 : 13 0d             LdaConstant [13]
         0x1a9e24825033 @  123 : c0                Star4 
         0x1a9e24825034 @  124 : 80 0f 01 02       CreateClosure [15], [1], #2
         0x1a9e24825038 @  128 : bd                Star7 
         0x1a9e24825039 @  129 : 80 10 02 02       CreateClosure [16], [2], #2
         0x1a9e2482503d @  133 : bc                Star8 
         0x1a9e2482503e @  134 : 80 11 03 02       CreateClosure [17], [3], #2
         0x1a9e24825042 @  138 : bb                Star9 
         0x1a9e24825043 @  139 : 80 12 04 02       CreateClosure [18], [4], #2
         0x1a9e24825047 @  143 : ba                Star10 
         0x1a9e24825048 @  144 : 80 13 05 02       CreateClosure [19], [5], #2
         0x1a9e2482504c @  148 : b9                Star11 
         0x1a9e2482504d @  149 : 80 14 06 02       CreateClosure [20], [6], #2
         0x1a9e24825051 @  153 : b8                Star12 
         0x1a9e24825052 @  154 : 80 15 07 02       CreateClosure [21], [7], #2
         0x1a9e24825056 @  158 : b7                Star13 
         0x1a9e24825057 @  159 : 80 16 08 02       CreateClosure [22], [8], #2
         0x1a9e2482505b @  163 : b6                Star14 
         0x1a9e2482505c @  164 : 80 17 09 02       CreateClosure [23], [9], #2
         0x1a9e24825060 @  168 : b5                Star15 
         0x1a9e24825061 @  169 : 80 18 0a 02       CreateClosure [24], [10], #2
         0x1a9e24825065 @  173 : 18 ea             Star r16
         0x1a9e24825067 @  175 : 80 19 0b 02       CreateClosure [25], [11], #2
         0x1a9e2482506b @  179 : 18 e9             Star r17
         0x1a9e2482506d @  181 : 80 1a 0c 02       CreateClosure [26], [12], #2
         0x1a9e24825071 @  185 : 18 e8             Star r18
         0x1a9e24825073 @  187 : 80 1b 0d 02       CreateClosure [27], [13], #2
         0x1a9e24825077 @  191 : 18 e7             Star r19
         0x1a9e24825079 @  193 : 80 1c 0e 02       CreateClosure [28], [14], #2
         0x1a9e2482507d @  197 : 18 e6             Star r20
         0x1a9e2482507f @  199 : 19 f7 f5          Mov r3, r5
         0x1a9e24825082 @  202 : 65 28 00 f6 11    CallRuntime [DefineClass], r4-r20
         0x1a9e24825087 @  207 : c0                Star4 
         0x1a9e24825088 @  208 : 0b f5             Ldar r5
         0x1a9e2482508a @  210 : 25 02             StaCurrentContextSlot [2]
         0x1a9e2482508c @  212 : 1b f8             PopContext r2
         0x1a9e2482508e @  214 : c4                Star0 
 6151 S> 0x1a9e2482508f @  215 : 0b fa             Ldar r0
 6178 E> 0x1a9e24825091 @  217 : 32 03 05 07       SetNamedProperty a0, [5], [7]
 6267 S> 0x1a9e24825095 @  221 : 7c 1d 15 29       CreateObjectLiteral [29], [21], #41
         0x1a9e24825099 @  225 : c1                Star3 
 6328 E> 0x1a9e2482509a @  226 : 21 1e 16          LdaGlobal [30], [22]
         0x1a9e2482509d @  229 : bf                Star5 
 6333 E> 0x1a9e2482509e @  230 : 2d f5 1f 18       GetNamedProperty r5, [31], [24]
         0x1a9e248250a2 @  234 : c0                Star4 
 6333 E> 0x1a9e248250a3 @  235 : 5d f6 f5 1a       CallProperty0 r4, r5, [26]
         0x1a9e248250a7 @  239 : 33 f7 20 1c       DefineNamedOwnProperty r3, [32], [28]
         0x1a9e248250ab @  243 : 0b f7             Ldar r3
 6307 E> 0x1a9e248250ad @  245 : 32 fa 21 1e       SetNamedProperty r0, [33], [30]
         0x1a9e248250b1 @  249 : 0e                LdaUndefined 
 6477 S> 0x1a9e248250b2 @  250 : a9                Return 
Constant pool (size = 34)
0x1a9e248250b9: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 34
           0: 0x1a9e248251d9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2b17b9b05ab9 <String[6]: #Object>
           2: 0x2b17b9b04c11 <String[14]: #defineProperty>
           3: 0x1a9e24825319 <String[10]: #__esModule>
           4: 0x1a9e24825339 <ObjectBoilerplateDescription[3]>
           5: 0x1a9e24825361 <String[18]: #Blitz2025Challenge>
           6: 0x1a9e24825389 <String[13]: #@blitz/engine>
           7: 0x1a9e248253a9 <String[16]: #./actions/action>
           8: 0x1a9e248253c9 <String[7]: #./error>
           9: 0x1a9e248253e1 <String[17]: #./maps/map_loader>
          10: 0x1a9e24825409 <String[8]: #./random>
          11: 0x1a9e24825421 <String[7]: #./world>
          12: 0x1a9e24825439 <ScopeInfo CLASS_SCOPE>
          13: 0x1a9e24825481 <FixedArray[7]>
          14: 0x1a9e248258d9 <SharedFunctionInfo Blitz2025Challenge>
          15: 0x1a9e24825ea1 <SharedFunctionInfo loadMap>
          16: 0x1a9e248260c1 <SharedFunctionInfo registerTeam>
          17: 0x1a9e248261f9 <SharedFunctionInfo setup>
          18: 0x1a9e24826491 <SharedFunctionInfo playOneTick>
          19: 0x1a9e24826a11 <SharedFunctionInfo fetchAndApplyPlayerCommands>
          20: 0x1a9e24827171 <SharedFunctionInfo applyActions>
          21: 0x1a9e248276d9 <SharedFunctionInfo isGameComplete>
          22: 0x1a9e24827bb1 <SharedFunctionInfo getGameResults>
          23: 0x1a9e24827e59 <SharedFunctionInfo updateGame>
          24: 0x1a9e24827fa1 <SharedFunctionInfo addStatsForTeam>
          25: 0x1a9e24828081 <SharedFunctionInfo serializeConstants>
          26: 0x1a9e24828161 <SharedFunctionInfo serializeForTeam>
          27: 0x1a9e24828459 <SharedFunctionInfo serializeForViewer>
          28: 0x1a9e248286e9 <SharedFunctionInfo serializeCommon>
          29: 0x1a9e248288f1 <ObjectBoilerplateDescription[9]>
          30: 0x1c9ee959a991 <String[4]: #Math>
          31: 0x1c9ee959aba1 <String[6]: #random>
          32: 0x1a9e24825b91 <String[11]: #RANDOM_SEED>
          33: 0x1a9e24825b01 <String[20]: #DEFAULT_GAME_OPTIONS>
Handler Table (size = 0)
Source Position Table (size = 81)
0x1a9e248289d1 <ByteArray[81]>
Object boilerplate at 0x1a9e24825339: 
0x1a9e24825339: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b17b9b02059 <Map>
 - length: 3
           0: 8
           1: 0x2b17b9b06419 <String[5]: #value>
           2: 0x2b17b9b01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x1a9e24825481 has 7 elements:
0x1a9e24825481: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 7
           0: 17
           1: 0x1a9e248254c9 <DescriptorArray[5]>
           2: 0x2b17b9b03301 <NumberDictionary[7]>
           3: 0x2b17b9b01329 <FixedArray[0]>
           4: 0x1a9e248255b9 <DescriptorArray[14]>
           5: 0x2b17b9b03301 <NumberDictionary[7]>
           6: 0x2b17b9b01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x11 (17)
Element[1]
0x1a9e248254c9: [DescriptorArray] in OldSpace
 - map: 0x2b17b9b07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2b17b9b055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x1c9ee95b4fe1 <AccessorInfo>
  [1]: 0x2b17b9b058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x1c9ee95b4f71 <AccessorInfo>
  [2]: 0x2b17b9b05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x1c9ee95b5051 <AccessorInfo>
  [3]: 0x2b17b9b065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 3, attrs: [W_C]) @ 0x1a9e24825589 <ClassPositions 426, 6150>
  [4]: 0x1a9e248255a1: [String] in OldSpace: #loadMap (const data descriptor, p: 4, attrs: [W_C]) @ 3
Element[2]
0x2b17b9b03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2b17b9b01329: [FixedArray] in ReadOnlySpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 0
Element[4]
0x1a9e248255b9: [DescriptorArray] in OldSpace
 - map: 0x2b17b9b07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 14
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2b17b9b04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 13, attrs: [W_C]) @ 1
  [1]: 0x1a9e24825721: [String] in OldSpace: #registerTeam (const data descriptor, p: 6, attrs: [W_C]) @ 4
  [2]: 0x1c9ee95888a1: [String] in OldSpace: #setup (const data descriptor, p: 7, attrs: [W_C]) @ 5
  [3]: 0x1a9e24825759: [String] in OldSpace: #playOneTick (const data descriptor, p: 0, attrs: [W_C]) @ 6
  [4]: 0x1a9e24825779: [String] in OldSpace: #fetchAndApplyPlayerCommands (const data descriptor, p: 12, attrs: [W_C]) @ 7
  [5]: 0x1a9e248257a9: [String] in OldSpace: #applyActions (const data descriptor, p: 4, attrs: [W_C]) @ 8
  [6]: 0x1a9e248257c9: [String] in OldSpace: #isGameComplete (const data descriptor, p: 5, attrs: [W_C]) @ 9
  [7]: 0x1a9e248257e9: [String] in OldSpace: #getGameResults (const data descriptor, p: 9, attrs: [W_C]) @ 10
  [8]: 0x1a9e24825809: [String] in OldSpace: #updateGame (const data descriptor, p: 11, attrs: [W_C]) @ 11
  [9]: 0x1a9e24825829: [String] in OldSpace: #addStatsForTeam (const data descriptor, p: 10, attrs: [W_C]) @ 12
  [10]: 0x1a9e24825849: [String] in OldSpace: #serializeConstants (const data descriptor, p: 1, attrs: [W_C]) @ 13
  [11]: 0x1a9e24825871: [String] in OldSpace: #serializeForTeam (const data descriptor, p: 2, attrs: [W_C]) @ 14
  [12]: 0x1a9e24825891: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 3, attrs: [W_C]) @ 15
  [13]: 0x1a9e248258b9: [String] in OldSpace: #serializeCommon (const data descriptor, p: 8, attrs: [W_C]) @ 16
Element[5]
0x2b17b9b03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2b17b9b01329: [FixedArray] in ReadOnlySpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 0
0x1a9e248258d9 points to: [0x1a9e24825948]
=== [0x1a9e24825948] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  522 S> 0x1a9e24825948 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x1a9e2482594b @    3 : c3                Star1 
  518 E> 0x1a9e2482594c @    4 : 69 f9 fa 00 02    Construct r1, r0-r0, [2]
  516 E> 0x1a9e24825951 @    9 : 32 02 01 04       SetNamedProperty <this>, [1], [4]
  537 S> 0x1a9e24825955 @   13 : 0d 01             LdaSmi [1]
  560 E> 0x1a9e24825957 @   15 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  573 S> 0x1a9e2482595b @   19 : 0b 03             Ldar a0
  585 E> 0x1a9e2482595d @   21 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  603 S> 0x1a9e24825961 @   25 : 16 02             LdaCurrentContextSlot [2]
  635 E> 0x1a9e24825963 @   27 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1a9e24825965 @   29 : c2                Star2 
  654 E> 0x1a9e24825966 @   30 : 2d f8 05 0a       GetNamedProperty r2, [5], [10]
         0x1a9e2482596a @   34 : c2                Star2 
         0x1a9e2482596b @   35 : 7e f8 29 0c       CloneObject r2, #41, [12]
         0x1a9e2482596f @   39 : c3                Star1 
         0x1a9e24825970 @   40 : 19 f9 f8          Mov r1, r2
         0x1a9e24825973 @   43 : 19 04 f7          Mov a1, r3
  691 E> 0x1a9e24825976 @   46 : 68 0e f8 02       InvokeIntrinsic [_CopyDataProperties], r2-r3
         0x1a9e2482597a @   50 : 0b f8             Ldar r2
  616 E> 0x1a9e2482597c @   52 : 32 02 06 0e       SetNamedProperty <this>, [6], [14]
  719 S> 0x1a9e24825980 @   56 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x1a9e24825984 @   60 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1a9e24825986 @   62 : c3                Star1 
  728 E> 0x1a9e24825987 @   63 : 2d f9 08 10       GetNamedProperty r1, [8], [16]
         0x1a9e2482598b @   67 : c3                Star1 
  735 E> 0x1a9e2482598c @   68 : 2d f9 09 12       GetNamedProperty r1, [9], [18]
         0x1a9e24825990 @   72 : c4                Star0 
         0x1a9e24825991 @   73 : 13 0a             LdaConstant [10]
         0x1a9e24825993 @   75 : c2                Star2 
  761 E> 0x1a9e24825994 @   76 : 2d 02 06 15       GetNamedProperty <this>, [6], [21]
         0x1a9e24825998 @   80 : c1                Star3 
  769 E> 0x1a9e24825999 @   81 : 2d f7 0b 17       GetNamedProperty r3, [11], [23]
         0x1a9e2482599d @   85 : 77                ToString 
         0x1a9e2482599e @   86 : 39 f8 14          Add r2, [20]
         0x1a9e248259a1 @   89 : c2                Star2 
  735 E> 0x1a9e248259a2 @   90 : 5e fa f9 f8 19    CallProperty1 r0, r1, r2, [25]
  793 S> 0x1a9e248259a7 @   95 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
  808 E> 0x1a9e248259ab @   99 : aa 0c             ThrowReferenceErrorIfHole [12]
         0x1a9e248259ad @  101 : c3                Star1 
  817 E> 0x1a9e248259ae @  102 : 2d f9 0d 1b       GetNamedProperty r1, [13], [27]
         0x1a9e248259b2 @  106 : c3                Star1 
  829 E> 0x1a9e248259b3 @  107 : 2d 02 06 1d       GetNamedProperty <this>, [6], [29]
         0x1a9e248259b7 @  111 : c2                Star2 
  837 E> 0x1a9e248259b8 @  112 : 2d f8 0b 1f       GetNamedProperty r2, [11], [31]
         0x1a9e248259bc @  116 : c2                Star2 
         0x1a9e248259bd @  117 : 0b f9             Ldar r1
  804 E> 0x1a9e248259bf @  119 : 69 f9 f8 01 21    Construct r1, r2-r2, [33]
  802 E> 0x1a9e248259c4 @  124 : 32 02 0e 23       SetNamedProperty <this>, [14], [35]
  859 S> 0x1a9e248259c8 @  128 : 16 02             LdaCurrentContextSlot [2]
  870 E> 0x1a9e248259ca @  130 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1a9e248259cc @  132 : c2                Star2 
  889 E> 0x1a9e248259cd @  133 : 2d f8 0f 25       GetNamedProperty r2, [15], [37]
         0x1a9e248259d1 @  137 : c3                Star1 
  902 E> 0x1a9e248259d2 @  138 : 2d 02 06 27       GetNamedProperty <this>, [6], [39]
         0x1a9e248259d6 @  142 : c1                Star3 
  910 E> 0x1a9e248259d7 @  143 : 2d f7 10 29       GetNamedProperty r3, [16], [41]
         0x1a9e248259db @  147 : c1                Star3 
  925 E> 0x1a9e248259dc @  148 : 2d 02 06 2b       GetNamedProperty <this>, [6], [43]
         0x1a9e248259e0 @  152 : c0                Star4 
  933 E> 0x1a9e248259e1 @  153 : 2d f6 11 2d       GetNamedProperty r4, [17], [45]
         0x1a9e248259e5 @  157 : c0                Star4 
  889 E> 0x1a9e248259e6 @  158 : 5f f9 f8 f7 f6 2f CallProperty2 r1, r2, r3, r4, [47]
  868 E> 0x1a9e248259ec @  164 : 32 02 12 31       SetNamedProperty <this>, [18], [49]
         0x1a9e248259f0 @  168 : 0e                LdaUndefined 
  954 S> 0x1a9e248259f1 @  169 : a9                Return 
Constant pool (size = 19)
0x1a9e248259f9: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 19
           0: 0x2b17b9b05691 <String[3]: #Map>
           1: 0x1a9e24825aa1 <String[14]: #lastTickErrors>
           2: 0x1a9e24825ac1 <String[17]: #currentTickNumber>
           3: 0x1a9e24825ae9 <String[6]: #engine>
           4: 0x1a9e24825361 <String[18]: #Blitz2025Challenge>
           5: 0x1a9e24825b01 <String[20]: #DEFAULT_GAME_OPTIONS>
           6: 0x1c9ee958cbb9 <String[7]: #options>
           7: 0x1a9e24825281 <String[8]: #engine_1>
           8: 0x1c9ee9586461 <String[6]: #logger>
           9: 0x1c9ee959c1f9 <String[4]: #info>
          10: 0x1a9e24825b71 <String[13]: #Random seed: >
          11: 0x1a9e24825b91 <String[11]: #RANDOM_SEED>
          12: 0x1a9e248252e9 <String[8]: #random_1>
          13: 0x1a9e24825bb1 <String[6]: #Random>
          14: 0x1c9ee95a8a51 <String[3]: #rng>
          15: 0x1a9e248255a1 <String[7]: #loadMap>
          16: 0x1a9e24825be1 <String[8]: #MAP_NAME>
          17: 0x1a9e24825bf9 <String[14]: #MAP_DIFFICULTY>
          18: 0x1c9ee9589ea9 <String[3]: #map>
Handler Table (size = 0)
Source Position Table (size = 84)
0x1a9e24825c31 <ByteArray[84]>
0x1a9e24825ea1 points to: [0x1a9e24825f10]
=== [0x1a9e24825f10] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1006 S> 0x1a9e24825f10 @    0 : 0b 03             Ldar a0
         0x1a9e24825f12 @    2 : 1d                TestUndetectable 
         0x1a9e24825f13 @    3 : 99 19             JumpIfFalse [25] (0x1a9e24825f2c @ 28)
 1041 S> 0x1a9e24825f15 @    5 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x1a9e24825f19 @    9 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1a9e24825f1b @   11 : c3                Star1 
 1061 E> 0x1a9e24825f1c @   12 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x1a9e24825f20 @   16 : c3                Star1 
 1071 E> 0x1a9e24825f21 @   17 : 2d f9 02 02       GetNamedProperty r1, [2], [2]
         0x1a9e24825f25 @   21 : c4                Star0 
 1071 E> 0x1a9e24825f26 @   22 : 5e fa f9 04 04    CallProperty1 r0, r1, a1, [4]
 1097 S> 0x1a9e24825f2b @   27 : a9                Return 
 1121 S> 0x1a9e24825f2c @   28 : 0b 03             Ldar a0
         0x1a9e24825f2e @   30 : 20 01             TestTypeOf #1
         0x1a9e24825f30 @   32 : 99 37             JumpIfFalse [55] (0x1a9e24825f67 @ 87)
 1168 S> 0x1a9e24825f32 @   34 : 13 03             LdaConstant [3]
 1180 E> 0x1a9e24825f34 @   36 : 6c 03 06          TestEqualStrict a0, [6]
         0x1a9e24825f37 @   39 : 99 19             JumpIfFalse [25] (0x1a9e24825f50 @ 64)
 1206 S> 0x1a9e24825f39 @   41 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x1a9e24825f3d @   45 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1a9e24825f3f @   47 : c3                Star1 
 1226 E> 0x1a9e24825f40 @   48 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x1a9e24825f44 @   52 : c3                Star1 
 1236 E> 0x1a9e24825f45 @   53 : 2d f9 02 07       GetNamedProperty r1, [2], [7]
         0x1a9e24825f49 @   57 : c4                Star0 
 1236 E> 0x1a9e24825f4a @   58 : 5e fa f9 04 09    CallProperty1 r0, r1, a1, [9]
 1262 S> 0x1a9e24825f4f @   63 : a9                Return 
 1312 S> 0x1a9e24825f50 @   64 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x1a9e24825f54 @   68 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1a9e24825f56 @   70 : c3                Star1 
 1332 E> 0x1a9e24825f57 @   71 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x1a9e24825f5b @   75 : c3                Star1 
 1342 E> 0x1a9e24825f5c @   76 : 2d f9 04 0b       GetNamedProperty r1, [4], [11]
         0x1a9e24825f60 @   80 : c4                Star0 
 1342 E> 0x1a9e24825f61 @   81 : 5e fa f9 03 0d    CallProperty1 r0, r1, a0, [13]
 1367 S> 0x1a9e24825f66 @   86 : a9                Return 
 1419 S> 0x1a9e24825f67 @   87 : 0b 03             Ldar a0
 1434 S> 0x1a9e24825f69 @   89 : a9                Return 
Constant pool (size = 5)
0x1a9e24825f71: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 5
           0: 0x1a9e248252c9 <String[12]: #map_loader_1>
           1: 0x1a9e24825fa9 <String[9]: #MapLoader>
           2: 0x1a9e24825fc9 <String[13]: #loadRandomMap>
           3: 0x2b17b9b017d1 <String[0]: #>
           4: 0x1a9e24825fe9 <String[15]: #loadFromMapName>
Handler Table (size = 0)
Source Position Table (size = 50)
0x1a9e24826009 <ByteArray[50]>
0x1a9e248260c1 points to: [0x1a9e24826130]
=== [0x1a9e24826130] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1503 S> 0x1a9e24826130 @    0 : 0b 03             Ldar a0
 1520 E> 0x1a9e24826132 @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x1a9e24826136 @    6 : 0e                LdaUndefined 
 1532 S> 0x1a9e24826137 @    7 : a9                Return 
Constant pool (size = 1)
0x1a9e24826139: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 1
           0: 0x1a9e24826151 <String[11]: #_engineTeam>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1a9e24826171 <ByteArray[9]>
0x1a9e248261f9 points to: [0x1a9e24826268]
=== [0x1a9e24826268] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x1a9e24826268 @    0 : 19 fe f9          Mov <closure>, r1
         0x1a9e2482626b @    3 : 19 02 f8          Mov <this>, r2
 1549 E> 0x1a9e2482626e @    6 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x1a9e24826272 @   10 : c4                Star0 
         0x1a9e24826273 @   11 : 19 ff f9          Mov <context>, r1
 1571 S> 0x1a9e24826276 @   14 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1a9e2482627a @   18 : 1d                TestUndetectable 
         0x1a9e2482627b @   19 : 99 11             JumpIfFalse [17] (0x1a9e2482628c @ 36)
 1604 S> 0x1a9e2482627d @   21 : 21 01 02          LdaGlobal [1], [2]
         0x1a9e24826280 @   24 : c2                Star2 
         0x1a9e24826281 @   25 : 13 02             LdaConstant [2]
         0x1a9e24826283 @   27 : c1                Star3 
         0x1a9e24826284 @   28 : 0b f8             Ldar r2
 1610 E> 0x1a9e24826286 @   30 : 69 f8 f7 01 04    Construct r2, r3-r3, [4]
 1604 E> 0x1a9e2482628b @   35 : a7                Throw 
 1652 S> 0x1a9e2482628c @   36 : 15 ff 07 01       LdaImmutableContextSlot <context>, [7], [1]
 1669 E> 0x1a9e24826290 @   40 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1a9e24826292 @   42 : c1                Star3 
 1677 E> 0x1a9e24826293 @   43 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x1a9e24826297 @   47 : c1                Star3 
 1688 E> 0x1a9e24826298 @   48 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x1a9e2482629c @   52 : c0                Star4 
 1702 E> 0x1a9e2482629d @   53 : 2d 02 06 0a       GetNamedProperty <this>, [6], [10]
         0x1a9e248262a1 @   57 : bf                Star5 
 1712 E> 0x1a9e248262a2 @   58 : 2d 02 00 0c       GetNamedProperty <this>, [0], [12]
         0x1a9e248262a6 @   62 : be                Star6 
 1730 E> 0x1a9e248262a7 @   63 : 2d 02 07 0e       GetNamedProperty <this>, [7], [14]
         0x1a9e248262ab @   67 : bd                Star7 
         0x1a9e248262ac @   68 : 0b f7             Ldar r3
 1665 E> 0x1a9e248262ae @   70 : 69 f7 f6 04 10    Construct r3, r4-r7, [16]
 1663 E> 0x1a9e248262b3 @   75 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
         0x1a9e248262b7 @   79 : 0e                LdaUndefined 
         0x1a9e248262b8 @   80 : c1                Star3 
         0x1a9e248262b9 @   81 : 19 fa f8          Mov r0, r2
         0x1a9e248262bc @   84 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1740 S> 0x1a9e248262c0 @   88 : a9                Return 
         0x1a9e248262c1 @   89 : c2                Star2 
         0x1a9e248262c2 @   90 : 82 f8 09          CreateCatchContext r2, [9]
         0x1a9e248262c5 @   93 : c3                Star1 
         0x1a9e248262c6 @   94 : 10                LdaTheHole 
         0x1a9e248262c7 @   95 : a6                SetPendingMessage 
         0x1a9e248262c8 @   96 : 0b f9             Ldar r1
         0x1a9e248262ca @   98 : 1a f8             PushContext r2
         0x1a9e248262cc @  100 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e248262ce @  102 : c0                Star4 
         0x1a9e248262cf @  103 : 19 fa f7          Mov r0, r3
         0x1a9e248262d2 @  106 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x1a9e248262d6 @  110 : a9                Return 
Constant pool (size = 10)
0x1a9e248262d9: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 10
           0: 0x1a9e24826151 <String[11]: #_engineTeam>
           1: 0x2b17b9b04de1 <String[5]: #Error>
           2: 0x1a9e24826339 <String[19]: #No team registered!>
           3: 0x1a9e24825301 <String[7]: #world_1>
           4: 0x1a9e24826361 <String[5]: #World>
           5: 0x1c9ee958cbb9 <String[7]: #options>
           6: 0x1c9ee95a8a51 <String[3]: #rng>
           7: 0x1c9ee9589ea9 <String[3]: #map>
           8: 0x1a9e24826379 <String[5]: #world>
           9: 0x1a9e24826391 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  14,  89)  ->    89 (prediction=3, data=1)
Source Position Table (size = 37)
0x1a9e248263e9 <ByteArray[37]>
0x1a9e24826491 points to: [0x1a9e24826500]
=== [0x1a9e24826500] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x1a9e24826500 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @137 }
         0x1a9e24826504 @    4 : 19 fe f8          Mov <closure>, r2
         0x1a9e24826507 @    7 : 19 02 f7          Mov <this>, r3
 1763 E> 0x1a9e2482650a @   10 : 68 02 f8 02       InvokeIntrinsic [_AsyncFunctionEnter], r2-r3
         0x1a9e2482650e @   14 : c4                Star0 
         0x1a9e2482650f @   15 : 19 ff f8          Mov <context>, r2
 1841 S> 0x1a9e24826512 @   18 : 0b 03             Ldar a0
 1864 E> 0x1a9e24826514 @   20 : 32 02 01 00       SetNamedProperty <this>, [1], [0]
 1889 S> 0x1a9e24826518 @   24 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x1a9e2482651c @   28 : c1                Star3 
 1889 E> 0x1a9e2482651d @   29 : 5d f7 02 04       CallProperty0 r3, <this>, [4]
         0x1a9e24826521 @   33 : 97 4c             JumpIfToBooleanFalse [76] (0x1a9e2482656d @ 109)
 1942 S> 0x1a9e24826523 @   35 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x1a9e24826527 @   39 : c1                Star3 
 1942 E> 0x1a9e24826528 @   40 : 5d f7 02 08       CallProperty0 r3, <this>, [8]
         0x1a9e2482652c @   44 : c3                Star1 
 1972 S> 0x1a9e2482652d @   45 : 21 04 0a          LdaGlobal [4], [10]
         0x1a9e24826530 @   48 : c0                Star4 
 1980 E> 0x1a9e24826531 @   49 : 2d f6 05 0c       GetNamedProperty r4, [5], [12]
         0x1a9e24826535 @   53 : c1                Star3 
         0x1a9e24826536 @   54 : 13 06             LdaConstant [6]
         0x1a9e24826538 @   56 : bf                Star5 
         0x1a9e24826539 @   57 : 0c                LdaZero 
 2009 E> 0x1a9e2482653a @   58 : 2f f9 0f          GetKeyedProperty r1, [15]
         0x1a9e2482653d @   61 : be                Star6 
 2013 E> 0x1a9e2482653e @   62 : 2d f4 07 11       GetNamedProperty r6, [7], [17]
         0x1a9e24826542 @   66 : 77                ToString 
         0x1a9e24826543 @   67 : 39 f5 0e          Add r5, [14]
         0x1a9e24826546 @   70 : bf                Star5 
 1980 E> 0x1a9e24826547 @   71 : 5e f7 f6 f5 13    CallProperty1 r3, r4, r5, [19]
 2035 S> 0x1a9e2482654c @   76 : 7c 08 15 08       CreateObjectLiteral [8], [21], #8
         0x1a9e24826550 @   80 : c1                Star3 
 2077 E> 0x1a9e24826551 @   81 : 7c 09 16 29       CreateObjectLiteral [9], [22], #41
         0x1a9e24826555 @   85 : c0                Star4 
         0x1a9e24826556 @   86 : 0b f9             Ldar r1
 2079 E> 0x1a9e24826558 @   88 : 33 f6 0a 17       DefineNamedOwnProperty r4, [10], [23]
         0x1a9e2482655c @   92 : 0b f6             Ldar r4
         0x1a9e2482655e @   94 : 33 f7 0b 19       DefineNamedOwnProperty r3, [11], [25]
         0x1a9e24826562 @   98 : 0b f7             Ldar r3
         0x1a9e24826564 @  100 : c0                Star4 
         0x1a9e24826565 @  101 : 19 fa f7          Mov r0, r3
         0x1a9e24826568 @  104 : 68 04 f7 02       InvokeIntrinsic [_AsyncFunctionResolve], r3-r4
 2091 S> 0x1a9e2482656c @  108 : a9                Return 
 2115 S> 0x1a9e2482656d @  109 : 0c                LdaZero 
 2124 E> 0x1a9e2482656e @  110 : 6e 03 1b          TestGreaterThan a0, [27]
         0x1a9e24826571 @  113 : 99 2c             JumpIfFalse [44] (0x1a9e2482659d @ 157)
 2226 S> 0x1a9e24826573 @  115 : 2d 02 0c 1c       GetNamedProperty <this>, [12], [28]
         0x1a9e24826577 @  119 : c1                Star3 
 2226 E> 0x1a9e24826578 @  120 : 5d f7 02 1e       CallProperty0 r3, <this>, [30]
         0x1a9e2482657c @  124 : c0                Star4 
         0x1a9e2482657d @  125 : 19 fa f7          Mov r0, r3
         0x1a9e24826580 @  128 : 68 01 f7 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r3-r4
 2215 E> 0x1a9e24826584 @  132 : af fa fa 03 00    SuspendGenerator r0, r0-r2, [0]
         0x1a9e24826589 @  137 : b0 fa fa 03       ResumeGenerator r0, r0-r2
         0x1a9e2482658d @  141 : c1                Star3 
         0x1a9e2482658e @  142 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x1a9e24826592 @  146 : c0                Star4 
         0x1a9e24826593 @  147 : 0c                LdaZero 
         0x1a9e24826594 @  148 : 1c f6             TestReferenceEqual r4
         0x1a9e24826596 @  150 : 98 05             JumpIfTrue [5] (0x1a9e2482659b @ 155)
         0x1a9e24826598 @  152 : 0b f7             Ldar r3
         0x1a9e2482659a @  154 : a8                ReThrow 
         0x1a9e2482659b @  155 : 0b f7             Ldar r3
 2280 S> 0x1a9e2482659d @  157 : 2d 02 0d 20       GetNamedProperty <this>, [13], [32]
         0x1a9e248265a1 @  161 : c1                Star3 
 2280 E> 0x1a9e248265a2 @  162 : 5d f7 02 22       CallProperty0 r3, <this>, [34]
 2302 S> 0x1a9e248265a6 @  166 : 7c 0e 24 0c       CreateObjectLiteral [14], [36], #12
         0x1a9e248265aa @  170 : c1                Star3 
 2372 E> 0x1a9e248265ab @  171 : 2d 02 0f 25       GetNamedProperty <this>, [15], [37]
         0x1a9e248265af @  175 : c0                Star4 
 2372 E> 0x1a9e248265b0 @  176 : 5d f6 02 27       CallProperty0 r4, <this>, [39]
         0x1a9e248265b4 @  180 : 33 f7 10 29       DefineNamedOwnProperty r3, [16], [41]
 2421 E> 0x1a9e248265b8 @  184 : 21 11 2b          LdaGlobal [17], [43]
         0x1a9e248265bb @  187 : bf                Star5 
 2428 E> 0x1a9e248265bc @  188 : 2d f5 12 2d       GetNamedProperty r5, [18], [45]
         0x1a9e248265c0 @  192 : c0                Star4 
 2445 E> 0x1a9e248265c1 @  193 : 2d 02 13 2f       GetNamedProperty <this>, [19], [47]
         0x1a9e248265c5 @  197 : bd                Star7 
 2460 E> 0x1a9e248265c6 @  198 : 2d f3 14 31       GetNamedProperty r7, [20], [49]
         0x1a9e248265ca @  202 : be                Star6 
 2460 E> 0x1a9e248265cb @  203 : 5d f4 f3 33       CallProperty0 r6, r7, [51]
         0x1a9e248265cf @  207 : be                Star6 
 2428 E> 0x1a9e248265d0 @  208 : 5e f6 f5 f4 35    CallProperty1 r4, r5, r6, [53]
         0x1a9e248265d5 @  213 : 33 f7 15 37       DefineNamedOwnProperty r3, [21], [55]
         0x1a9e248265d9 @  217 : 0b f7             Ldar r3
         0x1a9e248265db @  219 : c0                Star4 
         0x1a9e248265dc @  220 : 19 fa f7          Mov r0, r3
         0x1a9e248265df @  223 : 68 04 f7 02       InvokeIntrinsic [_AsyncFunctionResolve], r3-r4
 2508 S> 0x1a9e248265e3 @  227 : a9                Return 
         0x1a9e248265e4 @  228 : c1                Star3 
         0x1a9e248265e5 @  229 : 82 f7 16          CreateCatchContext r3, [22]
         0x1a9e248265e8 @  232 : c2                Star2 
         0x1a9e248265e9 @  233 : 10                LdaTheHole 
         0x1a9e248265ea @  234 : a6                SetPendingMessage 
         0x1a9e248265eb @  235 : 0b f8             Ldar r2
         0x1a9e248265ed @  237 : 1a f7             PushContext r3
         0x1a9e248265ef @  239 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e248265f1 @  241 : bf                Star5 
         0x1a9e248265f2 @  242 : 19 fa f6          Mov r0, r4
         0x1a9e248265f5 @  245 : 68 03 f6 02       InvokeIntrinsic [_AsyncFunctionReject], r4-r5
         0x1a9e248265f9 @  249 : a9                Return 
Constant pool (size = 23)
0x1a9e24826601: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 23
           0: 137
           1: 0x1a9e24825ac1 <String[17]: #currentTickNumber>
           2: 0x1a9e248257c9 <String[14]: #isGameComplete>
           3: 0x1a9e248257e9 <String[14]: #getGameResults>
           4: 0x2b17b9b04a09 <String[7]: #console>
           5: 0x1c9ee958ac99 <String[3]: #log>
           6: 0x1a9e248266e1 <String[15]: #Your score is: >
           7: 0x1a9e24826701 <String[5]: #score>
           8: 0x1a9e24826719 <ObjectBoilerplateDescription[5]>
           9: 0x1a9e24826791 <ObjectBoilerplateDescription[3]>
          10: 0x1a9e248267b9 <String[7]: #results>
          11: 0x1a9e24826771 <String[11]: #gameResults>
          12: 0x1a9e24825779 <String[27]: #fetchAndApplyPlayerCommands>
          13: 0x1a9e24825809 <String[10]: #updateGame>
          14: 0x1a9e248267d1 <ObjectBoilerplateDescription[9]>
          15: 0x1a9e24825891 <String[18]: #serializeForViewer>
          16: 0x1a9e24826829 <String[9]: #gameState>
          17: 0x2b17b9b05ab9 <String[6]: #Object>
          18: 0x1c9ee959a849 <String[11]: #fromEntries>
          19: 0x1a9e24825aa1 <String[14]: #lastTickErrors>
          20: 0x1c9ee958eb79 <String[7]: #entries>
          21: 0x1a9e24826849 <String[13]: #errorsPerTeam>
          22: 0x1a9e248268d1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 228)  ->   228 (prediction=3, data=2)
Source Position Table (size = 79)
0x1a9e24826929 <ByteArray[79]>
Object boilerplate at 0x1a9e24826719: 
0x1a9e24826719: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b17b9b02059 <Map>
 - length: 5
           0: 8
           1: 0x1a9e24826751 <String[12]: #gameComplete>
           2: 0x2b17b9b01729 <true>
           3: 0x1a9e24826771 <String[11]: #gameResults>
           4: 0x2b17b9b01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x1a9e24826791: 
0x1a9e24826791: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b17b9b02059 <Map>
 - length: 3
           0: 8
           1: 0x1a9e248267b9 <String[7]: #results>
           2: 0x2b17b9b01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x1a9e248267d1: 
0x1a9e248267d1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b17b9b02059 <Map>
 - length: 9
           0: 8
           1: 0x1a9e24826751 <String[12]: #gameComplete>
           2: 0x2b17b9b01789 <false>
           3: 0x1a9e24826829 <String[9]: #gameState>
           4: 0x2b17b9b01501 <Odd Oddball: uninitialized>
           5: 0x1a9e24826849 <String[13]: #errorsPerTeam>
           6: 0x2b17b9b01501 <Odd Oddball: uninitialized>
           7: 0x1a9e24826869 <String[8]: #commands>
           8: 0x1a9e24826881 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2b17b9b01329 <FixedArray[0]>>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1a9e24826a11 points to: [0x1a9e24826a80]
=== [0x1a9e24826a80] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x1a9e24826a80 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @57 }
 2552 E> 0x1a9e24826a84 @    4 : 83 01 01          CreateFunctionContext [1], [1]
         0x1a9e24826a87 @    7 : 1a f8             PushContext r2
         0x1a9e24826a89 @    9 : 0b 02             Ldar <this>
         0x1a9e24826a8b @   11 : 25 02             StaCurrentContextSlot [2]
         0x1a9e24826a8d @   13 : 19 fe f7          Mov <closure>, r3
         0x1a9e24826a90 @   16 : 19 02 f6          Mov <this>, r4
         0x1a9e24826a93 @   19 : 68 02 f7 02       InvokeIntrinsic [_AsyncFunctionEnter], r3-r4
         0x1a9e24826a97 @   23 : c4                Star0 
         0x1a9e24826a98 @   24 : 19 ff f7          Mov <context>, r3
 2593 S> 0x1a9e24826a9b @   27 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826a9d @   29 : bf                Star5 
 2604 E> 0x1a9e24826a9e @   30 : 2d f5 02 00       GetNamedProperty r5, [2], [0]
         0x1a9e24826aa2 @   34 : bf                Star5 
 2611 E> 0x1a9e24826aa3 @   35 : 2d f5 03 02       GetNamedProperty r5, [3], [2]
         0x1a9e24826aa7 @   39 : c0                Star4 
 2611 E> 0x1a9e24826aa8 @   40 : 5d f6 f5 04       CallProperty0 r4, r5, [4]
         0x1a9e24826aac @   44 : bf                Star5 
         0x1a9e24826aad @   45 : 19 fa f6          Mov r0, r4
         0x1a9e24826ab0 @   48 : 68 01 f6 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r4-r5
 2593 E> 0x1a9e24826ab4 @   52 : af fa fa 04 00    SuspendGenerator r0, r0-r3, [0]
         0x1a9e24826ab9 @   57 : b0 fa fa 04       ResumeGenerator r0, r0-r3
         0x1a9e24826abd @   61 : c0                Star4 
         0x1a9e24826abe @   62 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x1a9e24826ac2 @   66 : bf                Star5 
         0x1a9e24826ac3 @   67 : 0c                LdaZero 
         0x1a9e24826ac4 @   68 : 1c f5             TestReferenceEqual r5
         0x1a9e24826ac6 @   70 : 98 05             JumpIfTrue [5] (0x1a9e24826acb @ 75)
         0x1a9e24826ac8 @   72 : 0b f6             Ldar r4
         0x1a9e24826aca @   74 : a8                ReThrow 
         0x1a9e24826acb @   75 : 19 f6 f9          Mov r4, r1
 2643 S> 0x1a9e24826ace @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826ad0 @   80 : c0                Star4 
 2669 E> 0x1a9e24826ad1 @   81 : 21 04 06          LdaGlobal [4], [6]
         0x1a9e24826ad4 @   84 : bf                Star5 
 2665 E> 0x1a9e24826ad5 @   85 : 69 f5 fa 00 08    Construct r5, r0-r0, [8]
 2663 E> 0x1a9e24826ada @   90 : 32 f6 05 0a       SetNamedProperty r4, [5], [10]
 2704 S> 0x1a9e24826ade @   94 : 2d f9 06 0c       GetNamedProperty r1, [6], [12]
         0x1a9e24826ae2 @   98 : c0                Star4 
         0x1a9e24826ae3 @   99 : 80 07 00 02       CreateClosure [7], [0], #2
         0x1a9e24826ae7 @  103 : be                Star6 
 2704 E> 0x1a9e24826ae8 @  104 : 5e f6 f9 f4 0e    CallProperty1 r4, r1, r6, [14]
         0x1a9e24826aed @  109 : 0e                LdaUndefined 
         0x1a9e24826aee @  110 : bf                Star5 
         0x1a9e24826aef @  111 : 19 fa f6          Mov r0, r4
         0x1a9e24826af2 @  114 : 68 04 f6 02       InvokeIntrinsic [_AsyncFunctionResolve], r4-r5
 3664 S> 0x1a9e24826af6 @  118 : a9                Return 
         0x1a9e24826af7 @  119 : c0                Star4 
         0x1a9e24826af8 @  120 : 82 f6 08          CreateCatchContext r4, [8]
         0x1a9e24826afb @  123 : c1                Star3 
         0x1a9e24826afc @  124 : 10                LdaTheHole 
         0x1a9e24826afd @  125 : a6                SetPendingMessage 
         0x1a9e24826afe @  126 : 0b f7             Ldar r3
         0x1a9e24826b00 @  128 : 1a f6             PushContext r4
         0x1a9e24826b02 @  130 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826b04 @  132 : be                Star6 
         0x1a9e24826b05 @  133 : 19 fa f5          Mov r0, r5
         0x1a9e24826b08 @  136 : 68 03 f5 02       InvokeIntrinsic [_AsyncFunctionReject], r5-r6
         0x1a9e24826b0c @  140 : a9                Return 
Constant pool (size = 9)
0x1a9e24826b11: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 9
           0: 57
           1: 0x1a9e24826b69 <ScopeInfo FUNCTION_SCOPE>
           2: 0x1a9e24825ae9 <String[6]: #engine>
           3: 0x1a9e24826bc9 <String[20]: #getCommandsFromTeams>
           4: 0x2b17b9b05691 <String[3]: #Map>
           5: 0x1a9e24825aa1 <String[14]: #lastTickErrors>
           6: 0x1c9ee958a021 <String[7]: #forEach>
           7: 0x1a9e24826c09 <SharedFunctionInfo>
           8: 0x1a9e248270c1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  27, 119)  ->   119 (prediction=3, data=3)
Source Position Table (size = 33)
0x1a9e24827119 <ByteArray[33]>
0x1a9e24826c09 points to: [0x1a9e24826c78]
=== [0x1a9e24826c78] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2828 S> 0x1a9e24826c78 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1a9e24826c7c @    4 : c4                Star0 
 2936 S> 0x1a9e24826c7d @    5 : 97 f0             JumpIfToBooleanFalse [240] (0x1a9e24826d6d @ 245)
         0x1a9e24826c7f @    7 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826c81 @    9 : c3                Star1 
 2956 E> 0x1a9e24826c82 @   10 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1a9e24826c86 @   14 : 97 e7             JumpIfToBooleanFalse [231] (0x1a9e24826d6d @ 245)
         0x1a9e24826c88 @   16 : 19 ff f9          Mov <context>, r1
 3025 S> 0x1a9e24826c8b @   19 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x1a9e24826c8f @   23 : 1d                TestUndetectable 
         0x1a9e24826c90 @   24 : 99 0e             JumpIfFalse [14] (0x1a9e24826c9e @ 38)
 3068 S> 0x1a9e24826c92 @   26 : 21 03 06          LdaGlobal [3], [6]
         0x1a9e24826c95 @   29 : c2                Star2 
         0x1a9e24826c96 @   30 : 13 04             LdaConstant [4]
         0x1a9e24826c98 @   32 : c1                Star3 
 3074 E> 0x1a9e24826c99 @   33 : 62 f8 f7 08       CallUndefinedReceiver1 r2, r3, [8]
 3068 E> 0x1a9e24826c9d @   37 : a7                Throw 
 3162 S> 0x1a9e24826c9e @   38 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826ca0 @   40 : c1                Star3 
 3167 E> 0x1a9e24826ca1 @   41 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x1a9e24826ca5 @   45 : c2                Star2 
         0x1a9e24826ca6 @   46 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826ca8 @   48 : c0                Star4 
 3185 E> 0x1a9e24826ca9 @   49 : 2d f6 01 0c       GetNamedProperty r4, [1], [12]
         0x1a9e24826cad @   53 : c0                Star4 
 3167 E> 0x1a9e24826cae @   54 : 5f f8 f7 f6 fa 0e CallProperty2 r2, r3, r4, r0, [14]
         0x1a9e24826cb4 @   60 : 8a b9             Jump [185] (0x1a9e24826d6d @ 245)
         0x1a9e24826cb6 @   62 : c2                Star2 
         0x1a9e24826cb7 @   63 : 82 f8 06          CreateCatchContext r2, [6]
         0x1a9e24826cba @   66 : c3                Star1 
         0x1a9e24826cbb @   67 : 10                LdaTheHole 
         0x1a9e24826cbc @   68 : a6                SetPendingMessage 
         0x1a9e24826cbd @   69 : 0b f9             Ldar r1
         0x1a9e24826cbf @   71 : 1a f8             PushContext r2
 3278 S> 0x1a9e24826cc1 @   73 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x1a9e24826cc5 @   77 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1a9e24826cc7 @   79 : c0                Star4 
 3287 E> 0x1a9e24826cc8 @   80 : 2d f6 08 10       GetNamedProperty r4, [8], [16]
         0x1a9e24826ccc @   84 : c0                Star4 
 3294 E> 0x1a9e24826ccd @   85 : 2d f6 09 12       GetNamedProperty r4, [9], [18]
         0x1a9e24826cd1 @   89 : c1                Star3 
         0x1a9e24826cd2 @   90 : 13 0a             LdaConstant [10]
         0x1a9e24826cd4 @   92 : bf                Star5 
         0x1a9e24826cd5 @   93 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x1a9e24826cd9 @   97 : be                Star6 
 3314 E> 0x1a9e24826cda @   98 : 2d f4 01 15       GetNamedProperty r6, [1], [21]
         0x1a9e24826cde @  102 : be                Star6 
 3326 E> 0x1a9e24826cdf @  103 : 2d f4 0b 17       GetNamedProperty r6, [11], [23]
         0x1a9e24826ce3 @  107 : 77                ToString 
         0x1a9e24826ce4 @  108 : 39 f5 14          Add r5, [20]
         0x1a9e24826ce7 @  111 : bf                Star5 
         0x1a9e24826ce8 @  112 : 13 0c             LdaConstant [12]
         0x1a9e24826cea @  114 : 39 f5 14          Add r5, [20]
         0x1a9e24826ced @  117 : bf                Star5 
 3360 E> 0x1a9e24826cee @  118 : 21 0d 19          LdaGlobal [13], [25]
         0x1a9e24826cf1 @  121 : bd                Star7 
 3365 E> 0x1a9e24826cf2 @  122 : 2d f3 0e 1b       GetNamedProperty r7, [14], [27]
         0x1a9e24826cf6 @  126 : be                Star6 
 3365 E> 0x1a9e24826cf7 @  127 : 5e f4 f3 fa 1d    CallProperty1 r6, r7, r0, [29]
         0x1a9e24826cfc @  132 : 77                ToString 
         0x1a9e24826cfd @  133 : 39 f5 14          Add r5, [20]
         0x1a9e24826d00 @  136 : bf                Star5 
         0x1a9e24826d01 @  137 : 13 0f             LdaConstant [15]
         0x1a9e24826d03 @  139 : 39 f5 14          Add r5, [20]
         0x1a9e24826d06 @  142 : bf                Star5 
         0x1a9e24826d07 @  143 : 17 02             LdaImmutableCurrentContextSlot [2]
 3390 E> 0x1a9e24826d09 @  145 : 77                ToString 
         0x1a9e24826d0a @  146 : 39 f5 14          Add r5, [20]
         0x1a9e24826d0d @  149 : bf                Star5 
 3294 E> 0x1a9e24826d0e @  150 : 5e f7 f6 f5 1f    CallProperty1 r3, r4, r5, [31]
 3420 S> 0x1a9e24826d13 @  155 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826d15 @  157 : c1                Star3 
 3441 E> 0x1a9e24826d16 @  158 : 21 03 06          LdaGlobal [3], [6]
 3430 E> 0x1a9e24826d19 @  161 : 71 f7 21          TestInstanceOf r3, [33]
         0x1a9e24826d1c @  164 : 99 4f             JumpIfFalse [79] (0x1a9e24826d6b @ 243)
 3474 S> 0x1a9e24826d1e @  166 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x1a9e24826d22 @  170 : c0                Star4 
 3479 E> 0x1a9e24826d23 @  171 : 2d f6 01 22       GetNamedProperty r4, [1], [34]
         0x1a9e24826d27 @  175 : c0                Star4 
 3491 E> 0x1a9e24826d28 @  176 : 2d f6 10 24       GetNamedProperty r4, [16], [36]
         0x1a9e24826d2c @  180 : c1                Star3 
         0x1a9e24826d2d @  181 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826d2f @  183 : bf                Star5 
 3491 E> 0x1a9e24826d30 @  184 : 5e f7 f6 f5 26    CallProperty1 r3, r4, r5, [38]
 3535 S> 0x1a9e24826d35 @  189 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x1a9e24826d39 @  193 : bf                Star5 
 3540 E> 0x1a9e24826d3a @  194 : 2d f5 11 28       GetNamedProperty r5, [17], [40]
         0x1a9e24826d3e @  198 : bf                Star5 
 3555 E> 0x1a9e24826d3f @  199 : 2d f5 12 2a       GetNamedProperty r5, [18], [42]
         0x1a9e24826d43 @  203 : c0                Star4 
         0x1a9e24826d44 @  204 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x1a9e24826d48 @  208 : be                Star6 
 3564 E> 0x1a9e24826d49 @  209 : 2d f4 01 2c       GetNamedProperty r6, [1], [44]
         0x1a9e24826d4d @  213 : be                Star6 
 3576 E> 0x1a9e24826d4e @  214 : 2d f4 0b 2e       GetNamedProperty r6, [11], [46]
         0x1a9e24826d52 @  218 : be                Star6 
 3555 E> 0x1a9e24826d53 @  219 : 5e f6 f5 f4 30    CallProperty1 r4, r5, r6, [48]
         0x1a9e24826d58 @  224 : c0                Star4 
         0x1a9e24826d59 @  225 : 9e 11             JumpIfUndefinedOrNull [17] (0x1a9e24826d6a @ 242)
 3579 E> 0x1a9e24826d5b @  227 : 2d f6 13 32       GetNamedProperty r4, [19], [50]
         0x1a9e24826d5f @  231 : c1                Star3 
         0x1a9e24826d60 @  232 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e24826d62 @  234 : bf                Star5 
 3581 E> 0x1a9e24826d63 @  235 : 5e f7 f6 f5 34    CallProperty1 r3, r4, r5, [52]
         0x1a9e24826d68 @  240 : 8a 03             Jump [3] (0x1a9e24826d6b @ 243)
         0x1a9e24826d6a @  242 : 0e                LdaUndefined 
         0x1a9e24826d6b @  243 : 1b f8             PopContext r2
         0x1a9e24826d6d @  245 : 0e                LdaUndefined 
 3656 S> 0x1a9e24826d6e @  246 : a9                Return 
Constant pool (size = 20)
0x1a9e24826d71: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 20
           0: 0x1a9e24826e21 <String[7]: #command>
           1: 0x1a9e24826151 <String[11]: #_engineTeam>
           2: 0x1a9e24826e39 <String[7]: #actions>
           3: 0x2b17b9b04de1 <String[5]: #Error>
           4: 0x1a9e24826e51 <String[35]: #Command invalid: 'actions' missing.>
           5: 0x1a9e248257a9 <String[12]: #applyActions>
           6: 0x1a9e24826e89 <ScopeInfo CATCH_SCOPE>
           7: 0x1a9e24825281 <String[8]: #engine_1>
           8: 0x1c9ee9586461 <String[6]: #logger>
           9: 0x1c9ee9586309 <String[5]: #error>
          10: 0x1a9e24826ed9 <String[6]: #Team '>
          11: 0x2b17b9b052d9 <String[2]: #id>
          12: 0x1a9e24826ef1 <String[29]: #': Error processing command '>
          13: 0x1c9ee959c529 <String[4]: #JSON>
          14: 0x1c9ee958ee51 <String[9]: #stringify>
          15: 0x1a9e24826f59 <String[4]: #' : >
          16: 0x1a9e24826f71 <String[11]: #reportError>
          17: 0x1a9e24825aa1 <String[14]: #lastTickErrors>
          18: 0x2b17b9b050e9 <String[3]: #get>
          19: 0x1c9ee9589551 <String[4]: #push>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  19,  60)  ->    62 (prediction=1, data=1)
Source Position Table (size = 89)
0x1a9e24826fc9 <ByteArray[89]>
0x1a9e24827171 points to: [0x1a9e248271e0]
=== [0x1a9e248271e0] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3682 E> 0x1a9e248271e0 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x1a9e248271e3 @    3 : 1a fa             PushContext r0
         0x1a9e248271e5 @    5 : 0b 02             Ldar <this>
         0x1a9e248271e7 @    7 : 25 02             StaCurrentContextSlot [2]
         0x1a9e248271e9 @    9 : 0b 03             Ldar a0
         0x1a9e248271eb @   11 : 25 03             StaCurrentContextSlot [3]
 3722 S> 0x1a9e248271ed @   13 : 2d 04 01 00       GetNamedProperty a1, [1], [0]
         0x1a9e248271f1 @   17 : c2                Star2 
 3730 E> 0x1a9e248271f2 @   18 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x1a9e248271f6 @   22 : c3                Star1 
         0x1a9e248271f7 @   23 : 80 03 00 02       CreateClosure [3], [0], #2
         0x1a9e248271fb @   27 : c1                Star3 
 3730 E> 0x1a9e248271fc @   28 : 5e f9 f8 f7 04    CallProperty1 r1, r2, r3, [4]
         0x1a9e24827201 @   33 : 0e                LdaUndefined 
 4319 S> 0x1a9e24827202 @   34 : a9                Return 
Constant pool (size = 4)
0x1a9e24827209: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 4
           0: 0x1a9e24827239 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1a9e24826e39 <String[7]: #actions>
           2: 0x1c9ee958a021 <String[7]: #forEach>
           3: 0x1a9e248272c9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 15)
0x1a9e248276a1 <ByteArray[15]>
0x1a9e248272c9 points to: [0x1a9e24827338]
=== [0x1a9e24827338] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x1a9e24827338 @    0 : 19 ff f9          Mov <context>, r1
 3809 S> 0x1a9e2482733b @    3 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
         0x1a9e2482733f @    7 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1a9e24827341 @    9 : c1                Star3 
 3822 E> 0x1a9e24827342 @   10 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x1a9e24827346 @   14 : c2                Star2 
 3836 E> 0x1a9e24827347 @   15 : 62 f8 03 02       CallUndefinedReceiver1 r2, a0, [2]
         0x1a9e2482734b @   19 : c4                Star0 
 3870 S> 0x1a9e2482734c @   20 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e2482734e @   22 : c1                Star3 
 3875 E> 0x1a9e2482734f @   23 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x1a9e24827353 @   27 : c1                Star3 
         0x1a9e24827354 @   28 : 9e 17             JumpIfUndefinedOrNull [23] (0x1a9e2482736b @ 51)
 3880 E> 0x1a9e24827356 @   30 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x1a9e2482735a @   34 : c2                Star2 
         0x1a9e2482735b @   35 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1a9e2482735d @   37 : c0                Star4 
 3905 E> 0x1a9e2482735e @   38 : 2d f6 04 08       GetNamedProperty r4, [4], [8]
         0x1a9e24827362 @   42 : c0                Star4 
 3882 E> 0x1a9e24827363 @   43 : 5f f8 f7 f6 fa 0a CallProperty2 r2, r3, r4, r0, [10]
         0x1a9e24827369 @   49 : 8a 03             Jump [3] (0x1a9e2482736c @ 52)
         0x1a9e2482736b @   51 : 0e                LdaUndefined 
         0x1a9e2482736c @   52 : 8a a6             Jump [166] (0x1a9e24827412 @ 218)
         0x1a9e2482736e @   54 : c2                Star2 
         0x1a9e2482736f @   55 : 82 f8 05          CreateCatchContext r2, [5]
         0x1a9e24827372 @   58 : c3                Star1 
         0x1a9e24827373 @   59 : 10                LdaTheHole 
         0x1a9e24827374 @   60 : a6                SetPendingMessage 
         0x1a9e24827375 @   61 : 0b f9             Ldar r1
         0x1a9e24827377 @   63 : 1a f8             PushContext r2
 3976 S> 0x1a9e24827379 @   65 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x1a9e2482737d @   69 : aa 06             ThrowReferenceErrorIfHole [6]
         0x1a9e2482737f @   71 : c0                Star4 
 3985 E> 0x1a9e24827380 @   72 : 2d f6 07 0c       GetNamedProperty r4, [7], [12]
         0x1a9e24827384 @   76 : c0                Star4 
 3992 E> 0x1a9e24827385 @   77 : 2d f6 08 0e       GetNamedProperty r4, [8], [14]
         0x1a9e24827389 @   81 : c1                Star3 
         0x1a9e2482738a @   82 : 13 09             LdaConstant [9]
         0x1a9e2482738c @   84 : bf                Star5 
 4024 E> 0x1a9e2482738d @   85 : 21 0a 11          LdaGlobal [10], [17]
         0x1a9e24827390 @   88 : bd                Star7 
 4029 E> 0x1a9e24827391 @   89 : 2d f3 0b 13       GetNamedProperty r7, [11], [19]
         0x1a9e24827395 @   93 : be                Star6 
 4029 E> 0x1a9e24827396 @   94 : 5e f4 f3 03 15    CallProperty1 r6, r7, a0, [21]
         0x1a9e2482739b @   99 : 77                ToString 
         0x1a9e2482739c @  100 : 39 f5 10          Add r5, [16]
         0x1a9e2482739f @  103 : bf                Star5 
         0x1a9e248273a0 @  104 : 13 0c             LdaConstant [12]
         0x1a9e248273a2 @  106 : 39 f5 10          Add r5, [16]
         0x1a9e248273a5 @  109 : bf                Star5 
 3992 E> 0x1a9e248273a6 @  110 : 5e f7 f6 f5 17    CallProperty1 r3, r4, r5, [23]
 4076 S> 0x1a9e248273ab @  115 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e248273ad @  117 : c1                Star3 
 4097 E> 0x1a9e248273ae @  118 : 21 0d 19          LdaGlobal [13], [25]
 4086 E> 0x1a9e248273b1 @  121 : 71 f7 1b          TestInstanceOf r3, [27]
         0x1a9e248273b4 @  124 : 99 5c             JumpIfFalse [92] (0x1a9e24827410 @ 216)
 4126 S> 0x1a9e248273b6 @  126 : 15 f8 03 00       LdaImmutableContextSlot r2, [3], [0]
         0x1a9e248273ba @  130 : c0                Star4 
 4137 E> 0x1a9e248273bb @  131 : 2d f6 0e 1c       GetNamedProperty r4, [14], [28]
         0x1a9e248273bf @  135 : c1                Star3 
         0x1a9e248273c0 @  136 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e248273c2 @  138 : bf                Star5 
 4137 E> 0x1a9e248273c3 @  139 : 5e f7 f6 f5 1e    CallProperty1 r3, r4, r5, [30]
 4177 S> 0x1a9e248273c8 @  144 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x1a9e248273cc @  148 : bf                Star5 
 4182 E> 0x1a9e248273cd @  149 : 2d f5 0f 20       GetNamedProperty r5, [15], [32]
         0x1a9e248273d1 @  153 : bf                Star5 
 4197 E> 0x1a9e248273d2 @  154 : 2d f5 10 22       GetNamedProperty r5, [16], [34]
         0x1a9e248273d6 @  158 : c0                Star4 
         0x1a9e248273d7 @  159 : 15 f8 03 00       LdaImmutableContextSlot r2, [3], [0]
         0x1a9e248273db @  163 : be                Star6 
 4212 E> 0x1a9e248273dc @  164 : 2d f4 04 08       GetNamedProperty r6, [4], [8]
         0x1a9e248273e0 @  168 : be                Star6 
 4197 E> 0x1a9e248273e1 @  169 : 5e f6 f5 f4 24    CallProperty1 r4, r5, r6, [36]
         0x1a9e248273e6 @  174 : c0                Star4 
         0x1a9e248273e7 @  175 : 9e 28             JumpIfUndefinedOrNull [40] (0x1a9e2482740f @ 215)
 4215 E> 0x1a9e248273e9 @  177 : 2d f6 11 26       GetNamedProperty r4, [17], [38]
         0x1a9e248273ed @  181 : c1                Star3 
         0x1a9e248273ee @  182 : 15 ff 04 03       LdaImmutableContextSlot <context>, [4], [3]
 4226 E> 0x1a9e248273f2 @  186 : aa 12             ThrowReferenceErrorIfHole [18]
         0x1a9e248273f4 @  188 : bf                Star5 
 4234 E> 0x1a9e248273f5 @  189 : 2d f5 13 28       GetNamedProperty r5, [19], [40]
         0x1a9e248273f9 @  193 : bf                Star5 
         0x1a9e248273fa @  194 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1a9e248273fc @  196 : bd                Star7 
         0x1a9e248273fd @  197 : 0b f5             Ldar r5
         0x1a9e248273ff @  199 : 19 03 f4          Mov a0, r6
 4222 E> 0x1a9e24827402 @  202 : 69 f5 f4 02 2a    Construct r5, r6-r7, [42]
         0x1a9e24827407 @  207 : bf                Star5 
 4217 E> 0x1a9e24827408 @  208 : 5e f7 f6 f5 2c    CallProperty1 r3, r4, r5, [44]
         0x1a9e2482740d @  213 : 8a 03             Jump [3] (0x1a9e24827410 @ 216)
         0x1a9e2482740f @  215 : 0e                LdaUndefined 
         0x1a9e24827410 @  216 : 1b f8             PopContext r2
         0x1a9e24827412 @  218 : 0e                LdaUndefined 
 4311 S> 0x1a9e24827413 @  219 : a9                Return 
Constant pool (size = 20)
0x1a9e24827419: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 20
           0: 0x1a9e24825299 <String[8]: #action_1>
           1: 0x1a9e248274c9 <String[13]: #ActionFactory>
           2: 0x1a9e24826379 <String[5]: #world>
           3: 0x1a9e248274e9 <String[11]: #applyAction>
           4: 0x2b17b9b052d9 <String[2]: #id>
           5: 0x1a9e24827509 <ScopeInfo CATCH_SCOPE>
           6: 0x1a9e24825281 <String[8]: #engine_1>
           7: 0x1c9ee9586461 <String[6]: #logger>
           8: 0x1c9ee9586309 <String[5]: #error>
           9: 0x1a9e24827541 <String[23]: #Error applying action '>
          10: 0x1c9ee959c529 <String[4]: #JSON>
          11: 0x1c9ee958ee51 <String[9]: #stringify>
          12: 0x1c9ee95b4c49 <String[1]: #'>
          13: 0x2b17b9b04de1 <String[5]: #Error>
          14: 0x1a9e24826f71 <String[11]: #reportError>
          15: 0x1a9e24825aa1 <String[14]: #lastTickErrors>
          16: 0x2b17b9b050e9 <String[3]: #get>
          17: 0x1c9ee9589551 <String[4]: #push>
          18: 0x1a9e248252b1 <String[7]: #error_1>
          19: 0x1a9e24827581 <String[11]: #ActionError>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (   3,  52)  ->    54 (prediction=1, data=1)
Source Position Table (size = 76)
0x1a9e248275c1 <ByteArray[76]>
0x1a9e248276d9 points to: [0x1a9e24827748]
=== [0x1a9e24827748] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 4339 E> 0x1a9e24827748 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x1a9e2482774b @    3 : 1a f9             PushContext r1
         0x1a9e2482774d @    5 : 10                LdaTheHole 
         0x1a9e2482774e @    6 : 25 02             StaCurrentContextSlot [2]
         0x1a9e24827750 @    8 : 10                LdaTheHole 
         0x1a9e24827751 @    9 : 25 03             StaCurrentContextSlot [3]
 4361 S> 0x1a9e24827753 @   11 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x1a9e24827757 @   15 : 1d                TestUndetectable 
         0x1a9e24827758 @   16 : 99 04             JumpIfFalse [4] (0x1a9e2482775c @ 20)
 4388 S> 0x1a9e2482775a @   18 : 12                LdaFalse 
 4401 S> 0x1a9e2482775b @   19 : a9                Return 
 4456 S> 0x1a9e2482775c @   20 : 2d 02 01 02       GetNamedProperty <this>, [1], [2]
         0x1a9e24827760 @   24 : c1                Star3 
 4462 E> 0x1a9e24827761 @   25 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x1a9e24827765 @   29 : c2                Star2 
 4462 E> 0x1a9e24827766 @   30 : 5d f8 f7 06       CallProperty0 r2, r3, [6]
         0x1a9e2482776a @   34 : c2                Star2 
 4421 S> 0x1a9e2482776b @   35 : 2d f8 03 08       GetNamedProperty r2, [3], [8]
         0x1a9e2482776f @   39 : 25 02             StaCurrentContextSlot [2]
 4436 S> 0x1a9e24827771 @   41 : 2d f8 04 0a       GetNamedProperty r2, [4], [10]
         0x1a9e24827775 @   45 : 25 03             StaCurrentContextSlot [3]
 4517 S> 0x1a9e24827777 @   47 : 2d 02 01 0c       GetNamedProperty <this>, [1], [12]
         0x1a9e2482777b @   51 : c0                Star4 
 4523 E> 0x1a9e2482777c @   52 : 2d f6 05 0e       GetNamedProperty r4, [5], [14]
         0x1a9e24827780 @   56 : c1                Star3 
 4523 E> 0x1a9e24827781 @   57 : 5d f7 f6 10       CallProperty0 r3, r4, [16]
         0x1a9e24827785 @   61 : c1                Star3 
 4543 E> 0x1a9e24827786 @   62 : 2d f7 06 12       GetNamedProperty r3, [6], [18]
         0x1a9e2482778a @   66 : c2                Star2 
         0x1a9e2482778b @   67 : 80 07 00 02       CreateClosure [7], [0], #2
         0x1a9e2482778f @   71 : c0                Star4 
 4544 E> 0x1a9e24827790 @   72 : 5e f8 f7 f6 14    CallProperty1 r2, r3, r4, [20]
         0x1a9e24827795 @   77 : c4                Star0 
 4796 S> 0x1a9e24827796 @   78 : 96 13             JumpIfToBooleanTrue [19] (0x1a9e248277a9 @ 97)
 4821 E> 0x1a9e24827798 @   80 : 2d 02 08 16       GetNamedProperty <this>, [8], [22]
         0x1a9e2482779c @   84 : c2                Star2 
 4846 E> 0x1a9e2482779d @   85 : 2d 02 09 18       GetNamedProperty <this>, [9], [24]
         0x1a9e248277a1 @   89 : c1                Star3 
 4854 E> 0x1a9e248277a2 @   90 : 2d f7 0a 1a       GetNamedProperty r3, [10], [26]
 4839 E> 0x1a9e248277a6 @   94 : 6e f8 1c          TestGreaterThan r2, [28]
 4865 S> 0x1a9e248277a9 @   97 : a9                Return 
Constant pool (size = 11)
0x1a9e248277b1: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 11
           0: 0x1a9e24827819 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1a9e24826379 <String[5]: #world>
           2: 0x1a9e248278c9 <String[20]: #getCharacterPosition>
           3: 0x1c9ee9598ac9 <String[1]: #x>
           4: 0x1c9ee9598ae1 <String[1]: #y>
           5: 0x1a9e24827921 <String[18]: #getThreatPositions>
           6: 0x1c9ee9589f49 <String[4]: #some>
           7: 0x1a9e24827961 <SharedFunctionInfo>
           8: 0x1a9e24825ac1 <String[17]: #currentTickNumber>
           9: 0x1c9ee958cbb9 <String[7]: #options>
          10: 0x1a9e24827b29 <String[10]: #TICK_COUNT>
Handler Table (size = 0)
Source Position Table (size = 48)
0x1a9e24827b49 <ByteArray[48]>
0x1a9e24827961 points to: [0x1a9e248279d0]
=== [0x1a9e248279d0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 4602 S> 0x1a9e248279d0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1a9e248279d4 @    4 : c4                Star0 
         0x1a9e248279d5 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4608 E> 0x1a9e248279d7 @    7 : aa 01             ThrowReferenceErrorIfHole [1]
 4604 E> 0x1a9e248279d9 @    9 : 6c fa 02          TestEqualStrict r0, [2]
         0x1a9e248279dc @   12 : 99 23             JumpIfFalse [35] (0x1a9e248279ff @ 47)
 4637 E> 0x1a9e248279de @   14 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
         0x1a9e248279e2 @   18 : c4                Star0 
         0x1a9e248279e3 @   19 : 17 03             LdaImmutableCurrentContextSlot [3]
 4643 E> 0x1a9e248279e5 @   21 : aa 03             ThrowReferenceErrorIfHole [3]
 4639 E> 0x1a9e248279e7 @   23 : 6c fa 05          TestEqualStrict r0, [5]
         0x1a9e248279ea @   26 : 99 15             JumpIfFalse [21] (0x1a9e248279ff @ 47)
 4673 S> 0x1a9e248279ec @   28 : 21 04 06          LdaGlobal [4], [6]
         0x1a9e248279ef @   31 : c3                Star1 
 4681 E> 0x1a9e248279f0 @   32 : 2d f9 05 08       GetNamedProperty r1, [5], [8]
         0x1a9e248279f4 @   36 : c4                Star0 
         0x1a9e248279f5 @   37 : 13 06             LdaConstant [6]
         0x1a9e248279f7 @   39 : c2                Star2 
 4681 E> 0x1a9e248279f8 @   40 : 5e fa f9 f8 0a    CallProperty1 r0, r1, r2, [10]
 4749 S> 0x1a9e248279fd @   45 : 11                LdaTrue 
 4761 S> 0x1a9e248279fe @   46 : a9                Return 
         0x1a9e248279ff @   47 : 0e                LdaUndefined 
 4784 S> 0x1a9e24827a00 @   48 : a9                Return 
Constant pool (size = 7)
0x1a9e24827a09: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 7
           0: 0x1c9ee9598ac9 <String[1]: #x>
           1: 0x1a9e24827889 <String[10]: #characterX>
           2: 0x1c9ee9598ae1 <String[1]: #y>
           3: 0x1a9e248278a9 <String[10]: #characterY>
           4: 0x2b17b9b04a09 <String[7]: #console>
           5: 0x1c9ee958ac99 <String[3]: #log>
           6: 0x1a9e24827a51 <String[43]: #______________Character died_______________>
Handler Table (size = 0)
Source Position Table (size = 32)
0x1a9e24827a91 <ByteArray[32]>
0x1a9e24827bb1 points to: [0x1a9e24827c20]
=== [0x1a9e24827c20] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4903 S> 0x1a9e24827c20 @    0 : 79 00 00 04       CreateArrayLiteral [0], [0], #4
         0x1a9e24827c24 @    4 : c3                Star1 
         0x1a9e24827c25 @    5 : 0c                LdaZero 
         0x1a9e24827c26 @    6 : c4                Star0 
         0x1a9e24827c27 @    7 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x1a9e24827c2b @   11 : c2                Star2 
 4979 E> 0x1a9e24827c2c @   12 : 2d 02 02 03       GetNamedProperty <this>, [2], [3]
 4997 E> 0x1a9e24827c30 @   16 : 47 05 02          MulSmi [5], [2]
         0x1a9e24827c33 @   19 : 33 f8 03 05       DefineNamedOwnProperty r2, [3], [5]
 5031 E> 0x1a9e24827c37 @   23 : 2d 02 04 07       GetNamedProperty <this>, [4], [7]
         0x1a9e24827c3b @   27 : c1                Star3 
         0x1a9e24827c3c @   28 : 9e 08             JumpIfUndefinedOrNull [8] (0x1a9e24827c44 @ 36)
 5042 E> 0x1a9e24827c3e @   30 : 2d f7 05 09       GetNamedProperty r3, [5], [9]
         0x1a9e24827c42 @   34 : 8a 03             Jump [3] (0x1a9e24827c45 @ 37)
         0x1a9e24827c44 @   36 : 0e                LdaUndefined 
         0x1a9e24827c45 @   37 : 9e 04             JumpIfUndefinedOrNull [4] (0x1a9e24827c49 @ 41)
         0x1a9e24827c47 @   39 : 8a 04             Jump [4] (0x1a9e24827c4b @ 43)
         0x1a9e24827c49 @   41 : 13 06             LdaConstant [6]
         0x1a9e24827c4b @   43 : 33 f8 07 0b       DefineNamedOwnProperty r2, [7], [11]
 5093 E> 0x1a9e24827c4f @   47 : 2d 02 04 0d       GetNamedProperty <this>, [4], [13]
         0x1a9e24827c53 @   51 : c1                Star3 
         0x1a9e24827c54 @   52 : 9e 08             JumpIfUndefinedOrNull [8] (0x1a9e24827c5c @ 60)
 5104 E> 0x1a9e24827c56 @   54 : 2d f7 08 0f       GetNamedProperty r3, [8], [15]
         0x1a9e24827c5a @   58 : 8a 03             Jump [3] (0x1a9e24827c5d @ 61)
         0x1a9e24827c5c @   60 : 0e                LdaUndefined 
         0x1a9e24827c5d @   61 : 9e 04             JumpIfUndefinedOrNull [4] (0x1a9e24827c61 @ 65)
         0x1a9e24827c5f @   63 : 8a 04             Jump [4] (0x1a9e24827c63 @ 67)
         0x1a9e24827c61 @   65 : 13 06             LdaConstant [6]
         0x1a9e24827c63 @   67 : 33 f8 09 11       DefineNamedOwnProperty r2, [9], [17]
         0x1a9e24827c67 @   71 : 0b f8             Ldar r2
         0x1a9e24827c69 @   73 : 36 f9 fa 13       StaInArrayLiteral r1, r0, [19]
         0x1a9e24827c6d @   77 : 0b f9             Ldar r1
 5143 S> 0x1a9e24827c6f @   79 : a9                Return 
Constant pool (size = 10)
0x1a9e24827c71: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 10
           0: 0x1a9e24827cd1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1a9e24827ce9 <FixedArray[1]>>
           1: 0x1a9e24827d01 <ObjectBoilerplateDescription[9]>
           2: 0x1a9e24825ac1 <String[17]: #currentTickNumber>
           3: 0x1a9e24826701 <String[5]: #score>
           4: 0x1a9e24826151 <String[11]: #_engineTeam>
           5: 0x1a9e24827da1 <String[10]: #externalId>
           6: 0x2b17b9b017d1 <String[0]: #>
           7: 0x1a9e24827d71 <String[6]: #teamId>
           8: 0x2b17b9b058f1 <String[4]: #name>
           9: 0x1a9e24827d89 <String[8]: #teamName>
Handler Table (size = 0)
Source Position Table (size = 24)
0x1a9e24827dc1 <ByteArray[24]>
Array boilerplate at 0x1a9e24827cd1: 
0x1a9e24827cd1: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x2b17b9b03291 <Map[24]>
 - elements kind: PACKED_SMI_ELEMENTS
 - constant elements: 0x1a9e24827ce9 <FixedArray[1]>
           0: 0
Object boilerplate at 0x1a9e24827d01: 
0x1a9e24827d01: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b17b9b02059 <Map>
 - length: 9
           0: 8
           1: 0x1a9e24827d59 <String[4]: #rank>
           2: 1
           3: 0x1a9e24826701 <String[5]: #score>
           4: 0x2b17b9b01501 <Odd Oddball: uninitialized>
           5: 0x1a9e24827d71 <String[6]: #teamId>
           6: 0x2b17b9b01501 <Odd Oddball: uninitialized>
           7: 0x1a9e24827d89 <String[8]: #teamName>
           8: 0x2b17b9b01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1a9e24827e59 points to: [0x1a9e24827ec8]
=== [0x1a9e24827ec8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 5182 S> 0x1a9e24827ec8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1a9e24827ecc @    4 : c3                Star1 
         0x1a9e24827ecd @    5 : 9e 0d             JumpIfUndefinedOrNull [13] (0x1a9e24827eda @ 18)
 5187 E> 0x1a9e24827ecf @    7 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1a9e24827ed3 @   11 : c4                Star0 
 5189 E> 0x1a9e24827ed4 @   12 : 5d fa f9 04       CallProperty0 r0, r1, [4]
         0x1a9e24827ed8 @   16 : 8a 03             Jump [3] (0x1a9e24827edb @ 19)
         0x1a9e24827eda @   18 : 0e                LdaUndefined 
         0x1a9e24827edb @   19 : 0e                LdaUndefined 
 5203 S> 0x1a9e24827edc @   20 : a9                Return 
Constant pool (size = 2)
0x1a9e24827ee1: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 2
           0: 0x1a9e24826379 <String[5]: #world>
           1: 0x1c9ee9583f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 12)
0x1a9e24827f19 <ByteArray[12]>
0x1a9e24827fa1 points to: [0x1a9e24828010]
=== [0x1a9e24828010] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
         0x1a9e24828010 @    0 : 0e                LdaUndefined 
 5250 S> 0x1a9e24828011 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 6)
0x1a9e24828019 <ByteArray[6]>
0x1a9e24828081 points to: [0x1a9e248280f0]
=== [0x1a9e248280f0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5287 S> 0x1a9e248280f0 @    0 : 7d                CreateEmptyObjectLiteral 
 5297 S> 0x1a9e248280f1 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 8)
0x1a9e248280f9 <ByteArray[8]>
0x1a9e24828161 points to: [0x1a9e248281d0]
=== [0x1a9e248281d0] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5372 S> 0x1a9e248281d0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1a9e248281d4 @    4 : c3                Star1 
 5372 E> 0x1a9e248281d5 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1a9e248281d9 @    9 : c3                Star1 
         0x1a9e248281da @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1a9e248281de @   14 : c4                Star0 
 5411 E> 0x1a9e248281df @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1a9e248281e3 @   19 : c0                Star4 
 5417 E> 0x1a9e248281e4 @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x1a9e248281e8 @   24 : c1                Star3 
 5417 E> 0x1a9e248281e9 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x1a9e248281ed @   29 : c2                Star2 
         0x1a9e248281ee @   30 : 19 fa f9          Mov r0, r1
         0x1a9e248281f1 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x1a9e248281f5 @   37 : 13 03             LdaConstant [3]
         0x1a9e248281f7 @   39 : c3                Star1 
 5488 E> 0x1a9e248281f8 @   40 : 2d 02 03 0c       GetNamedProperty <this>, [3], [12]
         0x1a9e248281fc @   44 : c0                Star4 
 5503 E> 0x1a9e248281fd @   45 : 2d f6 04 0e       GetNamedProperty r4, [4], [14]
         0x1a9e24828201 @   49 : c1                Star3 
 5503 E> 0x1a9e24828202 @   50 : 5e f7 f6 03 10    CallProperty1 r3, r4, a0, [16]
         0x1a9e24828207 @   55 : c1                Star3 
         0x1a9e24828208 @   56 : 9e 13             JumpIfUndefinedOrNull [19] (0x1a9e2482821b @ 75)
 5514 E> 0x1a9e2482820a @   58 : 2d f7 05 12       GetNamedProperty r3, [5], [18]
         0x1a9e2482820e @   62 : c2                Star2 
         0x1a9e2482820f @   63 : 80 06 00 02       CreateClosure [6], [0], #2
         0x1a9e24828213 @   67 : c0                Star4 
 5516 E> 0x1a9e24828214 @   68 : 5e f8 f7 f6 14    CallProperty1 r2, r3, r4, [20]
         0x1a9e24828219 @   73 : 8a 03             Jump [3] (0x1a9e2482821c @ 76)
         0x1a9e2482821b @   75 : 0e                LdaUndefined 
         0x1a9e2482821c @   76 : 9e 04             JumpIfUndefinedOrNull [4] (0x1a9e24828220 @ 80)
         0x1a9e2482821e @   78 : 8a 04             Jump [4] (0x1a9e24828222 @ 82)
         0x1a9e24828220 @   80 : 7b 16             CreateEmptyArrayLiteral [22]
         0x1a9e24828222 @   82 : 37 fa f9 00 17    DefineKeyedOwnPropertyInLiteral r0, r1, #0, [23]
         0x1a9e24828227 @   87 : 0b fa             Ldar r0
 5563 S> 0x1a9e24828229 @   89 : a9                Return 
Constant pool (size = 7)
0x1a9e24828231: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 7
           0: 0x1a9e248258b9 <String[15]: #serializeCommon>
           1: 0x1a9e24826379 <String[5]: #world>
           2: 0x1a9e24828279 <String[18]: #serializeForPlayer>
           3: 0x1a9e24825aa1 <String[14]: #lastTickErrors>
           4: 0x2b17b9b050e9 <String[3]: #get>
           5: 0x1c9ee9589ea9 <String[3]: #map>
           6: 0x1a9e248282a1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 30)
0x1a9e248283b1 <ByteArray[30]>
0x1a9e248282a1 points to: [0x1a9e24828310]
=== [0x1a9e24828310] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5537 S> 0x1a9e24828310 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 5544 S> 0x1a9e24828314 @    4 : a9                Return 
Constant pool (size = 1)
0x1a9e24828319: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 1
           0: 0x2b17b9b05721 <String[7]: #message>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1a9e24828331 <ByteArray[8]>
0x1a9e24828459 points to: [0x1a9e248284c8]
=== [0x1a9e248284c8] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 5626 S> 0x1a9e248284c8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1a9e248284cc @    4 : c2                Star2 
 5630 E> 0x1a9e248284cd @    5 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x1a9e248284d1 @    9 : c2                Star2 
 5635 E> 0x1a9e248284d2 @   10 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x1a9e248284d6 @   14 : c3                Star1 
         0x1a9e248284d7 @   15 : 78 03 06 01       CreateRegExpLiteral [3], [6], #1
         0x1a9e248284db @   19 : c1                Star3 
 5635 E> 0x1a9e248284dc @   20 : 5e f9 f8 f7 07    CallProperty1 r1, r2, r3, [7]
         0x1a9e248284e1 @   25 : c4                Star0 
 5695 S> 0x1a9e248284e2 @   26 : 2d 02 04 09       GetNamedProperty <this>, [4], [9]
         0x1a9e248284e6 @   30 : c2                Star2 
 5695 E> 0x1a9e248284e7 @   31 : 5d f8 02 0b       CallProperty0 r2, <this>, [11]
         0x1a9e248284eb @   35 : c2                Star2 
         0x1a9e248284ec @   36 : 7e f8 29 0d       CloneObject r2, #41, [13]
         0x1a9e248284f0 @   40 : c3                Star1 
 5734 E> 0x1a9e248284f1 @   41 : 2d 02 05 0f       GetNamedProperty <this>, [5], [15]
         0x1a9e248284f5 @   45 : bf                Star5 
 5740 E> 0x1a9e248284f6 @   46 : 2d f5 06 11       GetNamedProperty r5, [6], [17]
         0x1a9e248284fa @   50 : c0                Star4 
 5740 E> 0x1a9e248284fb @   51 : 5d f6 f5 13       CallProperty0 r4, r5, [19]
         0x1a9e248284ff @   55 : c1                Star3 
         0x1a9e24828500 @   56 : 19 f9 f8          Mov r1, r2
         0x1a9e24828503 @   59 : 68 0e f8 02       InvokeIntrinsic [_CopyDataProperties], r2-r3
         0x1a9e24828507 @   63 : 13 07             LdaConstant [7]
         0x1a9e24828509 @   65 : c2                Star2 
         0x1a9e2482850a @   66 : 0b fa             Ldar r0
 5783 E> 0x1a9e2482850c @   68 : 97 1a             JumpIfToBooleanFalse [26] (0x1a9e24828526 @ 94)
         0x1a9e2482850e @   70 : 0c                LdaZero 
 5800 E> 0x1a9e2482850f @   71 : 2f fa 15          GetKeyedProperty r0, [21]
         0x1a9e24828512 @   74 : c0                Star4 
 5804 E> 0x1a9e24828513 @   75 : 2d f6 08 17       GetNamedProperty r4, [8], [23]
         0x1a9e24828517 @   79 : c1                Star3 
         0x1a9e24828518 @   80 : 13 09             LdaConstant [9]
         0x1a9e2482851a @   82 : bf                Star5 
         0x1a9e2482851b @   83 : 13 0a             LdaConstant [10]
         0x1a9e2482851d @   85 : be                Star6 
 5804 E> 0x1a9e2482851e @   86 : 5f f7 f6 f5 f4 19 CallProperty2 r3, r4, r5, r6, [25]
         0x1a9e24828524 @   92 : 8a 04             Jump [4] (0x1a9e24828528 @ 96)
         0x1a9e24828526 @   94 : 13 0b             LdaConstant [11]
         0x1a9e24828528 @   96 : 37 f9 f8 00 1b    DefineKeyedOwnPropertyInLiteral r1, r2, #0, [27]
         0x1a9e2482852d @  101 : 0b f9             Ldar r1
 5838 S> 0x1a9e2482852f @  103 : a9                Return 
Constant pool (size = 12)
0x1a9e24828531: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 12
           0: 0x1c9ee9589ea9 <String[3]: #map>
           1: 0x2b17b9b058f1 <String[4]: #name>
           2: 0x1c9ee959ae01 <String[5]: #match>
           3: 0x1a9e248285b9 <String[11]: #(-?[a-z]+)+>
           4: 0x1a9e248258b9 <String[15]: #serializeCommon>
           5: 0x1a9e24826379 <String[5]: #world>
           6: 0x1a9e24825891 <String[18]: #serializeForViewer>
           7: 0x1a9e248285d9 <String[7]: #mapName>
           8: 0x1c9ee959ae31 <String[7]: #replace>
           9: 0x0a4173d71899 <String[1]: #->
          10: 0x1c9ee95a2789 <String[1]: #_>
          11: 0x2b17b9b017d1 <String[0]: #>
Handler Table (size = 0)
Source Position Table (size = 37)
0x1a9e24828639 <ByteArray[37]>
0x1a9e248286e9 points to: [0x1a9e24828758]
=== [0x1a9e24828758] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 5926 S> 0x1a9e24828758 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1a9e2482875c @    4 : c4                Star0 
 5963 E> 0x1a9e2482875d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x1a9e24828761 @    9 : c3                Star1 
 5963 E> 0x1a9e24828762 @   10 : 5d f9 02 03       CallProperty0 r1, <this>, [3]
         0x1a9e24828766 @   14 : 33 fa 02 05       DefineNamedOwnProperty r0, [2], [5]
 6021 E> 0x1a9e2482876a @   18 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x1a9e2482876e @   22 : 33 fa 03 09       DefineNamedOwnProperty r0, [3], [9]
 6063 E> 0x1a9e24828772 @   26 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x1a9e24828776 @   30 : 33 fa 04 0d       DefineNamedOwnProperty r0, [4], [13]
         0x1a9e2482877a @   34 : 0b fa             Ldar r0
 6142 S> 0x1a9e2482877c @   36 : a9                Return 
Constant pool (size = 5)
0x1a9e24828781: [FixedArray] in OldSpace
 - map: 0x2b17b9b012e1 <Map>
 - length: 5
           0: 0x1a9e248287b9 <ObjectBoilerplateDescription[7]>
           1: 0x1a9e24825849 <String[18]: #serializeConstants>
           2: 0x1c9ee95889d1 <String[9]: #constants>
           3: 0x1a9e24825ac1 <String[17]: #currentTickNumber>
           4: 0x1a9e24828821 <String[4]: #tick>
Handler Table (size = 0)
Source Position Table (size = 21)
0x1a9e24828839 <ByteArray[21]>
Object boilerplate at 0x1a9e248287b9: 
0x1a9e248287b9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b17b9b02059 <Map>
 - length: 7
           0: 8
           1: 0x1c9ee95889d1 <String[9]: #constants>
           2: 0x2b17b9b01501 <Odd Oddball: uninitialized>
           3: 0x1a9e24825ac1 <String[17]: #currentTickNumber>
           4: 0x2b17b9b01501 <Odd Oddball: uninitialized>
           5: 0x1a9e24828821 <String[4]: #tick>
           6: 0x2b17b9b01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x1a9e248288f1: 
0x1a9e248288f1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b17b9b02059 <Map>
 - length: 9
           0: 8
           1: 0x1a9e24825b91 <String[11]: #RANDOM_SEED>
           2: 0x2b17b9b01501 <Odd Oddball: uninitialized>
           3: 0x1a9e24827b29 <String[10]: #TICK_COUNT>
           4: 2000
           5: 0x1a9e24828949 <String[22]: #RESPAWN_COOLDOWN_TICKS>
           6: 10
           7: 0x1a9e24828971 <String[31]: #CHEAT_DO_NOT_OBFUSCATE_TEAM_IDS>
           8: 0x2b17b9b01789 <false>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
