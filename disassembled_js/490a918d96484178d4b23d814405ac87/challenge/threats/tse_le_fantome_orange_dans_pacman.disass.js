<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x274a69124db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x274a69124db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x274a69124dbc @    4 : c4                Star0 
 1642 S> 0x274a69124dbd @    5 : a9                Return 
Constant pool (size = 1)
0x274a69124dc1: [FixedArray] in OldSpace
 - map: 0x2d2457d412e1 <Map>
 - length: 1
           0: 0x274a69124dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x274a69125c99 <ByteArray[7]>
0x274a69124dd9 points to: [0x274a69124e48]
=== [0x274a69124e48] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0x274a69124e48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x274a69124e4b @    3 : c1                Star3 
   83 E> 0x274a69124e4c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x274a69124e50 @    8 : c2                Star2 
         0x274a69124e51 @    9 : 13 02             LdaConstant [2]
         0x274a69124e53 @   11 : bf                Star5 
   98 E> 0x274a69124e54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x274a69124e58 @   16 : be                Star6 
         0x274a69124e59 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x274a69124e5c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x274a69124e61 @   25 : 0e                LdaUndefined 
  179 E> 0x274a69124e62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  206 S> 0x274a69124e66 @   30 : 13 05             LdaConstant [5]
         0x274a69124e68 @   32 : c1                Star3 
  206 E> 0x274a69124e69 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x274a69124e6d @   37 : c4                Star0 
  282 E> 0x274a69124e6e @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x274a69124e72 @   42 : bf                Star5 
         0x274a69124e73 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x274a69124e77 @   47 : c2                Star2 
         0x274a69124e78 @   48 : 13 06             LdaConstant [6]
         0x274a69124e7a @   50 : c1                Star3 
         0x274a69124e7b @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x274a69124e7f @   55 : be                Star6 
         0x274a69124e80 @   56 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x274a69124e84 @   60 : bd                Star7 
         0x274a69124e85 @   61 : 19 f8 f6          Mov r2, r4
         0x274a69124e88 @   64 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0x274a69124e8d @   69 : c1                Star3 
         0x274a69124e8e @   70 : 19 f6 f9          Mov r4, r1
 1502 S> 0x274a69124e91 @   73 : 0b f9             Ldar r1
 1542 E> 0x274a69124e93 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x274a69124e97 @   79 : 0e                LdaUndefined 
 1639 S> 0x274a69124e98 @   80 : a9                Return 
Constant pool (size = 11)
0x274a69124ea1: [FixedArray] in OldSpace
 - map: 0x2d2457d412e1 <Map>
 - length: 11
           0: 0x2d2457d45ab9 <String[6]: #Object>
           1: 0x2d2457d44c11 <String[14]: #defineProperty>
           2: 0x274a69124f09 <String[10]: #__esModule>
           3: 0x274a69124f29 <ObjectBoilerplateDescription[3]>
           4: 0x274a69124f51 <String[31]: #LeFantomeOrangeDansPacmanThreat>
           5: 0x274a69124f81 <String[8]: #./threat>
           6: 0x274a69124f99 <FixedArray[7]>
           7: 0x274a69125149 <String[6]: #Threat>
           8: 0x274a69125161 <SharedFunctionInfo LeFantomeOrangeDansPacmanThreat>
           9: 0x274a691253a9 <SharedFunctionInfo get_next_move>
          10: 0x274a691259e1 <SharedFunctionInfo getSquaredDistance>
Handler Table (size = 0)
Source Position Table (size = 33)
0x274a69125bf9 <ByteArray[33]>
Boilerplate at 0x274a69124f29: 
0x274a69124f29: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2d2457d42059 <Map>
 - length: 3
           0: 8
           1: 0x2d2457d46419 <String[5]: #value>
           2: 0x2d2457d41729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x274a69124f99 has 7 elements:
0x274a69124f99: [FixedArray] in OldSpace
 - map: 0x2d2457d412e1 <Map>
 - length: 7
           0: 5
           1: 0x274a69124fe1 <DescriptorArray[4]>
           2: 0x2d2457d43301 <NumberDictionary[7]>
           3: 0x2d2457d41329 <FixedArray[0]>
           4: 0x274a691250a1 <DescriptorArray[3]>
           5: 0x2d2457d43301 <NumberDictionary[7]>
           6: 0x2d2457d41329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0x274a69124fe1: [DescriptorArray] in OldSpace
 - map: 0x2d2457d47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2d2457d455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x0dcd98874fe1 <AccessorInfo>
  [1]: 0x2d2457d458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x0dcd98874f71 <AccessorInfo>
  [2]: 0x2d2457d45cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 0, attrs: [___]) @ 0x0dcd98875051 <AccessorInfo>
  [3]: 0x2d2457d465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x274a69125089 <ClassPositions 227, 1501>
Element[2]
0x2d2457d43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2d2457d41329: [FixedArray] in ReadOnlySpace
 - map: 0x2d2457d412e1 <Map>
 - length: 0
Element[4]
0x274a691250a1: [DescriptorArray] in OldSpace
 - map: 0x2d2457d47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 3
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2d2457d44a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x274a69125101: [String] in OldSpace: #get_next_move (const data descriptor, p: 1, attrs: [W_C]) @ 3
  [2]: 0x274a69125121: [String] in OldSpace: #getSquaredDistance (const data descriptor, p: 2, attrs: [W_C]) @ 4
Element[5]
0x2d2457d43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2d2457d41329: [FixedArray] in ReadOnlySpace
 - map: 0x2d2457d412e1 <Map>
 - length: 0
0x274a69125161 points to: [0x274a691251d0]
=== [0x274a691251d0] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x274a691251d0 @    0 : 19 fe f9          Mov <closure>, r1
  353 S> 0x274a691251d3 @    3 : 0b f9             Ldar r1
         0x274a691251d5 @    5 : 5a f7             GetSuperConstructor r3
  388 E> 0x274a691251d7 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x274a691251d9 @    9 : 0b fa             Ldar r0
         0x274a691251db @   11 : 19 03 f6          Mov a0, r4
         0x274a691251de @   14 : 19 04 f5          Mov a1, r5
         0x274a691251e1 @   17 : 19 05 f4          Mov a2, r6
         0x274a691251e4 @   20 : 19 06 f3          Mov a3, r7
  353 E> 0x274a691251e7 @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x274a691251ec @   28 : bc                Star8 
         0x274a691251ed @   29 : 0b 02             Ldar <this>
         0x274a691251ef @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x274a691251f0 @   32 : 19 f2 02          Mov r8, <this>
         0x274a691251f3 @   35 : 0b 02             Ldar <this>
         0x274a691251f5 @   37 : ab                ThrowSuperNotCalledIfHole 
  400 S> 0x274a691251f6 @   38 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x274a691251f9 <ByteArray[15]>
0x274a691253a9 points to: [0x274a69125418]
=== [0x274a69125418] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
  419 E> 0x274a69125418 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x274a6912541b @    3 : 1a f7             PushContext r3
         0x274a6912541d @    5 : 0b 02             Ldar <this>
         0x274a6912541f @    7 : 25 02             StaCurrentContextSlot [2]
         0x274a69125421 @    9 : 10                LdaTheHole 
         0x274a69125422 @   10 : 25 03             StaCurrentContextSlot [3]
  462 S> 0x274a69125424 @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125426 @   14 : bf                Star5 
  467 E> 0x274a69125427 @   15 : 2d f5 01 00       GetNamedProperty r5, [1], [0]
         0x274a6912542b @   19 : c0                Star4 
  467 E> 0x274a6912542c @   20 : 5d f6 f5 02       CallProperty0 r4, r5, [2]
         0x274a69125430 @   24 : c4                Star0 
  526 S> 0x274a69125431 @   25 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x274a69125435 @   29 : c0                Star4 
         0x274a69125436 @   30 : 0d 01             LdaSmi [1]
  533 E> 0x274a69125438 @   32 : 6c f6 06          TestEqualStrict r4, [6]
         0x274a6912543b @   35 : 99 07             JumpIfFalse [7] (0x274a69125442 @ 42)
  554 S> 0x274a6912543d @   37 : 0c                LdaZero 
  582 E> 0x274a6912543e @   38 : 2f fa 07          GetKeyedProperty r0, [7]
  586 S> 0x274a69125441 @   41 : a9                Return 
  679 S> 0x274a69125442 @   42 : 2d fa 03 09       GetNamedProperty r0, [3], [9]
         0x274a69125446 @   46 : c0                Star4 
         0x274a69125447 @   47 : 80 04 00 02       CreateClosure [4], [0], #2
         0x274a6912544b @   51 : be                Star6 
  679 E> 0x274a6912544c @   52 : 5e f6 fa f4 0b    CallProperty1 r4, r0, r6, [11]
         0x274a69125451 @   57 : c3                Star1 
  766 S> 0x274a69125452 @   58 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125454 @   60 : c0                Star4 
  771 E> 0x274a69125455 @   61 : 2d f6 05 0d       GetNamedProperty r4, [5], [13]
  766 E> 0x274a69125459 @   65 : 25 03             StaCurrentContextSlot [3]
  819 S> 0x274a6912545b @   67 : 0d 06             LdaSmi [6]
         0x274a6912545d @   69 : c2                Star2 
  830 S> 0x274a6912545e @   70 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125460 @   72 : bf                Star5 
  839 E> 0x274a69125461 @   73 : 2d f5 06 0f       GetNamedProperty r5, [6], [15]
         0x274a69125465 @   77 : c0                Star4 
         0x274a69125466 @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125468 @   80 : be                Star6 
  863 E> 0x274a69125469 @   81 : 2d f4 07 11       GetNamedProperty r6, [7], [17]
         0x274a6912546d @   85 : be                Star6 
         0x274a6912546e @   86 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125470 @   88 : bd                Star7 
  878 E> 0x274a69125471 @   89 : 2d f3 05 13       GetNamedProperty r7, [5], [19]
         0x274a69125475 @   93 : bd                Star7 
  839 E> 0x274a69125476 @   94 : 5f f6 f5 f4 f3 15 CallProperty2 r4, r5, r6, r7, [21]
         0x274a6912547c @  100 : c0                Star4 
         0x274a6912547d @  101 : 0b f8             Ldar r2
  912 E> 0x274a6912547f @  103 : 3b f8 17          Mul r2, [23]
  897 E> 0x274a69125482 @  106 : 6e f6 18          TestGreaterThan r4, [24]
         0x274a69125485 @  109 : 99 0d             JumpIfFalse [13] (0x274a69125492 @ 122)
  942 S> 0x274a69125487 @  111 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125489 @  113 : c0                Star4 
  960 E> 0x274a6912548a @  114 : 2d f6 05 19       GetNamedProperty r4, [5], [25]
  953 E> 0x274a6912548e @  118 : 25 03             StaCurrentContextSlot [3]
         0x274a69125490 @  120 : 8a 0b             Jump [11] (0x274a6912549b @ 131)
 1016 S> 0x274a69125492 @  122 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125494 @  124 : c0                Star4 
 1034 E> 0x274a69125495 @  125 : 2d f6 08 1b       GetNamedProperty r4, [8], [27]
 1027 E> 0x274a69125499 @  129 : 25 03             StaCurrentContextSlot [3]
 1093 S> 0x274a6912549b @  131 : 2d f9 09 1d       GetNamedProperty r1, [9], [29]
         0x274a6912549f @  135 : c0                Star4 
         0x274a691254a0 @  136 : 80 0a 01 02       CreateClosure [10], [1], #2
         0x274a691254a4 @  140 : be                Star6 
 1093 E> 0x274a691254a5 @  141 : 5e f6 f9 f4 1f    CallProperty1 r4, r1, r6, [31]
         0x274a691254aa @  146 : c0                Star4 
         0x274a691254ab @  147 : 0c                LdaZero 
 1370 E> 0x274a691254ac @  148 : 2f f6 21          GetKeyedProperty r4, [33]
 1374 S> 0x274a691254af @  151 : a9                Return 
Constant pool (size = 11)
0x274a691254b1: [FixedArray] in OldSpace
 - map: 0x2d2457d412e1 <Map>
 - length: 11
           0: 0x274a69125519 <ScopeInfo FUNCTION_SCOPE>
           1: 0x274a691255a1 <String[21]: #getPossibleDirections>
           2: 0x2d2457d455f9 <String[6]: #length>
           3: 0x0dcd98849f61 <String[6]: #filter>
           4: 0x274a691255e1 <SharedFunctionInfo>
           5: 0x274a69125739 <String[17]: #characterPosition>
           6: 0x274a69125121 <String[18]: #getSquaredDistance>
           7: 0x2d2457d45c19 <String[8]: #position>
           8: 0x274a69125761 <String[13]: #spawnPosition>
           9: 0x0dcd9884eb61 <String[4]: #sort>
          10: 0x274a69125799 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 78)
0x274a69125959 <ByteArray[78]>
0x274a691255e1 points to: [0x274a69125650]
=== [0x274a69125650] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  695 S> 0x274a69125650 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125652 @    2 : c3                Star1 
  704 E> 0x274a69125653 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x274a69125657 @    7 : c3                Star1 
         0x274a69125658 @    8 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a6912565a @   10 : c2                Star2 
  728 E> 0x274a6912565b @   11 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
  722 E> 0x274a6912565f @   15 : 2f f9 04          GetKeyedProperty r1, [4]
  695 E> 0x274a69125662 @   18 : 6c 03 06          TestEqualStrict a0, [6]
         0x274a69125665 @   21 : 56                LogicalNot 
  738 S> 0x274a69125666 @   22 : a9                Return 
Constant pool (size = 2)
0x274a69125669: [FixedArray] in OldSpace
 - map: 0x2d2457d412e1 <Map>
 - length: 2
           0: 0x274a69125689 <String[18]: #oppositeDirections>
           1: 0x2d2457d439a1 <String[9]: #direction>
Handler Table (size = 0)
Source Position Table (size = 16)
0x274a691256b1 <ByteArray[16]>
0x274a69125799 points to: [0x274a69125808]
=== [0x274a69125808] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 1140 S> 0x274a69125808 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a6912580a @    2 : c1                Star3 
 1145 E> 0x274a6912580b @    3 : 2d f7 00 00       GetNamedProperty r3, [0], [0]
         0x274a6912580f @    7 : c2                Star2 
         0x274a69125810 @    8 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125812 @   10 : bf                Star5 
 1169 E> 0x274a69125813 @   11 : 2d f5 01 02       GetNamedProperty r5, [1], [2]
         0x274a69125817 @   15 : c0                Star4 
 1169 E> 0x274a69125818 @   16 : 5e f6 f5 03 04    CallProperty1 r4, r5, a0, [4]
         0x274a6912581d @   21 : c0                Star4 
         0x274a6912581e @   22 : 16 03             LdaCurrentContextSlot [3]
 1201 E> 0x274a69125820 @   24 : aa 02             ThrowReferenceErrorIfHole [2]
         0x274a69125822 @   26 : bf                Star5 
 1145 E> 0x274a69125823 @   27 : 5f f8 f7 f6 f5 06 CallProperty2 r2, r3, r4, r5, [6]
         0x274a69125829 @   33 : c4                Star0 
 1244 S> 0x274a6912582a @   34 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a6912582c @   36 : c1                Star3 
 1249 E> 0x274a6912582d @   37 : 2d f7 00 08       GetNamedProperty r3, [0], [8]
         0x274a69125831 @   41 : c2                Star2 
         0x274a69125832 @   42 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x274a69125834 @   44 : bf                Star5 
 1273 E> 0x274a69125835 @   45 : 2d f5 01 0a       GetNamedProperty r5, [1], [10]
         0x274a69125839 @   49 : c0                Star4 
 1273 E> 0x274a6912583a @   50 : 5e f6 f5 04 0c    CallProperty1 r4, r5, a1, [12]
         0x274a6912583f @   55 : c0                Star4 
         0x274a69125840 @   56 : 16 03             LdaCurrentContextSlot [3]
 1305 E> 0x274a69125842 @   58 : aa 02             ThrowReferenceErrorIfHole [2]
         0x274a69125844 @   60 : bf                Star5 
 1249 E> 0x274a69125845 @   61 : 5f f8 f7 f6 f5 0e CallProperty2 r2, r3, r4, r5, [14]
         0x274a6912584b @   67 : c3                Star1 
 1330 S> 0x274a6912584c @   68 : 0b f9             Ldar r1
 1347 E> 0x274a6912584e @   70 : 3a fa 10          Sub r0, [16]
 1359 S> 0x274a69125851 @   73 : a9                Return 
Constant pool (size = 3)
0x274a69125859: [FixedArray] in OldSpace
 - map: 0x2d2457d412e1 <Map>
 - length: 3
           0: 0x274a69125121 <String[18]: #getSquaredDistance>
           1: 0x274a69125881 <String[27]: #computeNewPositionAfterMove>
           2: 0x274a69125581 <String[10]: #targetTile>
Handler Table (size = 0)
Source Position Table (size = 40)
0x274a691258b1 <ByteArray[40]>
0x274a691259e1 points to: [0x274a69125a50]
=== [0x274a69125a50] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1426 S> 0x274a69125a50 @    0 : 21 00 01          LdaGlobal [0], [1]
         0x274a69125a53 @    3 : c3                Star1 
 1438 E> 0x274a69125a54 @    4 : 2d f9 01 03       GetNamedProperty r1, [1], [3]
         0x274a69125a58 @    8 : c4                Star0 
 1447 E> 0x274a69125a59 @    9 : 2d 03 02 06       GetNamedProperty a0, [2], [6]
         0x274a69125a5d @   13 : c2                Star2 
 1456 E> 0x274a69125a5e @   14 : 2d 04 02 08       GetNamedProperty a1, [2], [8]
 1449 E> 0x274a69125a62 @   18 : 3a f8 05          Sub r2, [5]
         0x274a69125a65 @   21 : c2                Star2 
         0x274a69125a66 @   22 : 0d 02             LdaSmi [2]
         0x274a69125a68 @   24 : c1                Star3 
 1438 E> 0x274a69125a69 @   25 : 5f fa f9 f8 f7 0a CallProperty2 r0, r1, r2, r3, [10]
         0x274a69125a6f @   31 : c4                Star0 
 1464 E> 0x274a69125a70 @   32 : 21 00 01          LdaGlobal [0], [1]
         0x274a69125a73 @   35 : c2                Star2 
 1469 E> 0x274a69125a74 @   36 : 2d f8 01 03       GetNamedProperty r2, [1], [3]
         0x274a69125a78 @   40 : c3                Star1 
 1478 E> 0x274a69125a79 @   41 : 2d 03 03 0d       GetNamedProperty a0, [3], [13]
         0x274a69125a7d @   45 : c1                Star3 
 1487 E> 0x274a69125a7e @   46 : 2d 04 03 0f       GetNamedProperty a1, [3], [15]
 1480 E> 0x274a69125a82 @   50 : 3a f7 0c          Sub r3, [12]
         0x274a69125a85 @   53 : c1                Star3 
         0x274a69125a86 @   54 : 0d 02             LdaSmi [2]
         0x274a69125a88 @   56 : c0                Star4 
 1469 E> 0x274a69125a89 @   57 : 5f f9 f8 f7 f6 11 CallProperty2 r1, r2, r3, r4, [17]
 1462 E> 0x274a69125a8f @   63 : 39 fa 00          Add r0, [0]
 1493 S> 0x274a69125a92 @   66 : a9                Return 
Constant pool (size = 4)
0x274a69125a99: [FixedArray] in OldSpace
 - map: 0x2d2457d412e1 <Map>
 - length: 4
           0: 0x0dcd9885a991 <String[4]: #Math>
           1: 0x0dcd9885ab89 <String[3]: #pow>
           2: 0x0dcd98858ac9 <String[1]: #x>
           3: 0x0dcd98858ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 31)
0x274a69125b29 <ByteArray[31]>
<< OUTPUTTING DISASSEMBLY END >>
