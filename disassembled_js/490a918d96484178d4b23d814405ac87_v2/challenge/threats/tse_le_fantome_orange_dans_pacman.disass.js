<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2c45eb464dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2c45eb464dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2c45eb464dcc @    4 : c4                Star0 
 1642 S> 0x2c45eb464dcd @    5 : a9                Return 
Constant pool (size = 1)
0x2c45eb464dd1: [FixedArray] in OldSpace
 - map: 0x043b60e012e1 <Map>
 - length: 1
           0: 0x2c45eb464de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2c45eb465ca9 <ByteArray[7]>
0x2c45eb464de9 points to: [0x2c45eb464e58]
=== [0x2c45eb464e58] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0x2c45eb464e58 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x2c45eb464e5b @    3 : c1                Star3 
   83 E> 0x2c45eb464e5c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x2c45eb464e60 @    8 : c2                Star2 
         0x2c45eb464e61 @    9 : 13 02             LdaConstant [2]
         0x2c45eb464e63 @   11 : bf                Star5 
   98 E> 0x2c45eb464e64 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x2c45eb464e68 @   16 : be                Star6 
         0x2c45eb464e69 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x2c45eb464e6c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x2c45eb464e71 @   25 : 0e                LdaUndefined 
  179 E> 0x2c45eb464e72 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  206 S> 0x2c45eb464e76 @   30 : 13 05             LdaConstant [5]
         0x2c45eb464e78 @   32 : c1                Star3 
  206 E> 0x2c45eb464e79 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x2c45eb464e7d @   37 : c4                Star0 
  282 E> 0x2c45eb464e7e @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x2c45eb464e82 @   42 : bf                Star5 
         0x2c45eb464e83 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x2c45eb464e87 @   47 : c2                Star2 
         0x2c45eb464e88 @   48 : 13 06             LdaConstant [6]
         0x2c45eb464e8a @   50 : c1                Star3 
         0x2c45eb464e8b @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x2c45eb464e8f @   55 : be                Star6 
         0x2c45eb464e90 @   56 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x2c45eb464e94 @   60 : bd                Star7 
         0x2c45eb464e95 @   61 : 19 f8 f6          Mov r2, r4
         0x2c45eb464e98 @   64 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0x2c45eb464e9d @   69 : c1                Star3 
         0x2c45eb464e9e @   70 : 19 f6 f9          Mov r4, r1
 1502 S> 0x2c45eb464ea1 @   73 : 0b f9             Ldar r1
 1542 E> 0x2c45eb464ea3 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x2c45eb464ea7 @   79 : 0e                LdaUndefined 
 1639 S> 0x2c45eb464ea8 @   80 : a9                Return 
Constant pool (size = 11)
0x2c45eb464eb1: [FixedArray] in OldSpace
 - map: 0x043b60e012e1 <Map>
 - length: 11
           0: 0x043b60e05ab9 <String[6]: #Object>
           1: 0x043b60e04c11 <String[14]: #defineProperty>
           2: 0x2c45eb464f19 <String[10]: #__esModule>
           3: 0x2c45eb464f39 <ObjectBoilerplateDescription[3]>
           4: 0x2c45eb464f61 <String[31]: #LeFantomeOrangeDansPacmanThreat>
           5: 0x2c45eb464f91 <String[8]: #./threat>
           6: 0x2c45eb464fa9 <FixedArray[7]>
           7: 0x2c45eb465159 <String[6]: #Threat>
           8: 0x2c45eb465171 <SharedFunctionInfo LeFantomeOrangeDansPacmanThreat>
           9: 0x2c45eb4653b9 <SharedFunctionInfo get_next_move>
          10: 0x2c45eb4659f1 <SharedFunctionInfo getSquaredDistance>
Handler Table (size = 0)
Source Position Table (size = 33)
0x2c45eb465c09 <ByteArray[33]>
Object boilerplate at 0x2c45eb464f39: 
0x2c45eb464f39: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x043b60e02059 <Map>
 - length: 3
           0: 8
           1: 0x043b60e06419 <String[5]: #value>
           2: 0x043b60e01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x2c45eb464fa9 has 7 elements:
0x2c45eb464fa9: [FixedArray] in OldSpace
 - map: 0x043b60e012e1 <Map>
 - length: 7
           0: 5
           1: 0x2c45eb464ff1 <DescriptorArray[4]>
           2: 0x043b60e03301 <NumberDictionary[7]>
           3: 0x043b60e01329 <FixedArray[0]>
           4: 0x2c45eb4650b1 <DescriptorArray[3]>
           5: 0x043b60e03301 <NumberDictionary[7]>
           6: 0x043b60e01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0x2c45eb464ff1: [DescriptorArray] in OldSpace
 - map: 0x043b60e07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x43b60e055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x21ed631b4fe1 <AccessorInfo>
  [1]: 0x43b60e058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x21ed631b4f71 <AccessorInfo>
  [2]: 0x43b60e05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x21ed631b5051 <AccessorInfo>
  [3]: 0x043b60e065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x2c45eb465099 <ClassPositions 227, 1501>
Element[2]
0x43b60e03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x43b60e01329: [FixedArray] in ReadOnlySpace
 - map: 0x043b60e012e1 <Map>
 - length: 0
Element[4]
0x2c45eb4650b1: [DescriptorArray] in OldSpace
 - map: 0x043b60e07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 3
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x43b60e04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x2c45eb465111: [String] in OldSpace: #get_next_move (const data descriptor, p: 0, attrs: [W_C]) @ 3
  [2]: 0x2c45eb465131: [String] in OldSpace: #getSquaredDistance (const data descriptor, p: 2, attrs: [W_C]) @ 4
Element[5]
0x43b60e03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x43b60e01329: [FixedArray] in ReadOnlySpace
 - map: 0x043b60e012e1 <Map>
 - length: 0
0x2c45eb465171 points to: [0x2c45eb4651e0]
=== [0x2c45eb4651e0] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x2c45eb4651e0 @    0 : 19 fe f9          Mov <closure>, r1
  353 S> 0x2c45eb4651e3 @    3 : 0b f9             Ldar r1
         0x2c45eb4651e5 @    5 : 5a f7             GetSuperConstructor r3
  388 E> 0x2c45eb4651e7 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x2c45eb4651e9 @    9 : 0b fa             Ldar r0
         0x2c45eb4651eb @   11 : 19 03 f6          Mov a0, r4
         0x2c45eb4651ee @   14 : 19 04 f5          Mov a1, r5
         0x2c45eb4651f1 @   17 : 19 05 f4          Mov a2, r6
         0x2c45eb4651f4 @   20 : 19 06 f3          Mov a3, r7
  353 E> 0x2c45eb4651f7 @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x2c45eb4651fc @   28 : bc                Star8 
         0x2c45eb4651fd @   29 : 0b 02             Ldar <this>
         0x2c45eb4651ff @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x2c45eb465200 @   32 : 19 f2 02          Mov r8, <this>
         0x2c45eb465203 @   35 : 0b 02             Ldar <this>
         0x2c45eb465205 @   37 : ab                ThrowSuperNotCalledIfHole 
  400 S> 0x2c45eb465206 @   38 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x2c45eb465209 <ByteArray[15]>
0x2c45eb4653b9 points to: [0x2c45eb465428]
=== [0x2c45eb465428] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
  419 E> 0x2c45eb465428 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x2c45eb46542b @    3 : 1a f7             PushContext r3
         0x2c45eb46542d @    5 : 0b 02             Ldar <this>
         0x2c45eb46542f @    7 : 25 02             StaCurrentContextSlot [2]
         0x2c45eb465431 @    9 : 10                LdaTheHole 
         0x2c45eb465432 @   10 : 25 03             StaCurrentContextSlot [3]
  462 S> 0x2c45eb465434 @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465436 @   14 : bf                Star5 
  467 E> 0x2c45eb465437 @   15 : 2d f5 01 00       GetNamedProperty r5, [1], [0]
         0x2c45eb46543b @   19 : c0                Star4 
  467 E> 0x2c45eb46543c @   20 : 5d f6 f5 02       CallProperty0 r4, r5, [2]
         0x2c45eb465440 @   24 : c4                Star0 
  526 S> 0x2c45eb465441 @   25 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x2c45eb465445 @   29 : c0                Star4 
         0x2c45eb465446 @   30 : 0d 01             LdaSmi [1]
  533 E> 0x2c45eb465448 @   32 : 6c f6 06          TestEqualStrict r4, [6]
         0x2c45eb46544b @   35 : 99 07             JumpIfFalse [7] (0x2c45eb465452 @ 42)
  554 S> 0x2c45eb46544d @   37 : 0c                LdaZero 
  582 E> 0x2c45eb46544e @   38 : 2f fa 07          GetKeyedProperty r0, [7]
  586 S> 0x2c45eb465451 @   41 : a9                Return 
  679 S> 0x2c45eb465452 @   42 : 2d fa 03 09       GetNamedProperty r0, [3], [9]
         0x2c45eb465456 @   46 : c0                Star4 
         0x2c45eb465457 @   47 : 80 04 00 02       CreateClosure [4], [0], #2
         0x2c45eb46545b @   51 : be                Star6 
  679 E> 0x2c45eb46545c @   52 : 5e f6 fa f4 0b    CallProperty1 r4, r0, r6, [11]
         0x2c45eb465461 @   57 : c3                Star1 
  766 S> 0x2c45eb465462 @   58 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465464 @   60 : c0                Star4 
  771 E> 0x2c45eb465465 @   61 : 2d f6 05 0d       GetNamedProperty r4, [5], [13]
  766 E> 0x2c45eb465469 @   65 : 25 03             StaCurrentContextSlot [3]
  819 S> 0x2c45eb46546b @   67 : 0d 06             LdaSmi [6]
         0x2c45eb46546d @   69 : c2                Star2 
  830 S> 0x2c45eb46546e @   70 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465470 @   72 : bf                Star5 
  839 E> 0x2c45eb465471 @   73 : 2d f5 06 0f       GetNamedProperty r5, [6], [15]
         0x2c45eb465475 @   77 : c0                Star4 
         0x2c45eb465476 @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465478 @   80 : be                Star6 
  863 E> 0x2c45eb465479 @   81 : 2d f4 07 11       GetNamedProperty r6, [7], [17]
         0x2c45eb46547d @   85 : be                Star6 
         0x2c45eb46547e @   86 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465480 @   88 : bd                Star7 
  878 E> 0x2c45eb465481 @   89 : 2d f3 05 13       GetNamedProperty r7, [5], [19]
         0x2c45eb465485 @   93 : bd                Star7 
  839 E> 0x2c45eb465486 @   94 : 5f f6 f5 f4 f3 15 CallProperty2 r4, r5, r6, r7, [21]
         0x2c45eb46548c @  100 : c0                Star4 
         0x2c45eb46548d @  101 : 0b f8             Ldar r2
  912 E> 0x2c45eb46548f @  103 : 3b f8 17          Mul r2, [23]
  897 E> 0x2c45eb465492 @  106 : 6e f6 18          TestGreaterThan r4, [24]
         0x2c45eb465495 @  109 : 99 0d             JumpIfFalse [13] (0x2c45eb4654a2 @ 122)
  942 S> 0x2c45eb465497 @  111 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465499 @  113 : c0                Star4 
  960 E> 0x2c45eb46549a @  114 : 2d f6 05 19       GetNamedProperty r4, [5], [25]
  953 E> 0x2c45eb46549e @  118 : 25 03             StaCurrentContextSlot [3]
         0x2c45eb4654a0 @  120 : 8a 0b             Jump [11] (0x2c45eb4654ab @ 131)
 1016 S> 0x2c45eb4654a2 @  122 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb4654a4 @  124 : c0                Star4 
 1034 E> 0x2c45eb4654a5 @  125 : 2d f6 08 1b       GetNamedProperty r4, [8], [27]
 1027 E> 0x2c45eb4654a9 @  129 : 25 03             StaCurrentContextSlot [3]
 1093 S> 0x2c45eb4654ab @  131 : 2d f9 09 1d       GetNamedProperty r1, [9], [29]
         0x2c45eb4654af @  135 : c0                Star4 
         0x2c45eb4654b0 @  136 : 80 0a 01 02       CreateClosure [10], [1], #2
         0x2c45eb4654b4 @  140 : be                Star6 
 1093 E> 0x2c45eb4654b5 @  141 : 5e f6 f9 f4 1f    CallProperty1 r4, r1, r6, [31]
         0x2c45eb4654ba @  146 : c0                Star4 
         0x2c45eb4654bb @  147 : 0c                LdaZero 
 1370 E> 0x2c45eb4654bc @  148 : 2f f6 21          GetKeyedProperty r4, [33]
 1374 S> 0x2c45eb4654bf @  151 : a9                Return 
Constant pool (size = 11)
0x2c45eb4654c1: [FixedArray] in OldSpace
 - map: 0x043b60e012e1 <Map>
 - length: 11
           0: 0x2c45eb465529 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2c45eb4655b1 <String[21]: #getPossibleDirections>
           2: 0x043b60e055f9 <String[6]: #length>
           3: 0x21ed63189f61 <String[6]: #filter>
           4: 0x2c45eb4655f1 <SharedFunctionInfo>
           5: 0x2c45eb465749 <String[17]: #characterPosition>
           6: 0x2c45eb465131 <String[18]: #getSquaredDistance>
           7: 0x043b60e05c19 <String[8]: #position>
           8: 0x2c45eb465771 <String[13]: #spawnPosition>
           9: 0x21ed6318eb61 <String[4]: #sort>
          10: 0x2c45eb4657a9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 78)
0x2c45eb465969 <ByteArray[78]>
0x2c45eb4655f1 points to: [0x2c45eb465660]
=== [0x2c45eb465660] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  695 S> 0x2c45eb465660 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465662 @    2 : c3                Star1 
  704 E> 0x2c45eb465663 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x2c45eb465667 @    7 : c3                Star1 
         0x2c45eb465668 @    8 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb46566a @   10 : c2                Star2 
  728 E> 0x2c45eb46566b @   11 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
  722 E> 0x2c45eb46566f @   15 : 2f f9 04          GetKeyedProperty r1, [4]
  695 E> 0x2c45eb465672 @   18 : 6c 03 06          TestEqualStrict a0, [6]
         0x2c45eb465675 @   21 : 56                LogicalNot 
  738 S> 0x2c45eb465676 @   22 : a9                Return 
Constant pool (size = 2)
0x2c45eb465679: [FixedArray] in OldSpace
 - map: 0x043b60e012e1 <Map>
 - length: 2
           0: 0x2c45eb465699 <String[18]: #oppositeDirections>
           1: 0x043b60e039a1 <String[9]: #direction>
Handler Table (size = 0)
Source Position Table (size = 16)
0x2c45eb4656c1 <ByteArray[16]>
0x2c45eb4657a9 points to: [0x2c45eb465818]
=== [0x2c45eb465818] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 1140 S> 0x2c45eb465818 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb46581a @    2 : c1                Star3 
 1145 E> 0x2c45eb46581b @    3 : 2d f7 00 00       GetNamedProperty r3, [0], [0]
         0x2c45eb46581f @    7 : c2                Star2 
         0x2c45eb465820 @    8 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465822 @   10 : bf                Star5 
 1169 E> 0x2c45eb465823 @   11 : 2d f5 01 02       GetNamedProperty r5, [1], [2]
         0x2c45eb465827 @   15 : c0                Star4 
 1169 E> 0x2c45eb465828 @   16 : 5e f6 f5 03 04    CallProperty1 r4, r5, a0, [4]
         0x2c45eb46582d @   21 : c0                Star4 
         0x2c45eb46582e @   22 : 16 03             LdaCurrentContextSlot [3]
 1201 E> 0x2c45eb465830 @   24 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2c45eb465832 @   26 : bf                Star5 
 1145 E> 0x2c45eb465833 @   27 : 5f f8 f7 f6 f5 06 CallProperty2 r2, r3, r4, r5, [6]
         0x2c45eb465839 @   33 : c4                Star0 
 1244 S> 0x2c45eb46583a @   34 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb46583c @   36 : c1                Star3 
 1249 E> 0x2c45eb46583d @   37 : 2d f7 00 08       GetNamedProperty r3, [0], [8]
         0x2c45eb465841 @   41 : c2                Star2 
         0x2c45eb465842 @   42 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2c45eb465844 @   44 : bf                Star5 
 1273 E> 0x2c45eb465845 @   45 : 2d f5 01 0a       GetNamedProperty r5, [1], [10]
         0x2c45eb465849 @   49 : c0                Star4 
 1273 E> 0x2c45eb46584a @   50 : 5e f6 f5 04 0c    CallProperty1 r4, r5, a1, [12]
         0x2c45eb46584f @   55 : c0                Star4 
         0x2c45eb465850 @   56 : 16 03             LdaCurrentContextSlot [3]
 1305 E> 0x2c45eb465852 @   58 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2c45eb465854 @   60 : bf                Star5 
 1249 E> 0x2c45eb465855 @   61 : 5f f8 f7 f6 f5 0e CallProperty2 r2, r3, r4, r5, [14]
         0x2c45eb46585b @   67 : c3                Star1 
 1330 S> 0x2c45eb46585c @   68 : 0b f9             Ldar r1
 1347 E> 0x2c45eb46585e @   70 : 3a fa 10          Sub r0, [16]
 1359 S> 0x2c45eb465861 @   73 : a9                Return 
Constant pool (size = 3)
0x2c45eb465869: [FixedArray] in OldSpace
 - map: 0x043b60e012e1 <Map>
 - length: 3
           0: 0x2c45eb465131 <String[18]: #getSquaredDistance>
           1: 0x2c45eb465891 <String[27]: #computeNewPositionAfterMove>
           2: 0x2c45eb465591 <String[10]: #targetTile>
Handler Table (size = 0)
Source Position Table (size = 40)
0x2c45eb4658c1 <ByteArray[40]>
0x2c45eb4659f1 points to: [0x2c45eb465a60]
=== [0x2c45eb465a60] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1426 S> 0x2c45eb465a60 @    0 : 21 00 01          LdaGlobal [0], [1]
         0x2c45eb465a63 @    3 : c3                Star1 
 1438 E> 0x2c45eb465a64 @    4 : 2d f9 01 03       GetNamedProperty r1, [1], [3]
         0x2c45eb465a68 @    8 : c4                Star0 
 1447 E> 0x2c45eb465a69 @    9 : 2d 03 02 06       GetNamedProperty a0, [2], [6]
         0x2c45eb465a6d @   13 : c2                Star2 
 1456 E> 0x2c45eb465a6e @   14 : 2d 04 02 08       GetNamedProperty a1, [2], [8]
 1449 E> 0x2c45eb465a72 @   18 : 3a f8 05          Sub r2, [5]
         0x2c45eb465a75 @   21 : c2                Star2 
         0x2c45eb465a76 @   22 : 0d 02             LdaSmi [2]
         0x2c45eb465a78 @   24 : c1                Star3 
 1438 E> 0x2c45eb465a79 @   25 : 5f fa f9 f8 f7 0a CallProperty2 r0, r1, r2, r3, [10]
         0x2c45eb465a7f @   31 : c4                Star0 
 1464 E> 0x2c45eb465a80 @   32 : 21 00 01          LdaGlobal [0], [1]
         0x2c45eb465a83 @   35 : c2                Star2 
 1469 E> 0x2c45eb465a84 @   36 : 2d f8 01 03       GetNamedProperty r2, [1], [3]
         0x2c45eb465a88 @   40 : c3                Star1 
 1478 E> 0x2c45eb465a89 @   41 : 2d 03 03 0d       GetNamedProperty a0, [3], [13]
         0x2c45eb465a8d @   45 : c1                Star3 
 1487 E> 0x2c45eb465a8e @   46 : 2d 04 03 0f       GetNamedProperty a1, [3], [15]
 1480 E> 0x2c45eb465a92 @   50 : 3a f7 0c          Sub r3, [12]
         0x2c45eb465a95 @   53 : c1                Star3 
         0x2c45eb465a96 @   54 : 0d 02             LdaSmi [2]
         0x2c45eb465a98 @   56 : c0                Star4 
 1469 E> 0x2c45eb465a99 @   57 : 5f f9 f8 f7 f6 11 CallProperty2 r1, r2, r3, r4, [17]
 1462 E> 0x2c45eb465a9f @   63 : 39 fa 00          Add r0, [0]
 1493 S> 0x2c45eb465aa2 @   66 : a9                Return 
Constant pool (size = 4)
0x2c45eb465aa9: [FixedArray] in OldSpace
 - map: 0x043b60e012e1 <Map>
 - length: 4
           0: 0x21ed6319a991 <String[4]: #Math>
           1: 0x21ed6319ab89 <String[3]: #pow>
           2: 0x21ed63198ac9 <String[1]: #x>
           3: 0x21ed63198ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 31)
0x2c45eb465b39 <ByteArray[31]>
<< OUTPUTTING DISASSEMBLY END >>
