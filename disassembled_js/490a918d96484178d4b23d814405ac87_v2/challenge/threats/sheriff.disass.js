<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2ed99ff64f28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2ed99ff64f28 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2ed99ff64f2c @    4 : c4                Star0 
 7701 S> 0x2ed99ff64f2d @    5 : a9                Return 
Constant pool (size = 1)
0x2ed99ff64f31: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 1
           0: 0x2ed99ff64f49 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2ed99ff67139 <ByteArray[8]>
0x2ed99ff64f49 points to: [0x2ed99ff64fb8]
=== [0x2ed99ff64fb8] DISASSEMBLY ===
Parameter count 6
Register count 15
Frame size 120
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2ed99ff64fb8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2ed99ff64fbb @    3 : 1a f8             PushContext r2
         0x2ed99ff64fbd @    5 : 10                LdaTheHole 
         0x2ed99ff64fbe @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x2ed99ff64fc0 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x2ed99ff64fc3 @   11 : c0                Star4 
   83 E> 0x2ed99ff64fc4 @   12 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x2ed99ff64fc8 @   16 : c1                Star3 
         0x2ed99ff64fc9 @   17 : 13 03             LdaConstant [3]
         0x2ed99ff64fcb @   19 : be                Star6 
   98 E> 0x2ed99ff64fcc @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2ed99ff64fd0 @   24 : bd                Star7 
         0x2ed99ff64fd1 @   25 : 19 03 f5          Mov a0, r5
   83 E> 0x2ed99ff64fd4 @   28 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x2ed99ff64fd9 @   33 : 0e                LdaUndefined 
  161 E> 0x2ed99ff64fda @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  188 S> 0x2ed99ff64fde @   38 : 13 06             LdaConstant [6]
         0x2ed99ff64fe0 @   40 : c0                Star4 
  188 E> 0x2ed99ff64fe1 @   41 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
  188 E> 0x2ed99ff64fe5 @   45 : 25 02             StaCurrentContextSlot [2]
  236 S> 0x2ed99ff64fe7 @   47 : 13 07             LdaConstant [7]
         0x2ed99ff64fe9 @   49 : c0                Star4 
  236 E> 0x2ed99ff64fea @   50 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
         0x2ed99ff64fee @   54 : c4                Star0 
  294 E> 0x2ed99ff64fef @   55 : 2d fa 09 0d       GetNamedProperty r0, [9], [13]
         0x2ed99ff64ff3 @   59 : be                Star6 
         0x2ed99ff64ff4 @   60 : 80 0a 00 02       CreateClosure [10], [0], #2
         0x2ed99ff64ff8 @   64 : c1                Star3 
         0x2ed99ff64ff9 @   65 : 13 08             LdaConstant [8]
         0x2ed99ff64ffb @   67 : c0                Star4 
         0x2ed99ff64ffc @   68 : 80 0b 01 02       CreateClosure [11], [1], #2
         0x2ed99ff65000 @   72 : bd                Star7 
         0x2ed99ff65001 @   73 : 80 0c 02 02       CreateClosure [12], [2], #2
         0x2ed99ff65005 @   77 : bc                Star8 
         0x2ed99ff65006 @   78 : 80 0d 03 02       CreateClosure [13], [3], #2
         0x2ed99ff6500a @   82 : bb                Star9 
         0x2ed99ff6500b @   83 : 80 0e 04 02       CreateClosure [14], [4], #2
         0x2ed99ff6500f @   87 : ba                Star10 
         0x2ed99ff65010 @   88 : 80 0f 05 02       CreateClosure [15], [5], #2
         0x2ed99ff65014 @   92 : b9                Star11 
         0x2ed99ff65015 @   93 : 80 10 06 02       CreateClosure [16], [6], #2
         0x2ed99ff65019 @   97 : b8                Star12 
         0x2ed99ff6501a @   98 : 80 11 07 02       CreateClosure [17], [7], #2
         0x2ed99ff6501e @  102 : b7                Star13 
         0x2ed99ff6501f @  103 : 80 12 08 02       CreateClosure [18], [8], #2
         0x2ed99ff65023 @  107 : b6                Star14 
         0x2ed99ff65024 @  108 : 19 f7 f5          Mov r3, r5
         0x2ed99ff65027 @  111 : 65 28 00 f6 0b    CallRuntime [DefineClass], r4-r14
         0x2ed99ff6502c @  116 : c0                Star4 
         0x2ed99ff6502d @  117 : 19 f5 f9          Mov r5, r1
 7623 S> 0x2ed99ff65030 @  120 : 0b f9             Ldar r1
 7645 E> 0x2ed99ff65032 @  122 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x2ed99ff65036 @  126 : 0e                LdaUndefined 
 7698 S> 0x2ed99ff65037 @  127 : a9                Return 
Constant pool (size = 19)
0x2ed99ff65039: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 19
           0: 0x2ed99ff650e1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x286d264c5ab9 <String[6]: #Object>
           2: 0x286d264c4c11 <String[14]: #defineProperty>
           3: 0x2ed99ff65151 <String[10]: #__esModule>
           4: 0x2ed99ff65171 <ObjectBoilerplateDescription[3]>
           5: 0x2ed99ff65199 <String[13]: #SheriffThreat>
           6: 0x2ed99ff651b9 <String[18]: #../geometry/vector>
           7: 0x2ed99ff651e1 <String[8]: #./threat>
           8: 0x2ed99ff651f9 <FixedArray[7]>
           9: 0x2ed99ff65521 <String[6]: #Threat>
          10: 0x2ed99ff65539 <SharedFunctionInfo SheriffThreat>
          11: 0x2ed99ff658e1 <SharedFunctionInfo get_next_move>
          12: 0x2ed99ff65c99 <SharedFunctionInfo getNextDirectionInPath>
          13: 0x2ed99ff66001 <SharedFunctionInfo isPlayerInDirectLineOfSight>
          14: 0x2ed99ff66211 <SharedFunctionInfo anyObstacleBetweenPoints>
          15: 0x2ed99ff664b9 <SharedFunctionInfo getRandomIntersection>
          16: 0x2ed99ff66651 <SharedFunctionInfo computeBestIntersection>
          17: 0x2ed99ff66949 <SharedFunctionInfo getIntersections>
          18: 0x2ed99ff66df9 <SharedFunctionInfo getRowLength>
Handler Table (size = 0)
Source Position Table (size = 42)
0x2ed99ff670d9 <ByteArray[42]>
Object boilerplate at 0x2ed99ff65171: 
0x2ed99ff65171: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x286d264c2059 <Map>
 - length: 3
           0: 8
           1: 0x286d264c6419 <String[5]: #value>
           2: 0x286d264c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x2ed99ff651f9 has 7 elements:
0x2ed99ff651f9: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 7
           0: 11
           1: 0x2ed99ff65241 <DescriptorArray[4]>
           2: 0x286d264c3301 <NumberDictionary[7]>
           3: 0x286d264c1329 <FixedArray[0]>
           4: 0x2ed99ff65301 <DescriptorArray[9]>
           5: 0x286d264c3301 <NumberDictionary[7]>
           6: 0x286d264c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xb (11)
Element[1]
0x2ed99ff65241: [DescriptorArray] in OldSpace
 - map: 0x286d264c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x286d264c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x070073534fe1 <AccessorInfo>
  [1]: 0x286d264c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x070073534f71 <AccessorInfo>
  [2]: 0x286d264c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 0, attrs: [___]) @ 0x070073535051 <AccessorInfo>
  [3]: 0x286d264c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x2ed99ff652e9 <ClassPositions 257, 7622>
Element[2]
0x286d264c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x286d264c1329: [FixedArray] in ReadOnlySpace
 - map: 0x286d264c12e1 <Map>
 - length: 0
Element[4]
0x2ed99ff65301: [DescriptorArray] in OldSpace
 - map: 0x286d264c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 9
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x286d264c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 7, attrs: [W_C]) @ 1
  [1]: 0x2ed99ff653f1: [String] in OldSpace: #get_next_move (const data descriptor, p: 0, attrs: [W_C]) @ 3
  [2]: 0x2ed99ff65411: [String] in OldSpace: #getNextDirectionInPath (const data descriptor, p: 6, attrs: [W_C]) @ 4
  [3]: 0x2ed99ff65439: [String] in OldSpace: #isPlayerInDirectLineOfSight (const data descriptor, p: 2, attrs: [W_C]) @ 5
  [4]: 0x2ed99ff65469: [String] in OldSpace: #anyObstacleBetweenPoints (const data descriptor, p: 5, attrs: [W_C]) @ 6
  [5]: 0x2ed99ff65491: [String] in OldSpace: #getRandomIntersection (const data descriptor, p: 4, attrs: [W_C]) @ 7
  [6]: 0x2ed99ff654b9: [String] in OldSpace: #computeBestIntersection (const data descriptor, p: 3, attrs: [W_C]) @ 8
  [7]: 0x2ed99ff654e1: [String] in OldSpace: #getIntersections (const data descriptor, p: 8, attrs: [W_C]) @ 9
  [8]: 0x2ed99ff65501: [String] in OldSpace: #getRowLength (const data descriptor, p: 1, attrs: [W_C]) @ 10
Element[5]
0x286d264c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x286d264c1329: [FixedArray] in ReadOnlySpace
 - map: 0x286d264c12e1 <Map>
 - length: 0
0x2ed99ff65539 points to: [0x2ed99ff655a8]
=== [0x2ed99ff655a8] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x2ed99ff655a8 @    0 : 19 fe f9          Mov <closure>, r1
  365 S> 0x2ed99ff655ab @    3 : 0b f9             Ldar r1
         0x2ed99ff655ad @    5 : 5a f7             GetSuperConstructor r3
  400 E> 0x2ed99ff655af @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x2ed99ff655b1 @    9 : 0b fa             Ldar r0
         0x2ed99ff655b3 @   11 : 19 03 f6          Mov a0, r4
         0x2ed99ff655b6 @   14 : 19 04 f5          Mov a1, r5
         0x2ed99ff655b9 @   17 : 19 05 f4          Mov a2, r6
         0x2ed99ff655bc @   20 : 19 06 f3          Mov a3, r7
  365 E> 0x2ed99ff655bf @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x2ed99ff655c4 @   28 : bc                Star8 
         0x2ed99ff655c5 @   29 : 0b 02             Ldar <this>
         0x2ed99ff655c7 @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x2ed99ff655c8 @   32 : 19 f2 02          Mov r8, <this>
  416 S> 0x2ed99ff655cb @   35 : 0b 02             Ldar <this>
         0x2ed99ff655cd @   37 : ab                ThrowSuperNotCalledIfHole 
         0x2ed99ff655ce @   38 : 0f                LdaNull 
  445 E> 0x2ed99ff655cf @   39 : 32 02 00 02       SetNamedProperty <this>, [0], [2]
  461 S> 0x2ed99ff655d3 @   43 : 0b 02             Ldar <this>
         0x2ed99ff655d5 @   45 : ab                ThrowSuperNotCalledIfHole 
         0x2ed99ff655d6 @   46 : 0f                LdaNull 
  480 E> 0x2ed99ff655d7 @   47 : 32 02 01 04       SetNamedProperty <this>, [1], [4]
  496 S> 0x2ed99ff655db @   51 : 0b 02             Ldar <this>
         0x2ed99ff655dd @   53 : ab                ThrowSuperNotCalledIfHole 
         0x2ed99ff655de @   54 : 0c                LdaZero 
  513 E> 0x2ed99ff655df @   55 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  526 S> 0x2ed99ff655e3 @   59 : 0b 02             Ldar <this>
         0x2ed99ff655e5 @   61 : ab                ThrowSuperNotCalledIfHole 
         0x2ed99ff655e6 @   62 : 0b 03             Ldar a0
  537 E> 0x2ed99ff655e8 @   64 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  553 S> 0x2ed99ff655ec @   68 : 0b 02             Ldar <this>
         0x2ed99ff655ee @   70 : ab                ThrowSuperNotCalledIfHole 
         0x2ed99ff655ef @   71 : ab                ThrowSuperNotCalledIfHole 
  584 E> 0x2ed99ff655f0 @   72 : 2d 02 04 0a       GetNamedProperty <this>, [4], [10]
         0x2ed99ff655f4 @   76 : c1                Star3 
  584 E> 0x2ed99ff655f5 @   77 : 5e f7 02 03 0c    CallProperty1 r3, <this>, a0, [12]
  577 E> 0x2ed99ff655fa @   82 : 32 02 05 0e       SetNamedProperty <this>, [5], [14]
         0x2ed99ff655fe @   86 : 0b 02             Ldar <this>
         0x2ed99ff65600 @   88 : ab                ThrowSuperNotCalledIfHole 
  619 S> 0x2ed99ff65601 @   89 : a9                Return 
Constant pool (size = 6)
0x2ed99ff65609: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 6
           0: 0x2ed99ff65649 <String[23]: #_lastTargetSeenPosition>
           1: 0x2ed99ff65671 <String[13]: #_idlePosition>
           2: 0x2ed99ff65691 <String[11]: #_idleRounds>
           3: 0x2ed99ff656b1 <String[5]: #_grid>
           4: 0x2ed99ff654b9 <String[23]: #computeBestIntersection>
           5: 0x2ed99ff656c9 <String[18]: #_bestIntersections>
Handler Table (size = 0)
Source Position Table (size = 40)
0x2ed99ff656f1 <ByteArray[40]>
0x2ed99ff658e1 points to: [0x2ed99ff65950]
=== [0x2ed99ff65950] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  740 S> 0x2ed99ff65950 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2ed99ff65954 @    4 : c2                Star2 
  740 E> 0x2ed99ff65955 @    5 : 5e f8 02 03 02    CallProperty1 r2, <this>, a0, [2]
         0x2ed99ff6595a @   10 : 97 2e             JumpIfToBooleanFalse [46] (0x2ed99ff65988 @ 56)
  852 S> 0x2ed99ff6595c @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
  883 E> 0x2ed99ff6595e @   14 : aa 01             ThrowReferenceErrorIfHole [1]
         0x2ed99ff65960 @   16 : c0                Star4 
  892 E> 0x2ed99ff65961 @   17 : 2d f6 02 04       GetNamedProperty r4, [2], [4]
         0x2ed99ff65965 @   21 : c0                Star4 
  899 E> 0x2ed99ff65966 @   22 : 2d f6 03 06       GetNamedProperty r4, [3], [6]
         0x2ed99ff6596a @   26 : c1                Star3 
  918 E> 0x2ed99ff6596b @   27 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
         0x2ed99ff6596f @   31 : bf                Star5 
  928 E> 0x2ed99ff65970 @   32 : 2d f5 05 0a       GetNamedProperty r5, [5], [10]
         0x2ed99ff65974 @   36 : bf                Star5 
  899 E> 0x2ed99ff65975 @   37 : 5e f7 f6 f5 0c    CallProperty1 r3, r4, r5, [12]
  881 E> 0x2ed99ff6597a @   42 : 32 02 06 0e       SetNamedProperty <this>, [6], [14]
  951 S> 0x2ed99ff6597e @   46 : 0f                LdaNull 
  970 E> 0x2ed99ff6597f @   47 : 32 02 07 10       SetNamedProperty <this>, [7], [16]
  990 S> 0x2ed99ff65983 @   51 : 0c                LdaZero 
 1007 E> 0x2ed99ff65984 @   52 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
 1069 S> 0x2ed99ff65988 @   56 : 2d 02 06 14       GetNamedProperty <this>, [6], [20]
         0x2ed99ff6598c @   60 : 9a 4f             JumpIfNull [79] (0x2ed99ff659db @ 139)
 1283 S> 0x2ed99ff6598e @   62 : 2d 02 05 16       GetNamedProperty <this>, [5], [22]
         0x2ed99ff65992 @   66 : c2                Star2 
 1292 E> 0x2ed99ff65993 @   67 : 2d f8 09 18       GetNamedProperty r2, [9], [24]
         0x2ed99ff65997 @   71 : c2                Star2 
 1303 E> 0x2ed99ff65998 @   72 : 2d 02 06 1a       GetNamedProperty <this>, [6], [26]
         0x2ed99ff6599c @   76 : c1                Star3 
 1327 E> 0x2ed99ff6599d @   77 : 2d f7 09 1c       GetNamedProperty r3, [9], [28]
 1294 E> 0x2ed99ff659a1 @   81 : 6c f8 1e          TestEqualStrict r2, [30]
         0x2ed99ff659a4 @   84 : 99 26             JumpIfFalse [38] (0x2ed99ff659ca @ 122)
 1353 E> 0x2ed99ff659a6 @   86 : 2d 02 05 1f       GetNamedProperty <this>, [5], [31]
         0x2ed99ff659aa @   90 : c2                Star2 
 1362 E> 0x2ed99ff659ab @   91 : 2d f8 0a 21       GetNamedProperty r2, [10], [33]
         0x2ed99ff659af @   95 : c2                Star2 
 1373 E> 0x2ed99ff659b0 @   96 : 2d 02 06 23       GetNamedProperty <this>, [6], [35]
         0x2ed99ff659b4 @  100 : c1                Star3 
 1397 E> 0x2ed99ff659b5 @  101 : 2d f7 0a 25       GetNamedProperty r3, [10], [37]
 1364 E> 0x2ed99ff659b9 @  105 : 6c f8 27          TestEqualStrict r2, [39]
         0x2ed99ff659bc @  108 : 99 0e             JumpIfFalse [14] (0x2ed99ff659ca @ 122)
 1470 S> 0x2ed99ff659be @  110 : 0f                LdaNull 
 1499 E> 0x2ed99ff659bf @  111 : 32 02 06 28       SetNamedProperty <this>, [6], [40]
 1523 S> 0x2ed99ff659c3 @  115 : 0c                LdaZero 
 1540 E> 0x2ed99ff659c4 @  116 : 32 02 08 2a       SetNamedProperty <this>, [8], [42]
 1600 S> 0x2ed99ff659c8 @  120 : 0f                LdaNull 
 1612 S> 0x2ed99ff659c9 @  121 : a9                Return 
 1694 S> 0x2ed99ff659ca @  122 : 2d 02 0b 2c       GetNamedProperty <this>, [11], [44]
         0x2ed99ff659ce @  126 : c2                Star2 
 1729 E> 0x2ed99ff659cf @  127 : 2d 02 06 2e       GetNamedProperty <this>, [6], [46]
         0x2ed99ff659d3 @  131 : bf                Star5 
 1694 E> 0x2ed99ff659d4 @  132 : 5f f8 02 03 f5 30 CallProperty2 r2, <this>, a0, r5, [48]
 1754 S> 0x2ed99ff659da @  138 : a9                Return 
 1821 S> 0x2ed99ff659db @  139 : 2d 02 07 32       GetNamedProperty <this>, [7], [50]
         0x2ed99ff659df @  143 : 9a 51             JumpIfNull [81] (0x2ed99ff65a30 @ 224)
 2023 S> 0x2ed99ff659e1 @  145 : 2d 02 05 34       GetNamedProperty <this>, [5], [52]
         0x2ed99ff659e5 @  149 : c2                Star2 
 2032 E> 0x2ed99ff659e6 @  150 : 2d f8 09 36       GetNamedProperty r2, [9], [54]
         0x2ed99ff659ea @  154 : c2                Star2 
 2043 E> 0x2ed99ff659eb @  155 : 2d 02 07 38       GetNamedProperty <this>, [7], [56]
         0x2ed99ff659ef @  159 : c1                Star3 
 2057 E> 0x2ed99ff659f0 @  160 : 2d f7 09 3a       GetNamedProperty r3, [9], [58]
 2034 E> 0x2ed99ff659f4 @  164 : 6c f8 3c          TestEqualStrict r2, [60]
         0x2ed99ff659f7 @  167 : 99 27             JumpIfFalse [39] (0x2ed99ff65a1e @ 206)
 2067 E> 0x2ed99ff659f9 @  169 : 2d 02 05 3d       GetNamedProperty <this>, [5], [61]
         0x2ed99ff659fd @  173 : c2                Star2 
 2076 E> 0x2ed99ff659fe @  174 : 2d f8 0a 3f       GetNamedProperty r2, [10], [63]
         0x2ed99ff65a02 @  178 : c2                Star2 
 2087 E> 0x2ed99ff65a03 @  179 : 2d 02 07 41       GetNamedProperty <this>, [7], [65]
         0x2ed99ff65a07 @  183 : c1                Star3 
 2101 E> 0x2ed99ff65a08 @  184 : 2d f7 0a 43       GetNamedProperty r3, [10], [67]
 2078 E> 0x2ed99ff65a0c @  188 : 6c f8 45          TestEqualStrict r2, [69]
         0x2ed99ff65a0f @  191 : 99 0f             JumpIfFalse [15] (0x2ed99ff65a1e @ 206)
 2183 S> 0x2ed99ff65a11 @  193 : 0f                LdaNull 
 2202 E> 0x2ed99ff65a12 @  194 : 32 02 07 46       SetNamedProperty <this>, [7], [70]
 2226 S> 0x2ed99ff65a16 @  198 : 0d fb             LdaSmi [-5]
 2243 E> 0x2ed99ff65a18 @  200 : 32 02 08 48       SetNamedProperty <this>, [8], [72]
 2265 S> 0x2ed99ff65a1c @  204 : 0f                LdaNull 
 2277 S> 0x2ed99ff65a1d @  205 : a9                Return 
 2375 S> 0x2ed99ff65a1e @  206 : 2d 02 0b 4a       GetNamedProperty <this>, [11], [74]
         0x2ed99ff65a22 @  210 : c2                Star2 
 2410 E> 0x2ed99ff65a23 @  211 : 2d 02 07 4c       GetNamedProperty <this>, [7], [76]
         0x2ed99ff65a27 @  215 : bf                Star5 
 2375 E> 0x2ed99ff65a28 @  216 : 5f f8 02 03 f5 4e CallProperty2 r2, <this>, a0, r5, [78]
         0x2ed99ff65a2e @  222 : c3                Star1 
 2514 S> 0x2ed99ff65a2f @  223 : a9                Return 
 2675 S> 0x2ed99ff65a30 @  224 : 2d 02 08 50       GetNamedProperty <this>, [8], [80]
         0x2ed99ff65a34 @  228 : 51 52             Inc [82]
         0x2ed99ff65a36 @  230 : c1                Star3 
 2686 E> 0x2ed99ff65a37 @  231 : 32 02 08 53       SetNamedProperty <this>, [8], [83]
         0x2ed99ff65a3b @  235 : 0d 05             LdaSmi [5]
 2698 E> 0x2ed99ff65a3d @  237 : 6e f7 55          TestGreaterThan r3, [85]
         0x2ed99ff65a40 @  240 : 99 17             JumpIfFalse [23] (0x2ed99ff65a57 @ 263)
 2846 S> 0x2ed99ff65a42 @  242 : 2d 02 0c 56       GetNamedProperty <this>, [12], [86]
         0x2ed99ff65a46 @  246 : c2                Star2 
 2846 E> 0x2ed99ff65a47 @  247 : 5d f8 02 58       CallProperty0 r2, <this>, [88]
         0x2ed99ff65a4b @  251 : c4                Star0 
 2887 S> 0x2ed99ff65a4c @  252 : 0b fa             Ldar r0
 2906 E> 0x2ed99ff65a4e @  254 : 32 02 07 5a       SetNamedProperty <this>, [7], [90]
 2941 S> 0x2ed99ff65a52 @  258 : 0c                LdaZero 
 2958 E> 0x2ed99ff65a53 @  259 : 32 02 08 5c       SetNamedProperty <this>, [8], [92]
 2995 S> 0x2ed99ff65a57 @  263 : 0f                LdaNull 
 3007 S> 0x2ed99ff65a58 @  264 : a9                Return 
Constant pool (size = 13)
0x2ed99ff65a61: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 13
           0: 0x2ed99ff65439 <String[27]: #isPlayerInDirectLineOfSight>
           1: 0x2ed99ff65139 <String[8]: #vector_1>
           2: 0x2ed99ff65ad9 <String[6]: #Vector>
           3: 0x2ed99ff65af1 <String[12]: #fromPosition>
           4: 0x286d264c4939 <String[9]: #character>
           5: 0x286d264c5c19 <String[8]: #position>
           6: 0x2ed99ff65649 <String[23]: #_lastTargetSeenPosition>
           7: 0x2ed99ff65671 <String[13]: #_idlePosition>
           8: 0x2ed99ff65691 <String[11]: #_idleRounds>
           9: 0x070073518ac9 <String[1]: #x>
          10: 0x070073518ae1 <String[1]: #y>
          11: 0x2ed99ff65411 <String[22]: #getNextDirectionInPath>
          12: 0x2ed99ff65491 <String[21]: #getRandomIntersection>
Handler Table (size = 0)
Source Position Table (size = 164)
0x2ed99ff65b41 <ByteArray[164]>
0x2ed99ff65c99 points to: [0x2ed99ff65d08]
=== [0x2ed99ff65d08] DISASSEMBLY ===
Parameter count 3
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 3085 S> 0x2ed99ff65d08 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2ed99ff65d0c @    4 : c1                Star3 
 3101 E> 0x2ed99ff65d0d @    5 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x2ed99ff65d11 @    9 : c2                Star2 
         0x2ed99ff65d12 @   10 : 17 02             LdaImmutableCurrentContextSlot [2]
 3109 E> 0x2ed99ff65d14 @   12 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2ed99ff65d16 @   14 : bf                Star5 
 3118 E> 0x2ed99ff65d17 @   15 : 2d f5 03 04       GetNamedProperty r5, [3], [4]
         0x2ed99ff65d1b @   19 : bf                Star5 
 3125 E> 0x2ed99ff65d1c @   20 : 2d f5 04 06       GetNamedProperty r5, [4], [6]
         0x2ed99ff65d20 @   24 : c0                Star4 
 3143 E> 0x2ed99ff65d21 @   25 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x2ed99ff65d25 @   29 : be                Star6 
 3125 E> 0x2ed99ff65d26 @   30 : 5e f6 f5 f4 0a    CallProperty1 r4, r5, r6, [10]
         0x2ed99ff65d2b @   35 : c0                Star4 
 3101 E> 0x2ed99ff65d2c @   36 : 5f f8 f7 f6 04 0c CallProperty2 r2, r3, r4, a1, [12]
         0x2ed99ff65d32 @   42 : c4                Star0 
 3171 S> 0x2ed99ff65d33 @   43 : 9a 0d             JumpIfNull [13] (0x2ed99ff65d40 @ 56)
 3197 E> 0x2ed99ff65d35 @   45 : 2d fa 06 0e       GetNamedProperty r0, [6], [14]
         0x2ed99ff65d39 @   49 : c2                Star2 
         0x2ed99ff65d3a @   50 : 0c                LdaZero 
 3204 E> 0x2ed99ff65d3b @   51 : 6c f8 10          TestEqualStrict r2, [16]
         0x2ed99ff65d3e @   54 : 99 15             JumpIfFalse [21] (0x2ed99ff65d53 @ 75)
 3225 S> 0x2ed99ff65d40 @   56 : 21 07 11          LdaGlobal [7], [17]
         0x2ed99ff65d43 @   59 : c1                Star3 
 3233 E> 0x2ed99ff65d44 @   60 : 2d f7 08 13       GetNamedProperty r3, [8], [19]
         0x2ed99ff65d48 @   64 : c2                Star2 
         0x2ed99ff65d49 @   65 : 13 09             LdaConstant [9]
         0x2ed99ff65d4b @   67 : c0                Star4 
 3233 E> 0x2ed99ff65d4c @   68 : 5e f8 f7 f6 15    CallProperty1 r2, r3, r4, [21]
 3267 S> 0x2ed99ff65d51 @   73 : 0f                LdaNull 
 3279 S> 0x2ed99ff65d52 @   74 : a9                Return 
 3319 S> 0x2ed99ff65d53 @   75 : 0d 01             LdaSmi [1]
 3323 E> 0x2ed99ff65d55 @   77 : 2f fa 17          GetKeyedProperty r0, [23]
         0x2ed99ff65d58 @   80 : c3                Star1 
 3336 S> 0x2ed99ff65d59 @   81 : 97 47             JumpIfToBooleanFalse [71] (0x2ed99ff65da0 @ 152)
 3385 S> 0x2ed99ff65d5b @   83 : 2d f9 0a 19       GetNamedProperty r1, [10], [25]
         0x2ed99ff65d5f @   87 : c2                Star2 
 3394 E> 0x2ed99ff65d60 @   88 : 2d 02 05 1b       GetNamedProperty <this>, [5], [27]
         0x2ed99ff65d64 @   92 : c1                Star3 
 3403 E> 0x2ed99ff65d65 @   93 : 2d f7 0a 1d       GetNamedProperty r3, [10], [29]
 3387 E> 0x2ed99ff65d69 @   97 : 6e f8 1f          TestGreaterThan r2, [31]
         0x2ed99ff65d6c @  100 : 99 05             JumpIfFalse [5] (0x2ed99ff65d71 @ 105)
 3424 S> 0x2ed99ff65d6e @  102 : 13 0b             LdaConstant [11]
 3439 S> 0x2ed99ff65d70 @  104 : a9                Return 
 3488 S> 0x2ed99ff65d71 @  105 : 2d f9 0a 19       GetNamedProperty r1, [10], [25]
         0x2ed99ff65d75 @  109 : c2                Star2 
 3497 E> 0x2ed99ff65d76 @  110 : 2d 02 05 20       GetNamedProperty <this>, [5], [32]
         0x2ed99ff65d7a @  114 : c1                Star3 
 3506 E> 0x2ed99ff65d7b @  115 : 2d f7 0a 22       GetNamedProperty r3, [10], [34]
 3490 E> 0x2ed99ff65d7f @  119 : 6d f8 24          TestLessThan r2, [36]
         0x2ed99ff65d82 @  122 : 99 05             JumpIfFalse [5] (0x2ed99ff65d87 @ 127)
 3527 S> 0x2ed99ff65d84 @  124 : 13 0c             LdaConstant [12]
 3541 S> 0x2ed99ff65d86 @  126 : a9                Return 
 3590 S> 0x2ed99ff65d87 @  127 : 2d f9 0d 25       GetNamedProperty r1, [13], [37]
         0x2ed99ff65d8b @  131 : c2                Star2 
 3599 E> 0x2ed99ff65d8c @  132 : 2d 02 05 27       GetNamedProperty <this>, [5], [39]
         0x2ed99ff65d90 @  136 : c1                Star3 
 3608 E> 0x2ed99ff65d91 @  137 : 2d f7 0d 29       GetNamedProperty r3, [13], [41]
 3592 E> 0x2ed99ff65d95 @  141 : 6e f8 2b          TestGreaterThan r2, [43]
         0x2ed99ff65d98 @  144 : 99 05             JumpIfFalse [5] (0x2ed99ff65d9d @ 149)
 3629 S> 0x2ed99ff65d9a @  146 : 13 0e             LdaConstant [14]
 3643 S> 0x2ed99ff65d9c @  148 : a9                Return 
 3693 S> 0x2ed99ff65d9d @  149 : 13 0f             LdaConstant [15]
 3705 S> 0x2ed99ff65d9f @  151 : a9                Return 
 3738 S> 0x2ed99ff65da0 @  152 : 0f                LdaNull 
 3750 S> 0x2ed99ff65da1 @  153 : a9                Return 
Constant pool (size = 16)
0x2ed99ff65da9: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 16
           0: 0x2ed99ff65e39 <String[15]: #pathfindingGrid>
           1: 0x2ed99ff65e59 <String[7]: #getPath>
           2: 0x2ed99ff65139 <String[8]: #vector_1>
           3: 0x2ed99ff65ad9 <String[6]: #Vector>
           4: 0x2ed99ff65af1 <String[12]: #fromPosition>
           5: 0x286d264c5c19 <String[8]: #position>
           6: 0x286d264c55f9 <String[6]: #length>
           7: 0x286d264c4a09 <String[7]: #console>
           8: 0x07007350ac99 <String[3]: #log>
           9: 0x2ed99ff65e89 <String[13]: #No path found>
          10: 0x070073518ac9 <String[1]: #x>
          11: 0x2ed99ff65ea9 <String[5]: #right>
          12: 0x2ed99ff65ec1 <String[4]: #left>
          13: 0x070073518ae1 <String[1]: #y>
          14: 0x2ed99ff65ed9 <String[4]: #down>
          15: 0x2ed99ff65ef1 <String[2]: #up>
Handler Table (size = 0)
Source Position Table (size = 97)
0x2ed99ff65f09 <ByteArray[97]>
0x2ed99ff66001 points to: [0x2ed99ff66070]
=== [0x2ed99ff66070] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 3829 S> 0x2ed99ff66070 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2ed99ff66072 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2ed99ff66074 @    4 : c1                Star3 
 3838 E> 0x2ed99ff66075 @    5 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x2ed99ff66079 @    9 : c1                Star3 
 3845 E> 0x2ed99ff6607a @   10 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x2ed99ff6607e @   14 : c2                Star2 
 3864 E> 0x2ed99ff6607f @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x2ed99ff66083 @   19 : c0                Star4 
 3874 E> 0x2ed99ff66084 @   20 : 2d f6 04 06       GetNamedProperty r4, [4], [6]
         0x2ed99ff66088 @   24 : c0                Star4 
 3845 E> 0x2ed99ff66089 @   25 : 5e f8 f7 f6 08    CallProperty1 r2, r3, r4, [8]
         0x2ed99ff6608e @   30 : c4                Star0 
 3916 S> 0x2ed99ff6608f @   31 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2ed99ff66091 @   33 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2ed99ff66093 @   35 : c1                Star3 
 3925 E> 0x2ed99ff66094 @   36 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x2ed99ff66098 @   40 : c1                Star3 
 3932 E> 0x2ed99ff66099 @   41 : 2d f7 02 0a       GetNamedProperty r3, [2], [10]
         0x2ed99ff6609d @   45 : c2                Star2 
 3950 E> 0x2ed99ff6609e @   46 : 2d 02 04 0c       GetNamedProperty <this>, [4], [12]
         0x2ed99ff660a2 @   50 : c0                Star4 
 3932 E> 0x2ed99ff660a3 @   51 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x2ed99ff660a8 @   56 : c3                Star1 
 3988 S> 0x2ed99ff660a9 @   57 : 2d fa 05 10       GetNamedProperty r0, [5], [16]
         0x2ed99ff660ad @   61 : c2                Star2 
 4009 E> 0x2ed99ff660ae @   62 : 2d f9 05 12       GetNamedProperty r1, [5], [18]
 3990 E> 0x2ed99ff660b2 @   66 : 6c f8 14          TestEqualStrict r2, [20]
         0x2ed99ff660b5 @   69 : 99 1a             JumpIfFalse [26] (0x2ed99ff660cf @ 95)
 4039 S> 0x2ed99ff660b7 @   71 : 2d 02 06 15       GetNamedProperty <this>, [6], [21]
         0x2ed99ff660bb @   75 : c2                Star2 
         0x2ed99ff660bc @   76 : 13 07             LdaConstant [7]
         0x2ed99ff660be @   78 : be                Star6 
         0x2ed99ff660bf @   79 : 19 02 f7          Mov <this>, r3
         0x2ed99ff660c2 @   82 : 19 f9 f6          Mov r1, r4
         0x2ed99ff660c5 @   85 : 19 fa f5          Mov r0, r5
 4039 E> 0x2ed99ff660c8 @   88 : 5c f8 f7 04 17    CallProperty r2, r3-r6, [23]
         0x2ed99ff660cd @   93 : 55                ToBooleanLogicalNot 
 4101 S> 0x2ed99ff660ce @   94 : a9                Return 
 4139 S> 0x2ed99ff660cf @   95 : 2d fa 07 19       GetNamedProperty r0, [7], [25]
         0x2ed99ff660d3 @   99 : c2                Star2 
 4160 E> 0x2ed99ff660d4 @  100 : 2d f9 07 1b       GetNamedProperty r1, [7], [27]
 4141 E> 0x2ed99ff660d8 @  104 : 6c f8 1d          TestEqualStrict r2, [29]
         0x2ed99ff660db @  107 : 99 1a             JumpIfFalse [26] (0x2ed99ff660f5 @ 133)
 4190 S> 0x2ed99ff660dd @  109 : 2d 02 06 1e       GetNamedProperty <this>, [6], [30]
         0x2ed99ff660e1 @  113 : c2                Star2 
         0x2ed99ff660e2 @  114 : 13 05             LdaConstant [5]
         0x2ed99ff660e4 @  116 : be                Star6 
         0x2ed99ff660e5 @  117 : 19 02 f7          Mov <this>, r3
         0x2ed99ff660e8 @  120 : 19 f9 f6          Mov r1, r4
         0x2ed99ff660eb @  123 : 19 fa f5          Mov r0, r5
 4190 E> 0x2ed99ff660ee @  126 : 5c f8 f7 04 20    CallProperty r2, r3-r6, [32]
         0x2ed99ff660f3 @  131 : 55                ToBooleanLogicalNot 
 4252 S> 0x2ed99ff660f4 @  132 : a9                Return 
 4271 S> 0x2ed99ff660f5 @  133 : 12                LdaFalse 
 4284 S> 0x2ed99ff660f6 @  134 : a9                Return 
Constant pool (size = 8)
0x2ed99ff660f9: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 8
           0: 0x2ed99ff65139 <String[8]: #vector_1>
           1: 0x2ed99ff65ad9 <String[6]: #Vector>
           2: 0x2ed99ff65af1 <String[12]: #fromPosition>
           3: 0x286d264c4939 <String[9]: #character>
           4: 0x286d264c5c19 <String[8]: #position>
           5: 0x070073518ac9 <String[1]: #x>
           6: 0x2ed99ff65469 <String[24]: #anyObstacleBetweenPoints>
           7: 0x070073518ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 61)
0x2ed99ff66149 <ByteArray[61]>
0x2ed99ff66211 points to: [0x2ed99ff66280]
=== [0x2ed99ff66280] DISASSEMBLY ===
Parameter count 4
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
 4348 S> 0x2ed99ff66280 @    0 : 13 00             LdaConstant [0]
 4357 E> 0x2ed99ff66282 @    2 : 6c 05 00          TestEqualStrict a2, [0]
         0x2ed99ff66285 @    5 : 99 56             JumpIfFalse [86] (0x2ed99ff662db @ 91)
 4405 S> 0x2ed99ff66287 @    7 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x2ed99ff6628b @   11 : c0                Star4 
 4441 S> 0x2ed99ff6628c @   12 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
         0x2ed99ff66290 @   16 : bf                Star5 
 4477 S> 0x2ed99ff66291 @   17 : 2d 03 01 05       GetNamedProperty a0, [1], [5]
         0x2ed99ff66295 @   21 : be                Star6 
 4505 S> 0x2ed99ff66296 @   22 : 21 02 07          LdaGlobal [2], [7]
         0x2ed99ff66299 @   25 : bb                Star9 
 4510 E> 0x2ed99ff6629a @   26 : 2d f1 03 09       GetNamedProperty r9, [3], [9]
         0x2ed99ff6629e @   30 : bc                Star8 
 4510 E> 0x2ed99ff6629f @   31 : 5f f2 f1 f6 f5 0b CallProperty2 r8, r9, r4, r5, [11]
         0x2ed99ff662a5 @   37 : bd                Star7 
 4542 S> 0x2ed99ff662a6 @   38 : 21 02 07          LdaGlobal [2], [7]
         0x2ed99ff662a9 @   41 : ba                Star10 
 4547 E> 0x2ed99ff662aa @   42 : 2d f0 04 0d       GetNamedProperty r10, [4], [13]
         0x2ed99ff662ae @   46 : bb                Star9 
 4547 E> 0x2ed99ff662af @   47 : 5f f1 f0 f6 f5 0f CallProperty2 r9, r10, r4, r5, [15]
 4539 E> 0x2ed99ff662b5 @   53 : 6f f3 11          TestLessThanOrEqual r7, [17]
         0x2ed99ff662b8 @   56 : 99 23             JumpIfFalse [35] (0x2ed99ff662db @ 91)
 4606 S> 0x2ed99ff662ba @   58 : 2d 02 05 12       GetNamedProperty <this>, [5], [18]
         0x2ed99ff662be @   62 : bc                Star8 
         0x2ed99ff662bf @   63 : 0b f3             Ldar r7
 4611 E> 0x2ed99ff662c1 @   65 : 2f f2 14          GetKeyedProperty r8, [20]
         0x2ed99ff662c4 @   68 : bc                Star8 
         0x2ed99ff662c5 @   69 : 0b f4             Ldar r6
 4614 E> 0x2ed99ff662c7 @   71 : 2f f2 16          GetKeyedProperty r8, [22]
         0x2ed99ff662ca @   74 : bc                Star8 
         0x2ed99ff662cb @   75 : 0c                LdaZero 
 4623 E> 0x2ed99ff662cc @   76 : 6c f2 18          TestEqualStrict r8, [24]
         0x2ed99ff662cf @   79 : 99 04             JumpIfFalse [4] (0x2ed99ff662d3 @ 83)
 4652 S> 0x2ed99ff662d1 @   81 : 11                LdaTrue 
 4664 S> 0x2ed99ff662d2 @   82 : a9                Return 
 4575 S> 0x2ed99ff662d3 @   83 : 0b f3             Ldar r7
         0x2ed99ff662d5 @   85 : 51 19             Inc [25]
         0x2ed99ff662d7 @   87 : bd                Star7 
 4492 E> 0x2ed99ff662d8 @   88 : 89 32 00          JumpLoop [50], [0] (0x2ed99ff662a6 @ 38)
 4715 S> 0x2ed99ff662db @   91 : 13 01             LdaConstant [1]
 4724 E> 0x2ed99ff662dd @   93 : 6c 05 1a          TestEqualStrict a2, [26]
         0x2ed99ff662e0 @   96 : 99 56             JumpIfFalse [86] (0x2ed99ff66336 @ 182)
 4772 S> 0x2ed99ff662e2 @   98 : 2d 03 01 05       GetNamedProperty a0, [1], [5]
         0x2ed99ff662e6 @  102 : c4                Star0 
 4808 S> 0x2ed99ff662e7 @  103 : 2d 04 01 1b       GetNamedProperty a1, [1], [27]
         0x2ed99ff662eb @  107 : c3                Star1 
 4844 S> 0x2ed99ff662ec @  108 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x2ed99ff662f0 @  112 : c2                Star2 
 4872 S> 0x2ed99ff662f1 @  113 : 21 02 07          LdaGlobal [2], [7]
         0x2ed99ff662f4 @  116 : bb                Star9 
 4877 E> 0x2ed99ff662f5 @  117 : 2d f1 03 09       GetNamedProperty r9, [3], [9]
         0x2ed99ff662f9 @  121 : bc                Star8 
 4877 E> 0x2ed99ff662fa @  122 : 5f f2 f1 fa f9 1d CallProperty2 r8, r9, r0, r1, [29]
         0x2ed99ff66300 @  128 : c1                Star3 
 4909 S> 0x2ed99ff66301 @  129 : 21 02 07          LdaGlobal [2], [7]
         0x2ed99ff66304 @  132 : ba                Star10 
 4914 E> 0x2ed99ff66305 @  133 : 2d f0 04 0d       GetNamedProperty r10, [4], [13]
         0x2ed99ff66309 @  137 : bb                Star9 
 4914 E> 0x2ed99ff6630a @  138 : 5f f1 f0 fa f9 1f CallProperty2 r9, r10, r0, r1, [31]
 4906 E> 0x2ed99ff66310 @  144 : 6f f7 21          TestLessThanOrEqual r3, [33]
         0x2ed99ff66313 @  147 : 99 23             JumpIfFalse [35] (0x2ed99ff66336 @ 182)
 4973 S> 0x2ed99ff66315 @  149 : 2d 02 05 22       GetNamedProperty <this>, [5], [34]
         0x2ed99ff66319 @  153 : bc                Star8 
         0x2ed99ff6631a @  154 : 0b f8             Ldar r2
 4978 E> 0x2ed99ff6631c @  156 : 2f f2 24          GetKeyedProperty r8, [36]
         0x2ed99ff6631f @  159 : bc                Star8 
         0x2ed99ff66320 @  160 : 0b f7             Ldar r3
 4986 E> 0x2ed99ff66322 @  162 : 2f f2 26          GetKeyedProperty r8, [38]
         0x2ed99ff66325 @  165 : bc                Star8 
         0x2ed99ff66326 @  166 : 0c                LdaZero 
 4990 E> 0x2ed99ff66327 @  167 : 6c f2 28          TestEqualStrict r8, [40]
         0x2ed99ff6632a @  170 : 99 04             JumpIfFalse [4] (0x2ed99ff6632e @ 174)
 5019 S> 0x2ed99ff6632c @  172 : 11                LdaTrue 
 5031 S> 0x2ed99ff6632d @  173 : a9                Return 
 4942 S> 0x2ed99ff6632e @  174 : 0b f7             Ldar r3
         0x2ed99ff66330 @  176 : 51 29             Inc [41]
         0x2ed99ff66332 @  178 : c1                Star3 
 4859 E> 0x2ed99ff66333 @  179 : 89 32 00          JumpLoop [50], [0] (0x2ed99ff66301 @ 129)
 5082 S> 0x2ed99ff66336 @  182 : 12                LdaFalse 
 5095 S> 0x2ed99ff66337 @  183 : a9                Return 
Constant pool (size = 6)
0x2ed99ff66339: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 6
           0: 0x070073518ac9 <String[1]: #x>
           1: 0x070073518ae1 <String[1]: #y>
           2: 0x07007351a991 <String[4]: #Math>
           3: 0x07007351a149 <String[3]: #min>
           4: 0x07007351a181 <String[3]: #max>
           5: 0x2ed99ff656b1 <String[5]: #_grid>
Handler Table (size = 0)
Source Position Table (size = 104)
0x2ed99ff663c1 <ByteArray[104]>
0x2ed99ff664b9 points to: [0x2ed99ff66528]
=== [0x2ed99ff66528] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5152 S> 0x2ed99ff66528 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2ed99ff6652c @    4 : c4                Star0 
 5171 E> 0x2ed99ff6652d @    5 : 21 01 02          LdaGlobal [1], [2]
         0x2ed99ff66530 @    8 : c2                Star2 
 5176 E> 0x2ed99ff66531 @    9 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x2ed99ff66535 @   13 : c3                Star1 
 5187 E> 0x2ed99ff66536 @   14 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x2ed99ff6653a @   18 : c1                Star3 
 5207 E> 0x2ed99ff6653b @   19 : 2d 02 00 09       GetNamedProperty <this>, [0], [9]
         0x2ed99ff6653f @   23 : c0                Star4 
 5226 E> 0x2ed99ff66540 @   24 : 2d f6 04 0b       GetNamedProperty r4, [4], [11]
 5200 E> 0x2ed99ff66544 @   28 : 3b f7 06          Mul r3, [6]
         0x2ed99ff66547 @   31 : c1                Star3 
 5176 E> 0x2ed99ff66548 @   32 : 5e f9 f8 f7 0d    CallProperty1 r1, r2, r3, [13]
 5170 E> 0x2ed99ff6654d @   37 : 2f fa 0f          GetKeyedProperty r0, [15]
 5235 S> 0x2ed99ff66550 @   40 : a9                Return 
Constant pool (size = 5)
0x2ed99ff66559: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 5
           0: 0x2ed99ff656c9 <String[18]: #_bestIntersections>
           1: 0x07007351a991 <String[4]: #Math>
           2: 0x286d264c3ae9 <String[5]: #floor>
           3: 0x2ed99ff66591 <String[12]: #randomNumber>
           4: 0x286d264c55f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 25)
0x2ed99ff665b1 <ByteArray[25]>
0x2ed99ff66651 points to: [0x2ed99ff666c0]
=== [0x2ed99ff666c0] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 5269 E> 0x2ed99ff666c0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2ed99ff666c3 @    3 : 1a f9             PushContext r1
         0x2ed99ff666c5 @    5 : 0b 02             Ldar <this>
         0x2ed99ff666c7 @    7 : 25 02             StaCurrentContextSlot [2]
 5382 S> 0x2ed99ff666c9 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2ed99ff666cb @   11 : c1                Star3 
 5387 E> 0x2ed99ff666cc @   12 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x2ed99ff666d0 @   16 : c2                Star2 
 5387 E> 0x2ed99ff666d1 @   17 : 5e f8 f7 03 02    CallProperty1 r2, r3, a0, [2]
         0x2ed99ff666d6 @   22 : c4                Star0 
 5517 S> 0x2ed99ff666d7 @   23 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x2ed99ff666db @   27 : c2                Star2 
         0x2ed99ff666dc @   28 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2ed99ff666e0 @   32 : c0                Star4 
 5517 E> 0x2ed99ff666e1 @   33 : 5e f8 fa f6 06    CallProperty1 r2, r0, r4, [6]
 5757 S> 0x2ed99ff666e6 @   38 : 2d fa 04 08       GetNamedProperty r0, [4], [8]
         0x2ed99ff666ea @   42 : c2                Star2 
         0x2ed99ff666eb @   43 : 0c                LdaZero 
         0x2ed99ff666ec @   44 : c0                Star4 
         0x2ed99ff666ed @   45 : 0d 0a             LdaSmi [10]
         0x2ed99ff666ef @   47 : bf                Star5 
 5757 E> 0x2ed99ff666f0 @   48 : 5f f8 fa f6 f5 0a CallProperty2 r2, r0, r4, r5, [10]
 5770 S> 0x2ed99ff666f6 @   54 : a9                Return 
Constant pool (size = 5)
0x2ed99ff666f9: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 5
           0: 0x2ed99ff66731 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2ed99ff654e1 <String[16]: #getIntersections>
           2: 0x07007350eb61 <String[4]: #sort>
           3: 0x2ed99ff667a9 <SharedFunctionInfo>
           4: 0x070073507319 <String[5]: #slice>
Handler Table (size = 0)
Source Position Table (size = 25)
0x2ed99ff66901 <ByteArray[25]>
0x2ed99ff667a9 points to: [0x2ed99ff66818]
=== [0x2ed99ff66818] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5565 S> 0x2ed99ff66818 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2ed99ff6681a @    2 : c1                Star3 
 5570 E> 0x2ed99ff6681b @    3 : 2d f7 00 00       GetNamedProperty r3, [0], [0]
         0x2ed99ff6681f @    7 : c2                Star2 
 5570 E> 0x2ed99ff66820 @    8 : 5e f8 f7 03 02    CallProperty1 r2, r3, a0, [2]
         0x2ed99ff66825 @   13 : c4                Star0 
 5618 S> 0x2ed99ff66826 @   14 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2ed99ff66828 @   16 : c1                Star3 
 5623 E> 0x2ed99ff66829 @   17 : 2d f7 00 04       GetNamedProperty r3, [0], [4]
         0x2ed99ff6682d @   21 : c2                Star2 
 5623 E> 0x2ed99ff6682e @   22 : 5e f8 f7 04 06    CallProperty1 r2, r3, a1, [6]
         0x2ed99ff66833 @   27 : c3                Star1 
 5652 S> 0x2ed99ff66834 @   28 : 0b fa             Ldar r0
 5670 E> 0x2ed99ff66836 @   30 : 3a f9 08          Sub r1, [8]
 5683 S> 0x2ed99ff66839 @   33 : a9                Return 
Constant pool (size = 1)
0x2ed99ff66841: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 1
           0: 0x2ed99ff65501 <String[12]: #getRowLength>
Handler Table (size = 0)
Source Position Table (size = 24)
0x2ed99ff66859 <ByteArray[24]>
0x2ed99ff66949 points to: [0x2ed99ff669b8]
=== [0x2ed99ff669b8] DISASSEMBLY ===
Parameter count 2
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
 5858 S> 0x2ed99ff669b8 @    0 : 7b 00             CreateEmptyArrayLiteral [0]
         0x2ed99ff669ba @    2 : c4                Star0 
 5883 S> 0x2ed99ff669bb @    3 : 0d 01             LdaSmi [1]
         0x2ed99ff669bd @    5 : bd                Star7 
         0x2ed99ff669be @    6 : c0                Star4 
         0x2ed99ff669bf @    7 : 0d 01             LdaSmi [1]
         0x2ed99ff669c1 @    9 : bf                Star5 
         0x2ed99ff669c2 @   10 : 19 f6 f2          Mov r4, r8
         0x2ed99ff669c5 @   13 : 0d 01             LdaSmi [1]
 6546 E> 0x2ed99ff669c7 @   15 : 6b f5 01          TestEqual r5, [1]
         0x2ed99ff669ca @   18 : 99 06             JumpIfFalse [6] (0x2ed99ff669d0 @ 24)
         0x2ed99ff669cc @   20 : 0c                LdaZero 
         0x2ed99ff669cd @   21 : bf                Star5 
         0x2ed99ff669ce @   22 : 8a 07             Jump [7] (0x2ed99ff669d5 @ 29)
 5908 S> 0x2ed99ff669d0 @   24 : 0b f2             Ldar r8
         0x2ed99ff669d2 @   26 : 51 02             Inc [2]
         0x2ed99ff669d4 @   28 : bc                Star8 
         0x2ed99ff669d5 @   29 : 0d 01             LdaSmi [1]
         0x2ed99ff669d7 @   31 : be                Star6 
 5895 S> 0x2ed99ff669d8 @   32 : 2d 03 00 04       GetNamedProperty a0, [0], [4]
 5902 E> 0x2ed99ff669dc @   36 : 46 01 03          SubSmi [1], [3]
 5888 E> 0x2ed99ff669df @   39 : 6d f2 06          TestLessThan r8, [6]
         0x2ed99ff669e2 @   42 : 99 04             JumpIfFalse [4] (0x2ed99ff669e6 @ 46)
         0x2ed99ff669e4 @   44 : 8a 04             Jump [4] (0x2ed99ff669e8 @ 48)
         0x2ed99ff669e6 @   46 : 8b 08             JumpConstant [8] (0x2ed99ff66b07 @ 335)
         0x2ed99ff669e8 @   48 : 0d 01             LdaSmi [1]
         0x2ed99ff669ea @   50 : 6b f4 07          TestEqual r6, [7]
         0x2ed99ff669ed @   53 : 92 07             JumpIfFalseConstant [7] (0x2ed99ff66af8 @ 320)
 5939 S> 0x2ed99ff669ef @   55 : 0d 01             LdaSmi [1]
         0x2ed99ff669f1 @   57 : bb                Star9 
         0x2ed99ff669f2 @   58 : c3                Star1 
         0x2ed99ff669f3 @   59 : 0d 01             LdaSmi [1]
         0x2ed99ff669f5 @   61 : c2                Star2 
         0x2ed99ff669f6 @   62 : 19 f9 f0          Mov r1, r10
         0x2ed99ff669f9 @   65 : 0d 01             LdaSmi [1]
 6536 E> 0x2ed99ff669fb @   67 : 6b f8 08          TestEqual r2, [8]
         0x2ed99ff669fe @   70 : 99 06             JumpIfFalse [6] (0x2ed99ff66a04 @ 76)
         0x2ed99ff66a00 @   72 : 0c                LdaZero 
         0x2ed99ff66a01 @   73 : c2                Star2 
         0x2ed99ff66a02 @   74 : 8a 07             Jump [7] (0x2ed99ff66a09 @ 81)
 5967 S> 0x2ed99ff66a04 @   76 : 0b f0             Ldar r10
         0x2ed99ff66a06 @   78 : 51 09             Inc [9]
         0x2ed99ff66a08 @   80 : ba                Star10 
         0x2ed99ff66a09 @   81 : 0d 01             LdaSmi [1]
         0x2ed99ff66a0b @   83 : c1                Star3 
 5944 S> 0x2ed99ff66a0c @   84 : 0b f2             Ldar r8
 5950 E> 0x2ed99ff66a0e @   86 : 2f 03 0b          GetKeyedProperty a0, [11]
         0x2ed99ff66a11 @   89 : b6                Star14 
 5954 E> 0x2ed99ff66a12 @   90 : 2d ec 00 0d       GetNamedProperty r14, [0], [13]
 5961 E> 0x2ed99ff66a16 @   94 : 46 01 0a          SubSmi [1], [10]
 5944 E> 0x2ed99ff66a19 @   97 : 6d f0 0f          TestLessThan r10, [15]
         0x2ed99ff66a1c @  100 : 99 04             JumpIfFalse [4] (0x2ed99ff66a20 @ 104)
         0x2ed99ff66a1e @  102 : 8a 04             Jump [4] (0x2ed99ff66a22 @ 106)
         0x2ed99ff66a20 @  104 : 8a cb             Jump [203] (0x2ed99ff66aeb @ 307)
         0x2ed99ff66a22 @  106 : 0d 01             LdaSmi [1]
         0x2ed99ff66a24 @  108 : 6b f7 10          TestEqual r3, [16]
         0x2ed99ff66a27 @  111 : 99 b8             JumpIfFalse [184] (0x2ed99ff66adf @ 295)
 5989 S> 0x2ed99ff66a29 @  113 : 0b f2             Ldar r8
 5997 E> 0x2ed99ff66a2b @  115 : 2f 03 11          GetKeyedProperty a0, [17]
         0x2ed99ff66a2e @  118 : b7                Star13 
         0x2ed99ff66a2f @  119 : 0b f0             Ldar r10
 6000 E> 0x2ed99ff66a31 @  121 : 2f ed 13          GetKeyedProperty r13, [19]
         0x2ed99ff66a34 @  124 : b7                Star13 
         0x2ed99ff66a35 @  125 : 0d 01             LdaSmi [1]
 6004 E> 0x2ed99ff66a37 @  127 : 6c ed 15          TestEqualStrict r13, [21]
         0x2ed99ff66a3a @  130 : 99 9b             JumpIfFalse [155] (0x2ed99ff66ad5 @ 285)
 6057 S> 0x2ed99ff66a3c @  132 : 79 01 16 25       CreateArrayLiteral [1], [22], #37
         0x2ed99ff66a40 @  136 : b6                Star14 
         0x2ed99ff66a41 @  137 : 0c                LdaZero 
         0x2ed99ff66a42 @  138 : b7                Star13 
         0x2ed99ff66a43 @  139 : 0b f2             Ldar r8
 6090 E> 0x2ed99ff66a45 @  141 : 46 01 17          SubSmi [1], [23]
 6087 E> 0x2ed99ff66a48 @  144 : 2f 03 18          GetKeyedProperty a0, [24]
         0x2ed99ff66a4b @  147 : b5                Star15 
         0x2ed99ff66a4c @  148 : 0b f0             Ldar r10
 6094 E> 0x2ed99ff66a4e @  150 : 2f eb 1a          GetKeyedProperty r15, [26]
         0x2ed99ff66a51 @  153 : 36 ec ed 1c       StaInArrayLiteral r14, r13, [28]
         0x2ed99ff66a55 @  157 : 0d 01             LdaSmi [1]
         0x2ed99ff66a57 @  159 : b7                Star13 
         0x2ed99ff66a58 @  160 : 0b f2             Ldar r8
 6137 E> 0x2ed99ff66a5a @  162 : 45 01 1e          AddSmi [1], [30]
 6134 E> 0x2ed99ff66a5d @  165 : 2f 03 1f          GetKeyedProperty a0, [31]
         0x2ed99ff66a60 @  168 : b5                Star15 
         0x2ed99ff66a61 @  169 : 0b f0             Ldar r10
 6141 E> 0x2ed99ff66a63 @  171 : 2f eb 21          GetKeyedProperty r15, [33]
         0x2ed99ff66a66 @  174 : 36 ec ed 1c       StaInArrayLiteral r14, r13, [28]
         0x2ed99ff66a6a @  178 : 0d 02             LdaSmi [2]
         0x2ed99ff66a6c @  180 : b7                Star13 
         0x2ed99ff66a6d @  181 : 0b f2             Ldar r8
 6184 E> 0x2ed99ff66a6f @  183 : 2f 03 23          GetKeyedProperty a0, [35]
         0x2ed99ff66a72 @  186 : b5                Star15 
         0x2ed99ff66a73 @  187 : 0b f0             Ldar r10
 6190 E> 0x2ed99ff66a75 @  189 : 46 01 25          SubSmi [1], [37]
 6187 E> 0x2ed99ff66a78 @  192 : 2f eb 26          GetKeyedProperty r15, [38]
         0x2ed99ff66a7b @  195 : 36 ec ed 1c       StaInArrayLiteral r14, r13, [28]
         0x2ed99ff66a7f @  199 : 0d 03             LdaSmi [3]
         0x2ed99ff66a81 @  201 : b7                Star13 
         0x2ed99ff66a82 @  202 : 0b f2             Ldar r8
 6232 E> 0x2ed99ff66a84 @  204 : 2f 03 28          GetKeyedProperty a0, [40]
         0x2ed99ff66a87 @  207 : b5                Star15 
         0x2ed99ff66a88 @  208 : 0b f0             Ldar r10
 6238 E> 0x2ed99ff66a8a @  210 : 45 01 2a          AddSmi [1], [42]
 6235 E> 0x2ed99ff66a8d @  213 : 2f eb 2b          GetKeyedProperty r15, [43]
         0x2ed99ff66a90 @  216 : 36 ec ed 1c       StaInArrayLiteral r14, r13, [28]
         0x2ed99ff66a94 @  220 : 19 ec ef          Mov r14, r11
 6332 S> 0x2ed99ff66a97 @  223 : 2d ec 02 2d       GetNamedProperty r14, [2], [45]
         0x2ed99ff66a9b @  227 : b7                Star13 
         0x2ed99ff66a9c @  228 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2ed99ff66aa0 @  232 : b5                Star15 
 6332 E> 0x2ed99ff66aa1 @  233 : 5e ed ec eb 2f    CallProperty1 r13, r14, r15, [47]
         0x2ed99ff66aa6 @  238 : b7                Star13 
 6360 E> 0x2ed99ff66aa7 @  239 : 2d ed 00 31       GetNamedProperty r13, [0], [49]
         0x2ed99ff66aab @  243 : b8                Star12 
 6389 S> 0x2ed99ff66aac @  244 : 0d 03             LdaSmi [3]
 6405 E> 0x2ed99ff66aae @  246 : 70 ee 33          TestGreaterThanOrEqual r12, [51]
         0x2ed99ff66ab1 @  249 : 99 24             JumpIfFalse [36] (0x2ed99ff66ad5 @ 285)
 6451 S> 0x2ed99ff66ab3 @  251 : 2d fa 04 34       GetNamedProperty r0, [4], [52]
         0x2ed99ff66ab7 @  255 : b7                Star13 
         0x2ed99ff66ab8 @  256 : 17 02             LdaImmutableCurrentContextSlot [2]
 6460 E> 0x2ed99ff66aba @  258 : aa 05             ThrowReferenceErrorIfHole [5]
         0x2ed99ff66abc @  260 : b5                Star15 
 6469 E> 0x2ed99ff66abd @  261 : 2d eb 06 36       GetNamedProperty r15, [6], [54]
         0x2ed99ff66ac1 @  265 : b5                Star15 
         0x2ed99ff66ac2 @  266 : 0b eb             Ldar r15
         0x2ed99ff66ac4 @  268 : 19 f2 ea          Mov r8, r16
         0x2ed99ff66ac7 @  271 : 19 f0 e9          Mov r10, r17
 6456 E> 0x2ed99ff66aca @  274 : 69 eb ea 02 38    Construct r15, r16-r17, [56]
         0x2ed99ff66acf @  279 : b5                Star15 
 6451 E> 0x2ed99ff66ad0 @  280 : 5e ed fa eb 3a    CallProperty1 r13, r0, r15, [58]
         0x2ed99ff66ad5 @  285 : 0c                LdaZero 
         0x2ed99ff66ad6 @  286 : c1                Star3 
         0x2ed99ff66ad7 @  287 : 19 f0 f9          Mov r10, r1
         0x2ed99ff66ada @  290 : 0b f9             Ldar r1
 5926 E> 0x2ed99ff66adc @  292 : 89 ba 03          JumpLoop [186], [3] (0x2ed99ff66a22 @ 106)
         0x2ed99ff66adf @  295 : 0d 01             LdaSmi [1]
         0x2ed99ff66ae1 @  297 : 6b f7 3c          TestEqual r3, [60]
         0x2ed99ff66ae4 @  300 : 99 04             JumpIfFalse [4] (0x2ed99ff66ae8 @ 304)
         0x2ed99ff66ae6 @  302 : 8a 05             Jump [5] (0x2ed99ff66aeb @ 307)
         0x2ed99ff66ae8 @  304 : 89 f2 02          JumpLoop [242], [2] (0x2ed99ff669f6 @ 62)
         0x2ed99ff66aeb @  307 : 0c                LdaZero 
         0x2ed99ff66aec @  308 : be                Star6 
         0x2ed99ff66aed @  309 : 19 f2 f6          Mov r8, r4
         0x2ed99ff66af0 @  312 : 0b f6             Ldar r4
 5870 E> 0x2ed99ff66af2 @  314 : 00 89 0b 01 01 00 JumpLoop.Wide [267], [1] (0x2ed99ff669e8 @ 48)
         0x2ed99ff66af8 @  320 : 0d 01             LdaSmi [1]
         0x2ed99ff66afa @  322 : 6b f4 3d          TestEqual r6, [61]
         0x2ed99ff66afd @  325 : 99 04             JumpIfFalse [4] (0x2ed99ff66b01 @ 329)
         0x2ed99ff66aff @  327 : 8a 08             Jump [8] (0x2ed99ff66b07 @ 335)
         0x2ed99ff66b01 @  329 : 00 89 40 01 00 00 JumpLoop.Wide [320], [0] (0x2ed99ff669c2 @ 10)
 6556 S> 0x2ed99ff66b07 @  335 : 0b fa             Ldar r0
 6577 S> 0x2ed99ff66b09 @  337 : a9                Return 
Constant pool (size = 9)
0x2ed99ff66b11: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 9
           0: 0x286d264c55f9 <String[6]: #length>
           1: 0x2ed99ff66b69 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2ed99ff66b81 <FixedArray[4]>>
           2: 0x070073509f61 <String[6]: #filter>
           3: 0x2ed99ff66bc9 <SharedFunctionInfo>
           4: 0x070073509551 <String[4]: #push>
           5: 0x2ed99ff65139 <String[8]: #vector_1>
           6: 0x2ed99ff65ad9 <String[6]: #Vector>
           7: 267
           8: 289
Handler Table (size = 0)
Source Position Table (size = 113)
0x2ed99ff66ce1 <ByteArray[113]>
Array boilerplate at 0x2ed99ff66b69: 
0x2ed99ff66b69: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x286d264c3291 <Map[24]>
 - elements kind: PACKED_SMI_ELEMENTS
 - constant elements: 0x2ed99ff66b81 <FixedArray[4]>
         0-3: 0
0x2ed99ff66bc9 points to: [0x2ed99ff66c38]
=== [0x2ed99ff66c38] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 6354 S> 0x2ed99ff66c38 @    0 : 0d 01             LdaSmi [1]
 6354 E> 0x2ed99ff66c3a @    2 : 6c 03 00          TestEqualStrict a0, [0]
 6359 S> 0x2ed99ff66c3d @    5 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 10)
0x2ed99ff66c41 <ByteArray[10]>
0x2ed99ff66df9 points to: [0x2ed99ff66e68]
=== [0x2ed99ff66e68] DISASSEMBLY ===
Parameter count 2
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
 6649 S> 0x2ed99ff66e68 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2ed99ff66e6c @    4 : c4                Star0 
 6652 S> 0x2ed99ff66e6d @    5 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
         0x2ed99ff66e71 @    9 : c3                Star1 
 6690 S> 0x2ed99ff66e72 @   10 : 0c                LdaZero 
         0x2ed99ff66e73 @   11 : c2                Star2 
 6736 S> 0x2ed99ff66e74 @   12 : 0b f9             Ldar r1
 6738 E> 0x2ed99ff66e76 @   14 : 46 01 04          SubSmi [1], [4]
         0x2ed99ff66e79 @   17 : be                Star6 
 6745 S> 0x2ed99ff66e7a @   18 : 0c                LdaZero 
 6745 E> 0x2ed99ff66e7b @   19 : 70 f4 05          TestGreaterThanOrEqual r6, [5]
         0x2ed99ff66e7e @   22 : 99 2b             JumpIfFalse [43] (0x2ed99ff66ea9 @ 65)
 6779 S> 0x2ed99ff66e80 @   24 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
         0x2ed99ff66e84 @   28 : bd                Star7 
         0x2ed99ff66e85 @   29 : 0b fa             Ldar r0
 6784 E> 0x2ed99ff66e87 @   31 : 2f f3 08          GetKeyedProperty r7, [8]
         0x2ed99ff66e8a @   34 : bd                Star7 
         0x2ed99ff66e8b @   35 : 0b f4             Ldar r6
 6787 E> 0x2ed99ff66e8d @   37 : 2f f3 0a          GetKeyedProperty r7, [10]
         0x2ed99ff66e90 @   40 : bd                Star7 
         0x2ed99ff66e91 @   41 : 0d 01             LdaSmi [1]
 6791 E> 0x2ed99ff66e93 @   43 : 6c f3 0c          TestEqualStrict r7, [12]
         0x2ed99ff66e96 @   46 : 99 09             JumpIfFalse [9] (0x2ed99ff66e9f @ 55)
 6816 S> 0x2ed99ff66e98 @   48 : 0b f8             Ldar r2
         0x2ed99ff66e9a @   50 : 51 0d             Inc [13]
         0x2ed99ff66e9c @   52 : c2                Star2 
         0x2ed99ff66e9d @   53 : 8a 04             Jump [4] (0x2ed99ff66ea1 @ 57)
 6878 S> 0x2ed99ff66e9f @   55 : 8a 0a             Jump [10] (0x2ed99ff66ea9 @ 65)
 6752 S> 0x2ed99ff66ea1 @   57 : 0b f4             Ldar r6
         0x2ed99ff66ea3 @   59 : 52 0e             Dec [14]
         0x2ed99ff66ea5 @   61 : be                Star6 
 6723 E> 0x2ed99ff66ea6 @   62 : 89 2c 00          JumpLoop [44], [0] (0x2ed99ff66e7a @ 18)
 6953 S> 0x2ed99ff66ea9 @   65 : 0b f9             Ldar r1
 6955 E> 0x2ed99ff66eab @   67 : 45 01 0f          AddSmi [1], [15]
         0x2ed99ff66eae @   70 : bf                Star5 
 6969 S> 0x2ed99ff66eaf @   71 : 2d 02 02 10       GetNamedProperty <this>, [2], [16]
         0x2ed99ff66eb3 @   75 : bc                Star8 
         0x2ed99ff66eb4 @   76 : 0b fa             Ldar r0
 6974 E> 0x2ed99ff66eb6 @   78 : 2f f2 12          GetKeyedProperty r8, [18]
         0x2ed99ff66eb9 @   81 : bc                Star8 
 6978 E> 0x2ed99ff66eba @   82 : 2d f2 03 14       GetNamedProperty r8, [3], [20]
 6962 E> 0x2ed99ff66ebe @   86 : 6d f5 16          TestLessThan r5, [22]
         0x2ed99ff66ec1 @   89 : 99 2b             JumpIfFalse [43] (0x2ed99ff66eec @ 132)
 7014 S> 0x2ed99ff66ec3 @   91 : 2d 02 02 17       GetNamedProperty <this>, [2], [23]
         0x2ed99ff66ec7 @   95 : bd                Star7 
         0x2ed99ff66ec8 @   96 : 0b fa             Ldar r0
 7019 E> 0x2ed99ff66eca @   98 : 2f f3 19          GetKeyedProperty r7, [25]
         0x2ed99ff66ecd @  101 : bd                Star7 
         0x2ed99ff66ece @  102 : 0b f5             Ldar r5
 7022 E> 0x2ed99ff66ed0 @  104 : 2f f3 1b          GetKeyedProperty r7, [27]
         0x2ed99ff66ed3 @  107 : bd                Star7 
         0x2ed99ff66ed4 @  108 : 0d 01             LdaSmi [1]
 7026 E> 0x2ed99ff66ed6 @  110 : 6c f3 1d          TestEqualStrict r7, [29]
         0x2ed99ff66ed9 @  113 : 99 09             JumpIfFalse [9] (0x2ed99ff66ee2 @ 122)
 7051 S> 0x2ed99ff66edb @  115 : 0b f8             Ldar r2
         0x2ed99ff66edd @  117 : 51 1e             Inc [30]
         0x2ed99ff66edf @  119 : c2                Star2 
         0x2ed99ff66ee0 @  120 : 8a 04             Jump [4] (0x2ed99ff66ee4 @ 124)
 7113 S> 0x2ed99ff66ee2 @  122 : 8a 0a             Jump [10] (0x2ed99ff66eec @ 132)
 6987 S> 0x2ed99ff66ee4 @  124 : 0b f5             Ldar r5
         0x2ed99ff66ee6 @  126 : 51 1f             Inc [31]
         0x2ed99ff66ee8 @  128 : bf                Star5 
 6940 E> 0x2ed99ff66ee9 @  129 : 89 3a 00          JumpLoop [58], [0] (0x2ed99ff66eaf @ 71)
 7185 S> 0x2ed99ff66eec @  132 : 0b fa             Ldar r0
 7187 E> 0x2ed99ff66eee @  134 : 46 01 20          SubSmi [1], [32]
         0x2ed99ff66ef1 @  137 : c0                Star4 
 7194 S> 0x2ed99ff66ef2 @  138 : 0c                LdaZero 
 7194 E> 0x2ed99ff66ef3 @  139 : 70 f6 21          TestGreaterThanOrEqual r4, [33]
         0x2ed99ff66ef6 @  142 : 99 2b             JumpIfFalse [43] (0x2ed99ff66f21 @ 185)
 7228 S> 0x2ed99ff66ef8 @  144 : 2d 02 02 22       GetNamedProperty <this>, [2], [34]
         0x2ed99ff66efc @  148 : bd                Star7 
         0x2ed99ff66efd @  149 : 0b f6             Ldar r4
 7233 E> 0x2ed99ff66eff @  151 : 2f f3 24          GetKeyedProperty r7, [36]
         0x2ed99ff66f02 @  154 : bd                Star7 
         0x2ed99ff66f03 @  155 : 0b f9             Ldar r1
 7236 E> 0x2ed99ff66f05 @  157 : 2f f3 26          GetKeyedProperty r7, [38]
         0x2ed99ff66f08 @  160 : bd                Star7 
         0x2ed99ff66f09 @  161 : 0d 01             LdaSmi [1]
 7240 E> 0x2ed99ff66f0b @  163 : 6c f3 28          TestEqualStrict r7, [40]
         0x2ed99ff66f0e @  166 : 99 09             JumpIfFalse [9] (0x2ed99ff66f17 @ 175)
 7265 S> 0x2ed99ff66f10 @  168 : 0b f8             Ldar r2
         0x2ed99ff66f12 @  170 : 51 29             Inc [41]
         0x2ed99ff66f14 @  172 : c2                Star2 
         0x2ed99ff66f15 @  173 : 8a 04             Jump [4] (0x2ed99ff66f19 @ 177)
 7327 S> 0x2ed99ff66f17 @  175 : 8a 0a             Jump [10] (0x2ed99ff66f21 @ 185)
 7201 S> 0x2ed99ff66f19 @  177 : 0b f6             Ldar r4
         0x2ed99ff66f1b @  179 : 52 2a             Dec [42]
         0x2ed99ff66f1d @  181 : c0                Star4 
 7172 E> 0x2ed99ff66f1e @  182 : 89 2c 00          JumpLoop [44], [0] (0x2ed99ff66ef2 @ 138)
 7401 S> 0x2ed99ff66f21 @  185 : 0b fa             Ldar r0
 7403 E> 0x2ed99ff66f23 @  187 : 45 01 2b          AddSmi [1], [43]
         0x2ed99ff66f26 @  190 : c1                Star3 
 7417 S> 0x2ed99ff66f27 @  191 : 2d 02 02 2c       GetNamedProperty <this>, [2], [44]
         0x2ed99ff66f2b @  195 : bc                Star8 
 7423 E> 0x2ed99ff66f2c @  196 : 2d f2 03 2e       GetNamedProperty r8, [3], [46]
 7410 E> 0x2ed99ff66f30 @  200 : 6d f7 30          TestLessThan r3, [48]
         0x2ed99ff66f33 @  203 : 99 2b             JumpIfFalse [43] (0x2ed99ff66f5e @ 246)
 7459 S> 0x2ed99ff66f35 @  205 : 2d 02 02 31       GetNamedProperty <this>, [2], [49]
         0x2ed99ff66f39 @  209 : bd                Star7 
         0x2ed99ff66f3a @  210 : 0b f7             Ldar r3
 7464 E> 0x2ed99ff66f3c @  212 : 2f f3 33          GetKeyedProperty r7, [51]
         0x2ed99ff66f3f @  215 : bd                Star7 
         0x2ed99ff66f40 @  216 : 0b f9             Ldar r1
 7467 E> 0x2ed99ff66f42 @  218 : 2f f3 35          GetKeyedProperty r7, [53]
         0x2ed99ff66f45 @  221 : bd                Star7 
         0x2ed99ff66f46 @  222 : 0d 01             LdaSmi [1]
 7471 E> 0x2ed99ff66f48 @  224 : 6c f3 37          TestEqualStrict r7, [55]
         0x2ed99ff66f4b @  227 : 99 09             JumpIfFalse [9] (0x2ed99ff66f54 @ 236)
 7496 S> 0x2ed99ff66f4d @  229 : 0b f8             Ldar r2
         0x2ed99ff66f4f @  231 : 51 38             Inc [56]
         0x2ed99ff66f51 @  233 : c2                Star2 
         0x2ed99ff66f52 @  234 : 8a 04             Jump [4] (0x2ed99ff66f56 @ 238)
 7558 S> 0x2ed99ff66f54 @  236 : 8a 0a             Jump [10] (0x2ed99ff66f5e @ 246)
 7432 S> 0x2ed99ff66f56 @  238 : 0b f7             Ldar r3
         0x2ed99ff66f58 @  240 : 51 39             Inc [57]
         0x2ed99ff66f5a @  242 : c1                Star3 
 7388 E> 0x2ed99ff66f5b @  243 : 89 34 00          JumpLoop [52], [0] (0x2ed99ff66f27 @ 191)
 7597 S> 0x2ed99ff66f5e @  246 : 0b f8             Ldar r2
 7614 S> 0x2ed99ff66f60 @  248 : a9                Return 
Constant pool (size = 4)
0x2ed99ff66f69: [FixedArray] in OldSpace
 - map: 0x286d264c12e1 <Map>
 - length: 4
           0: 0x070073518ac9 <String[1]: #x>
           1: 0x070073518ae1 <String[1]: #y>
           2: 0x2ed99ff656b1 <String[5]: #_grid>
           3: 0x286d264c55f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 136)
0x2ed99ff66f99 <ByteArray[136]>
<< OUTPUTTING DISASSEMBLY END >>
