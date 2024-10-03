<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x293203e64f28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x293203e64f28 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x293203e64f2c @    4 : c4                Star0 
 8243 S> 0x293203e64f2d @    5 : a9                Return 
Constant pool (size = 1)
0x293203e64f31: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 1
           0: 0x293203e64f49 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x293203e679f9 <ByteArray[8]>
0x293203e64f49 points to: [0x293203e64fb8]
=== [0x293203e64fb8] DISASSEMBLY ===
Parameter count 6
Register count 14
Frame size 112
OSR urgency: 0
Bytecode age: 0
   10 E> 0x293203e64fb8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x293203e64fbb @    3 : 1a f9             PushContext r1
         0x293203e64fbd @    5 : 10                LdaTheHole 
         0x293203e64fbe @    6 : 25 02             StaCurrentContextSlot [2]
         0x293203e64fc0 @    8 : 10                LdaTheHole 
         0x293203e64fc1 @    9 : 25 03             StaCurrentContextSlot [3]
   76 S> 0x293203e64fc3 @   11 : 21 01 00          LdaGlobal [1], [0]
         0x293203e64fc6 @   14 : c1                Star3 
   83 E> 0x293203e64fc7 @   15 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x293203e64fcb @   19 : c2                Star2 
         0x293203e64fcc @   20 : 13 03             LdaConstant [3]
         0x293203e64fce @   22 : bf                Star5 
   98 E> 0x293203e64fcf @   23 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x293203e64fd3 @   27 : be                Star6 
         0x293203e64fd4 @   28 : 19 03 f6          Mov a0, r4
   83 E> 0x293203e64fd7 @   31 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x293203e64fdc @   36 : 0e                LdaUndefined 
  163 E> 0x293203e64fdd @   37 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  190 S> 0x293203e64fe1 @   41 : 13 06             LdaConstant [6]
         0x293203e64fe3 @   43 : c1                Star3 
  190 E> 0x293203e64fe4 @   44 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  190 E> 0x293203e64fe8 @   48 : 25 02             StaCurrentContextSlot [2]
  239 S> 0x293203e64fea @   50 : 0d ff             LdaSmi [-1]
  239 E> 0x293203e64fec @   52 : 25 03             StaCurrentContextSlot [3]
         0x293203e64fee @   54 : 81 07             CreateBlockContext [7]
         0x293203e64ff0 @   56 : 1a f8             PushContext r2
         0x293203e64ff2 @   58 : 10                LdaTheHole 
         0x293203e64ff3 @   59 : 25 02             StaCurrentContextSlot [2]
         0x293203e64ff5 @   61 : 10                LdaTheHole 
         0x293203e64ff6 @   62 : be                Star6 
         0x293203e64ff7 @   63 : 80 09 00 02       CreateClosure [9], [0], #2
         0x293203e64ffb @   67 : c1                Star3 
         0x293203e64ffc @   68 : 13 08             LdaConstant [8]
         0x293203e64ffe @   70 : c0                Star4 
         0x293203e64fff @   71 : 80 0a 01 02       CreateClosure [10], [1], #2
         0x293203e65003 @   75 : bd                Star7 
         0x293203e65004 @   76 : 80 0b 02 02       CreateClosure [11], [2], #2
         0x293203e65008 @   80 : bc                Star8 
         0x293203e65009 @   81 : 80 0c 03 02       CreateClosure [12], [3], #2
         0x293203e6500d @   85 : bb                Star9 
         0x293203e6500e @   86 : 80 0d 04 02       CreateClosure [13], [4], #2
         0x293203e65012 @   90 : ba                Star10 
         0x293203e65013 @   91 : 80 0e 05 02       CreateClosure [14], [5], #2
         0x293203e65017 @   95 : b9                Star11 
         0x293203e65018 @   96 : 80 0f 06 02       CreateClosure [15], [6], #2
         0x293203e6501c @  100 : b8                Star12 
         0x293203e6501d @  101 : 80 10 07 02       CreateClosure [16], [7], #2
         0x293203e65021 @  105 : b7                Star13 
         0x293203e65022 @  106 : 19 f7 f5          Mov r3, r5
         0x293203e65025 @  109 : 65 28 00 f6 0a    CallRuntime [DefineClass], r4-r13
         0x293203e6502a @  114 : c0                Star4 
         0x293203e6502b @  115 : 0b f5             Ldar r5
         0x293203e6502d @  117 : 25 02             StaCurrentContextSlot [2]
         0x293203e6502f @  119 : 1b f8             PopContext r2
         0x293203e65031 @  121 : c4                Star0 
 8157 S> 0x293203e65032 @  122 : 0b fa             Ldar r0
 8181 E> 0x293203e65034 @  124 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x293203e65038 @  128 : 0e                LdaUndefined 
 8240 S> 0x293203e65039 @  129 : a9                Return 
Constant pool (size = 17)
0x293203e65041: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 17
           0: 0x293203e650d9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x043ec1405ab9 <String[6]: #Object>
           2: 0x043ec1404c11 <String[14]: #defineProperty>
           3: 0x293203e65179 <String[10]: #__esModule>
           4: 0x293203e65199 <ObjectBoilerplateDescription[3]>
           5: 0x293203e651c1 <String[15]: #PathfindingGrid>
           6: 0x293203e651e1 <String[18]: #../geometry/vector>
           7: 0x293203e65209 <ScopeInfo CLASS_SCOPE>
           8: 0x293203e65251 <FixedArray[7]>
           9: 0x293203e65519 <SharedFunctionInfo PathfindingGrid>
          10: 0x293203e65a19 <SharedFunctionInfo from2DArray>
          11: 0x293203e65b41 <SharedFunctionInfo getPath>
          12: 0x293203e660d9 <SharedFunctionInfo getDistances>
          13: 0x293203e662c1 <SharedFunctionInfo internalGetDistances>
          14: 0x293203e66ac1 <SharedFunctionInfo isPositionValid>
          15: 0x293203e66c31 <SharedFunctionInfo getNeighbours>
          16: 0x293203e67179 <SharedFunctionInfo getNeighboursFast>
Handler Table (size = 0)
Source Position Table (size = 39)
0x293203e679a9 <ByteArray[39]>
Object boilerplate at 0x293203e65199: 
0x293203e65199: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x043ec1402059 <Map>
 - length: 3
           0: 8
           1: 0x043ec1406419 <String[5]: #value>
           2: 0x043ec1401729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x293203e65251 has 7 elements:
0x293203e65251: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 7
           0: 10
           1: 0x293203e65299 <DescriptorArray[5]>
           2: 0x043ec1403301 <NumberDictionary[7]>
           3: 0x043ec1401329 <FixedArray[0]>
           4: 0x293203e65391 <DescriptorArray[7]>
           5: 0x043ec1403301 <NumberDictionary[7]>
           6: 0x043ec1401329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xa (10)
Element[1]
0x293203e65299: [DescriptorArray] in OldSpace
 - map: 0x043ec1407761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x43ec14055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x013af0ef4fe1 <AccessorInfo>
  [1]: 0x43ec14058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 1, attrs: [__C]) @ 0x013af0ef4f71 <AccessorInfo>
  [2]: 0x43ec1405cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x013af0ef5051 <AccessorInfo>
  [3]: 0x043ec14065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 4, attrs: [W_C]) @ 0x293203e65359 <ClassPositions 243, 8156>
  [4]: 0x293203e65371: [String] in OldSpace: #from2DArray (const data descriptor, p: 2, attrs: [W_C]) @ 3
Element[2]
0x43ec1403301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x43ec1401329: [FixedArray] in ReadOnlySpace
 - map: 0x043ec14012e1 <Map>
 - length: 0
Element[4]
0x293203e65391: [DescriptorArray] in OldSpace
 - map: 0x043ec1407761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 7
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x43ec1404a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 3, attrs: [W_C]) @ 1
  [1]: 0x293203e65451: [String] in OldSpace: #getPath (const data descriptor, p: 6, attrs: [W_C]) @ 4
  [2]: 0x293203e65469: [String] in OldSpace: #getDistances (const data descriptor, p: 2, attrs: [W_C]) @ 5
  [3]: 0x293203e65489: [String] in OldSpace: #internalGetDistances (const data descriptor, p: 0, attrs: [W_C]) @ 6
  [4]: 0x293203e654b1: [String] in OldSpace: #isPositionValid (const data descriptor, p: 4, attrs: [W_C]) @ 7
  [5]: 0x293203e654d1: [String] in OldSpace: #getNeighbours (const data descriptor, p: 5, attrs: [W_C]) @ 8
  [6]: 0x293203e654f1: [String] in OldSpace: #getNeighboursFast (const data descriptor, p: 1, attrs: [W_C]) @ 9
Element[5]
0x43ec1403301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x43ec1401329: [FixedArray] in ReadOnlySpace
 - map: 0x043ec14012e1 <Map>
 - length: 0
0x293203e65519 points to: [0x293203e65588]
=== [0x293203e65588] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  414 E> 0x293203e65588 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x293203e6558b @    3 : 1a fa             PushContext r0
         0x293203e6558d @    5 : 0b 02             Ldar <this>
         0x293203e6558f @    7 : 25 02             StaCurrentContextSlot [2]
  455 S> 0x293203e65591 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65593 @   11 : c3                Star1 
         0x293203e65594 @   12 : 0b 03             Ldar a0
  466 E> 0x293203e65596 @   14 : 32 f9 01 00       SetNamedProperty r1, [1], [0]
  483 S> 0x293203e6559a @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e6559c @   20 : c3                Star1 
         0x293203e6559d @   21 : 0b 04             Ldar a1
  510 E> 0x293203e6559f @   23 : 32 f9 02 02       SetNamedProperty r1, [2], [2]
  543 S> 0x293203e655a3 @   27 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e655a5 @   29 : c3                Star1 
         0x293203e655a6 @   30 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e655a8 @   32 : c2                Star2 
  562 E> 0x293203e655a9 @   33 : 2d f8 01 04       GetNamedProperty r2, [1], [4]
         0x293203e655ad @   37 : c2                Star2 
  568 E> 0x293203e655ae @   38 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
  555 E> 0x293203e655b2 @   42 : 32 f9 04 08       SetNamedProperty r1, [4], [8]
  584 S> 0x293203e655b6 @   46 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e655b8 @   48 : c3                Star1 
  593 E> 0x293203e655b9 @   49 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x293203e655bd @   53 : c3                Star1 
         0x293203e655be @   54 : 0c                LdaZero 
  600 E> 0x293203e655bf @   55 : 6c f9 0c          TestEqualStrict r1, [12]
         0x293203e655c2 @   58 : 99 11             JumpIfFalse [17] (0x293203e655d3 @ 75)
  621 S> 0x293203e655c4 @   60 : 21 05 0d          LdaGlobal [5], [13]
         0x293203e655c7 @   63 : c3                Star1 
         0x293203e655c8 @   64 : 13 06             LdaConstant [6]
         0x293203e655ca @   66 : c2                Star2 
         0x293203e655cb @   67 : 0b f9             Ldar r1
  627 E> 0x293203e655cd @   69 : 69 f9 f8 01 0f    Construct r1, r2-r2, [15]
  621 E> 0x293203e655d2 @   74 : a7                Throw 
  673 S> 0x293203e655d3 @   75 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e655d5 @   77 : c3                Star1 
         0x293203e655d6 @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e655d8 @   80 : c2                Star2 
  693 E> 0x293203e655d9 @   81 : 2d f8 01 11       GetNamedProperty r2, [1], [17]
         0x293203e655dd @   85 : c2                Star2 
         0x293203e655de @   86 : 0c                LdaZero 
  698 E> 0x293203e655df @   87 : 2f f8 13          GetKeyedProperty r2, [19]
         0x293203e655e2 @   90 : c2                Star2 
  702 E> 0x293203e655e3 @   91 : 2d f8 03 15       GetNamedProperty r2, [3], [21]
  686 E> 0x293203e655e7 @   95 : 32 f9 07 17       SetNamedProperty r1, [7], [23]
  718 S> 0x293203e655eb @   99 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e655ed @  101 : c2                Star2 
  727 E> 0x293203e655ee @  102 : 2d f8 01 19       GetNamedProperty r2, [1], [25]
         0x293203e655f2 @  106 : c2                Star2 
  733 E> 0x293203e655f3 @  107 : 2d f8 08 1b       GetNamedProperty r2, [8], [27]
         0x293203e655f7 @  111 : c3                Star1 
         0x293203e655f8 @  112 : 80 09 00 02       CreateClosure [9], [0], #2
         0x293203e655fc @  116 : c1                Star3 
  733 E> 0x293203e655fd @  117 : 5e f9 f8 f7 1d    CallProperty1 r1, r2, r3, [29]
         0x293203e65602 @  122 : 9e 06             JumpIfUndefinedOrNull [6] (0x293203e65608 @ 128)
         0x293203e65604 @  124 : 96 07             JumpIfToBooleanTrue [7] (0x293203e6560b @ 131)
         0x293203e65606 @  126 : 8a 14             Jump [20] (0x293203e6561a @ 146)
         0x293203e65608 @  128 : 12                LdaFalse 
         0x293203e65609 @  129 : 99 11             JumpIfFalse [17] (0x293203e6561a @ 146)
  808 S> 0x293203e6560b @  131 : 21 05 0d          LdaGlobal [5], [13]
         0x293203e6560e @  134 : c3                Star1 
         0x293203e6560f @  135 : 13 0a             LdaConstant [10]
         0x293203e65611 @  137 : c2                Star2 
         0x293203e65612 @  138 : 0b f9             Ldar r1
  814 E> 0x293203e65614 @  140 : 69 f9 f8 01 1f    Construct r1, r2-r2, [31]
  808 E> 0x293203e65619 @  145 : a7                Throw 
         0x293203e6561a @  146 : 0e                LdaUndefined 
  866 S> 0x293203e6561b @  147 : a9                Return 
Constant pool (size = 11)
0x293203e65621: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 11
           0: 0x293203e65689 <ScopeInfo FUNCTION_SCOPE>
           1: 0x293203e656e9 <String[5]: #_grid>
           2: 0x293203e65701 <String[21]: #_withDiagonalMovement>
           3: 0x043ec14055f9 <String[6]: #length>
           4: 0x293203e65729 <String[6]: #_width>
           5: 0x043ec1404de1 <String[5]: #Error>
           6: 0x293203e65741 <String[13]: #Grid is empty>
           7: 0x293203e65761 <String[7]: #_height>
           8: 0x013af0eca009 <String[4]: #find>
           9: 0x293203e65791 <SharedFunctionInfo>
          10: 0x293203e67901 <String[23]: #Grid is not rectangular>
Handler Table (size = 0)
Source Position Table (size = 65)
0x293203e67929 <ByteArray[65]>
0x293203e65791 points to: [0x293203e65800]
=== [0x293203e65800] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
  759 S> 0x293203e65800 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e65804 @    4 : c4                Star0 
         0x293203e65805 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65807 @    7 : c3                Star1 
  775 E> 0x293203e65808 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
  766 E> 0x293203e6580c @   12 : 6c fa 04          TestEqualStrict r0, [4]
         0x293203e6580f @   15 : 56                LogicalNot 
  782 S> 0x293203e65810 @   16 : a9                Return 
Constant pool (size = 2)
0x293203e65819: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 2
           0: 0x043ec14055f9 <String[6]: #length>
           1: 0x293203e65761 <String[7]: #_height>
Handler Table (size = 0)
Source Position Table (size = 11)
0x293203e65839 <ByteArray[11]>
0x293203e65a19 points to: [0x293203e65a88]
=== [0x293203e65a88] DISASSEMBLY ===
Parameter count 3
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  328 S> 0x293203e65a88 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x293203e65a8a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x293203e65a8c @    4 : c4                Star0 
         0x293203e65a8d @    5 : 0b 04             Ldar a1
         0x293203e65a8f @    7 : 19 03 f9          Mov a0, r1
         0x293203e65a92 @   10 : 9e 04             JumpIfUndefinedOrNull [4] (0x293203e65a96 @ 14)
         0x293203e65a94 @   12 : 8a 03             Jump [3] (0x293203e65a97 @ 15)
         0x293203e65a96 @   14 : 12                LdaFalse 
         0x293203e65a97 @   15 : c2                Star2 
         0x293203e65a98 @   16 : 0b fa             Ldar r0
  335 E> 0x293203e65a9a @   18 : 69 fa f9 02 00    Construct r0, r1-r2, [0]
  392 S> 0x293203e65a9f @   23 : a9                Return 
Constant pool (size = 1)
0x293203e65aa1: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 1
           0: 0x293203e651c1 <String[15]: #PathfindingGrid>
Handler Table (size = 0)
Source Position Table (size = 11)
0x293203e65ab9 <ByteArray[11]>
0x293203e65b41 points to: [0x293203e65bb0]
=== [0x293203e65bb0] DISASSEMBLY ===
Parameter count 3
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
  879 E> 0x293203e65bb0 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x293203e65bb3 @    3 : 1a f6             PushContext r4
         0x293203e65bb5 @    5 : 0b 02             Ldar <this>
         0x293203e65bb7 @    7 : 25 02             StaCurrentContextSlot [2]
         0x293203e65bb9 @    9 : 10                LdaTheHole 
         0x293203e65bba @   10 : 25 03             StaCurrentContextSlot [3]
         0x293203e65bbc @   12 : 10                LdaTheHole 
         0x293203e65bbd @   13 : 25 04             StaCurrentContextSlot [4]
  901 S> 0x293203e65bbf @   15 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65bc1 @   17 : be                Star6 
  911 E> 0x293203e65bc2 @   18 : 2d f4 01 00       GetNamedProperty r6, [1], [0]
         0x293203e65bc6 @   22 : bf                Star5 
  911 E> 0x293203e65bc7 @   23 : 5e f5 f4 03 02    CallProperty1 r5, r6, a0, [2]
         0x293203e65bcc @   28 : 97 11             JumpIfToBooleanFalse [17] (0x293203e65bdd @ 45)
         0x293203e65bce @   30 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65bd0 @   32 : be                Star6 
  941 E> 0x293203e65bd1 @   33 : 2d f4 01 04       GetNamedProperty r6, [1], [4]
         0x293203e65bd5 @   37 : bf                Star5 
  941 E> 0x293203e65bd6 @   38 : 5e f5 f4 04 06    CallProperty1 r5, r6, a1, [6]
         0x293203e65bdb @   43 : 96 04             JumpIfToBooleanTrue [4] (0x293203e65bdf @ 47)
  978 S> 0x293203e65bdd @   45 : 0f                LdaNull 
  990 S> 0x293203e65bde @   46 : a9                Return 
 1009 S> 0x293203e65bdf @   47 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65be1 @   49 : bf                Star5 
 1018 E> 0x293203e65be2 @   50 : 2d f5 02 08       GetNamedProperty r5, [2], [8]
         0x293203e65be6 @   54 : bf                Star5 
 1028 E> 0x293203e65be7 @   55 : 2d 03 03 0a       GetNamedProperty a0, [3], [10]
 1023 E> 0x293203e65beb @   59 : 2f f5 0c          GetKeyedProperty r5, [12]
         0x293203e65bee @   62 : bf                Star5 
 1035 E> 0x293203e65bef @   63 : 2d 03 04 0e       GetNamedProperty a0, [4], [14]
 1030 E> 0x293203e65bf3 @   67 : 2f f5 10          GetKeyedProperty r5, [16]
         0x293203e65bf6 @   70 : bf                Star5 
         0x293203e65bf7 @   71 : 0c                LdaZero 
 1038 E> 0x293203e65bf8 @   72 : 6c f5 12          TestEqualStrict r5, [18]
         0x293203e65bfb @   75 : 99 20             JumpIfFalse [32] (0x293203e65c1b @ 107)
         0x293203e65bfd @   77 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65bff @   79 : bf                Star5 
 1052 E> 0x293203e65c00 @   80 : 2d f5 02 13       GetNamedProperty r5, [2], [19]
         0x293203e65c04 @   84 : bf                Star5 
 1063 E> 0x293203e65c05 @   85 : 2d 04 03 15       GetNamedProperty a1, [3], [21]
 1057 E> 0x293203e65c09 @   89 : 2f f5 17          GetKeyedProperty r5, [23]
         0x293203e65c0c @   92 : bf                Star5 
 1071 E> 0x293203e65c0d @   93 : 2d 04 04 19       GetNamedProperty a1, [4], [25]
 1065 E> 0x293203e65c11 @   97 : 2f f5 1b          GetKeyedProperty r5, [27]
         0x293203e65c14 @  100 : bf                Star5 
         0x293203e65c15 @  101 : 0c                LdaZero 
 1074 E> 0x293203e65c16 @  102 : 6c f5 1d          TestEqualStrict r5, [29]
         0x293203e65c19 @  105 : 98 04             JumpIfTrue [4] (0x293203e65c1d @ 109)
 1095 S> 0x293203e65c1b @  107 : 0f                LdaNull 
 1107 S> 0x293203e65c1c @  108 : a9                Return 
 1144 S> 0x293203e65c1d @  109 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65c1f @  111 : be                Star6 
 1149 E> 0x293203e65c20 @  112 : 2d f4 05 1e       GetNamedProperty r6, [5], [30]
         0x293203e65c24 @  116 : bf                Star5 
 1149 E> 0x293203e65c25 @  117 : 5e f5 f4 04 20    CallProperty1 r5, r6, a1, [32]
 1144 E> 0x293203e65c2a @  122 : 25 03             StaCurrentContextSlot [3]
 1185 S> 0x293203e65c2c @  124 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x293203e65c2e @  126 : bf                Star5 
 1203 E> 0x293203e65c2f @  127 : 2d 03 04 0e       GetNamedProperty a0, [4], [14]
         0x293203e65c33 @  131 : be                Star6 
         0x293203e65c34 @  132 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65c36 @  134 : bd                Star7 
 1212 E> 0x293203e65c37 @  135 : 2d f3 06 24       GetNamedProperty r7, [6], [36]
 1205 E> 0x293203e65c3b @  139 : 3b f4 23          Mul r6, [35]
         0x293203e65c3e @  142 : be                Star6 
 1225 E> 0x293203e65c3f @  143 : 2d 03 03 0a       GetNamedProperty a0, [3], [10]
 1219 E> 0x293203e65c43 @  147 : 39 f4 22          Add r6, [34]
 1198 E> 0x293203e65c46 @  150 : 2f f5 26          GetKeyedProperty r5, [38]
         0x293203e65c49 @  153 : bf                Star5 
         0x293203e65c4a @  154 : 0d ff             LdaSmi [-1]
 1228 E> 0x293203e65c4c @  156 : 6c f5 28          TestEqualStrict r5, [40]
         0x293203e65c4f @  159 : 99 04             JumpIfFalse [4] (0x293203e65c53 @ 163)
 1250 S> 0x293203e65c51 @  161 : 0f                LdaNull 
 1262 S> 0x293203e65c52 @  162 : a9                Return 
 1294 S> 0x293203e65c53 @  163 : 79 07 29 25       CreateArrayLiteral [7], [41], #37
         0x293203e65c57 @  167 : be                Star6 
         0x293203e65c58 @  168 : 0c                LdaZero 
         0x293203e65c59 @  169 : bf                Star5 
         0x293203e65c5a @  170 : 0b 03             Ldar a0
 1295 E> 0x293203e65c5c @  172 : 36 f4 f5 2a       StaInArrayLiteral r6, r5, [42]
         0x293203e65c60 @  176 : 19 f4 fa          Mov r6, r0
 1320 S> 0x293203e65c63 @  179 : 19 03 f9          Mov a0, r1
 1348 S> 0x293203e65c66 @  182 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x293203e65c68 @  184 : bf                Star5 
 1362 E> 0x293203e65c69 @  185 : 2d f9 04 0e       GetNamedProperty r1, [4], [14]
         0x293203e65c6d @  189 : be                Star6 
         0x293203e65c6e @  190 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65c70 @  192 : bd                Star7 
 1371 E> 0x293203e65c71 @  193 : 2d f3 06 2e       GetNamedProperty r7, [6], [46]
 1364 E> 0x293203e65c75 @  197 : 3b f4 2d          Mul r6, [45]
         0x293203e65c78 @  200 : be                Star6 
 1384 E> 0x293203e65c79 @  201 : 2d f9 03 0a       GetNamedProperty r1, [3], [10]
 1378 E> 0x293203e65c7d @  205 : 39 f4 2c          Add r6, [44]
 1357 E> 0x293203e65c80 @  208 : 2f f5 30          GetKeyedProperty r5, [48]
 1348 E> 0x293203e65c83 @  211 : 25 04             StaCurrentContextSlot [4]
 1409 S> 0x293203e65c85 @  213 : 2d f9 08 32       GetNamedProperty r1, [8], [50]
         0x293203e65c89 @  217 : bf                Star5 
 1409 E> 0x293203e65c8a @  218 : 5e f5 f9 04 34    CallProperty1 r5, r1, a1, [52]
         0x293203e65c8f @  223 : 96 36             JumpIfToBooleanTrue [54] (0x293203e65cc5 @ 277)
 1456 S> 0x293203e65c91 @  225 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65c93 @  227 : be                Star6 
 1461 E> 0x293203e65c94 @  228 : 2d f4 09 36       GetNamedProperty r6, [9], [54]
         0x293203e65c98 @  232 : bf                Star5 
 1461 E> 0x293203e65c99 @  233 : 5e f5 f4 f9 38    CallProperty1 r5, r6, r1, [56]
         0x293203e65c9e @  238 : c2                Star2 
 1543 S> 0x293203e65c9f @  239 : 2d f8 0a 3a       GetNamedProperty r2, [10], [58]
         0x293203e65ca3 @  243 : bf                Star5 
         0x293203e65ca4 @  244 : 80 0b 00 02       CreateClosure [11], [0], #2
         0x293203e65ca8 @  248 : bd                Star7 
 1543 E> 0x293203e65ca9 @  249 : 5e f5 f8 f3 3c    CallProperty1 r5, r2, r7, [60]
         0x293203e65cae @  254 : c1                Star3 
 1626 S> 0x293203e65caf @  255 : 2d fa 0c 3e       GetNamedProperty r0, [12], [62]
         0x293203e65cb3 @  259 : bf                Star5 
 1626 E> 0x293203e65cb4 @  260 : 5e f5 fa f7 40    CallProperty1 r5, r0, r3, [64]
 1675 S> 0x293203e65cb9 @  265 : 19 f7 f9          Mov r3, r1
 1725 S> 0x293203e65cbc @  268 : 16 04             LdaCurrentContextSlot [4]
         0x293203e65cbe @  270 : 52 42             Dec [66]
 1727 E> 0x293203e65cc0 @  272 : 25 04             StaCurrentContextSlot [4]
 1396 E> 0x293203e65cc2 @  274 : 89 3d 00          JumpLoop [61], [0] (0x293203e65c85 @ 213)
 1755 S> 0x293203e65cc5 @  277 : 0b fa             Ldar r0
 1767 S> 0x293203e65cc7 @  279 : a9                Return 
Constant pool (size = 13)
0x293203e65cc9: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 13
           0: 0x293203e65d41 <ScopeInfo FUNCTION_SCOPE>
           1: 0x293203e654b1 <String[15]: #isPositionValid>
           2: 0x293203e656e9 <String[5]: #_grid>
           3: 0x013af0ed8ac9 <String[1]: #x>
           4: 0x013af0ed8ae1 <String[1]: #y>
           5: 0x293203e65489 <String[20]: #internalGetDistances>
           6: 0x293203e65729 <String[6]: #_width>
           7: 0x293203e65e29 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x293203e65e41 <FixedArray[1]>>
           8: 0x013af0ec7411 <String[6]: #equals>
           9: 0x293203e654d1 <String[13]: #getNeighbours>
          10: 0x013af0eca009 <String[4]: #find>
          11: 0x293203e65e71 <SharedFunctionInfo>
          12: 0x013af0ec9551 <String[4]: #push>
Handler Table (size = 0)
Source Position Table (size = 141)
0x293203e65ff9 <ByteArray[141]>
Array boilerplate at 0x293203e65e29: 
0x293203e65e29: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x043ec1403291 <Map[24]>
 - elements kind: PACKED_SMI_ELEMENTS
 - constant elements: 0x293203e65e41 <FixedArray[1]>
           0: 0
0x293203e65e71 points to: [0x293203e65ee0]
=== [0x293203e65ee0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1590 S> 0x293203e65ee0 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x293203e65ee2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x293203e65ee4 @    4 : c4                Star0 
 1567 E> 0x293203e65ee5 @    5 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
         0x293203e65ee9 @    9 : c3                Star1 
         0x293203e65eea @   10 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e65eec @   12 : c2                Star2 
 1576 E> 0x293203e65eed @   13 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
 1569 E> 0x293203e65ef1 @   17 : 3b f9 01          Mul r1, [1]
         0x293203e65ef4 @   20 : c3                Star1 
 1587 E> 0x293203e65ef5 @   21 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
 1583 E> 0x293203e65ef9 @   25 : 39 f9 00          Add r1, [0]
 1564 E> 0x293203e65efc @   28 : 2f fa 08          GetKeyedProperty r0, [8]
         0x293203e65eff @   31 : c4                Star0 
         0x293203e65f00 @   32 : 16 04             LdaCurrentContextSlot [4]
 1594 E> 0x293203e65f02 @   34 : aa 04             ThrowReferenceErrorIfHole [4]
 1603 E> 0x293203e65f04 @   36 : 46 01 0a          SubSmi [1], [10]
 1590 E> 0x293203e65f07 @   39 : 6c fa 0b          TestEqualStrict r0, [11]
 1606 S> 0x293203e65f0a @   42 : a9                Return 
Constant pool (size = 5)
0x293203e65f11: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 5
           0: 0x293203e65dc1 <String[9]: #distances>
           1: 0x013af0ed8ae1 <String[1]: #y>
           2: 0x293203e65729 <String[6]: #_width>
           3: 0x013af0ed8ac9 <String[1]: #x>
           4: 0x293203e65de1 <String[8]: #distance>
Handler Table (size = 0)
Source Position Table (size = 26)
0x293203e65f49 <ByteArray[26]>
0x293203e660d9 points to: [0x293203e66148]
=== [0x293203e66148] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1832 S> 0x293203e66148 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x293203e6614c @    4 : bf                Star5 
 1832 E> 0x293203e6614d @    5 : 5e f5 02 03 02    CallProperty1 r5, <this>, a0, [2]
         0x293203e66152 @   10 : c4                Star0 
 1885 S> 0x293203e66153 @   11 : 7b 04             CreateEmptyArrayLiteral [4]
         0x293203e66155 @   13 : c3                Star1 
 1910 S> 0x293203e66156 @   14 : 0c                LdaZero 
         0x293203e66157 @   15 : c2                Star2 
 1922 S> 0x293203e66158 @   16 : 2d 02 01 05       GetNamedProperty <this>, [1], [5]
 1915 E> 0x293203e6615c @   20 : 6d f8 07          TestLessThan r2, [7]
         0x293203e6615f @   23 : 99 53             JumpIfFalse [83] (0x293203e661b2 @ 106)
 1959 S> 0x293203e66161 @   25 : 7b 08             CreateEmptyArrayLiteral [8]
 1962 E> 0x293203e66163 @   27 : 34 f9 f8 09       SetKeyedProperty r1, r2, [9]
 1993 S> 0x293203e66167 @   31 : 0c                LdaZero 
         0x293203e66168 @   32 : c1                Star3 
 2005 S> 0x293203e66169 @   33 : 2d 02 02 0b       GetNamedProperty <this>, [2], [11]
 1998 E> 0x293203e6616d @   37 : 6d f7 0d          TestLessThan r3, [13]
         0x293203e66170 @   40 : 99 3a             JumpIfFalse [58] (0x293203e661aa @ 98)
 2079 S> 0x293203e66172 @   42 : 2d 02 01 10       GetNamedProperty <this>, [1], [16]
 2072 E> 0x293203e66176 @   46 : 3b f7 0f          Mul r3, [15]
         0x293203e66179 @   49 : be                Star6 
         0x293203e6617a @   50 : 0b f8             Ldar r2
 2086 E> 0x293203e6617c @   52 : 39 f4 0e          Add r6, [14]
 2069 E> 0x293203e6617f @   55 : 2f fa 12          GetKeyedProperty r0, [18]
         0x293203e66182 @   58 : c0                Star4 
 2108 S> 0x293203e66183 @   59 : 0b f8             Ldar r2
 2117 E> 0x293203e66185 @   61 : 2f f9 14          GetKeyedProperty r1, [20]
         0x293203e66188 @   64 : bf                Star5 
         0x293203e66189 @   65 : 15 ff 03 01       LdaImmutableContextSlot <context>, [3], [1]
 2142 E> 0x293203e6618d @   69 : aa 03             ThrowReferenceErrorIfHole [3]
 2138 E> 0x293203e6618f @   71 : 6c f6 16          TestEqualStrict r4, [22]
         0x293203e66192 @   74 : 19 f7 f4          Mov r3, r6
         0x293203e66195 @   77 : 99 07             JumpIfFalse [7] (0x293203e6619c @ 84)
 2154 E> 0x293203e66197 @   79 : 21 04 17          LdaGlobal [4], [23]
         0x293203e6619a @   82 : 8a 04             Jump [4] (0x293203e6619e @ 86)
         0x293203e6619c @   84 : 0b f6             Ldar r4
 2124 E> 0x293203e6619e @   86 : 34 f5 f4 19       SetKeyedProperty r5, r6, [25]
 2016 S> 0x293203e661a2 @   90 : 0b f7             Ldar r3
         0x293203e661a4 @   92 : 51 1b             Inc [27]
         0x293203e661a6 @   94 : c1                Star3 
 1980 E> 0x293203e661a7 @   95 : 89 3e 01          JumpLoop [62], [1] (0x293203e66169 @ 33)
 1932 S> 0x293203e661aa @   98 : 0b f8             Ldar r2
         0x293203e661ac @  100 : 51 1c             Inc [28]
         0x293203e661ae @  102 : c2                Star2 
 1897 E> 0x293203e661af @  103 : 89 57 00          JumpLoop [87], [0] (0x293203e66158 @ 16)
 2210 S> 0x293203e661b2 @  106 : 0b f9             Ldar r1
 2227 S> 0x293203e661b4 @  108 : a9                Return 
Constant pool (size = 5)
0x293203e661b9: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 5
           0: 0x293203e65489 <String[20]: #internalGetDistances>
           1: 0x293203e65729 <String[6]: #_width>
           2: 0x293203e65761 <String[7]: #_height>
           3: 0x293203e65159 <String[9]: #UNVISITED>
           4: 0x043ec1405381 <String[8]: #Infinity>
Handler Table (size = 0)
Source Position Table (size = 67)
0x293203e661f1 <ByteArray[67]>
0x293203e662c1 points to: [0x293203e66330]
=== [0x293203e66330] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2258 E> 0x293203e66330 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x293203e66333 @    3 : 1a f7             PushContext r3
         0x293203e66335 @    5 : 10                LdaTheHole 
         0x293203e66336 @    6 : 25 02             StaCurrentContextSlot [2]
         0x293203e66338 @    8 : 10                LdaTheHole 
         0x293203e66339 @    9 : 25 03             StaCurrentContextSlot [3]
         0x293203e6633b @   11 : 10                LdaTheHole 
         0x293203e6633c @   12 : 25 04             StaCurrentContextSlot [4]
         0x293203e6633e @   14 : 80 01 00 02       CreateClosure [1], [0], #2
         0x293203e66342 @   18 : c3                Star1 
 2293 S> 0x293203e66343 @   19 : 21 02 00          LdaGlobal [2], [0]
         0x293203e66346 @   22 : bf                Star5 
 2313 E> 0x293203e66347 @   23 : 2d 02 03 03       GetNamedProperty <this>, [3], [3]
         0x293203e6634b @   27 : be                Star6 
 2327 E> 0x293203e6634c @   28 : 2d 02 04 05       GetNamedProperty <this>, [4], [5]
 2320 E> 0x293203e66350 @   32 : 3b f4 02          Mul r6, [2]
         0x293203e66353 @   35 : be                Star6 
         0x293203e66354 @   36 : 0b f5             Ldar r5
 2293 E> 0x293203e66356 @   38 : 69 f5 f4 01 07    Construct r5, r6-r6, [7]
         0x293203e6635b @   43 : bf                Star5 
 2336 E> 0x293203e6635c @   44 : 2d f5 05 09       GetNamedProperty r5, [5], [9]
         0x293203e66360 @   48 : c0                Star4 
         0x293203e66361 @   49 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
 2341 E> 0x293203e66365 @   53 : aa 06             ThrowReferenceErrorIfHole [6]
         0x293203e66367 @   55 : be                Star6 
 2336 E> 0x293203e66368 @   56 : 5e f6 f5 f4 0b    CallProperty1 r4, r5, r6, [11]
 2293 E> 0x293203e6636d @   61 : 25 02             StaCurrentContextSlot [2]
 2375 S> 0x293203e6636f @   63 : 79 07 0d 04       CreateArrayLiteral [7], [13], #4
         0x293203e66373 @   67 : bf                Star5 
         0x293203e66374 @   68 : 0c                LdaZero 
         0x293203e66375 @   69 : c0                Star4 
         0x293203e66376 @   70 : 7c 08 0e 29       CreateObjectLiteral [8], [14], #41
         0x293203e6637a @   74 : be                Star6 
         0x293203e6637b @   75 : 0b 03             Ldar a0
 2388 E> 0x293203e6637d @   77 : 33 f4 09 0f       DefineNamedOwnProperty r6, [9], [15]
         0x293203e66381 @   81 : 0b f4             Ldar r6
         0x293203e66383 @   83 : 36 f5 f6 11       StaInArrayLiteral r5, r4, [17]
         0x293203e66387 @   87 : 0b f5             Ldar r5
 2375 E> 0x293203e66389 @   89 : 25 03             StaCurrentContextSlot [3]
 2446 S> 0x293203e6638b @   91 : 21 02 00          LdaGlobal [2], [0]
         0x293203e6638e @   94 : c0                Star4 
         0x293203e6638f @   95 : 0d 10             LdaSmi [16]
         0x293203e66391 @   97 : bf                Star5 
         0x293203e66392 @   98 : 0b f6             Ldar r4
 2446 E> 0x293203e66394 @  100 : 69 f6 f5 01 13    Construct r4, r5-r5, [19]
         0x293203e66399 @  105 : c4                Star0 
 2523 S> 0x293203e6639a @  106 : 2d 02 03 15       GetNamedProperty <this>, [3], [21]
 2518 E> 0x293203e6639e @  110 : 25 04             StaCurrentContextSlot [4]
 2813 S> 0x293203e663a0 @  112 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x293203e663a2 @  114 : c0                Star4 
 2806 E> 0x293203e663a3 @  115 : 2d f6 0a 17       GetNamedProperty r4, [10], [23]
         0x293203e663a7 @  119 : c0                Star4 
         0x293203e663a8 @  120 : 0c                LdaZero 
 2813 E> 0x293203e663a9 @  121 : 6e f6 19          TestGreaterThan r4, [25]
         0x293203e663ac @  124 : 92 12             JumpIfFalseConstant [18] (0x293203e664fa @ 458)
 2845 S> 0x293203e663ae @  126 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x293203e663b0 @  128 : bf                Star5 
 2851 E> 0x293203e663b1 @  129 : 2d f5 0b 1a       GetNamedProperty r5, [11], [26]
         0x293203e663b5 @  133 : c0                Star4 
 2851 E> 0x293203e663b6 @  134 : 5d f6 f5 1c       CallProperty0 r4, r5, [28]
         0x293203e663ba @  138 : c2                Star2 
 2895 S> 0x293203e663bb @  139 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e663bd @  141 : c0                Star4 
 2914 E> 0x293203e663be @  142 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x293203e663c2 @  146 : bf                Star5 
 2923 E> 0x293203e663c3 @  147 : 2d f5 0c 22       GetNamedProperty r5, [12], [34]
         0x293203e663c7 @  151 : bf                Star5 
 2932 E> 0x293203e663c8 @  152 : 2d 02 03 24       GetNamedProperty <this>, [3], [36]
 2925 E> 0x293203e663cc @  156 : 3b f5 1f          Mul r5, [31]
         0x293203e663cf @  159 : bf                Star5 
 2946 E> 0x293203e663d0 @  160 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x293203e663d4 @  164 : be                Star6 
 2955 E> 0x293203e663d5 @  165 : 2d f4 0d 26       GetNamedProperty r6, [13], [38]
 2939 E> 0x293203e663d9 @  169 : 39 f5 1e          Add r5, [30]
 2908 E> 0x293203e663dc @  172 : 2f f6 28          GetKeyedProperty r4, [40]
         0x293203e663df @  175 : c0                Star4 
         0x293203e663e0 @  176 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
 2962 E> 0x293203e663e4 @  180 : aa 06             ThrowReferenceErrorIfHole [6]
 2958 E> 0x293203e663e6 @  182 : 6c f6 2a          TestEqualStrict r4, [42]
         0x293203e663e9 @  185 : 98 04             JumpIfTrue [4] (0x293203e663ed @ 189)
 2991 S> 0x293203e663eb @  187 : 8b 11             JumpConstant [17] (0x293203e664f4 @ 452)
 3027 S> 0x293203e663ed @  189 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e663ef @  191 : c0                Star4 
 3042 E> 0x293203e663f0 @  192 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x293203e663f4 @  196 : bf                Star5 
 3051 E> 0x293203e663f5 @  197 : 2d f5 0c 2d       GetNamedProperty r5, [12], [45]
         0x293203e663f9 @  201 : bf                Star5 
 3060 E> 0x293203e663fa @  202 : 2d 02 03 2f       GetNamedProperty <this>, [3], [47]
 3053 E> 0x293203e663fe @  206 : 3b f5 2c          Mul r5, [44]
         0x293203e66401 @  209 : bf                Star5 
 3074 E> 0x293203e66402 @  210 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x293203e66406 @  214 : be                Star6 
 3083 E> 0x293203e66407 @  215 : 2d f4 0d 31       GetNamedProperty r6, [13], [49]
 3067 E> 0x293203e6640b @  219 : 39 f5 2b          Add r5, [43]
         0x293203e6640e @  222 : bf                Star5 
 3093 E> 0x293203e6640f @  223 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3086 E> 0x293203e66413 @  227 : 34 f6 f5 35       SetKeyedProperty r4, r5, [53]
 3120 S> 0x293203e66417 @  231 : 2d 02 0f 37       GetNamedProperty <this>, [15], [55]
         0x293203e6641b @  235 : c0                Star4 
 3143 E> 0x293203e6641c @  236 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x293203e66420 @  240 : be                Star6 
 3120 E> 0x293203e66421 @  241 : 5f f6 02 f4 fa 39 CallProperty2 r4, <this>, r6, r0, [57]
 3187 S> 0x293203e66427 @  247 : 0c                LdaZero 
 3230 E> 0x293203e66428 @  248 : 2f fa 3b          GetKeyedProperty r0, [59]
         0x293203e6642b @  251 : bf                Star5 
         0x293203e6642c @  252 : 0d 01             LdaSmi [1]
 3254 E> 0x293203e6642e @  254 : 2f fa 3d          GetKeyedProperty r0, [61]
         0x293203e66431 @  257 : be                Star6 
 3264 E> 0x293203e66432 @  258 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3273 E> 0x293203e66436 @  262 : 45 01 3f          AddSmi [1], [63]
         0x293203e66439 @  265 : bd                Star7 
 3187 E> 0x293203e6643a @  266 : 60 f9 f5 03 40    CallUndefinedReceiver r1, r5-r7, [64]
 3291 S> 0x293203e6643f @  271 : 0d 02             LdaSmi [2]
 3334 E> 0x293203e66441 @  273 : 2f fa 42          GetKeyedProperty r0, [66]
         0x293203e66444 @  276 : bf                Star5 
         0x293203e66445 @  277 : 0d 03             LdaSmi [3]
 3358 E> 0x293203e66447 @  279 : 2f fa 44          GetKeyedProperty r0, [68]
         0x293203e6644a @  282 : be                Star6 
 3368 E> 0x293203e6644b @  283 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3377 E> 0x293203e6644f @  287 : 45 01 46          AddSmi [1], [70]
         0x293203e66452 @  290 : bd                Star7 
 3291 E> 0x293203e66453 @  291 : 60 f9 f5 03 47    CallUndefinedReceiver r1, r5-r7, [71]
 3395 S> 0x293203e66458 @  296 : 0d 04             LdaSmi [4]
 3438 E> 0x293203e6645a @  298 : 2f fa 49          GetKeyedProperty r0, [73]
         0x293203e6645d @  301 : bf                Star5 
         0x293203e6645e @  302 : 0d 05             LdaSmi [5]
 3462 E> 0x293203e66460 @  304 : 2f fa 4b          GetKeyedProperty r0, [75]
         0x293203e66463 @  307 : be                Star6 
 3472 E> 0x293203e66464 @  308 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3481 E> 0x293203e66468 @  312 : 45 01 4d          AddSmi [1], [77]
         0x293203e6646b @  315 : bd                Star7 
 3395 E> 0x293203e6646c @  316 : 60 f9 f5 03 4e    CallUndefinedReceiver r1, r5-r7, [78]
 3499 S> 0x293203e66471 @  321 : 0d 06             LdaSmi [6]
 3542 E> 0x293203e66473 @  323 : 2f fa 50          GetKeyedProperty r0, [80]
         0x293203e66476 @  326 : bf                Star5 
         0x293203e66477 @  327 : 0d 07             LdaSmi [7]
 3566 E> 0x293203e66479 @  329 : 2f fa 52          GetKeyedProperty r0, [82]
         0x293203e6647c @  332 : be                Star6 
 3576 E> 0x293203e6647d @  333 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3585 E> 0x293203e66481 @  337 : 45 01 54          AddSmi [1], [84]
         0x293203e66484 @  340 : bd                Star7 
 3499 E> 0x293203e66485 @  341 : 60 f9 f5 03 55    CallUndefinedReceiver r1, r5-r7, [85]
 3612 S> 0x293203e6648a @  346 : 2d 02 10 57       GetNamedProperty <this>, [16], [87]
         0x293203e6648e @  350 : 97 66             JumpIfToBooleanFalse [102] (0x293203e664f4 @ 452)
 3653 S> 0x293203e66490 @  352 : 0d 08             LdaSmi [8]
 3696 E> 0x293203e66492 @  354 : 2f fa 59          GetKeyedProperty r0, [89]
         0x293203e66495 @  357 : bf                Star5 
         0x293203e66496 @  358 : 0d 09             LdaSmi [9]
 3720 E> 0x293203e66498 @  360 : 2f fa 5b          GetKeyedProperty r0, [91]
         0x293203e6649b @  363 : be                Star6 
 3730 E> 0x293203e6649c @  364 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3739 E> 0x293203e664a0 @  368 : 45 01 5d          AddSmi [1], [93]
         0x293203e664a3 @  371 : bd                Star7 
 3653 E> 0x293203e664a4 @  372 : 60 f9 f5 03 5e    CallUndefinedReceiver r1, r5-r7, [94]
 3761 S> 0x293203e664a9 @  377 : 0d 0a             LdaSmi [10]
 3804 E> 0x293203e664ab @  379 : 2f fa 60          GetKeyedProperty r0, [96]
         0x293203e664ae @  382 : bf                Star5 
         0x293203e664af @  383 : 0d 0b             LdaSmi [11]
 3829 E> 0x293203e664b1 @  385 : 2f fa 62          GetKeyedProperty r0, [98]
         0x293203e664b4 @  388 : be                Star6 
 3840 E> 0x293203e664b5 @  389 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3849 E> 0x293203e664b9 @  393 : 45 01 64          AddSmi [1], [100]
         0x293203e664bc @  396 : bd                Star7 
 3761 E> 0x293203e664bd @  397 : 60 f9 f5 03 65    CallUndefinedReceiver r1, r5-r7, [101]
 3871 S> 0x293203e664c2 @  402 : 0d 0c             LdaSmi [12]
 3914 E> 0x293203e664c4 @  404 : 2f fa 67          GetKeyedProperty r0, [103]
         0x293203e664c7 @  407 : bf                Star5 
         0x293203e664c8 @  408 : 0d 0d             LdaSmi [13]
 3939 E> 0x293203e664ca @  410 : 2f fa 69          GetKeyedProperty r0, [105]
         0x293203e664cd @  413 : be                Star6 
 3950 E> 0x293203e664ce @  414 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3959 E> 0x293203e664d2 @  418 : 45 01 6b          AddSmi [1], [107]
         0x293203e664d5 @  421 : bd                Star7 
 3871 E> 0x293203e664d6 @  422 : 60 f9 f5 03 6c    CallUndefinedReceiver r1, r5-r7, [108]
 3981 S> 0x293203e664db @  427 : 0d 0e             LdaSmi [14]
 4024 E> 0x293203e664dd @  429 : 2f fa 6e          GetKeyedProperty r0, [110]
         0x293203e664e0 @  432 : bf                Star5 
         0x293203e664e1 @  433 : 0d 0f             LdaSmi [15]
 4049 E> 0x293203e664e3 @  435 : 2f fa 70          GetKeyedProperty r0, [112]
         0x293203e664e6 @  438 : be                Star6 
 4060 E> 0x293203e664e7 @  439 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 4069 E> 0x293203e664eb @  443 : 45 01 72          AddSmi [1], [114]
         0x293203e664ee @  446 : bd                Star7 
 3981 E> 0x293203e664ef @  447 : 60 f9 f5 03 73    CallUndefinedReceiver r1, r5-r7, [115]
 2793 E> 0x293203e664f4 @  452 : 00 89 55 01 00 00 JumpLoop.Wide [341], [0] (0x293203e663a0 @ 112)
 4107 S> 0x293203e664fa @  458 : 17 02             LdaImmutableCurrentContextSlot [2]
 4124 S> 0x293203e664fc @  460 : a9                Return 
Constant pool (size = 19)
0x293203e66501: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 19
           0: 0x293203e665a9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x293203e66661 <SharedFunctionInfo pushNeighbourIfPossible>
           2: 0x043ec14053e9 <String[10]: #Int32Array>
           3: 0x293203e65729 <String[6]: #_width>
           4: 0x293203e65761 <String[7]: #_height>
           5: 0x013af0ec7461 <String[4]: #fill>
           6: 0x293203e65159 <String[9]: #UNVISITED>
           7: 0x293203e668d9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x293203e668f1 <FixedArray[1]>>
           8: 0x293203e66909 <ObjectBoilerplateDescription[5]>
           9: 0x043ec1405c19 <String[8]: #position>
          10: 0x043ec14055f9 <String[6]: #length>
          11: 0x013af0ec4e01 <String[5]: #shift>
          12: 0x013af0ed8ae1 <String[1]: #y>
          13: 0x013af0ed8ac9 <String[1]: #x>
          14: 0x293203e65de1 <String[8]: #distance>
          15: 0x293203e654f1 <String[17]: #getNeighboursFast>
          16: 0x293203e65701 <String[21]: #_withDiagonalMovement>
          17: 265
          18: 334
Handler Table (size = 0)
Source Position Table (size = 243)
0x293203e66959 <ByteArray[243]>
0x293203e66661 points to: [0x293203e666d0]
=== [0x293203e666d0] DISASSEMBLY ===
Parameter count 4
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 2602 S> 0x293203e666d0 @    0 : 0c                LdaZero 
 2608 E> 0x293203e666d1 @    1 : 70 03 00          TestGreaterThanOrEqual a0, [0]
         0x293203e666d4 @    4 : 99 60             JumpIfFalse [96] (0x293203e66734 @ 100)
         0x293203e666d6 @    6 : 0c                LdaZero 
 2618 E> 0x293203e666d7 @    7 : 70 04 01          TestGreaterThanOrEqual a1, [1]
         0x293203e666da @   10 : 99 5a             JumpIfFalse [90] (0x293203e66734 @ 100)
         0x293203e666dc @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
 2626 E> 0x293203e666de @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0x293203e666e0 @   16 : c4                Star0 
         0x293203e666e1 @   17 : 17 04             LdaImmutableCurrentContextSlot [4]
 2640 E> 0x293203e666e3 @   19 : aa 01             ThrowReferenceErrorIfHole [1]
 2638 E> 0x293203e666e5 @   21 : 3b 04 03          Mul a1, [3]
         0x293203e666e8 @   24 : c3                Star1 
         0x293203e666e9 @   25 : 0b 03             Ldar a0
 2650 E> 0x293203e666eb @   27 : 39 f9 02          Add r1, [2]
 2635 E> 0x293203e666ee @   30 : 2f fa 04          GetKeyedProperty r0, [4]
         0x293203e666f1 @   33 : c4                Star0 
         0x293203e666f2 @   34 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
 2659 E> 0x293203e666f6 @   38 : aa 02             ThrowReferenceErrorIfHole [2]
 2655 E> 0x293203e666f8 @   40 : 6c fa 06          TestEqualStrict r0, [6]
         0x293203e666fb @   43 : 99 39             JumpIfFalse [57] (0x293203e66734 @ 100)
 2688 S> 0x293203e666fd @   45 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x293203e666ff @   47 : aa 03             ThrowReferenceErrorIfHole [3]
         0x293203e66701 @   49 : c3                Star1 
 2694 E> 0x293203e66702 @   50 : 2d f9 04 07       GetNamedProperty r1, [4], [7]
         0x293203e66706 @   54 : c4                Star0 
         0x293203e66707 @   55 : 7c 05 09 29       CreateObjectLiteral [5], [9], #41
         0x293203e6670b @   59 : c2                Star2 
         0x293203e6670c @   60 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 2715 E> 0x293203e66710 @   64 : aa 06             ThrowReferenceErrorIfHole [6]
         0x293203e66712 @   66 : c1                Star3 
 2724 E> 0x293203e66713 @   67 : 2d f7 07 0a       GetNamedProperty r3, [7], [10]
         0x293203e66717 @   71 : c1                Star3 
         0x293203e66718 @   72 : 0b f7             Ldar r3
         0x293203e6671a @   74 : 19 03 f6          Mov a0, r4
         0x293203e6671d @   77 : 19 04 f5          Mov a1, r5
 2711 E> 0x293203e66720 @   80 : 69 f7 f6 02 0c    Construct r3, r4-r5, [12]
         0x293203e66725 @   85 : 33 f8 08 0e       DefineNamedOwnProperty r2, [8], [14]
         0x293203e66729 @   89 : 0b 05             Ldar a2
 2748 E> 0x293203e6672b @   91 : 33 f8 09 10       DefineNamedOwnProperty r2, [9], [16]
 2694 E> 0x293203e6672f @   95 : 5e fa f9 f8 12    CallProperty1 r0, r1, r2, [18]
         0x293203e66734 @  100 : 0e                LdaUndefined 
 2783 S> 0x293203e66735 @  101 : a9                Return 
Constant pool (size = 10)
0x293203e66739: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 10
           0: 0x293203e65dc1 <String[9]: #distances>
           1: 0x293203e66641 <String[9]: #gridWidth>
           2: 0x293203e65159 <String[9]: #UNVISITED>
           3: 0x013af0ec8f01 <String[5]: #queue>
           4: 0x013af0ec9551 <String[4]: #push>
           5: 0x293203e66799 <ObjectBoilerplateDescription[5]>
           6: 0x293203e65141 <String[8]: #vector_1>
           7: 0x293203e667d1 <String[6]: #Vector>
           8: 0x043ec1405c19 <String[8]: #position>
           9: 0x293203e65de1 <String[8]: #distance>
Handler Table (size = 0)
Source Position Table (size = 43)
0x293203e667e9 <ByteArray[43]>
Object boilerplate at 0x293203e66799: 
0x293203e66799: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x043ec1402059 <Map>
 - length: 5
           0: 8
           1: 0x043ec1405c19 <String[8]: #position>
           2: 0x043ec1401501 <Odd Oddball: uninitialized>
           3: 0x293203e65de1 <String[8]: #distance>
           4: 0x043ec1401501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array boilerplate at 0x293203e668d9: 
0x293203e668d9: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x043ec1403291 <Map[24]>
 - elements kind: PACKED_SMI_ELEMENTS
 - constant elements: 0x293203e668f1 <FixedArray[1]>
           0: 0
Object boilerplate at 0x293203e66909: 
0x293203e66909: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x043ec1402059 <Map>
 - length: 5
           0: 8
           1: 0x043ec1405c19 <String[8]: #position>
           2: 0x043ec1401501 <Odd Oddball: uninitialized>
           3: 0x293203e65de1 <String[8]: #distance>
           4: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x293203e66ac1 points to: [0x293203e66b30]
=== [0x293203e66b30] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 4187 S> 0x293203e66b30 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e66b34 @    4 : c4                Star0 
         0x293203e66b35 @    5 : 0c                LdaZero 
 4189 E> 0x293203e66b36 @    6 : 70 fa 02          TestGreaterThanOrEqual r0, [2]
         0x293203e66b39 @    9 : 99 27             JumpIfFalse [39] (0x293203e66b60 @ 48)
 4206 E> 0x293203e66b3b @   11 : 2d 03 01 03       GetNamedProperty a0, [1], [3]
         0x293203e66b3f @   15 : c4                Star0 
         0x293203e66b40 @   16 : 0c                LdaZero 
 4208 E> 0x293203e66b41 @   17 : 70 fa 05          TestGreaterThanOrEqual r0, [5]
         0x293203e66b44 @   20 : 99 1c             JumpIfFalse [28] (0x293203e66b60 @ 48)
 4225 E> 0x293203e66b46 @   22 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e66b4a @   26 : c4                Star0 
 4234 E> 0x293203e66b4b @   27 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
 4227 E> 0x293203e66b4f @   31 : 6d fa 08          TestLessThan r0, [8]
         0x293203e66b52 @   34 : 99 0e             JumpIfFalse [14] (0x293203e66b60 @ 48)
 4253 E> 0x293203e66b54 @   36 : 2d 03 01 03       GetNamedProperty a0, [1], [3]
         0x293203e66b58 @   40 : c4                Star0 
 4262 E> 0x293203e66b59 @   41 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
 4255 E> 0x293203e66b5d @   45 : 6d fa 0b          TestLessThan r0, [11]
 4270 S> 0x293203e66b60 @   48 : a9                Return 
Constant pool (size = 4)
0x293203e66b69: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 4
           0: 0x013af0ed8ac9 <String[1]: #x>
           1: 0x013af0ed8ae1 <String[1]: #y>
           2: 0x293203e65729 <String[6]: #_width>
           3: 0x293203e65761 <String[7]: #_height>
Handler Table (size = 0)
Source Position Table (size = 27)
0x293203e66b99 <ByteArray[27]>
0x293203e66c31 points to: [0x293203e66ca0]
=== [0x293203e66ca0] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 4294 E> 0x293203e66ca0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x293203e66ca3 @    3 : 1a fa             PushContext r0
         0x293203e66ca5 @    5 : 0b 02             Ldar <this>
         0x293203e66ca7 @    7 : 25 02             StaCurrentContextSlot [2]
 4311 S> 0x293203e66ca9 @    9 : 79 01 00 25       CreateArrayLiteral [1], [0], #37
         0x293203e66cad @   13 : c0                Star4 
         0x293203e66cae @   14 : 0c                LdaZero 
         0x293203e66caf @   15 : c1                Star3 
         0x293203e66cb0 @   16 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 4336 E> 0x293203e66cb4 @   20 : aa 02             ThrowReferenceErrorIfHole [2]
         0x293203e66cb6 @   22 : bf                Star5 
 4345 E> 0x293203e66cb7 @   23 : 2d f5 03 01       GetNamedProperty r5, [3], [1]
         0x293203e66cbb @   27 : bf                Star5 
 4357 E> 0x293203e66cbc @   28 : 2d 03 04 04       GetNamedProperty a0, [4], [4]
 4359 E> 0x293203e66cc0 @   32 : 46 01 03          SubSmi [1], [3]
         0x293203e66cc3 @   35 : be                Star6 
 4369 E> 0x293203e66cc4 @   36 : 2d 03 05 06       GetNamedProperty a0, [5], [6]
         0x293203e66cc8 @   40 : bd                Star7 
         0x293203e66cc9 @   41 : 0b f5             Ldar r5
 4332 E> 0x293203e66ccb @   43 : 69 f5 f4 02 08    Construct r5, r6-r7, [8]
         0x293203e66cd0 @   48 : 36 f6 f7 0a       StaInArrayLiteral r4, r3, [10]
         0x293203e66cd4 @   52 : 0d 01             LdaSmi [1]
         0x293203e66cd6 @   54 : c1                Star3 
         0x293203e66cd7 @   55 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 4389 E> 0x293203e66cdb @   59 : aa 02             ThrowReferenceErrorIfHole [2]
         0x293203e66cdd @   61 : bf                Star5 
 4398 E> 0x293203e66cde @   62 : 2d f5 03 01       GetNamedProperty r5, [3], [1]
         0x293203e66ce2 @   66 : bf                Star5 
 4410 E> 0x293203e66ce3 @   67 : 2d 03 04 04       GetNamedProperty a0, [4], [4]
 4412 E> 0x293203e66ce7 @   71 : 45 01 0c          AddSmi [1], [12]
         0x293203e66cea @   74 : be                Star6 
 4422 E> 0x293203e66ceb @   75 : 2d 03 05 06       GetNamedProperty a0, [5], [6]
         0x293203e66cef @   79 : bd                Star7 
         0x293203e66cf0 @   80 : 0b f5             Ldar r5
 4385 E> 0x293203e66cf2 @   82 : 69 f5 f4 02 0d    Construct r5, r6-r7, [13]
         0x293203e66cf7 @   87 : 36 f6 f7 0a       StaInArrayLiteral r4, r3, [10]
         0x293203e66cfb @   91 : 0d 02             LdaSmi [2]
         0x293203e66cfd @   93 : c1                Star3 
         0x293203e66cfe @   94 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 4442 E> 0x293203e66d02 @   98 : aa 02             ThrowReferenceErrorIfHole [2]
         0x293203e66d04 @  100 : bf                Star5 
 4451 E> 0x293203e66d05 @  101 : 2d f5 03 01       GetNamedProperty r5, [3], [1]
         0x293203e66d09 @  105 : bf                Star5 
 4463 E> 0x293203e66d0a @  106 : 2d 03 04 04       GetNamedProperty a0, [4], [4]
         0x293203e66d0e @  110 : be                Star6 
 4471 E> 0x293203e66d0f @  111 : 2d 03 05 06       GetNamedProperty a0, [5], [6]
 4473 E> 0x293203e66d13 @  115 : 46 01 0f          SubSmi [1], [15]
         0x293203e66d16 @  118 : bd                Star7 
         0x293203e66d17 @  119 : 0b f5             Ldar r5
 4438 E> 0x293203e66d19 @  121 : 69 f5 f4 02 10    Construct r5, r6-r7, [16]
         0x293203e66d1e @  126 : 36 f6 f7 0a       StaInArrayLiteral r4, r3, [10]
         0x293203e66d22 @  130 : 0d 03             LdaSmi [3]
         0x293203e66d24 @  132 : c1                Star3 
         0x293203e66d25 @  133 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 4495 E> 0x293203e66d29 @  137 : aa 02             ThrowReferenceErrorIfHole [2]
         0x293203e66d2b @  139 : bf                Star5 
 4504 E> 0x293203e66d2c @  140 : 2d f5 03 01       GetNamedProperty r5, [3], [1]
         0x293203e66d30 @  144 : bf                Star5 
 4516 E> 0x293203e66d31 @  145 : 2d 03 04 04       GetNamedProperty a0, [4], [4]
         0x293203e66d35 @  149 : be                Star6 
 4524 E> 0x293203e66d36 @  150 : 2d 03 05 06       GetNamedProperty a0, [5], [6]
 4526 E> 0x293203e66d3a @  154 : 45 01 12          AddSmi [1], [18]
         0x293203e66d3d @  157 : bd                Star7 
         0x293203e66d3e @  158 : 0b f5             Ldar r5
 4491 E> 0x293203e66d40 @  160 : 69 f5 f4 02 13    Construct r5, r6-r7, [19]
         0x293203e66d45 @  165 : 36 f6 f7 0a       StaInArrayLiteral r4, r3, [10]
 4555 E> 0x293203e66d49 @  169 : 2d f6 06 15       GetNamedProperty r4, [6], [21]
         0x293203e66d4d @  173 : c2                Star2 
         0x293203e66d4e @  174 : 80 07 00 02       CreateClosure [7], [0], #2
         0x293203e66d52 @  178 : 19 f6 f7          Mov r4, r3
         0x293203e66d55 @  181 : c0                Star4 
 4555 E> 0x293203e66d56 @  182 : 5e f8 f7 f6 17    CallProperty1 r2, r3, r4, [23]
         0x293203e66d5b @  187 : c2                Star2 
 4606 E> 0x293203e66d5c @  188 : 2d f8 06 19       GetNamedProperty r2, [6], [25]
         0x293203e66d60 @  192 : c3                Star1 
         0x293203e66d61 @  193 : 80 08 01 02       CreateClosure [8], [1], #2
         0x293203e66d65 @  197 : c1                Star3 
 4607 E> 0x293203e66d66 @  198 : 5e f9 f8 f7 1b    CallProperty1 r1, r2, r3, [27]
 4649 S> 0x293203e66d6b @  203 : a9                Return 
Constant pool (size = 9)
0x293203e66d71: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 9
           0: 0x293203e66dc9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x293203e66e29 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x293203e66e41 <FixedArray[4]>>
           2: 0x293203e65141 <String[8]: #vector_1>
           3: 0x293203e667d1 <String[6]: #Vector>
           4: 0x013af0ed8ac9 <String[1]: #x>
           5: 0x013af0ed8ae1 <String[1]: #y>
           6: 0x013af0ec9f61 <String[6]: #filter>
           7: 0x293203e66e89 <SharedFunctionInfo>
           8: 0x293203e66fa9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 76)
0x293203e670f1 <ByteArray[76]>
Array boilerplate at 0x293203e66e29: 
0x293203e66e29: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x043ec1403291 <Map[24]>
 - elements kind: PACKED_SMI_ELEMENTS
 - constant elements: 0x293203e66e41 <FixedArray[4]>
         0-3: 0
0x293203e66e89 points to: [0x293203e66ef8]
=== [0x293203e66ef8] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4574 S> 0x293203e66ef8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e66efa @    2 : c3                Star1 
 4574 E> 0x293203e66efb @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x293203e66eff @    7 : c4                Star0 
 4574 E> 0x293203e66f00 @    8 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
 4592 S> 0x293203e66f05 @   13 : a9                Return 
Constant pool (size = 1)
0x293203e66f09: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 1
           0: 0x293203e654b1 <String[15]: #isPositionValid>
Handler Table (size = 0)
Source Position Table (size = 12)
0x293203e66f21 <ByteArray[12]>
0x293203e66fa9 points to: [0x293203e67018]
=== [0x293203e67018] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 4642 S> 0x293203e67018 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x293203e6701a @    2 : c4                Star0 
 4626 E> 0x293203e6701b @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
         0x293203e6701f @    7 : c4                Star0 
 4634 E> 0x293203e67020 @    8 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
 4631 E> 0x293203e67024 @   12 : 2f fa 04          GetKeyedProperty r0, [4]
         0x293203e67027 @   15 : c4                Star0 
 4639 E> 0x293203e67028 @   16 : 2d 03 02 06       GetNamedProperty a0, [2], [6]
 4636 E> 0x293203e6702c @   20 : 2f fa 08          GetKeyedProperty r0, [8]
         0x293203e6702f @   23 : c4                Star0 
         0x293203e67030 @   24 : 0c                LdaZero 
 4642 E> 0x293203e67031 @   25 : 6c fa 0a          TestEqualStrict r0, [10]
 4647 S> 0x293203e67034 @   28 : a9                Return 
Constant pool (size = 3)
0x293203e67039: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 3
           0: 0x293203e656e9 <String[5]: #_grid>
           1: 0x013af0ed8ac9 <String[1]: #x>
           2: 0x013af0ed8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 20)
0x293203e67061 <ByteArray[20]>
0x293203e67179 points to: [0x293203e671e8]
=== [0x293203e671e8] DISASSEMBLY ===
Parameter count 3
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
 4769 S> 0x293203e671e8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e671ec @    4 : 18 ea             Star r16
         0x293203e671ee @    6 : 0c                LdaZero 
 4771 E> 0x293203e671ef @    7 : 6b ea 02          TestEqual r16, [2]
         0x293203e671f2 @   10 : 98 53             JumpIfTrue [83] (0x293203e67245 @ 93)
 4806 S> 0x293203e671f4 @   12 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 4808 E> 0x293203e671f8 @   16 : 46 01 03          SubSmi [1], [3]
         0x293203e671fb @   19 : b6                Star14 
 4840 S> 0x293203e671fc @   20 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x293203e67200 @   24 : b5                Star15 
 4864 S> 0x293203e67201 @   25 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
         0x293203e67205 @   29 : 18 ea             Star r16
         0x293203e67207 @   31 : 0b ec             Ldar r14
 4869 E> 0x293203e67209 @   33 : 2f ea 08          GetKeyedProperty r16, [8]
         0x293203e6720c @   36 : 18 ea             Star r16
         0x293203e6720e @   38 : 0b eb             Ldar r15
 4872 E> 0x293203e67210 @   40 : 2f ea 0a          GetKeyedProperty r16, [10]
         0x293203e67213 @   43 : 18 ea             Star r16
         0x293203e67215 @   45 : 0c                LdaZero 
 4876 E> 0x293203e67216 @   46 : 6c ea 0c          TestEqualStrict r16, [12]
         0x293203e67219 @   49 : 99 17             JumpIfFalse [23] (0x293203e67230 @ 72)
 4901 S> 0x293203e6721b @   51 : 0c                LdaZero 
         0x293203e6721c @   52 : 18 e9             Star r17
         0x293203e6721e @   54 : 0b ec             Ldar r14
 4908 E> 0x293203e67220 @   56 : 34 04 e9 0d       SetKeyedProperty a1, r17, [13]
 4929 S> 0x293203e67224 @   60 : 0d 01             LdaSmi [1]
         0x293203e67226 @   62 : 18 e9             Star r17
         0x293203e67228 @   64 : 0b eb             Ldar r15
 4936 E> 0x293203e6722a @   66 : 34 04 e9 0f       SetKeyedProperty a1, r17, [15]
         0x293203e6722e @   70 : 8a 15             Jump [21] (0x293203e67243 @ 91)
 4990 S> 0x293203e67230 @   72 : 0c                LdaZero 
         0x293203e67231 @   73 : 18 e9             Star r17
         0x293203e67233 @   75 : 0d ff             LdaSmi [-1]
 4997 E> 0x293203e67235 @   77 : 34 04 e9 11       SetKeyedProperty a1, r17, [17]
 5019 S> 0x293203e67239 @   81 : 0d 01             LdaSmi [1]
         0x293203e6723b @   83 : 18 e9             Star r17
         0x293203e6723d @   85 : 0d ff             LdaSmi [-1]
 5026 E> 0x293203e6723f @   87 : 34 04 e9 13       SetKeyedProperty a1, r17, [19]
         0x293203e67243 @   91 : 8a 15             Jump [21] (0x293203e67258 @ 112)
 5083 S> 0x293203e67245 @   93 : 0c                LdaZero 
         0x293203e67246 @   94 : 18 e9             Star r17
         0x293203e67248 @   96 : 0d ff             LdaSmi [-1]
 5090 E> 0x293203e6724a @   98 : 34 04 e9 15       SetKeyedProperty a1, r17, [21]
 5108 S> 0x293203e6724e @  102 : 0d 01             LdaSmi [1]
         0x293203e67250 @  104 : 18 e9             Star r17
         0x293203e67252 @  106 : 0d ff             LdaSmi [-1]
 5115 E> 0x293203e67254 @  108 : 34 04 e9 17       SetKeyedProperty a1, r17, [23]
 5165 S> 0x293203e67258 @  112 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e6725c @  116 : 18 ea             Star r16
 5174 E> 0x293203e6725e @  118 : 2d 02 03 1a       GetNamedProperty <this>, [3], [26]
 5181 E> 0x293203e67262 @  122 : 46 01 19          SubSmi [1], [25]
 5167 E> 0x293203e67265 @  125 : 6d ea 1c          TestLessThan r16, [28]
         0x293203e67268 @  128 : 99 55             JumpIfFalse [85] (0x293203e672bd @ 213)
 5215 S> 0x293203e6726a @  130 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 5217 E> 0x293203e6726e @  134 : 45 01 1d          AddSmi [1], [29]
         0x293203e67271 @  137 : b8                Star12 
 5249 S> 0x293203e67272 @  138 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x293203e67276 @  142 : b7                Star13 
 5273 S> 0x293203e67277 @  143 : 2d 02 02 1e       GetNamedProperty <this>, [2], [30]
         0x293203e6727b @  147 : 18 ea             Star r16
         0x293203e6727d @  149 : 0b ee             Ldar r12
 5278 E> 0x293203e6727f @  151 : 2f ea 20          GetKeyedProperty r16, [32]
         0x293203e67282 @  154 : 18 ea             Star r16
         0x293203e67284 @  156 : 0b ed             Ldar r13
 5281 E> 0x293203e67286 @  158 : 2f ea 22          GetKeyedProperty r16, [34]
         0x293203e67289 @  161 : 18 ea             Star r16
         0x293203e6728b @  163 : 0c                LdaZero 
 5285 E> 0x293203e6728c @  164 : 6c ea 24          TestEqualStrict r16, [36]
         0x293203e6728f @  167 : 99 18             JumpIfFalse [24] (0x293203e672a7 @ 191)
 5310 S> 0x293203e67291 @  169 : 0d 02             LdaSmi [2]
         0x293203e67293 @  171 : 18 e9             Star r17
         0x293203e67295 @  173 : 0b ee             Ldar r12
 5317 E> 0x293203e67297 @  175 : 34 04 e9 25       SetKeyedProperty a1, r17, [37]
 5338 S> 0x293203e6729b @  179 : 0d 03             LdaSmi [3]
         0x293203e6729d @  181 : 18 e9             Star r17
         0x293203e6729f @  183 : 0b ed             Ldar r13
 5345 E> 0x293203e672a1 @  185 : 34 04 e9 27       SetKeyedProperty a1, r17, [39]
         0x293203e672a5 @  189 : 8a 16             Jump [22] (0x293203e672bb @ 211)
 5399 S> 0x293203e672a7 @  191 : 0d 02             LdaSmi [2]
         0x293203e672a9 @  193 : 18 e9             Star r17
         0x293203e672ab @  195 : 0d ff             LdaSmi [-1]
 5406 E> 0x293203e672ad @  197 : 34 04 e9 29       SetKeyedProperty a1, r17, [41]
 5428 S> 0x293203e672b1 @  201 : 0d 03             LdaSmi [3]
         0x293203e672b3 @  203 : 18 e9             Star r17
         0x293203e672b5 @  205 : 0d ff             LdaSmi [-1]
 5435 E> 0x293203e672b7 @  207 : 34 04 e9 2b       SetKeyedProperty a1, r17, [43]
         0x293203e672bb @  211 : 8a 16             Jump [22] (0x293203e672d1 @ 233)
 5492 S> 0x293203e672bd @  213 : 0d 02             LdaSmi [2]
         0x293203e672bf @  215 : 18 e9             Star r17
         0x293203e672c1 @  217 : 0d ff             LdaSmi [-1]
 5499 E> 0x293203e672c3 @  219 : 34 04 e9 2d       SetKeyedProperty a1, r17, [45]
 5517 S> 0x293203e672c7 @  223 : 0d 03             LdaSmi [3]
         0x293203e672c9 @  225 : 18 e9             Star r17
         0x293203e672cb @  227 : 0d ff             LdaSmi [-1]
 5524 E> 0x293203e672cd @  229 : 34 04 e9 2f       SetKeyedProperty a1, r17, [47]
 5571 S> 0x293203e672d1 @  233 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x293203e672d5 @  237 : 18 ea             Star r16
         0x293203e672d7 @  239 : 0c                LdaZero 
 5573 E> 0x293203e672d8 @  240 : 6b ea 31          TestEqual r16, [49]
         0x293203e672db @  243 : 98 55             JumpIfTrue [85] (0x293203e67330 @ 328)
 5608 S> 0x293203e672dd @  245 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e672e1 @  249 : ba                Star10 
 5638 S> 0x293203e672e2 @  250 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 5640 E> 0x293203e672e6 @  254 : 46 01 32          SubSmi [1], [50]
         0x293203e672e9 @  257 : b9                Star11 
 5666 S> 0x293203e672ea @  258 : 2d 02 02 33       GetNamedProperty <this>, [2], [51]
         0x293203e672ee @  262 : 18 ea             Star r16
         0x293203e672f0 @  264 : 0b f0             Ldar r10
 5671 E> 0x293203e672f2 @  266 : 2f ea 35          GetKeyedProperty r16, [53]
         0x293203e672f5 @  269 : 18 ea             Star r16
         0x293203e672f7 @  271 : 0b ef             Ldar r11
 5674 E> 0x293203e672f9 @  273 : 2f ea 37          GetKeyedProperty r16, [55]
         0x293203e672fc @  276 : 18 ea             Star r16
         0x293203e672fe @  278 : 0c                LdaZero 
 5678 E> 0x293203e672ff @  279 : 6c ea 39          TestEqualStrict r16, [57]
         0x293203e67302 @  282 : 99 18             JumpIfFalse [24] (0x293203e6731a @ 306)
 5703 S> 0x293203e67304 @  284 : 0d 04             LdaSmi [4]
         0x293203e67306 @  286 : 18 e9             Star r17
         0x293203e67308 @  288 : 0b f0             Ldar r10
 5710 E> 0x293203e6730a @  290 : 34 04 e9 3a       SetKeyedProperty a1, r17, [58]
 5731 S> 0x293203e6730e @  294 : 0d 05             LdaSmi [5]
         0x293203e67310 @  296 : 18 e9             Star r17
         0x293203e67312 @  298 : 0b ef             Ldar r11
 5738 E> 0x293203e67314 @  300 : 34 04 e9 3c       SetKeyedProperty a1, r17, [60]
         0x293203e67318 @  304 : 8a 16             Jump [22] (0x293203e6732e @ 326)
 5792 S> 0x293203e6731a @  306 : 0d 04             LdaSmi [4]
         0x293203e6731c @  308 : 18 e9             Star r17
         0x293203e6731e @  310 : 0d ff             LdaSmi [-1]
 5799 E> 0x293203e67320 @  312 : 34 04 e9 3e       SetKeyedProperty a1, r17, [62]
 5821 S> 0x293203e67324 @  316 : 0d 05             LdaSmi [5]
         0x293203e67326 @  318 : 18 e9             Star r17
         0x293203e67328 @  320 : 0d ff             LdaSmi [-1]
 5828 E> 0x293203e6732a @  322 : 34 04 e9 40       SetKeyedProperty a1, r17, [64]
         0x293203e6732e @  326 : 8a 16             Jump [22] (0x293203e67344 @ 348)
 5885 S> 0x293203e67330 @  328 : 0d 04             LdaSmi [4]
         0x293203e67332 @  330 : 18 e9             Star r17
         0x293203e67334 @  332 : 0d ff             LdaSmi [-1]
 5892 E> 0x293203e67336 @  334 : 34 04 e9 42       SetKeyedProperty a1, r17, [66]
 5910 S> 0x293203e6733a @  338 : 0d 05             LdaSmi [5]
         0x293203e6733c @  340 : 18 e9             Star r17
         0x293203e6733e @  342 : 0d ff             LdaSmi [-1]
 5917 E> 0x293203e67340 @  344 : 34 04 e9 44       SetKeyedProperty a1, r17, [68]
 5966 S> 0x293203e67344 @  348 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x293203e67348 @  352 : 18 ea             Star r16
 5975 E> 0x293203e6734a @  354 : 2d 02 04 47       GetNamedProperty <this>, [4], [71]
 5983 E> 0x293203e6734e @  358 : 46 01 46          SubSmi [1], [70]
 5968 E> 0x293203e67351 @  361 : 6d ea 49          TestLessThan r16, [73]
         0x293203e67354 @  364 : 99 55             JumpIfFalse [85] (0x293203e673a9 @ 449)
 6017 S> 0x293203e67356 @  366 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e6735a @  370 : bc                Star8 
 6047 S> 0x293203e6735b @  371 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 6049 E> 0x293203e6735f @  375 : 45 01 4a          AddSmi [1], [74]
         0x293203e67362 @  378 : bb                Star9 
 6075 S> 0x293203e67363 @  379 : 2d 02 02 4b       GetNamedProperty <this>, [2], [75]
         0x293203e67367 @  383 : 18 ea             Star r16
         0x293203e67369 @  385 : 0b f2             Ldar r8
 6080 E> 0x293203e6736b @  387 : 2f ea 4d          GetKeyedProperty r16, [77]
         0x293203e6736e @  390 : 18 ea             Star r16
         0x293203e67370 @  392 : 0b f1             Ldar r9
 6083 E> 0x293203e67372 @  394 : 2f ea 4f          GetKeyedProperty r16, [79]
         0x293203e67375 @  397 : 18 ea             Star r16
         0x293203e67377 @  399 : 0c                LdaZero 
 6087 E> 0x293203e67378 @  400 : 6c ea 51          TestEqualStrict r16, [81]
         0x293203e6737b @  403 : 99 18             JumpIfFalse [24] (0x293203e67393 @ 427)
 6112 S> 0x293203e6737d @  405 : 0d 06             LdaSmi [6]
         0x293203e6737f @  407 : 18 e9             Star r17
         0x293203e67381 @  409 : 0b f2             Ldar r8
 6119 E> 0x293203e67383 @  411 : 34 04 e9 52       SetKeyedProperty a1, r17, [82]
 6140 S> 0x293203e67387 @  415 : 0d 07             LdaSmi [7]
         0x293203e67389 @  417 : 18 e9             Star r17
         0x293203e6738b @  419 : 0b f1             Ldar r9
 6147 E> 0x293203e6738d @  421 : 34 04 e9 54       SetKeyedProperty a1, r17, [84]
         0x293203e67391 @  425 : 8a 16             Jump [22] (0x293203e673a7 @ 447)
 6201 S> 0x293203e67393 @  427 : 0d 06             LdaSmi [6]
         0x293203e67395 @  429 : 18 e9             Star r17
         0x293203e67397 @  431 : 0d ff             LdaSmi [-1]
 6208 E> 0x293203e67399 @  433 : 34 04 e9 56       SetKeyedProperty a1, r17, [86]
 6230 S> 0x293203e6739d @  437 : 0d 07             LdaSmi [7]
         0x293203e6739f @  439 : 18 e9             Star r17
         0x293203e673a1 @  441 : 0d ff             LdaSmi [-1]
 6237 E> 0x293203e673a3 @  443 : 34 04 e9 58       SetKeyedProperty a1, r17, [88]
         0x293203e673a7 @  447 : 8a 16             Jump [22] (0x293203e673bd @ 469)
 6294 S> 0x293203e673a9 @  449 : 0d 06             LdaSmi [6]
         0x293203e673ab @  451 : 18 e9             Star r17
         0x293203e673ad @  453 : 0d ff             LdaSmi [-1]
 6301 E> 0x293203e673af @  455 : 34 04 e9 5a       SetKeyedProperty a1, r17, [90]
 6319 S> 0x293203e673b3 @  459 : 0d 07             LdaSmi [7]
         0x293203e673b5 @  461 : 18 e9             Star r17
         0x293203e673b7 @  463 : 0d ff             LdaSmi [-1]
 6326 E> 0x293203e673b9 @  465 : 34 04 e9 5c       SetKeyedProperty a1, r17, [92]
 6360 S> 0x293203e673bd @  469 : 2d 02 05 5e       GetNamedProperty <this>, [5], [94]
         0x293203e673c1 @  473 : 96 04             JumpIfToBooleanTrue [4] (0x293203e673c5 @ 477)
 6395 S> 0x293203e673c3 @  475 : 0e                LdaUndefined 
 6402 S> 0x293203e673c4 @  476 : a9                Return 
 6439 S> 0x293203e673c5 @  477 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e673c9 @  481 : 18 ea             Star r16
         0x293203e673cb @  483 : 0c                LdaZero 
 6441 E> 0x293203e673cc @  484 : 6b ea 60          TestEqual r16, [96]
         0x293203e673cf @  487 : 98 64             JumpIfTrue [100] (0x293203e67433 @ 587)
 6454 E> 0x293203e673d1 @  489 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x293203e673d5 @  493 : 18 ea             Star r16
         0x293203e673d7 @  495 : 0c                LdaZero 
 6456 E> 0x293203e673d8 @  496 : 6b ea 61          TestEqual r16, [97]
         0x293203e673db @  499 : 98 58             JumpIfTrue [88] (0x293203e67433 @ 587)
 6491 S> 0x293203e673dd @  501 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 6493 E> 0x293203e673e1 @  505 : 46 01 62          SubSmi [1], [98]
         0x293203e673e4 @  508 : be                Star6 
 6525 S> 0x293203e673e5 @  509 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 6527 E> 0x293203e673e9 @  513 : 46 01 63          SubSmi [1], [99]
         0x293203e673ec @  516 : bd                Star7 
 6553 S> 0x293203e673ed @  517 : 2d 02 02 64       GetNamedProperty <this>, [2], [100]
         0x293203e673f1 @  521 : 18 ea             Star r16
         0x293203e673f3 @  523 : 0b f4             Ldar r6
 6558 E> 0x293203e673f5 @  525 : 2f ea 66          GetKeyedProperty r16, [102]
         0x293203e673f8 @  528 : 18 ea             Star r16
         0x293203e673fa @  530 : 0b f3             Ldar r7
 6561 E> 0x293203e673fc @  532 : 2f ea 68          GetKeyedProperty r16, [104]
         0x293203e673ff @  535 : 18 ea             Star r16
         0x293203e67401 @  537 : 0c                LdaZero 
 6565 E> 0x293203e67402 @  538 : 6c ea 6a          TestEqualStrict r16, [106]
         0x293203e67405 @  541 : 99 18             JumpIfFalse [24] (0x293203e6741d @ 565)
 6590 S> 0x293203e67407 @  543 : 0d 08             LdaSmi [8]
         0x293203e67409 @  545 : 18 e9             Star r17
         0x293203e6740b @  547 : 0b f4             Ldar r6
 6597 E> 0x293203e6740d @  549 : 34 04 e9 6b       SetKeyedProperty a1, r17, [107]
 6618 S> 0x293203e67411 @  553 : 0d 09             LdaSmi [9]
         0x293203e67413 @  555 : 18 e9             Star r17
         0x293203e67415 @  557 : 0b f3             Ldar r7
 6625 E> 0x293203e67417 @  559 : 34 04 e9 6d       SetKeyedProperty a1, r17, [109]
         0x293203e6741b @  563 : 8a 16             Jump [22] (0x293203e67431 @ 585)
 6679 S> 0x293203e6741d @  565 : 0d 08             LdaSmi [8]
         0x293203e6741f @  567 : 18 e9             Star r17
         0x293203e67421 @  569 : 0d ff             LdaSmi [-1]
 6686 E> 0x293203e67423 @  571 : 34 04 e9 6f       SetKeyedProperty a1, r17, [111]
 6708 S> 0x293203e67427 @  575 : 0d 09             LdaSmi [9]
         0x293203e67429 @  577 : 18 e9             Star r17
         0x293203e6742b @  579 : 0d ff             LdaSmi [-1]
 6715 E> 0x293203e6742d @  581 : 34 04 e9 71       SetKeyedProperty a1, r17, [113]
         0x293203e67431 @  585 : 8a 16             Jump [22] (0x293203e67447 @ 607)
 6772 S> 0x293203e67433 @  587 : 0d 08             LdaSmi [8]
         0x293203e67435 @  589 : 18 e9             Star r17
         0x293203e67437 @  591 : 0d ff             LdaSmi [-1]
 6779 E> 0x293203e67439 @  593 : 34 04 e9 73       SetKeyedProperty a1, r17, [115]
 6797 S> 0x293203e6743d @  597 : 0d 09             LdaSmi [9]
         0x293203e6743f @  599 : 18 e9             Star r17
         0x293203e67441 @  601 : 0d ff             LdaSmi [-1]
 6804 E> 0x293203e67443 @  603 : 34 04 e9 75       SetKeyedProperty a1, r17, [117]
 6857 S> 0x293203e67447 @  607 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e6744b @  611 : 18 ea             Star r16
 6866 E> 0x293203e6744d @  613 : 2d 02 03 78       GetNamedProperty <this>, [3], [120]
 6873 E> 0x293203e67451 @  617 : 46 01 77          SubSmi [1], [119]
 6859 E> 0x293203e67454 @  620 : 6d ea 7a          TestLessThan r16, [122]
         0x293203e67457 @  623 : 99 64             JumpIfFalse [100] (0x293203e674bb @ 723)
 6885 E> 0x293203e67459 @  625 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x293203e6745d @  629 : 18 ea             Star r16
         0x293203e6745f @  631 : 0c                LdaZero 
 6887 E> 0x293203e67460 @  632 : 6b ea 7b          TestEqual r16, [123]
         0x293203e67463 @  635 : 98 58             JumpIfTrue [88] (0x293203e674bb @ 723)
 6922 S> 0x293203e67465 @  637 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 6924 E> 0x293203e67469 @  641 : 45 01 7c          AddSmi [1], [124]
         0x293203e6746c @  644 : c0                Star4 
 6956 S> 0x293203e6746d @  645 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 6958 E> 0x293203e67471 @  649 : 46 01 7d          SubSmi [1], [125]
         0x293203e67474 @  652 : bf                Star5 
 6984 S> 0x293203e67475 @  653 : 2d 02 02 7e       GetNamedProperty <this>, [2], [126]
         0x293203e67479 @  657 : 18 ea             Star r16
         0x293203e6747b @  659 : 0b f6             Ldar r4
 6989 E> 0x293203e6747d @  661 : 2f ea 80          GetKeyedProperty r16, [128]
         0x293203e67480 @  664 : 18 ea             Star r16
         0x293203e67482 @  666 : 0b f5             Ldar r5
 6992 E> 0x293203e67484 @  668 : 2f ea 82          GetKeyedProperty r16, [130]
         0x293203e67487 @  671 : 18 ea             Star r16
         0x293203e67489 @  673 : 0c                LdaZero 
 6996 E> 0x293203e6748a @  674 : 6c ea 84          TestEqualStrict r16, [132]
         0x293203e6748d @  677 : 99 18             JumpIfFalse [24] (0x293203e674a5 @ 701)
 7021 S> 0x293203e6748f @  679 : 0d 0a             LdaSmi [10]
         0x293203e67491 @  681 : 18 e9             Star r17
         0x293203e67493 @  683 : 0b f6             Ldar r4
 7029 E> 0x293203e67495 @  685 : 34 04 e9 85       SetKeyedProperty a1, r17, [133]
 7050 S> 0x293203e67499 @  689 : 0d 0b             LdaSmi [11]
         0x293203e6749b @  691 : 18 e9             Star r17
         0x293203e6749d @  693 : 0b f5             Ldar r5
 7058 E> 0x293203e6749f @  695 : 34 04 e9 87       SetKeyedProperty a1, r17, [135]
         0x293203e674a3 @  699 : 8a 16             Jump [22] (0x293203e674b9 @ 721)
 7112 S> 0x293203e674a5 @  701 : 0d 0a             LdaSmi [10]
         0x293203e674a7 @  703 : 18 e9             Star r17
         0x293203e674a9 @  705 : 0d ff             LdaSmi [-1]
 7120 E> 0x293203e674ab @  707 : 34 04 e9 89       SetKeyedProperty a1, r17, [137]
 7142 S> 0x293203e674af @  711 : 0d 0b             LdaSmi [11]
         0x293203e674b1 @  713 : 18 e9             Star r17
         0x293203e674b3 @  715 : 0d ff             LdaSmi [-1]
 7150 E> 0x293203e674b5 @  717 : 34 04 e9 8b       SetKeyedProperty a1, r17, [139]
         0x293203e674b9 @  721 : 8a 16             Jump [22] (0x293203e674cf @ 743)
 7207 S> 0x293203e674bb @  723 : 0d 0a             LdaSmi [10]
         0x293203e674bd @  725 : 18 e9             Star r17
         0x293203e674bf @  727 : 0d ff             LdaSmi [-1]
 7215 E> 0x293203e674c1 @  729 : 34 04 e9 8d       SetKeyedProperty a1, r17, [141]
 7233 S> 0x293203e674c5 @  733 : 0d 0b             LdaSmi [11]
         0x293203e674c7 @  735 : 18 e9             Star r17
         0x293203e674c9 @  737 : 0d ff             LdaSmi [-1]
 7241 E> 0x293203e674cb @  739 : 34 04 e9 8f       SetKeyedProperty a1, r17, [143]
 7295 S> 0x293203e674cf @  743 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e674d3 @  747 : 18 ea             Star r16
         0x293203e674d5 @  749 : 0c                LdaZero 
 7297 E> 0x293203e674d6 @  750 : 6b ea 91          TestEqual r16, [145]
         0x293203e674d9 @  753 : 98 6a             JumpIfTrue [106] (0x293203e67543 @ 859)
 7310 E> 0x293203e674db @  755 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x293203e674df @  759 : 18 ea             Star r16
 7319 E> 0x293203e674e1 @  761 : 2d 02 04 93       GetNamedProperty <this>, [4], [147]
 7327 E> 0x293203e674e5 @  765 : 46 01 92          SubSmi [1], [146]
 7312 E> 0x293203e674e8 @  768 : 6d ea 95          TestLessThan r16, [149]
         0x293203e674eb @  771 : 99 58             JumpIfFalse [88] (0x293203e67543 @ 859)
 7361 S> 0x293203e674ed @  773 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 7363 E> 0x293203e674f1 @  777 : 46 01 96          SubSmi [1], [150]
         0x293203e674f4 @  780 : c2                Star2 
 7395 S> 0x293203e674f5 @  781 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 7397 E> 0x293203e674f9 @  785 : 45 01 97          AddSmi [1], [151]
         0x293203e674fc @  788 : c1                Star3 
 7423 S> 0x293203e674fd @  789 : 2d 02 02 98       GetNamedProperty <this>, [2], [152]
         0x293203e67501 @  793 : 18 ea             Star r16
         0x293203e67503 @  795 : 0b f8             Ldar r2
 7428 E> 0x293203e67505 @  797 : 2f ea 9a          GetKeyedProperty r16, [154]
         0x293203e67508 @  800 : 18 ea             Star r16
         0x293203e6750a @  802 : 0b f7             Ldar r3
 7431 E> 0x293203e6750c @  804 : 2f ea 9c          GetKeyedProperty r16, [156]
         0x293203e6750f @  807 : 18 ea             Star r16
         0x293203e67511 @  809 : 0c                LdaZero 
 7435 E> 0x293203e67512 @  810 : 6c ea 9e          TestEqualStrict r16, [158]
         0x293203e67515 @  813 : 99 18             JumpIfFalse [24] (0x293203e6752d @ 837)
 7460 S> 0x293203e67517 @  815 : 0d 0c             LdaSmi [12]
         0x293203e67519 @  817 : 18 e9             Star r17
         0x293203e6751b @  819 : 0b f8             Ldar r2
 7468 E> 0x293203e6751d @  821 : 34 04 e9 9f       SetKeyedProperty a1, r17, [159]
 7489 S> 0x293203e67521 @  825 : 0d 0d             LdaSmi [13]
         0x293203e67523 @  827 : 18 e9             Star r17
         0x293203e67525 @  829 : 0b f7             Ldar r3
 7497 E> 0x293203e67527 @  831 : 34 04 e9 a1       SetKeyedProperty a1, r17, [161]
         0x293203e6752b @  835 : 8a 16             Jump [22] (0x293203e67541 @ 857)
 7551 S> 0x293203e6752d @  837 : 0d 0c             LdaSmi [12]
         0x293203e6752f @  839 : 18 e9             Star r17
         0x293203e67531 @  841 : 0d ff             LdaSmi [-1]
 7559 E> 0x293203e67533 @  843 : 34 04 e9 a3       SetKeyedProperty a1, r17, [163]
 7581 S> 0x293203e67537 @  847 : 0d 0d             LdaSmi [13]
         0x293203e67539 @  849 : 18 e9             Star r17
         0x293203e6753b @  851 : 0d ff             LdaSmi [-1]
 7589 E> 0x293203e6753d @  853 : 34 04 e9 a5       SetKeyedProperty a1, r17, [165]
         0x293203e67541 @  857 : 8a 16             Jump [22] (0x293203e67557 @ 879)
 7646 S> 0x293203e67543 @  859 : 0d 0c             LdaSmi [12]
         0x293203e67545 @  861 : 18 e9             Star r17
         0x293203e67547 @  863 : 0d ff             LdaSmi [-1]
 7654 E> 0x293203e67549 @  865 : 34 04 e9 a7       SetKeyedProperty a1, r17, [167]
 7672 S> 0x293203e6754d @  869 : 0d 0d             LdaSmi [13]
         0x293203e6754f @  871 : 18 e9             Star r17
         0x293203e67551 @  873 : 0d ff             LdaSmi [-1]
 7680 E> 0x293203e67553 @  875 : 34 04 e9 a9       SetKeyedProperty a1, r17, [169]
 7735 S> 0x293203e67557 @  879 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x293203e6755b @  883 : 18 ea             Star r16
 7744 E> 0x293203e6755d @  885 : 2d 02 03 ac       GetNamedProperty <this>, [3], [172]
 7751 E> 0x293203e67561 @  889 : 46 01 ab          SubSmi [1], [171]
 7737 E> 0x293203e67564 @  892 : 6d ea ae          TestLessThan r16, [174]
         0x293203e67567 @  895 : 99 6a             JumpIfFalse [106] (0x293203e675d1 @ 1001)
 7763 E> 0x293203e67569 @  897 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x293203e6756d @  901 : 18 ea             Star r16
 7772 E> 0x293203e6756f @  903 : 2d 02 04 b0       GetNamedProperty <this>, [4], [176]
 7780 E> 0x293203e67573 @  907 : 46 01 af          SubSmi [1], [175]
 7765 E> 0x293203e67576 @  910 : 6d ea b2          TestLessThan r16, [178]
         0x293203e67579 @  913 : 99 58             JumpIfFalse [88] (0x293203e675d1 @ 1001)
 7814 S> 0x293203e6757b @  915 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 7816 E> 0x293203e6757f @  919 : 45 01 b3          AddSmi [1], [179]
         0x293203e67582 @  922 : c4                Star0 
 7848 S> 0x293203e67583 @  923 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 7850 E> 0x293203e67587 @  927 : 45 01 b4          AddSmi [1], [180]
         0x293203e6758a @  930 : c3                Star1 
 7876 S> 0x293203e6758b @  931 : 2d 02 02 b5       GetNamedProperty <this>, [2], [181]
         0x293203e6758f @  935 : 18 ea             Star r16
         0x293203e67591 @  937 : 0b fa             Ldar r0
 7881 E> 0x293203e67593 @  939 : 2f ea b7          GetKeyedProperty r16, [183]
         0x293203e67596 @  942 : 18 ea             Star r16
         0x293203e67598 @  944 : 0b f9             Ldar r1
 7884 E> 0x293203e6759a @  946 : 2f ea b9          GetKeyedProperty r16, [185]
         0x293203e6759d @  949 : 18 ea             Star r16
         0x293203e6759f @  951 : 0c                LdaZero 
 7888 E> 0x293203e675a0 @  952 : 6c ea bb          TestEqualStrict r16, [187]
         0x293203e675a3 @  955 : 99 18             JumpIfFalse [24] (0x293203e675bb @ 979)
 7913 S> 0x293203e675a5 @  957 : 0d 0e             LdaSmi [14]
         0x293203e675a7 @  959 : 18 e9             Star r17
         0x293203e675a9 @  961 : 0b fa             Ldar r0
 7921 E> 0x293203e675ab @  963 : 34 04 e9 bc       SetKeyedProperty a1, r17, [188]
 7942 S> 0x293203e675af @  967 : 0d 0f             LdaSmi [15]
         0x293203e675b1 @  969 : 18 e9             Star r17
         0x293203e675b3 @  971 : 0b f9             Ldar r1
 7950 E> 0x293203e675b5 @  973 : 34 04 e9 be       SetKeyedProperty a1, r17, [190]
         0x293203e675b9 @  977 : 8a 16             Jump [22] (0x293203e675cf @ 999)
 8004 S> 0x293203e675bb @  979 : 0d 0e             LdaSmi [14]
         0x293203e675bd @  981 : 18 e9             Star r17
         0x293203e675bf @  983 : 0d ff             LdaSmi [-1]
 8012 E> 0x293203e675c1 @  985 : 34 04 e9 c0       SetKeyedProperty a1, r17, [192]
 8034 S> 0x293203e675c5 @  989 : 0d 0f             LdaSmi [15]
         0x293203e675c7 @  991 : 18 e9             Star r17
         0x293203e675c9 @  993 : 0d ff             LdaSmi [-1]
 8042 E> 0x293203e675cb @  995 : 34 04 e9 c2       SetKeyedProperty a1, r17, [194]
         0x293203e675cf @  999 : 8a 16             Jump [22] (0x293203e675e5 @ 1021)
 8099 S> 0x293203e675d1 @ 1001 : 0d 0e             LdaSmi [14]
         0x293203e675d3 @ 1003 : 18 e9             Star r17
         0x293203e675d5 @ 1005 : 0d ff             LdaSmi [-1]
 8107 E> 0x293203e675d7 @ 1007 : 34 04 e9 c4       SetKeyedProperty a1, r17, [196]
 8125 S> 0x293203e675db @ 1011 : 0d 0f             LdaSmi [15]
         0x293203e675dd @ 1013 : 18 e9             Star r17
         0x293203e675df @ 1015 : 0d ff             LdaSmi [-1]
 8133 E> 0x293203e675e1 @ 1017 : 34 04 e9 c6       SetKeyedProperty a1, r17, [198]
         0x293203e675e5 @ 1021 : 0e                LdaUndefined 
 8153 S> 0x293203e675e6 @ 1022 : a9                Return 
Constant pool (size = 6)
0x293203e675e9: [FixedArray] in OldSpace
 - map: 0x043ec14012e1 <Map>
 - length: 6
           0: 0x013af0ed8ac9 <String[1]: #x>
           1: 0x013af0ed8ae1 <String[1]: #y>
           2: 0x293203e656e9 <String[5]: #_grid>
           3: 0x293203e65729 <String[6]: #_width>
           4: 0x293203e65761 <String[7]: #_height>
           5: 0x293203e65701 <String[21]: #_withDiagonalMovement>
Handler Table (size = 0)
Source Position Table (size = 436)
0x293203e67629 <ByteArray[436]>
<< OUTPUTTING DISASSEMBLY END >>
