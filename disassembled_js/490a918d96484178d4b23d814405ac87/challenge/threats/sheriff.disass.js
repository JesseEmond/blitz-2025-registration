<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x298213864f18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x298213864f18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x298213864f1c @    4 : c4                Star0 
 7701 S> 0x298213864f1d @    5 : a9                Return 
Constant pool (size = 1)
0x298213864f21: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 1
           0: 0x298213864f39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x298213867129 <ByteArray[8]>
0x298213864f39 points to: [0x298213864fa8]
=== [0x298213864fa8] DISASSEMBLY ===
Parameter count 6
Register count 15
Frame size 120
OSR urgency: 0
Bytecode age: 0
   10 E> 0x298213864fa8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x298213864fab @    3 : 1a f8             PushContext r2
         0x298213864fad @    5 : 10                LdaTheHole 
         0x298213864fae @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x298213864fb0 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x298213864fb3 @   11 : c0                Star4 
   83 E> 0x298213864fb4 @   12 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x298213864fb8 @   16 : c1                Star3 
         0x298213864fb9 @   17 : 13 03             LdaConstant [3]
         0x298213864fbb @   19 : be                Star6 
   98 E> 0x298213864fbc @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x298213864fc0 @   24 : bd                Star7 
         0x298213864fc1 @   25 : 19 03 f5          Mov a0, r5
   83 E> 0x298213864fc4 @   28 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x298213864fc9 @   33 : 0e                LdaUndefined 
  161 E> 0x298213864fca @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  188 S> 0x298213864fce @   38 : 13 06             LdaConstant [6]
         0x298213864fd0 @   40 : c0                Star4 
  188 E> 0x298213864fd1 @   41 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
  188 E> 0x298213864fd5 @   45 : 25 02             StaCurrentContextSlot [2]
  236 S> 0x298213864fd7 @   47 : 13 07             LdaConstant [7]
         0x298213864fd9 @   49 : c0                Star4 
  236 E> 0x298213864fda @   50 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
         0x298213864fde @   54 : c4                Star0 
  294 E> 0x298213864fdf @   55 : 2d fa 09 0d       GetNamedProperty r0, [9], [13]
         0x298213864fe3 @   59 : be                Star6 
         0x298213864fe4 @   60 : 80 0a 00 02       CreateClosure [10], [0], #2
         0x298213864fe8 @   64 : c1                Star3 
         0x298213864fe9 @   65 : 13 08             LdaConstant [8]
         0x298213864feb @   67 : c0                Star4 
         0x298213864fec @   68 : 80 0b 01 02       CreateClosure [11], [1], #2
         0x298213864ff0 @   72 : bd                Star7 
         0x298213864ff1 @   73 : 80 0c 02 02       CreateClosure [12], [2], #2
         0x298213864ff5 @   77 : bc                Star8 
         0x298213864ff6 @   78 : 80 0d 03 02       CreateClosure [13], [3], #2
         0x298213864ffa @   82 : bb                Star9 
         0x298213864ffb @   83 : 80 0e 04 02       CreateClosure [14], [4], #2
         0x298213864fff @   87 : ba                Star10 
         0x298213865000 @   88 : 80 0f 05 02       CreateClosure [15], [5], #2
         0x298213865004 @   92 : b9                Star11 
         0x298213865005 @   93 : 80 10 06 02       CreateClosure [16], [6], #2
         0x298213865009 @   97 : b8                Star12 
         0x29821386500a @   98 : 80 11 07 02       CreateClosure [17], [7], #2
         0x29821386500e @  102 : b7                Star13 
         0x29821386500f @  103 : 80 12 08 02       CreateClosure [18], [8], #2
         0x298213865013 @  107 : b6                Star14 
         0x298213865014 @  108 : 19 f7 f5          Mov r3, r5
         0x298213865017 @  111 : 65 28 00 f6 0b    CallRuntime [DefineClass], r4-r14
         0x29821386501c @  116 : c0                Star4 
         0x29821386501d @  117 : 19 f5 f9          Mov r5, r1
 7623 S> 0x298213865020 @  120 : 0b f9             Ldar r1
 7645 E> 0x298213865022 @  122 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x298213865026 @  126 : 0e                LdaUndefined 
 7698 S> 0x298213865027 @  127 : a9                Return 
Constant pool (size = 19)
0x298213865029: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 19
           0: 0x2982138650d1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3bb85a585ab9 <String[6]: #Object>
           2: 0x3bb85a584c11 <String[14]: #defineProperty>
           3: 0x298213865141 <String[10]: #__esModule>
           4: 0x298213865161 <ObjectBoilerplateDescription[3]>
           5: 0x298213865189 <String[13]: #SheriffThreat>
           6: 0x2982138651a9 <String[18]: #../geometry/vector>
           7: 0x2982138651d1 <String[8]: #./threat>
           8: 0x2982138651e9 <FixedArray[7]>
           9: 0x298213865511 <String[6]: #Threat>
          10: 0x298213865529 <SharedFunctionInfo SheriffThreat>
          11: 0x2982138658d1 <SharedFunctionInfo get_next_move>
          12: 0x298213865c89 <SharedFunctionInfo getNextDirectionInPath>
          13: 0x298213865ff1 <SharedFunctionInfo isPlayerInDirectLineOfSight>
          14: 0x298213866201 <SharedFunctionInfo anyObstacleBetweenPoints>
          15: 0x2982138664a9 <SharedFunctionInfo getRandomIntersection>
          16: 0x298213866641 <SharedFunctionInfo computeBestIntersection>
          17: 0x298213866939 <SharedFunctionInfo getIntersections>
          18: 0x298213866de9 <SharedFunctionInfo getRowLength>
Handler Table (size = 0)
Source Position Table (size = 42)
0x2982138670c9 <ByteArray[42]>
Boilerplate at 0x298213865161: 
0x298213865161: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3bb85a582059 <Map>
 - length: 3
           0: 8
           1: 0x3bb85a586419 <String[5]: #value>
           2: 0x3bb85a581729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x2982138651e9 has 7 elements:
0x2982138651e9: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 7
           0: 11
           1: 0x298213865231 <DescriptorArray[4]>
           2: 0x3bb85a583301 <NumberDictionary[7]>
           3: 0x3bb85a581329 <FixedArray[0]>
           4: 0x2982138652f1 <DescriptorArray[9]>
           5: 0x3bb85a583301 <NumberDictionary[7]>
           6: 0x3bb85a581329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xb (11)
Element[1]
0x298213865231: [DescriptorArray] in OldSpace
 - map: 0x3bb85a587761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3bb85a5855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x067dec334fe1 <AccessorInfo>
  [1]: 0x3bb85a5858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x067dec334f71 <AccessorInfo>
  [2]: 0x3bb85a585cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x067dec335051 <AccessorInfo>
  [3]: 0x3bb85a5865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x2982138652d9 <ClassPositions 257, 7622>
Element[2]
0x3bb85a583301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3bb85a581329: [FixedArray] in ReadOnlySpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 0
Element[4]
0x2982138652f1: [DescriptorArray] in OldSpace
 - map: 0x3bb85a587761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 9
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3bb85a584a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 5, attrs: [W_C]) @ 1
  [1]: 0x2982138653e1: [String] in OldSpace: #get_next_move (const data descriptor, p: 4, attrs: [W_C]) @ 3
  [2]: 0x298213865401: [String] in OldSpace: #getNextDirectionInPath (const data descriptor, p: 6, attrs: [W_C]) @ 4
  [3]: 0x298213865429: [String] in OldSpace: #isPlayerInDirectLineOfSight (const data descriptor, p: 8, attrs: [W_C]) @ 5
  [4]: 0x298213865459: [String] in OldSpace: #anyObstacleBetweenPoints (const data descriptor, p: 0, attrs: [W_C]) @ 6
  [5]: 0x298213865481: [String] in OldSpace: #getRandomIntersection (const data descriptor, p: 3, attrs: [W_C]) @ 7
  [6]: 0x2982138654a9: [String] in OldSpace: #computeBestIntersection (const data descriptor, p: 1, attrs: [W_C]) @ 8
  [7]: 0x2982138654d1: [String] in OldSpace: #getIntersections (const data descriptor, p: 2, attrs: [W_C]) @ 9
  [8]: 0x2982138654f1: [String] in OldSpace: #getRowLength (const data descriptor, p: 7, attrs: [W_C]) @ 10
Element[5]
0x3bb85a583301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3bb85a581329: [FixedArray] in ReadOnlySpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 0
0x298213865529 points to: [0x298213865598]
=== [0x298213865598] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x298213865598 @    0 : 19 fe f9          Mov <closure>, r1
  365 S> 0x29821386559b @    3 : 0b f9             Ldar r1
         0x29821386559d @    5 : 5a f7             GetSuperConstructor r3
  400 E> 0x29821386559f @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x2982138655a1 @    9 : 0b fa             Ldar r0
         0x2982138655a3 @   11 : 19 03 f6          Mov a0, r4
         0x2982138655a6 @   14 : 19 04 f5          Mov a1, r5
         0x2982138655a9 @   17 : 19 05 f4          Mov a2, r6
         0x2982138655ac @   20 : 19 06 f3          Mov a3, r7
  365 E> 0x2982138655af @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x2982138655b4 @   28 : bc                Star8 
         0x2982138655b5 @   29 : 0b 02             Ldar <this>
         0x2982138655b7 @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x2982138655b8 @   32 : 19 f2 02          Mov r8, <this>
  416 S> 0x2982138655bb @   35 : 0b 02             Ldar <this>
         0x2982138655bd @   37 : ab                ThrowSuperNotCalledIfHole 
         0x2982138655be @   38 : 0f                LdaNull 
  445 E> 0x2982138655bf @   39 : 32 02 00 02       SetNamedProperty <this>, [0], [2]
  461 S> 0x2982138655c3 @   43 : 0b 02             Ldar <this>
         0x2982138655c5 @   45 : ab                ThrowSuperNotCalledIfHole 
         0x2982138655c6 @   46 : 0f                LdaNull 
  480 E> 0x2982138655c7 @   47 : 32 02 01 04       SetNamedProperty <this>, [1], [4]
  496 S> 0x2982138655cb @   51 : 0b 02             Ldar <this>
         0x2982138655cd @   53 : ab                ThrowSuperNotCalledIfHole 
         0x2982138655ce @   54 : 0c                LdaZero 
  513 E> 0x2982138655cf @   55 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  526 S> 0x2982138655d3 @   59 : 0b 02             Ldar <this>
         0x2982138655d5 @   61 : ab                ThrowSuperNotCalledIfHole 
         0x2982138655d6 @   62 : 0b 03             Ldar a0
  537 E> 0x2982138655d8 @   64 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  553 S> 0x2982138655dc @   68 : 0b 02             Ldar <this>
         0x2982138655de @   70 : ab                ThrowSuperNotCalledIfHole 
         0x2982138655df @   71 : ab                ThrowSuperNotCalledIfHole 
  584 E> 0x2982138655e0 @   72 : 2d 02 04 0a       GetNamedProperty <this>, [4], [10]
         0x2982138655e4 @   76 : c1                Star3 
  584 E> 0x2982138655e5 @   77 : 5e f7 02 03 0c    CallProperty1 r3, <this>, a0, [12]
  577 E> 0x2982138655ea @   82 : 32 02 05 0e       SetNamedProperty <this>, [5], [14]
         0x2982138655ee @   86 : 0b 02             Ldar <this>
         0x2982138655f0 @   88 : ab                ThrowSuperNotCalledIfHole 
  619 S> 0x2982138655f1 @   89 : a9                Return 
Constant pool (size = 6)
0x2982138655f9: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 6
           0: 0x298213865639 <String[23]: #_lastTargetSeenPosition>
           1: 0x298213865661 <String[13]: #_idlePosition>
           2: 0x298213865681 <String[11]: #_idleRounds>
           3: 0x2982138656a1 <String[5]: #_grid>
           4: 0x2982138654a9 <String[23]: #computeBestIntersection>
           5: 0x2982138656b9 <String[18]: #_bestIntersections>
Handler Table (size = 0)
Source Position Table (size = 40)
0x2982138656e1 <ByteArray[40]>
0x2982138658d1 points to: [0x298213865940]
=== [0x298213865940] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  740 S> 0x298213865940 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x298213865944 @    4 : c2                Star2 
  740 E> 0x298213865945 @    5 : 5e f8 02 03 02    CallProperty1 r2, <this>, a0, [2]
         0x29821386594a @   10 : 97 2e             JumpIfToBooleanFalse [46] (0x298213865978 @ 56)
  852 S> 0x29821386594c @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
  883 E> 0x29821386594e @   14 : aa 01             ThrowReferenceErrorIfHole [1]
         0x298213865950 @   16 : c0                Star4 
  892 E> 0x298213865951 @   17 : 2d f6 02 04       GetNamedProperty r4, [2], [4]
         0x298213865955 @   21 : c0                Star4 
  899 E> 0x298213865956 @   22 : 2d f6 03 06       GetNamedProperty r4, [3], [6]
         0x29821386595a @   26 : c1                Star3 
  918 E> 0x29821386595b @   27 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
         0x29821386595f @   31 : bf                Star5 
  928 E> 0x298213865960 @   32 : 2d f5 05 0a       GetNamedProperty r5, [5], [10]
         0x298213865964 @   36 : bf                Star5 
  899 E> 0x298213865965 @   37 : 5e f7 f6 f5 0c    CallProperty1 r3, r4, r5, [12]
  881 E> 0x29821386596a @   42 : 32 02 06 0e       SetNamedProperty <this>, [6], [14]
  951 S> 0x29821386596e @   46 : 0f                LdaNull 
  970 E> 0x29821386596f @   47 : 32 02 07 10       SetNamedProperty <this>, [7], [16]
  990 S> 0x298213865973 @   51 : 0c                LdaZero 
 1007 E> 0x298213865974 @   52 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
 1069 S> 0x298213865978 @   56 : 2d 02 06 14       GetNamedProperty <this>, [6], [20]
         0x29821386597c @   60 : 9a 4f             JumpIfNull [79] (0x2982138659cb @ 139)
 1283 S> 0x29821386597e @   62 : 2d 02 05 16       GetNamedProperty <this>, [5], [22]
         0x298213865982 @   66 : c2                Star2 
 1292 E> 0x298213865983 @   67 : 2d f8 09 18       GetNamedProperty r2, [9], [24]
         0x298213865987 @   71 : c2                Star2 
 1303 E> 0x298213865988 @   72 : 2d 02 06 1a       GetNamedProperty <this>, [6], [26]
         0x29821386598c @   76 : c1                Star3 
 1327 E> 0x29821386598d @   77 : 2d f7 09 1c       GetNamedProperty r3, [9], [28]
 1294 E> 0x298213865991 @   81 : 6c f8 1e          TestEqualStrict r2, [30]
         0x298213865994 @   84 : 99 26             JumpIfFalse [38] (0x2982138659ba @ 122)
 1353 E> 0x298213865996 @   86 : 2d 02 05 1f       GetNamedProperty <this>, [5], [31]
         0x29821386599a @   90 : c2                Star2 
 1362 E> 0x29821386599b @   91 : 2d f8 0a 21       GetNamedProperty r2, [10], [33]
         0x29821386599f @   95 : c2                Star2 
 1373 E> 0x2982138659a0 @   96 : 2d 02 06 23       GetNamedProperty <this>, [6], [35]
         0x2982138659a4 @  100 : c1                Star3 
 1397 E> 0x2982138659a5 @  101 : 2d f7 0a 25       GetNamedProperty r3, [10], [37]
 1364 E> 0x2982138659a9 @  105 : 6c f8 27          TestEqualStrict r2, [39]
         0x2982138659ac @  108 : 99 0e             JumpIfFalse [14] (0x2982138659ba @ 122)
 1470 S> 0x2982138659ae @  110 : 0f                LdaNull 
 1499 E> 0x2982138659af @  111 : 32 02 06 28       SetNamedProperty <this>, [6], [40]
 1523 S> 0x2982138659b3 @  115 : 0c                LdaZero 
 1540 E> 0x2982138659b4 @  116 : 32 02 08 2a       SetNamedProperty <this>, [8], [42]
 1600 S> 0x2982138659b8 @  120 : 0f                LdaNull 
 1612 S> 0x2982138659b9 @  121 : a9                Return 
 1694 S> 0x2982138659ba @  122 : 2d 02 0b 2c       GetNamedProperty <this>, [11], [44]
         0x2982138659be @  126 : c2                Star2 
 1729 E> 0x2982138659bf @  127 : 2d 02 06 2e       GetNamedProperty <this>, [6], [46]
         0x2982138659c3 @  131 : bf                Star5 
 1694 E> 0x2982138659c4 @  132 : 5f f8 02 03 f5 30 CallProperty2 r2, <this>, a0, r5, [48]
 1754 S> 0x2982138659ca @  138 : a9                Return 
 1821 S> 0x2982138659cb @  139 : 2d 02 07 32       GetNamedProperty <this>, [7], [50]
         0x2982138659cf @  143 : 9a 51             JumpIfNull [81] (0x298213865a20 @ 224)
 2023 S> 0x2982138659d1 @  145 : 2d 02 05 34       GetNamedProperty <this>, [5], [52]
         0x2982138659d5 @  149 : c2                Star2 
 2032 E> 0x2982138659d6 @  150 : 2d f8 09 36       GetNamedProperty r2, [9], [54]
         0x2982138659da @  154 : c2                Star2 
 2043 E> 0x2982138659db @  155 : 2d 02 07 38       GetNamedProperty <this>, [7], [56]
         0x2982138659df @  159 : c1                Star3 
 2057 E> 0x2982138659e0 @  160 : 2d f7 09 3a       GetNamedProperty r3, [9], [58]
 2034 E> 0x2982138659e4 @  164 : 6c f8 3c          TestEqualStrict r2, [60]
         0x2982138659e7 @  167 : 99 27             JumpIfFalse [39] (0x298213865a0e @ 206)
 2067 E> 0x2982138659e9 @  169 : 2d 02 05 3d       GetNamedProperty <this>, [5], [61]
         0x2982138659ed @  173 : c2                Star2 
 2076 E> 0x2982138659ee @  174 : 2d f8 0a 3f       GetNamedProperty r2, [10], [63]
         0x2982138659f2 @  178 : c2                Star2 
 2087 E> 0x2982138659f3 @  179 : 2d 02 07 41       GetNamedProperty <this>, [7], [65]
         0x2982138659f7 @  183 : c1                Star3 
 2101 E> 0x2982138659f8 @  184 : 2d f7 0a 43       GetNamedProperty r3, [10], [67]
 2078 E> 0x2982138659fc @  188 : 6c f8 45          TestEqualStrict r2, [69]
         0x2982138659ff @  191 : 99 0f             JumpIfFalse [15] (0x298213865a0e @ 206)
 2183 S> 0x298213865a01 @  193 : 0f                LdaNull 
 2202 E> 0x298213865a02 @  194 : 32 02 07 46       SetNamedProperty <this>, [7], [70]
 2226 S> 0x298213865a06 @  198 : 0d fb             LdaSmi [-5]
 2243 E> 0x298213865a08 @  200 : 32 02 08 48       SetNamedProperty <this>, [8], [72]
 2265 S> 0x298213865a0c @  204 : 0f                LdaNull 
 2277 S> 0x298213865a0d @  205 : a9                Return 
 2375 S> 0x298213865a0e @  206 : 2d 02 0b 4a       GetNamedProperty <this>, [11], [74]
         0x298213865a12 @  210 : c2                Star2 
 2410 E> 0x298213865a13 @  211 : 2d 02 07 4c       GetNamedProperty <this>, [7], [76]
         0x298213865a17 @  215 : bf                Star5 
 2375 E> 0x298213865a18 @  216 : 5f f8 02 03 f5 4e CallProperty2 r2, <this>, a0, r5, [78]
         0x298213865a1e @  222 : c3                Star1 
 2514 S> 0x298213865a1f @  223 : a9                Return 
 2675 S> 0x298213865a20 @  224 : 2d 02 08 50       GetNamedProperty <this>, [8], [80]
         0x298213865a24 @  228 : 51 52             Inc [82]
         0x298213865a26 @  230 : c1                Star3 
 2686 E> 0x298213865a27 @  231 : 32 02 08 53       SetNamedProperty <this>, [8], [83]
         0x298213865a2b @  235 : 0d 05             LdaSmi [5]
 2698 E> 0x298213865a2d @  237 : 6e f7 55          TestGreaterThan r3, [85]
         0x298213865a30 @  240 : 99 17             JumpIfFalse [23] (0x298213865a47 @ 263)
 2846 S> 0x298213865a32 @  242 : 2d 02 0c 56       GetNamedProperty <this>, [12], [86]
         0x298213865a36 @  246 : c2                Star2 
 2846 E> 0x298213865a37 @  247 : 5d f8 02 58       CallProperty0 r2, <this>, [88]
         0x298213865a3b @  251 : c4                Star0 
 2887 S> 0x298213865a3c @  252 : 0b fa             Ldar r0
 2906 E> 0x298213865a3e @  254 : 32 02 07 5a       SetNamedProperty <this>, [7], [90]
 2941 S> 0x298213865a42 @  258 : 0c                LdaZero 
 2958 E> 0x298213865a43 @  259 : 32 02 08 5c       SetNamedProperty <this>, [8], [92]
 2995 S> 0x298213865a47 @  263 : 0f                LdaNull 
 3007 S> 0x298213865a48 @  264 : a9                Return 
Constant pool (size = 13)
0x298213865a51: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 13
           0: 0x298213865429 <String[27]: #isPlayerInDirectLineOfSight>
           1: 0x298213865129 <String[8]: #vector_1>
           2: 0x298213865ac9 <String[6]: #Vector>
           3: 0x298213865ae1 <String[12]: #fromPosition>
           4: 0x3bb85a584939 <String[9]: #character>
           5: 0x3bb85a585c19 <String[8]: #position>
           6: 0x298213865639 <String[23]: #_lastTargetSeenPosition>
           7: 0x298213865661 <String[13]: #_idlePosition>
           8: 0x298213865681 <String[11]: #_idleRounds>
           9: 0x067dec318ac9 <String[1]: #x>
          10: 0x067dec318ae1 <String[1]: #y>
          11: 0x298213865401 <String[22]: #getNextDirectionInPath>
          12: 0x298213865481 <String[21]: #getRandomIntersection>
Handler Table (size = 0)
Source Position Table (size = 164)
0x298213865b31 <ByteArray[164]>
0x298213865c89 points to: [0x298213865cf8]
=== [0x298213865cf8] DISASSEMBLY ===
Parameter count 3
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 3085 S> 0x298213865cf8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x298213865cfc @    4 : c1                Star3 
 3101 E> 0x298213865cfd @    5 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x298213865d01 @    9 : c2                Star2 
         0x298213865d02 @   10 : 17 02             LdaImmutableCurrentContextSlot [2]
 3109 E> 0x298213865d04 @   12 : aa 02             ThrowReferenceErrorIfHole [2]
         0x298213865d06 @   14 : bf                Star5 
 3118 E> 0x298213865d07 @   15 : 2d f5 03 04       GetNamedProperty r5, [3], [4]
         0x298213865d0b @   19 : bf                Star5 
 3125 E> 0x298213865d0c @   20 : 2d f5 04 06       GetNamedProperty r5, [4], [6]
         0x298213865d10 @   24 : c0                Star4 
 3143 E> 0x298213865d11 @   25 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x298213865d15 @   29 : be                Star6 
 3125 E> 0x298213865d16 @   30 : 5e f6 f5 f4 0a    CallProperty1 r4, r5, r6, [10]
         0x298213865d1b @   35 : c0                Star4 
 3101 E> 0x298213865d1c @   36 : 5f f8 f7 f6 04 0c CallProperty2 r2, r3, r4, a1, [12]
         0x298213865d22 @   42 : c4                Star0 
 3171 S> 0x298213865d23 @   43 : 9a 0d             JumpIfNull [13] (0x298213865d30 @ 56)
 3197 E> 0x298213865d25 @   45 : 2d fa 06 0e       GetNamedProperty r0, [6], [14]
         0x298213865d29 @   49 : c2                Star2 
         0x298213865d2a @   50 : 0c                LdaZero 
 3204 E> 0x298213865d2b @   51 : 6c f8 10          TestEqualStrict r2, [16]
         0x298213865d2e @   54 : 99 15             JumpIfFalse [21] (0x298213865d43 @ 75)
 3225 S> 0x298213865d30 @   56 : 21 07 11          LdaGlobal [7], [17]
         0x298213865d33 @   59 : c1                Star3 
 3233 E> 0x298213865d34 @   60 : 2d f7 08 13       GetNamedProperty r3, [8], [19]
         0x298213865d38 @   64 : c2                Star2 
         0x298213865d39 @   65 : 13 09             LdaConstant [9]
         0x298213865d3b @   67 : c0                Star4 
 3233 E> 0x298213865d3c @   68 : 5e f8 f7 f6 15    CallProperty1 r2, r3, r4, [21]
 3267 S> 0x298213865d41 @   73 : 0f                LdaNull 
 3279 S> 0x298213865d42 @   74 : a9                Return 
 3319 S> 0x298213865d43 @   75 : 0d 01             LdaSmi [1]
 3323 E> 0x298213865d45 @   77 : 2f fa 17          GetKeyedProperty r0, [23]
         0x298213865d48 @   80 : c3                Star1 
 3336 S> 0x298213865d49 @   81 : 97 47             JumpIfToBooleanFalse [71] (0x298213865d90 @ 152)
 3385 S> 0x298213865d4b @   83 : 2d f9 0a 19       GetNamedProperty r1, [10], [25]
         0x298213865d4f @   87 : c2                Star2 
 3394 E> 0x298213865d50 @   88 : 2d 02 05 1b       GetNamedProperty <this>, [5], [27]
         0x298213865d54 @   92 : c1                Star3 
 3403 E> 0x298213865d55 @   93 : 2d f7 0a 1d       GetNamedProperty r3, [10], [29]
 3387 E> 0x298213865d59 @   97 : 6e f8 1f          TestGreaterThan r2, [31]
         0x298213865d5c @  100 : 99 05             JumpIfFalse [5] (0x298213865d61 @ 105)
 3424 S> 0x298213865d5e @  102 : 13 0b             LdaConstant [11]
 3439 S> 0x298213865d60 @  104 : a9                Return 
 3488 S> 0x298213865d61 @  105 : 2d f9 0a 19       GetNamedProperty r1, [10], [25]
         0x298213865d65 @  109 : c2                Star2 
 3497 E> 0x298213865d66 @  110 : 2d 02 05 20       GetNamedProperty <this>, [5], [32]
         0x298213865d6a @  114 : c1                Star3 
 3506 E> 0x298213865d6b @  115 : 2d f7 0a 22       GetNamedProperty r3, [10], [34]
 3490 E> 0x298213865d6f @  119 : 6d f8 24          TestLessThan r2, [36]
         0x298213865d72 @  122 : 99 05             JumpIfFalse [5] (0x298213865d77 @ 127)
 3527 S> 0x298213865d74 @  124 : 13 0c             LdaConstant [12]
 3541 S> 0x298213865d76 @  126 : a9                Return 
 3590 S> 0x298213865d77 @  127 : 2d f9 0d 25       GetNamedProperty r1, [13], [37]
         0x298213865d7b @  131 : c2                Star2 
 3599 E> 0x298213865d7c @  132 : 2d 02 05 27       GetNamedProperty <this>, [5], [39]
         0x298213865d80 @  136 : c1                Star3 
 3608 E> 0x298213865d81 @  137 : 2d f7 0d 29       GetNamedProperty r3, [13], [41]
 3592 E> 0x298213865d85 @  141 : 6e f8 2b          TestGreaterThan r2, [43]
         0x298213865d88 @  144 : 99 05             JumpIfFalse [5] (0x298213865d8d @ 149)
 3629 S> 0x298213865d8a @  146 : 13 0e             LdaConstant [14]
 3643 S> 0x298213865d8c @  148 : a9                Return 
 3693 S> 0x298213865d8d @  149 : 13 0f             LdaConstant [15]
 3705 S> 0x298213865d8f @  151 : a9                Return 
 3738 S> 0x298213865d90 @  152 : 0f                LdaNull 
 3750 S> 0x298213865d91 @  153 : a9                Return 
Constant pool (size = 16)
0x298213865d99: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 16
           0: 0x298213865e29 <String[15]: #pathfindingGrid>
           1: 0x298213865e49 <String[7]: #getPath>
           2: 0x298213865129 <String[8]: #vector_1>
           3: 0x298213865ac9 <String[6]: #Vector>
           4: 0x298213865ae1 <String[12]: #fromPosition>
           5: 0x3bb85a585c19 <String[8]: #position>
           6: 0x3bb85a5855f9 <String[6]: #length>
           7: 0x3bb85a584a09 <String[7]: #console>
           8: 0x067dec30ac99 <String[3]: #log>
           9: 0x298213865e79 <String[13]: #No path found>
          10: 0x067dec318ac9 <String[1]: #x>
          11: 0x298213865e99 <String[5]: #right>
          12: 0x298213865eb1 <String[4]: #left>
          13: 0x067dec318ae1 <String[1]: #y>
          14: 0x298213865ec9 <String[4]: #down>
          15: 0x298213865ee1 <String[2]: #up>
Handler Table (size = 0)
Source Position Table (size = 97)
0x298213865ef9 <ByteArray[97]>
0x298213865ff1 points to: [0x298213866060]
=== [0x298213866060] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 3829 S> 0x298213866060 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x298213866062 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x298213866064 @    4 : c1                Star3 
 3838 E> 0x298213866065 @    5 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x298213866069 @    9 : c1                Star3 
 3845 E> 0x29821386606a @   10 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x29821386606e @   14 : c2                Star2 
 3864 E> 0x29821386606f @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x298213866073 @   19 : c0                Star4 
 3874 E> 0x298213866074 @   20 : 2d f6 04 06       GetNamedProperty r4, [4], [6]
         0x298213866078 @   24 : c0                Star4 
 3845 E> 0x298213866079 @   25 : 5e f8 f7 f6 08    CallProperty1 r2, r3, r4, [8]
         0x29821386607e @   30 : c4                Star0 
 3916 S> 0x29821386607f @   31 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x298213866081 @   33 : aa 00             ThrowReferenceErrorIfHole [0]
         0x298213866083 @   35 : c1                Star3 
 3925 E> 0x298213866084 @   36 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x298213866088 @   40 : c1                Star3 
 3932 E> 0x298213866089 @   41 : 2d f7 02 0a       GetNamedProperty r3, [2], [10]
         0x29821386608d @   45 : c2                Star2 
 3950 E> 0x29821386608e @   46 : 2d 02 04 0c       GetNamedProperty <this>, [4], [12]
         0x298213866092 @   50 : c0                Star4 
 3932 E> 0x298213866093 @   51 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x298213866098 @   56 : c3                Star1 
 3988 S> 0x298213866099 @   57 : 2d fa 05 10       GetNamedProperty r0, [5], [16]
         0x29821386609d @   61 : c2                Star2 
 4009 E> 0x29821386609e @   62 : 2d f9 05 12       GetNamedProperty r1, [5], [18]
 3990 E> 0x2982138660a2 @   66 : 6c f8 14          TestEqualStrict r2, [20]
         0x2982138660a5 @   69 : 99 1a             JumpIfFalse [26] (0x2982138660bf @ 95)
 4039 S> 0x2982138660a7 @   71 : 2d 02 06 15       GetNamedProperty <this>, [6], [21]
         0x2982138660ab @   75 : c2                Star2 
         0x2982138660ac @   76 : 13 07             LdaConstant [7]
         0x2982138660ae @   78 : be                Star6 
         0x2982138660af @   79 : 19 02 f7          Mov <this>, r3
         0x2982138660b2 @   82 : 19 f9 f6          Mov r1, r4
         0x2982138660b5 @   85 : 19 fa f5          Mov r0, r5
 4039 E> 0x2982138660b8 @   88 : 5c f8 f7 04 17    CallProperty r2, r3-r6, [23]
         0x2982138660bd @   93 : 55                ToBooleanLogicalNot 
 4101 S> 0x2982138660be @   94 : a9                Return 
 4139 S> 0x2982138660bf @   95 : 2d fa 07 19       GetNamedProperty r0, [7], [25]
         0x2982138660c3 @   99 : c2                Star2 
 4160 E> 0x2982138660c4 @  100 : 2d f9 07 1b       GetNamedProperty r1, [7], [27]
 4141 E> 0x2982138660c8 @  104 : 6c f8 1d          TestEqualStrict r2, [29]
         0x2982138660cb @  107 : 99 1a             JumpIfFalse [26] (0x2982138660e5 @ 133)
 4190 S> 0x2982138660cd @  109 : 2d 02 06 1e       GetNamedProperty <this>, [6], [30]
         0x2982138660d1 @  113 : c2                Star2 
         0x2982138660d2 @  114 : 13 05             LdaConstant [5]
         0x2982138660d4 @  116 : be                Star6 
         0x2982138660d5 @  117 : 19 02 f7          Mov <this>, r3
         0x2982138660d8 @  120 : 19 f9 f6          Mov r1, r4
         0x2982138660db @  123 : 19 fa f5          Mov r0, r5
 4190 E> 0x2982138660de @  126 : 5c f8 f7 04 20    CallProperty r2, r3-r6, [32]
         0x2982138660e3 @  131 : 55                ToBooleanLogicalNot 
 4252 S> 0x2982138660e4 @  132 : a9                Return 
 4271 S> 0x2982138660e5 @  133 : 12                LdaFalse 
 4284 S> 0x2982138660e6 @  134 : a9                Return 
Constant pool (size = 8)
0x2982138660e9: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 8
           0: 0x298213865129 <String[8]: #vector_1>
           1: 0x298213865ac9 <String[6]: #Vector>
           2: 0x298213865ae1 <String[12]: #fromPosition>
           3: 0x3bb85a584939 <String[9]: #character>
           4: 0x3bb85a585c19 <String[8]: #position>
           5: 0x067dec318ac9 <String[1]: #x>
           6: 0x298213865459 <String[24]: #anyObstacleBetweenPoints>
           7: 0x067dec318ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 61)
0x298213866139 <ByteArray[61]>
0x298213866201 points to: [0x298213866270]
=== [0x298213866270] DISASSEMBLY ===
Parameter count 4
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
 4348 S> 0x298213866270 @    0 : 13 00             LdaConstant [0]
 4357 E> 0x298213866272 @    2 : 6c 05 00          TestEqualStrict a2, [0]
         0x298213866275 @    5 : 99 56             JumpIfFalse [86] (0x2982138662cb @ 91)
 4405 S> 0x298213866277 @    7 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x29821386627b @   11 : c0                Star4 
 4441 S> 0x29821386627c @   12 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
         0x298213866280 @   16 : bf                Star5 
 4477 S> 0x298213866281 @   17 : 2d 03 01 05       GetNamedProperty a0, [1], [5]
         0x298213866285 @   21 : be                Star6 
 4505 S> 0x298213866286 @   22 : 21 02 07          LdaGlobal [2], [7]
         0x298213866289 @   25 : bb                Star9 
 4510 E> 0x29821386628a @   26 : 2d f1 03 09       GetNamedProperty r9, [3], [9]
         0x29821386628e @   30 : bc                Star8 
 4510 E> 0x29821386628f @   31 : 5f f2 f1 f6 f5 0b CallProperty2 r8, r9, r4, r5, [11]
         0x298213866295 @   37 : bd                Star7 
 4542 S> 0x298213866296 @   38 : 21 02 07          LdaGlobal [2], [7]
         0x298213866299 @   41 : ba                Star10 
 4547 E> 0x29821386629a @   42 : 2d f0 04 0d       GetNamedProperty r10, [4], [13]
         0x29821386629e @   46 : bb                Star9 
 4547 E> 0x29821386629f @   47 : 5f f1 f0 f6 f5 0f CallProperty2 r9, r10, r4, r5, [15]
 4539 E> 0x2982138662a5 @   53 : 6f f3 11          TestLessThanOrEqual r7, [17]
         0x2982138662a8 @   56 : 99 23             JumpIfFalse [35] (0x2982138662cb @ 91)
 4606 S> 0x2982138662aa @   58 : 2d 02 05 12       GetNamedProperty <this>, [5], [18]
         0x2982138662ae @   62 : bc                Star8 
         0x2982138662af @   63 : 0b f3             Ldar r7
 4611 E> 0x2982138662b1 @   65 : 2f f2 14          GetKeyedProperty r8, [20]
         0x2982138662b4 @   68 : bc                Star8 
         0x2982138662b5 @   69 : 0b f4             Ldar r6
 4614 E> 0x2982138662b7 @   71 : 2f f2 16          GetKeyedProperty r8, [22]
         0x2982138662ba @   74 : bc                Star8 
         0x2982138662bb @   75 : 0c                LdaZero 
 4623 E> 0x2982138662bc @   76 : 6c f2 18          TestEqualStrict r8, [24]
         0x2982138662bf @   79 : 99 04             JumpIfFalse [4] (0x2982138662c3 @ 83)
 4652 S> 0x2982138662c1 @   81 : 11                LdaTrue 
 4664 S> 0x2982138662c2 @   82 : a9                Return 
 4575 S> 0x2982138662c3 @   83 : 0b f3             Ldar r7
         0x2982138662c5 @   85 : 51 19             Inc [25]
         0x2982138662c7 @   87 : bd                Star7 
 4492 E> 0x2982138662c8 @   88 : 89 32 00          JumpLoop [50], [0] (0x298213866296 @ 38)
 4715 S> 0x2982138662cb @   91 : 13 01             LdaConstant [1]
 4724 E> 0x2982138662cd @   93 : 6c 05 1a          TestEqualStrict a2, [26]
         0x2982138662d0 @   96 : 99 56             JumpIfFalse [86] (0x298213866326 @ 182)
 4772 S> 0x2982138662d2 @   98 : 2d 03 01 05       GetNamedProperty a0, [1], [5]
         0x2982138662d6 @  102 : c4                Star0 
 4808 S> 0x2982138662d7 @  103 : 2d 04 01 1b       GetNamedProperty a1, [1], [27]
         0x2982138662db @  107 : c3                Star1 
 4844 S> 0x2982138662dc @  108 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x2982138662e0 @  112 : c2                Star2 
 4872 S> 0x2982138662e1 @  113 : 21 02 07          LdaGlobal [2], [7]
         0x2982138662e4 @  116 : bb                Star9 
 4877 E> 0x2982138662e5 @  117 : 2d f1 03 09       GetNamedProperty r9, [3], [9]
         0x2982138662e9 @  121 : bc                Star8 
 4877 E> 0x2982138662ea @  122 : 5f f2 f1 fa f9 1d CallProperty2 r8, r9, r0, r1, [29]
         0x2982138662f0 @  128 : c1                Star3 
 4909 S> 0x2982138662f1 @  129 : 21 02 07          LdaGlobal [2], [7]
         0x2982138662f4 @  132 : ba                Star10 
 4914 E> 0x2982138662f5 @  133 : 2d f0 04 0d       GetNamedProperty r10, [4], [13]
         0x2982138662f9 @  137 : bb                Star9 
 4914 E> 0x2982138662fa @  138 : 5f f1 f0 fa f9 1f CallProperty2 r9, r10, r0, r1, [31]
 4906 E> 0x298213866300 @  144 : 6f f7 21          TestLessThanOrEqual r3, [33]
         0x298213866303 @  147 : 99 23             JumpIfFalse [35] (0x298213866326 @ 182)
 4973 S> 0x298213866305 @  149 : 2d 02 05 22       GetNamedProperty <this>, [5], [34]
         0x298213866309 @  153 : bc                Star8 
         0x29821386630a @  154 : 0b f8             Ldar r2
 4978 E> 0x29821386630c @  156 : 2f f2 24          GetKeyedProperty r8, [36]
         0x29821386630f @  159 : bc                Star8 
         0x298213866310 @  160 : 0b f7             Ldar r3
 4986 E> 0x298213866312 @  162 : 2f f2 26          GetKeyedProperty r8, [38]
         0x298213866315 @  165 : bc                Star8 
         0x298213866316 @  166 : 0c                LdaZero 
 4990 E> 0x298213866317 @  167 : 6c f2 28          TestEqualStrict r8, [40]
         0x29821386631a @  170 : 99 04             JumpIfFalse [4] (0x29821386631e @ 174)
 5019 S> 0x29821386631c @  172 : 11                LdaTrue 
 5031 S> 0x29821386631d @  173 : a9                Return 
 4942 S> 0x29821386631e @  174 : 0b f7             Ldar r3
         0x298213866320 @  176 : 51 29             Inc [41]
         0x298213866322 @  178 : c1                Star3 
 4859 E> 0x298213866323 @  179 : 89 32 00          JumpLoop [50], [0] (0x2982138662f1 @ 129)
 5082 S> 0x298213866326 @  182 : 12                LdaFalse 
 5095 S> 0x298213866327 @  183 : a9                Return 
Constant pool (size = 6)
0x298213866329: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 6
           0: 0x067dec318ac9 <String[1]: #x>
           1: 0x067dec318ae1 <String[1]: #y>
           2: 0x067dec31a991 <String[4]: #Math>
           3: 0x067dec31a149 <String[3]: #min>
           4: 0x067dec31a181 <String[3]: #max>
           5: 0x2982138656a1 <String[5]: #_grid>
Handler Table (size = 0)
Source Position Table (size = 104)
0x2982138663b1 <ByteArray[104]>
0x2982138664a9 points to: [0x298213866518]
=== [0x298213866518] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5152 S> 0x298213866518 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x29821386651c @    4 : c4                Star0 
 5171 E> 0x29821386651d @    5 : 21 01 02          LdaGlobal [1], [2]
         0x298213866520 @    8 : c2                Star2 
 5176 E> 0x298213866521 @    9 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x298213866525 @   13 : c3                Star1 
 5187 E> 0x298213866526 @   14 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x29821386652a @   18 : c1                Star3 
 5207 E> 0x29821386652b @   19 : 2d 02 00 09       GetNamedProperty <this>, [0], [9]
         0x29821386652f @   23 : c0                Star4 
 5226 E> 0x298213866530 @   24 : 2d f6 04 0b       GetNamedProperty r4, [4], [11]
 5200 E> 0x298213866534 @   28 : 3b f7 06          Mul r3, [6]
         0x298213866537 @   31 : c1                Star3 
 5176 E> 0x298213866538 @   32 : 5e f9 f8 f7 0d    CallProperty1 r1, r2, r3, [13]
 5170 E> 0x29821386653d @   37 : 2f fa 0f          GetKeyedProperty r0, [15]
 5235 S> 0x298213866540 @   40 : a9                Return 
Constant pool (size = 5)
0x298213866549: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 5
           0: 0x2982138656b9 <String[18]: #_bestIntersections>
           1: 0x067dec31a991 <String[4]: #Math>
           2: 0x3bb85a583ae9 <String[5]: #floor>
           3: 0x298213866581 <String[12]: #randomNumber>
           4: 0x3bb85a5855f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 25)
0x2982138665a1 <ByteArray[25]>
0x298213866641 points to: [0x2982138666b0]
=== [0x2982138666b0] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 5269 E> 0x2982138666b0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2982138666b3 @    3 : 1a f9             PushContext r1
         0x2982138666b5 @    5 : 0b 02             Ldar <this>
         0x2982138666b7 @    7 : 25 02             StaCurrentContextSlot [2]
 5382 S> 0x2982138666b9 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2982138666bb @   11 : c1                Star3 
 5387 E> 0x2982138666bc @   12 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x2982138666c0 @   16 : c2                Star2 
 5387 E> 0x2982138666c1 @   17 : 5e f8 f7 03 02    CallProperty1 r2, r3, a0, [2]
         0x2982138666c6 @   22 : c4                Star0 
 5517 S> 0x2982138666c7 @   23 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x2982138666cb @   27 : c2                Star2 
         0x2982138666cc @   28 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2982138666d0 @   32 : c0                Star4 
 5517 E> 0x2982138666d1 @   33 : 5e f8 fa f6 06    CallProperty1 r2, r0, r4, [6]
 5757 S> 0x2982138666d6 @   38 : 2d fa 04 08       GetNamedProperty r0, [4], [8]
         0x2982138666da @   42 : c2                Star2 
         0x2982138666db @   43 : 0c                LdaZero 
         0x2982138666dc @   44 : c0                Star4 
         0x2982138666dd @   45 : 0d 0a             LdaSmi [10]
         0x2982138666df @   47 : bf                Star5 
 5757 E> 0x2982138666e0 @   48 : 5f f8 fa f6 f5 0a CallProperty2 r2, r0, r4, r5, [10]
 5770 S> 0x2982138666e6 @   54 : a9                Return 
Constant pool (size = 5)
0x2982138666e9: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 5
           0: 0x298213866721 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2982138654d1 <String[16]: #getIntersections>
           2: 0x067dec30eb61 <String[4]: #sort>
           3: 0x298213866799 <SharedFunctionInfo>
           4: 0x067dec307319 <String[5]: #slice>
Handler Table (size = 0)
Source Position Table (size = 25)
0x2982138668f1 <ByteArray[25]>
0x298213866799 points to: [0x298213866808]
=== [0x298213866808] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5565 S> 0x298213866808 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x29821386680a @    2 : c1                Star3 
 5570 E> 0x29821386680b @    3 : 2d f7 00 00       GetNamedProperty r3, [0], [0]
         0x29821386680f @    7 : c2                Star2 
 5570 E> 0x298213866810 @    8 : 5e f8 f7 03 02    CallProperty1 r2, r3, a0, [2]
         0x298213866815 @   13 : c4                Star0 
 5618 S> 0x298213866816 @   14 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x298213866818 @   16 : c1                Star3 
 5623 E> 0x298213866819 @   17 : 2d f7 00 04       GetNamedProperty r3, [0], [4]
         0x29821386681d @   21 : c2                Star2 
 5623 E> 0x29821386681e @   22 : 5e f8 f7 04 06    CallProperty1 r2, r3, a1, [6]
         0x298213866823 @   27 : c3                Star1 
 5652 S> 0x298213866824 @   28 : 0b fa             Ldar r0
 5670 E> 0x298213866826 @   30 : 3a f9 08          Sub r1, [8]
 5683 S> 0x298213866829 @   33 : a9                Return 
Constant pool (size = 1)
0x298213866831: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 1
           0: 0x2982138654f1 <String[12]: #getRowLength>
Handler Table (size = 0)
Source Position Table (size = 24)
0x298213866849 <ByteArray[24]>
0x298213866939 points to: [0x2982138669a8]
=== [0x2982138669a8] DISASSEMBLY ===
Parameter count 2
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
 5858 S> 0x2982138669a8 @    0 : 7b 00             CreateEmptyArrayLiteral [0]
         0x2982138669aa @    2 : c4                Star0 
 5883 S> 0x2982138669ab @    3 : 0d 01             LdaSmi [1]
         0x2982138669ad @    5 : bd                Star7 
         0x2982138669ae @    6 : c0                Star4 
         0x2982138669af @    7 : 0d 01             LdaSmi [1]
         0x2982138669b1 @    9 : bf                Star5 
         0x2982138669b2 @   10 : 19 f6 f2          Mov r4, r8
         0x2982138669b5 @   13 : 0d 01             LdaSmi [1]
 6546 E> 0x2982138669b7 @   15 : 6b f5 01          TestEqual r5, [1]
         0x2982138669ba @   18 : 99 06             JumpIfFalse [6] (0x2982138669c0 @ 24)
         0x2982138669bc @   20 : 0c                LdaZero 
         0x2982138669bd @   21 : bf                Star5 
         0x2982138669be @   22 : 8a 07             Jump [7] (0x2982138669c5 @ 29)
 5908 S> 0x2982138669c0 @   24 : 0b f2             Ldar r8
         0x2982138669c2 @   26 : 51 02             Inc [2]
         0x2982138669c4 @   28 : bc                Star8 
         0x2982138669c5 @   29 : 0d 01             LdaSmi [1]
         0x2982138669c7 @   31 : be                Star6 
 5895 S> 0x2982138669c8 @   32 : 2d 03 00 04       GetNamedProperty a0, [0], [4]
 5902 E> 0x2982138669cc @   36 : 46 01 03          SubSmi [1], [3]
 5888 E> 0x2982138669cf @   39 : 6d f2 06          TestLessThan r8, [6]
         0x2982138669d2 @   42 : 99 04             JumpIfFalse [4] (0x2982138669d6 @ 46)
         0x2982138669d4 @   44 : 8a 04             Jump [4] (0x2982138669d8 @ 48)
         0x2982138669d6 @   46 : 8b 08             JumpConstant [8] (0x298213866af7 @ 335)
         0x2982138669d8 @   48 : 0d 01             LdaSmi [1]
         0x2982138669da @   50 : 6b f4 07          TestEqual r6, [7]
         0x2982138669dd @   53 : 92 07             JumpIfFalseConstant [7] (0x298213866ae8 @ 320)
 5939 S> 0x2982138669df @   55 : 0d 01             LdaSmi [1]
         0x2982138669e1 @   57 : bb                Star9 
         0x2982138669e2 @   58 : c3                Star1 
         0x2982138669e3 @   59 : 0d 01             LdaSmi [1]
         0x2982138669e5 @   61 : c2                Star2 
         0x2982138669e6 @   62 : 19 f9 f0          Mov r1, r10
         0x2982138669e9 @   65 : 0d 01             LdaSmi [1]
 6536 E> 0x2982138669eb @   67 : 6b f8 08          TestEqual r2, [8]
         0x2982138669ee @   70 : 99 06             JumpIfFalse [6] (0x2982138669f4 @ 76)
         0x2982138669f0 @   72 : 0c                LdaZero 
         0x2982138669f1 @   73 : c2                Star2 
         0x2982138669f2 @   74 : 8a 07             Jump [7] (0x2982138669f9 @ 81)
 5967 S> 0x2982138669f4 @   76 : 0b f0             Ldar r10
         0x2982138669f6 @   78 : 51 09             Inc [9]
         0x2982138669f8 @   80 : ba                Star10 
         0x2982138669f9 @   81 : 0d 01             LdaSmi [1]
         0x2982138669fb @   83 : c1                Star3 
 5944 S> 0x2982138669fc @   84 : 0b f2             Ldar r8
 5950 E> 0x2982138669fe @   86 : 2f 03 0b          GetKeyedProperty a0, [11]
         0x298213866a01 @   89 : b6                Star14 
 5954 E> 0x298213866a02 @   90 : 2d ec 00 0d       GetNamedProperty r14, [0], [13]
 5961 E> 0x298213866a06 @   94 : 46 01 0a          SubSmi [1], [10]
 5944 E> 0x298213866a09 @   97 : 6d f0 0f          TestLessThan r10, [15]
         0x298213866a0c @  100 : 99 04             JumpIfFalse [4] (0x298213866a10 @ 104)
         0x298213866a0e @  102 : 8a 04             Jump [4] (0x298213866a12 @ 106)
         0x298213866a10 @  104 : 8a cb             Jump [203] (0x298213866adb @ 307)
         0x298213866a12 @  106 : 0d 01             LdaSmi [1]
         0x298213866a14 @  108 : 6b f7 10          TestEqual r3, [16]
         0x298213866a17 @  111 : 99 b8             JumpIfFalse [184] (0x298213866acf @ 295)
 5989 S> 0x298213866a19 @  113 : 0b f2             Ldar r8
 5997 E> 0x298213866a1b @  115 : 2f 03 11          GetKeyedProperty a0, [17]
         0x298213866a1e @  118 : b7                Star13 
         0x298213866a1f @  119 : 0b f0             Ldar r10
 6000 E> 0x298213866a21 @  121 : 2f ed 13          GetKeyedProperty r13, [19]
         0x298213866a24 @  124 : b7                Star13 
         0x298213866a25 @  125 : 0d 01             LdaSmi [1]
 6004 E> 0x298213866a27 @  127 : 6c ed 15          TestEqualStrict r13, [21]
         0x298213866a2a @  130 : 99 9b             JumpIfFalse [155] (0x298213866ac5 @ 285)
 6057 S> 0x298213866a2c @  132 : 79 01 16 25       CreateArrayLiteral [1], [22], #37
         0x298213866a30 @  136 : b6                Star14 
         0x298213866a31 @  137 : 0c                LdaZero 
         0x298213866a32 @  138 : b7                Star13 
         0x298213866a33 @  139 : 0b f2             Ldar r8
 6090 E> 0x298213866a35 @  141 : 46 01 17          SubSmi [1], [23]
 6087 E> 0x298213866a38 @  144 : 2f 03 18          GetKeyedProperty a0, [24]
         0x298213866a3b @  147 : b5                Star15 
         0x298213866a3c @  148 : 0b f0             Ldar r10
 6094 E> 0x298213866a3e @  150 : 2f eb 1a          GetKeyedProperty r15, [26]
         0x298213866a41 @  153 : 36 ec ed 1c       StaInArrayLiteral r14, r13, [28]
         0x298213866a45 @  157 : 0d 01             LdaSmi [1]
         0x298213866a47 @  159 : b7                Star13 
         0x298213866a48 @  160 : 0b f2             Ldar r8
 6137 E> 0x298213866a4a @  162 : 45 01 1e          AddSmi [1], [30]
 6134 E> 0x298213866a4d @  165 : 2f 03 1f          GetKeyedProperty a0, [31]
         0x298213866a50 @  168 : b5                Star15 
         0x298213866a51 @  169 : 0b f0             Ldar r10
 6141 E> 0x298213866a53 @  171 : 2f eb 21          GetKeyedProperty r15, [33]
         0x298213866a56 @  174 : 36 ec ed 1c       StaInArrayLiteral r14, r13, [28]
         0x298213866a5a @  178 : 0d 02             LdaSmi [2]
         0x298213866a5c @  180 : b7                Star13 
         0x298213866a5d @  181 : 0b f2             Ldar r8
 6184 E> 0x298213866a5f @  183 : 2f 03 23          GetKeyedProperty a0, [35]
         0x298213866a62 @  186 : b5                Star15 
         0x298213866a63 @  187 : 0b f0             Ldar r10
 6190 E> 0x298213866a65 @  189 : 46 01 25          SubSmi [1], [37]
 6187 E> 0x298213866a68 @  192 : 2f eb 26          GetKeyedProperty r15, [38]
         0x298213866a6b @  195 : 36 ec ed 1c       StaInArrayLiteral r14, r13, [28]
         0x298213866a6f @  199 : 0d 03             LdaSmi [3]
         0x298213866a71 @  201 : b7                Star13 
         0x298213866a72 @  202 : 0b f2             Ldar r8
 6232 E> 0x298213866a74 @  204 : 2f 03 28          GetKeyedProperty a0, [40]
         0x298213866a77 @  207 : b5                Star15 
         0x298213866a78 @  208 : 0b f0             Ldar r10
 6238 E> 0x298213866a7a @  210 : 45 01 2a          AddSmi [1], [42]
 6235 E> 0x298213866a7d @  213 : 2f eb 2b          GetKeyedProperty r15, [43]
         0x298213866a80 @  216 : 36 ec ed 1c       StaInArrayLiteral r14, r13, [28]
         0x298213866a84 @  220 : 19 ec ef          Mov r14, r11
 6332 S> 0x298213866a87 @  223 : 2d ec 02 2d       GetNamedProperty r14, [2], [45]
         0x298213866a8b @  227 : b7                Star13 
         0x298213866a8c @  228 : 80 03 00 02       CreateClosure [3], [0], #2
         0x298213866a90 @  232 : b5                Star15 
 6332 E> 0x298213866a91 @  233 : 5e ed ec eb 2f    CallProperty1 r13, r14, r15, [47]
         0x298213866a96 @  238 : b7                Star13 
 6360 E> 0x298213866a97 @  239 : 2d ed 00 31       GetNamedProperty r13, [0], [49]
         0x298213866a9b @  243 : b8                Star12 
 6389 S> 0x298213866a9c @  244 : 0d 03             LdaSmi [3]
 6405 E> 0x298213866a9e @  246 : 70 ee 33          TestGreaterThanOrEqual r12, [51]
         0x298213866aa1 @  249 : 99 24             JumpIfFalse [36] (0x298213866ac5 @ 285)
 6451 S> 0x298213866aa3 @  251 : 2d fa 04 34       GetNamedProperty r0, [4], [52]
         0x298213866aa7 @  255 : b7                Star13 
         0x298213866aa8 @  256 : 17 02             LdaImmutableCurrentContextSlot [2]
 6460 E> 0x298213866aaa @  258 : aa 05             ThrowReferenceErrorIfHole [5]
         0x298213866aac @  260 : b5                Star15 
 6469 E> 0x298213866aad @  261 : 2d eb 06 36       GetNamedProperty r15, [6], [54]
         0x298213866ab1 @  265 : b5                Star15 
         0x298213866ab2 @  266 : 0b eb             Ldar r15
         0x298213866ab4 @  268 : 19 f2 ea          Mov r8, r16
         0x298213866ab7 @  271 : 19 f0 e9          Mov r10, r17
 6456 E> 0x298213866aba @  274 : 69 eb ea 02 38    Construct r15, r16-r17, [56]
         0x298213866abf @  279 : b5                Star15 
 6451 E> 0x298213866ac0 @  280 : 5e ed fa eb 3a    CallProperty1 r13, r0, r15, [58]
         0x298213866ac5 @  285 : 0c                LdaZero 
         0x298213866ac6 @  286 : c1                Star3 
         0x298213866ac7 @  287 : 19 f0 f9          Mov r10, r1
         0x298213866aca @  290 : 0b f9             Ldar r1
 5926 E> 0x298213866acc @  292 : 89 ba 03          JumpLoop [186], [3] (0x298213866a12 @ 106)
         0x298213866acf @  295 : 0d 01             LdaSmi [1]
         0x298213866ad1 @  297 : 6b f7 3c          TestEqual r3, [60]
         0x298213866ad4 @  300 : 99 04             JumpIfFalse [4] (0x298213866ad8 @ 304)
         0x298213866ad6 @  302 : 8a 05             Jump [5] (0x298213866adb @ 307)
         0x298213866ad8 @  304 : 89 f2 02          JumpLoop [242], [2] (0x2982138669e6 @ 62)
         0x298213866adb @  307 : 0c                LdaZero 
         0x298213866adc @  308 : be                Star6 
         0x298213866add @  309 : 19 f2 f6          Mov r8, r4
         0x298213866ae0 @  312 : 0b f6             Ldar r4
 5870 E> 0x298213866ae2 @  314 : 00 89 0b 01 01 00 JumpLoop.Wide [267], [1] (0x2982138669d8 @ 48)
         0x298213866ae8 @  320 : 0d 01             LdaSmi [1]
         0x298213866aea @  322 : 6b f4 3d          TestEqual r6, [61]
         0x298213866aed @  325 : 99 04             JumpIfFalse [4] (0x298213866af1 @ 329)
         0x298213866aef @  327 : 8a 08             Jump [8] (0x298213866af7 @ 335)
         0x298213866af1 @  329 : 00 89 40 01 00 00 JumpLoop.Wide [320], [0] (0x2982138669b2 @ 10)
 6556 S> 0x298213866af7 @  335 : 0b fa             Ldar r0
 6577 S> 0x298213866af9 @  337 : a9                Return 
Constant pool (size = 9)
0x298213866b01: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 9
           0: 0x3bb85a5855f9 <String[6]: #length>
           1: 0x298213866b59 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x298213866b71 <FixedArray[4]>>
           2: 0x067dec309f61 <String[6]: #filter>
           3: 0x298213866bb9 <SharedFunctionInfo>
           4: 0x067dec309551 <String[4]: #push>
           5: 0x298213865129 <String[8]: #vector_1>
           6: 0x298213865ac9 <String[6]: #Vector>
           7: 267
           8: 289
Handler Table (size = 0)
Source Position Table (size = 113)
0x298213866cd1 <ByteArray[113]>
0x298213866bb9 points to: [0x298213866c28]
=== [0x298213866c28] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 6354 S> 0x298213866c28 @    0 : 0d 01             LdaSmi [1]
 6354 E> 0x298213866c2a @    2 : 6c 03 00          TestEqualStrict a0, [0]
 6359 S> 0x298213866c2d @    5 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 10)
0x298213866c31 <ByteArray[10]>
0x298213866de9 points to: [0x298213866e58]
=== [0x298213866e58] DISASSEMBLY ===
Parameter count 2
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
 6649 S> 0x298213866e58 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x298213866e5c @    4 : c4                Star0 
 6652 S> 0x298213866e5d @    5 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
         0x298213866e61 @    9 : c3                Star1 
 6690 S> 0x298213866e62 @   10 : 0c                LdaZero 
         0x298213866e63 @   11 : c2                Star2 
 6736 S> 0x298213866e64 @   12 : 0b f9             Ldar r1
 6738 E> 0x298213866e66 @   14 : 46 01 04          SubSmi [1], [4]
         0x298213866e69 @   17 : be                Star6 
 6745 S> 0x298213866e6a @   18 : 0c                LdaZero 
 6745 E> 0x298213866e6b @   19 : 70 f4 05          TestGreaterThanOrEqual r6, [5]
         0x298213866e6e @   22 : 99 2b             JumpIfFalse [43] (0x298213866e99 @ 65)
 6779 S> 0x298213866e70 @   24 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
         0x298213866e74 @   28 : bd                Star7 
         0x298213866e75 @   29 : 0b fa             Ldar r0
 6784 E> 0x298213866e77 @   31 : 2f f3 08          GetKeyedProperty r7, [8]
         0x298213866e7a @   34 : bd                Star7 
         0x298213866e7b @   35 : 0b f4             Ldar r6
 6787 E> 0x298213866e7d @   37 : 2f f3 0a          GetKeyedProperty r7, [10]
         0x298213866e80 @   40 : bd                Star7 
         0x298213866e81 @   41 : 0d 01             LdaSmi [1]
 6791 E> 0x298213866e83 @   43 : 6c f3 0c          TestEqualStrict r7, [12]
         0x298213866e86 @   46 : 99 09             JumpIfFalse [9] (0x298213866e8f @ 55)
 6816 S> 0x298213866e88 @   48 : 0b f8             Ldar r2
         0x298213866e8a @   50 : 51 0d             Inc [13]
         0x298213866e8c @   52 : c2                Star2 
         0x298213866e8d @   53 : 8a 04             Jump [4] (0x298213866e91 @ 57)
 6878 S> 0x298213866e8f @   55 : 8a 0a             Jump [10] (0x298213866e99 @ 65)
 6752 S> 0x298213866e91 @   57 : 0b f4             Ldar r6
         0x298213866e93 @   59 : 52 0e             Dec [14]
         0x298213866e95 @   61 : be                Star6 
 6723 E> 0x298213866e96 @   62 : 89 2c 00          JumpLoop [44], [0] (0x298213866e6a @ 18)
 6953 S> 0x298213866e99 @   65 : 0b f9             Ldar r1
 6955 E> 0x298213866e9b @   67 : 45 01 0f          AddSmi [1], [15]
         0x298213866e9e @   70 : bf                Star5 
 6969 S> 0x298213866e9f @   71 : 2d 02 02 10       GetNamedProperty <this>, [2], [16]
         0x298213866ea3 @   75 : bc                Star8 
         0x298213866ea4 @   76 : 0b fa             Ldar r0
 6974 E> 0x298213866ea6 @   78 : 2f f2 12          GetKeyedProperty r8, [18]
         0x298213866ea9 @   81 : bc                Star8 
 6978 E> 0x298213866eaa @   82 : 2d f2 03 14       GetNamedProperty r8, [3], [20]
 6962 E> 0x298213866eae @   86 : 6d f5 16          TestLessThan r5, [22]
         0x298213866eb1 @   89 : 99 2b             JumpIfFalse [43] (0x298213866edc @ 132)
 7014 S> 0x298213866eb3 @   91 : 2d 02 02 17       GetNamedProperty <this>, [2], [23]
         0x298213866eb7 @   95 : bd                Star7 
         0x298213866eb8 @   96 : 0b fa             Ldar r0
 7019 E> 0x298213866eba @   98 : 2f f3 19          GetKeyedProperty r7, [25]
         0x298213866ebd @  101 : bd                Star7 
         0x298213866ebe @  102 : 0b f5             Ldar r5
 7022 E> 0x298213866ec0 @  104 : 2f f3 1b          GetKeyedProperty r7, [27]
         0x298213866ec3 @  107 : bd                Star7 
         0x298213866ec4 @  108 : 0d 01             LdaSmi [1]
 7026 E> 0x298213866ec6 @  110 : 6c f3 1d          TestEqualStrict r7, [29]
         0x298213866ec9 @  113 : 99 09             JumpIfFalse [9] (0x298213866ed2 @ 122)
 7051 S> 0x298213866ecb @  115 : 0b f8             Ldar r2
         0x298213866ecd @  117 : 51 1e             Inc [30]
         0x298213866ecf @  119 : c2                Star2 
         0x298213866ed0 @  120 : 8a 04             Jump [4] (0x298213866ed4 @ 124)
 7113 S> 0x298213866ed2 @  122 : 8a 0a             Jump [10] (0x298213866edc @ 132)
 6987 S> 0x298213866ed4 @  124 : 0b f5             Ldar r5
         0x298213866ed6 @  126 : 51 1f             Inc [31]
         0x298213866ed8 @  128 : bf                Star5 
 6940 E> 0x298213866ed9 @  129 : 89 3a 00          JumpLoop [58], [0] (0x298213866e9f @ 71)
 7185 S> 0x298213866edc @  132 : 0b fa             Ldar r0
 7187 E> 0x298213866ede @  134 : 46 01 20          SubSmi [1], [32]
         0x298213866ee1 @  137 : c0                Star4 
 7194 S> 0x298213866ee2 @  138 : 0c                LdaZero 
 7194 E> 0x298213866ee3 @  139 : 70 f6 21          TestGreaterThanOrEqual r4, [33]
         0x298213866ee6 @  142 : 99 2b             JumpIfFalse [43] (0x298213866f11 @ 185)
 7228 S> 0x298213866ee8 @  144 : 2d 02 02 22       GetNamedProperty <this>, [2], [34]
         0x298213866eec @  148 : bd                Star7 
         0x298213866eed @  149 : 0b f6             Ldar r4
 7233 E> 0x298213866eef @  151 : 2f f3 24          GetKeyedProperty r7, [36]
         0x298213866ef2 @  154 : bd                Star7 
         0x298213866ef3 @  155 : 0b f9             Ldar r1
 7236 E> 0x298213866ef5 @  157 : 2f f3 26          GetKeyedProperty r7, [38]
         0x298213866ef8 @  160 : bd                Star7 
         0x298213866ef9 @  161 : 0d 01             LdaSmi [1]
 7240 E> 0x298213866efb @  163 : 6c f3 28          TestEqualStrict r7, [40]
         0x298213866efe @  166 : 99 09             JumpIfFalse [9] (0x298213866f07 @ 175)
 7265 S> 0x298213866f00 @  168 : 0b f8             Ldar r2
         0x298213866f02 @  170 : 51 29             Inc [41]
         0x298213866f04 @  172 : c2                Star2 
         0x298213866f05 @  173 : 8a 04             Jump [4] (0x298213866f09 @ 177)
 7327 S> 0x298213866f07 @  175 : 8a 0a             Jump [10] (0x298213866f11 @ 185)
 7201 S> 0x298213866f09 @  177 : 0b f6             Ldar r4
         0x298213866f0b @  179 : 52 2a             Dec [42]
         0x298213866f0d @  181 : c0                Star4 
 7172 E> 0x298213866f0e @  182 : 89 2c 00          JumpLoop [44], [0] (0x298213866ee2 @ 138)
 7401 S> 0x298213866f11 @  185 : 0b fa             Ldar r0
 7403 E> 0x298213866f13 @  187 : 45 01 2b          AddSmi [1], [43]
         0x298213866f16 @  190 : c1                Star3 
 7417 S> 0x298213866f17 @  191 : 2d 02 02 2c       GetNamedProperty <this>, [2], [44]
         0x298213866f1b @  195 : bc                Star8 
 7423 E> 0x298213866f1c @  196 : 2d f2 03 2e       GetNamedProperty r8, [3], [46]
 7410 E> 0x298213866f20 @  200 : 6d f7 30          TestLessThan r3, [48]
         0x298213866f23 @  203 : 99 2b             JumpIfFalse [43] (0x298213866f4e @ 246)
 7459 S> 0x298213866f25 @  205 : 2d 02 02 31       GetNamedProperty <this>, [2], [49]
         0x298213866f29 @  209 : bd                Star7 
         0x298213866f2a @  210 : 0b f7             Ldar r3
 7464 E> 0x298213866f2c @  212 : 2f f3 33          GetKeyedProperty r7, [51]
         0x298213866f2f @  215 : bd                Star7 
         0x298213866f30 @  216 : 0b f9             Ldar r1
 7467 E> 0x298213866f32 @  218 : 2f f3 35          GetKeyedProperty r7, [53]
         0x298213866f35 @  221 : bd                Star7 
         0x298213866f36 @  222 : 0d 01             LdaSmi [1]
 7471 E> 0x298213866f38 @  224 : 6c f3 37          TestEqualStrict r7, [55]
         0x298213866f3b @  227 : 99 09             JumpIfFalse [9] (0x298213866f44 @ 236)
 7496 S> 0x298213866f3d @  229 : 0b f8             Ldar r2
         0x298213866f3f @  231 : 51 38             Inc [56]
         0x298213866f41 @  233 : c2                Star2 
         0x298213866f42 @  234 : 8a 04             Jump [4] (0x298213866f46 @ 238)
 7558 S> 0x298213866f44 @  236 : 8a 0a             Jump [10] (0x298213866f4e @ 246)
 7432 S> 0x298213866f46 @  238 : 0b f7             Ldar r3
         0x298213866f48 @  240 : 51 39             Inc [57]
         0x298213866f4a @  242 : c1                Star3 
 7388 E> 0x298213866f4b @  243 : 89 34 00          JumpLoop [52], [0] (0x298213866f17 @ 191)
 7597 S> 0x298213866f4e @  246 : 0b f8             Ldar r2
 7614 S> 0x298213866f50 @  248 : a9                Return 
Constant pool (size = 4)
0x298213866f59: [FixedArray] in OldSpace
 - map: 0x3bb85a5812e1 <Map>
 - length: 4
           0: 0x067dec318ac9 <String[1]: #x>
           1: 0x067dec318ae1 <String[1]: #y>
           2: 0x2982138656a1 <String[5]: #_grid>
           3: 0x3bb85a5855f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 136)
0x298213866f89 <ByteArray[136]>
<< OUTPUTTING DISASSEMBLY END >>
