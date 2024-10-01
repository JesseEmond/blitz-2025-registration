<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1f2adb164f18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1f2adb164f18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1f2adb164f1c @    4 : c4                Star0 
 8243 S> 0x1f2adb164f1d @    5 : a9                Return 
Constant pool (size = 1)
0x1f2adb164f21: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 1
           0: 0x1f2adb164f39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1f2adb1679e9 <ByteArray[8]>
0x1f2adb164f39 points to: [0x1f2adb164fa8]
=== [0x1f2adb164fa8] DISASSEMBLY ===
Parameter count 6
Register count 14
Frame size 112
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1f2adb164fa8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x1f2adb164fab @    3 : 1a f9             PushContext r1
         0x1f2adb164fad @    5 : 10                LdaTheHole 
         0x1f2adb164fae @    6 : 25 02             StaCurrentContextSlot [2]
         0x1f2adb164fb0 @    8 : 10                LdaTheHole 
         0x1f2adb164fb1 @    9 : 25 03             StaCurrentContextSlot [3]
   76 S> 0x1f2adb164fb3 @   11 : 21 01 00          LdaGlobal [1], [0]
         0x1f2adb164fb6 @   14 : c1                Star3 
   83 E> 0x1f2adb164fb7 @   15 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x1f2adb164fbb @   19 : c2                Star2 
         0x1f2adb164fbc @   20 : 13 03             LdaConstant [3]
         0x1f2adb164fbe @   22 : bf                Star5 
   98 E> 0x1f2adb164fbf @   23 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x1f2adb164fc3 @   27 : be                Star6 
         0x1f2adb164fc4 @   28 : 19 03 f6          Mov a0, r4
   83 E> 0x1f2adb164fc7 @   31 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x1f2adb164fcc @   36 : 0e                LdaUndefined 
  163 E> 0x1f2adb164fcd @   37 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  190 S> 0x1f2adb164fd1 @   41 : 13 06             LdaConstant [6]
         0x1f2adb164fd3 @   43 : c1                Star3 
  190 E> 0x1f2adb164fd4 @   44 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  190 E> 0x1f2adb164fd8 @   48 : 25 02             StaCurrentContextSlot [2]
  239 S> 0x1f2adb164fda @   50 : 0d ff             LdaSmi [-1]
  239 E> 0x1f2adb164fdc @   52 : 25 03             StaCurrentContextSlot [3]
         0x1f2adb164fde @   54 : 81 07             CreateBlockContext [7]
         0x1f2adb164fe0 @   56 : 1a f8             PushContext r2
         0x1f2adb164fe2 @   58 : 10                LdaTheHole 
         0x1f2adb164fe3 @   59 : 25 02             StaCurrentContextSlot [2]
         0x1f2adb164fe5 @   61 : 10                LdaTheHole 
         0x1f2adb164fe6 @   62 : be                Star6 
         0x1f2adb164fe7 @   63 : 80 09 00 02       CreateClosure [9], [0], #2
         0x1f2adb164feb @   67 : c1                Star3 
         0x1f2adb164fec @   68 : 13 08             LdaConstant [8]
         0x1f2adb164fee @   70 : c0                Star4 
         0x1f2adb164fef @   71 : 80 0a 01 02       CreateClosure [10], [1], #2
         0x1f2adb164ff3 @   75 : bd                Star7 
         0x1f2adb164ff4 @   76 : 80 0b 02 02       CreateClosure [11], [2], #2
         0x1f2adb164ff8 @   80 : bc                Star8 
         0x1f2adb164ff9 @   81 : 80 0c 03 02       CreateClosure [12], [3], #2
         0x1f2adb164ffd @   85 : bb                Star9 
         0x1f2adb164ffe @   86 : 80 0d 04 02       CreateClosure [13], [4], #2
         0x1f2adb165002 @   90 : ba                Star10 
         0x1f2adb165003 @   91 : 80 0e 05 02       CreateClosure [14], [5], #2
         0x1f2adb165007 @   95 : b9                Star11 
         0x1f2adb165008 @   96 : 80 0f 06 02       CreateClosure [15], [6], #2
         0x1f2adb16500c @  100 : b8                Star12 
         0x1f2adb16500d @  101 : 80 10 07 02       CreateClosure [16], [7], #2
         0x1f2adb165011 @  105 : b7                Star13 
         0x1f2adb165012 @  106 : 19 f7 f5          Mov r3, r5
         0x1f2adb165015 @  109 : 65 28 00 f6 0a    CallRuntime [DefineClass], r4-r13
         0x1f2adb16501a @  114 : c0                Star4 
         0x1f2adb16501b @  115 : 0b f5             Ldar r5
         0x1f2adb16501d @  117 : 25 02             StaCurrentContextSlot [2]
         0x1f2adb16501f @  119 : 1b f8             PopContext r2
         0x1f2adb165021 @  121 : c4                Star0 
 8157 S> 0x1f2adb165022 @  122 : 0b fa             Ldar r0
 8181 E> 0x1f2adb165024 @  124 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x1f2adb165028 @  128 : 0e                LdaUndefined 
 8240 S> 0x1f2adb165029 @  129 : a9                Return 
Constant pool (size = 17)
0x1f2adb165031: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 17
           0: 0x1f2adb1650c9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x32ad8b405ab9 <String[6]: #Object>
           2: 0x32ad8b404c11 <String[14]: #defineProperty>
           3: 0x1f2adb165169 <String[10]: #__esModule>
           4: 0x1f2adb165189 <ObjectBoilerplateDescription[3]>
           5: 0x1f2adb1651b1 <String[15]: #PathfindingGrid>
           6: 0x1f2adb1651d1 <String[18]: #../geometry/vector>
           7: 0x1f2adb1651f9 <ScopeInfo CLASS_SCOPE>
           8: 0x1f2adb165241 <FixedArray[7]>
           9: 0x1f2adb165509 <SharedFunctionInfo PathfindingGrid>
          10: 0x1f2adb165a09 <SharedFunctionInfo from2DArray>
          11: 0x1f2adb165b31 <SharedFunctionInfo getPath>
          12: 0x1f2adb1660c9 <SharedFunctionInfo getDistances>
          13: 0x1f2adb1662b1 <SharedFunctionInfo internalGetDistances>
          14: 0x1f2adb166ab1 <SharedFunctionInfo isPositionValid>
          15: 0x1f2adb166c21 <SharedFunctionInfo getNeighbours>
          16: 0x1f2adb167169 <SharedFunctionInfo getNeighboursFast>
Handler Table (size = 0)
Source Position Table (size = 39)
0x1f2adb167999 <ByteArray[39]>
Boilerplate at 0x1f2adb165189: 
0x1f2adb165189: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x32ad8b402059 <Map>
 - length: 3
           0: 8
           1: 0x32ad8b406419 <String[5]: #value>
           2: 0x32ad8b401729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x1f2adb165241 has 7 elements:
0x1f2adb165241: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 7
           0: 10
           1: 0x1f2adb165289 <DescriptorArray[5]>
           2: 0x32ad8b403301 <NumberDictionary[7]>
           3: 0x32ad8b401329 <FixedArray[0]>
           4: 0x1f2adb165381 <DescriptorArray[7]>
           5: 0x32ad8b403301 <NumberDictionary[7]>
           6: 0x32ad8b401329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xa (10)
Element[1]
0x1f2adb165289: [DescriptorArray] in OldSpace
 - map: 0x32ad8b407761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x32ad8b4055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x1ee0de2b4fe1 <AccessorInfo>
  [1]: 0x32ad8b4058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 1, attrs: [__C]) @ 0x1ee0de2b4f71 <AccessorInfo>
  [2]: 0x32ad8b405cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 0, attrs: [___]) @ 0x1ee0de2b5051 <AccessorInfo>
  [3]: 0x32ad8b4065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 3, attrs: [W_C]) @ 0x1f2adb165349 <ClassPositions 243, 8156>
  [4]: 0x1f2adb165361: [String] in OldSpace: #from2DArray (const data descriptor, p: 4, attrs: [W_C]) @ 3
Element[2]
0x32ad8b403301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x32ad8b401329: [FixedArray] in ReadOnlySpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 0
Element[4]
0x1f2adb165381: [DescriptorArray] in OldSpace
 - map: 0x32ad8b407761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 7
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x32ad8b404a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x1f2adb165441: [String] in OldSpace: #getPath (const data descriptor, p: 2, attrs: [W_C]) @ 4
  [2]: 0x1f2adb165459: [String] in OldSpace: #getDistances (const data descriptor, p: 3, attrs: [W_C]) @ 5
  [3]: 0x1f2adb165479: [String] in OldSpace: #internalGetDistances (const data descriptor, p: 0, attrs: [W_C]) @ 6
  [4]: 0x1f2adb1654a1: [String] in OldSpace: #isPositionValid (const data descriptor, p: 6, attrs: [W_C]) @ 7
  [5]: 0x1f2adb1654c1: [String] in OldSpace: #getNeighbours (const data descriptor, p: 5, attrs: [W_C]) @ 8
  [6]: 0x1f2adb1654e1: [String] in OldSpace: #getNeighboursFast (const data descriptor, p: 4, attrs: [W_C]) @ 9
Element[5]
0x32ad8b403301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x32ad8b401329: [FixedArray] in ReadOnlySpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 0
0x1f2adb165509 points to: [0x1f2adb165578]
=== [0x1f2adb165578] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  414 E> 0x1f2adb165578 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1f2adb16557b @    3 : 1a fa             PushContext r0
         0x1f2adb16557d @    5 : 0b 02             Ldar <this>
         0x1f2adb16557f @    7 : 25 02             StaCurrentContextSlot [2]
  455 S> 0x1f2adb165581 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165583 @   11 : c3                Star1 
         0x1f2adb165584 @   12 : 0b 03             Ldar a0
  466 E> 0x1f2adb165586 @   14 : 32 f9 01 00       SetNamedProperty r1, [1], [0]
  483 S> 0x1f2adb16558a @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb16558c @   20 : c3                Star1 
         0x1f2adb16558d @   21 : 0b 04             Ldar a1
  510 E> 0x1f2adb16558f @   23 : 32 f9 02 02       SetNamedProperty r1, [2], [2]
  543 S> 0x1f2adb165593 @   27 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165595 @   29 : c3                Star1 
         0x1f2adb165596 @   30 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165598 @   32 : c2                Star2 
  562 E> 0x1f2adb165599 @   33 : 2d f8 01 04       GetNamedProperty r2, [1], [4]
         0x1f2adb16559d @   37 : c2                Star2 
  568 E> 0x1f2adb16559e @   38 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
  555 E> 0x1f2adb1655a2 @   42 : 32 f9 04 08       SetNamedProperty r1, [4], [8]
  584 S> 0x1f2adb1655a6 @   46 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb1655a8 @   48 : c3                Star1 
  593 E> 0x1f2adb1655a9 @   49 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x1f2adb1655ad @   53 : c3                Star1 
         0x1f2adb1655ae @   54 : 0c                LdaZero 
  600 E> 0x1f2adb1655af @   55 : 6c f9 0c          TestEqualStrict r1, [12]
         0x1f2adb1655b2 @   58 : 99 11             JumpIfFalse [17] (0x1f2adb1655c3 @ 75)
  621 S> 0x1f2adb1655b4 @   60 : 21 05 0d          LdaGlobal [5], [13]
         0x1f2adb1655b7 @   63 : c3                Star1 
         0x1f2adb1655b8 @   64 : 13 06             LdaConstant [6]
         0x1f2adb1655ba @   66 : c2                Star2 
         0x1f2adb1655bb @   67 : 0b f9             Ldar r1
  627 E> 0x1f2adb1655bd @   69 : 69 f9 f8 01 0f    Construct r1, r2-r2, [15]
  621 E> 0x1f2adb1655c2 @   74 : a7                Throw 
  673 S> 0x1f2adb1655c3 @   75 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb1655c5 @   77 : c3                Star1 
         0x1f2adb1655c6 @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb1655c8 @   80 : c2                Star2 
  693 E> 0x1f2adb1655c9 @   81 : 2d f8 01 11       GetNamedProperty r2, [1], [17]
         0x1f2adb1655cd @   85 : c2                Star2 
         0x1f2adb1655ce @   86 : 0c                LdaZero 
  698 E> 0x1f2adb1655cf @   87 : 2f f8 13          GetKeyedProperty r2, [19]
         0x1f2adb1655d2 @   90 : c2                Star2 
  702 E> 0x1f2adb1655d3 @   91 : 2d f8 03 15       GetNamedProperty r2, [3], [21]
  686 E> 0x1f2adb1655d7 @   95 : 32 f9 07 17       SetNamedProperty r1, [7], [23]
  718 S> 0x1f2adb1655db @   99 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb1655dd @  101 : c2                Star2 
  727 E> 0x1f2adb1655de @  102 : 2d f8 01 19       GetNamedProperty r2, [1], [25]
         0x1f2adb1655e2 @  106 : c2                Star2 
  733 E> 0x1f2adb1655e3 @  107 : 2d f8 08 1b       GetNamedProperty r2, [8], [27]
         0x1f2adb1655e7 @  111 : c3                Star1 
         0x1f2adb1655e8 @  112 : 80 09 00 02       CreateClosure [9], [0], #2
         0x1f2adb1655ec @  116 : c1                Star3 
  733 E> 0x1f2adb1655ed @  117 : 5e f9 f8 f7 1d    CallProperty1 r1, r2, r3, [29]
         0x1f2adb1655f2 @  122 : 9e 06             JumpIfUndefinedOrNull [6] (0x1f2adb1655f8 @ 128)
         0x1f2adb1655f4 @  124 : 96 07             JumpIfToBooleanTrue [7] (0x1f2adb1655fb @ 131)
         0x1f2adb1655f6 @  126 : 8a 14             Jump [20] (0x1f2adb16560a @ 146)
         0x1f2adb1655f8 @  128 : 12                LdaFalse 
         0x1f2adb1655f9 @  129 : 99 11             JumpIfFalse [17] (0x1f2adb16560a @ 146)
  808 S> 0x1f2adb1655fb @  131 : 21 05 0d          LdaGlobal [5], [13]
         0x1f2adb1655fe @  134 : c3                Star1 
         0x1f2adb1655ff @  135 : 13 0a             LdaConstant [10]
         0x1f2adb165601 @  137 : c2                Star2 
         0x1f2adb165602 @  138 : 0b f9             Ldar r1
  814 E> 0x1f2adb165604 @  140 : 69 f9 f8 01 1f    Construct r1, r2-r2, [31]
  808 E> 0x1f2adb165609 @  145 : a7                Throw 
         0x1f2adb16560a @  146 : 0e                LdaUndefined 
  866 S> 0x1f2adb16560b @  147 : a9                Return 
Constant pool (size = 11)
0x1f2adb165611: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 11
           0: 0x1f2adb165679 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1f2adb1656d9 <String[5]: #_grid>
           2: 0x1f2adb1656f1 <String[21]: #_withDiagonalMovement>
           3: 0x32ad8b4055f9 <String[6]: #length>
           4: 0x1f2adb165719 <String[6]: #_width>
           5: 0x32ad8b404de1 <String[5]: #Error>
           6: 0x1f2adb165731 <String[13]: #Grid is empty>
           7: 0x1f2adb165751 <String[7]: #_height>
           8: 0x1ee0de28a009 <String[4]: #find>
           9: 0x1f2adb165781 <SharedFunctionInfo>
          10: 0x1f2adb1678f1 <String[23]: #Grid is not rectangular>
Handler Table (size = 0)
Source Position Table (size = 65)
0x1f2adb167919 <ByteArray[65]>
0x1f2adb165781 points to: [0x1f2adb1657f0]
=== [0x1f2adb1657f0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
  759 S> 0x1f2adb1657f0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb1657f4 @    4 : c4                Star0 
         0x1f2adb1657f5 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb1657f7 @    7 : c3                Star1 
  775 E> 0x1f2adb1657f8 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
  766 E> 0x1f2adb1657fc @   12 : 6c fa 04          TestEqualStrict r0, [4]
         0x1f2adb1657ff @   15 : 56                LogicalNot 
  782 S> 0x1f2adb165800 @   16 : a9                Return 
Constant pool (size = 2)
0x1f2adb165809: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 2
           0: 0x32ad8b4055f9 <String[6]: #length>
           1: 0x1f2adb165751 <String[7]: #_height>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1f2adb165829 <ByteArray[11]>
0x1f2adb165a09 points to: [0x1f2adb165a78]
=== [0x1f2adb165a78] DISASSEMBLY ===
Parameter count 3
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  328 S> 0x1f2adb165a78 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x1f2adb165a7a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1f2adb165a7c @    4 : c4                Star0 
         0x1f2adb165a7d @    5 : 0b 04             Ldar a1
         0x1f2adb165a7f @    7 : 19 03 f9          Mov a0, r1
         0x1f2adb165a82 @   10 : 9e 04             JumpIfUndefinedOrNull [4] (0x1f2adb165a86 @ 14)
         0x1f2adb165a84 @   12 : 8a 03             Jump [3] (0x1f2adb165a87 @ 15)
         0x1f2adb165a86 @   14 : 12                LdaFalse 
         0x1f2adb165a87 @   15 : c2                Star2 
         0x1f2adb165a88 @   16 : 0b fa             Ldar r0
  335 E> 0x1f2adb165a8a @   18 : 69 fa f9 02 00    Construct r0, r1-r2, [0]
  392 S> 0x1f2adb165a8f @   23 : a9                Return 
Constant pool (size = 1)
0x1f2adb165a91: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 1
           0: 0x1f2adb1651b1 <String[15]: #PathfindingGrid>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1f2adb165aa9 <ByteArray[11]>
0x1f2adb165b31 points to: [0x1f2adb165ba0]
=== [0x1f2adb165ba0] DISASSEMBLY ===
Parameter count 3
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
  879 E> 0x1f2adb165ba0 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x1f2adb165ba3 @    3 : 1a f6             PushContext r4
         0x1f2adb165ba5 @    5 : 0b 02             Ldar <this>
         0x1f2adb165ba7 @    7 : 25 02             StaCurrentContextSlot [2]
         0x1f2adb165ba9 @    9 : 10                LdaTheHole 
         0x1f2adb165baa @   10 : 25 03             StaCurrentContextSlot [3]
         0x1f2adb165bac @   12 : 10                LdaTheHole 
         0x1f2adb165bad @   13 : 25 04             StaCurrentContextSlot [4]
  901 S> 0x1f2adb165baf @   15 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165bb1 @   17 : be                Star6 
  911 E> 0x1f2adb165bb2 @   18 : 2d f4 01 00       GetNamedProperty r6, [1], [0]
         0x1f2adb165bb6 @   22 : bf                Star5 
  911 E> 0x1f2adb165bb7 @   23 : 5e f5 f4 03 02    CallProperty1 r5, r6, a0, [2]
         0x1f2adb165bbc @   28 : 97 11             JumpIfToBooleanFalse [17] (0x1f2adb165bcd @ 45)
         0x1f2adb165bbe @   30 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165bc0 @   32 : be                Star6 
  941 E> 0x1f2adb165bc1 @   33 : 2d f4 01 04       GetNamedProperty r6, [1], [4]
         0x1f2adb165bc5 @   37 : bf                Star5 
  941 E> 0x1f2adb165bc6 @   38 : 5e f5 f4 04 06    CallProperty1 r5, r6, a1, [6]
         0x1f2adb165bcb @   43 : 96 04             JumpIfToBooleanTrue [4] (0x1f2adb165bcf @ 47)
  978 S> 0x1f2adb165bcd @   45 : 0f                LdaNull 
  990 S> 0x1f2adb165bce @   46 : a9                Return 
 1009 S> 0x1f2adb165bcf @   47 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165bd1 @   49 : bf                Star5 
 1018 E> 0x1f2adb165bd2 @   50 : 2d f5 02 08       GetNamedProperty r5, [2], [8]
         0x1f2adb165bd6 @   54 : bf                Star5 
 1028 E> 0x1f2adb165bd7 @   55 : 2d 03 03 0a       GetNamedProperty a0, [3], [10]
 1023 E> 0x1f2adb165bdb @   59 : 2f f5 0c          GetKeyedProperty r5, [12]
         0x1f2adb165bde @   62 : bf                Star5 
 1035 E> 0x1f2adb165bdf @   63 : 2d 03 04 0e       GetNamedProperty a0, [4], [14]
 1030 E> 0x1f2adb165be3 @   67 : 2f f5 10          GetKeyedProperty r5, [16]
         0x1f2adb165be6 @   70 : bf                Star5 
         0x1f2adb165be7 @   71 : 0c                LdaZero 
 1038 E> 0x1f2adb165be8 @   72 : 6c f5 12          TestEqualStrict r5, [18]
         0x1f2adb165beb @   75 : 99 20             JumpIfFalse [32] (0x1f2adb165c0b @ 107)
         0x1f2adb165bed @   77 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165bef @   79 : bf                Star5 
 1052 E> 0x1f2adb165bf0 @   80 : 2d f5 02 13       GetNamedProperty r5, [2], [19]
         0x1f2adb165bf4 @   84 : bf                Star5 
 1063 E> 0x1f2adb165bf5 @   85 : 2d 04 03 15       GetNamedProperty a1, [3], [21]
 1057 E> 0x1f2adb165bf9 @   89 : 2f f5 17          GetKeyedProperty r5, [23]
         0x1f2adb165bfc @   92 : bf                Star5 
 1071 E> 0x1f2adb165bfd @   93 : 2d 04 04 19       GetNamedProperty a1, [4], [25]
 1065 E> 0x1f2adb165c01 @   97 : 2f f5 1b          GetKeyedProperty r5, [27]
         0x1f2adb165c04 @  100 : bf                Star5 
         0x1f2adb165c05 @  101 : 0c                LdaZero 
 1074 E> 0x1f2adb165c06 @  102 : 6c f5 1d          TestEqualStrict r5, [29]
         0x1f2adb165c09 @  105 : 98 04             JumpIfTrue [4] (0x1f2adb165c0d @ 109)
 1095 S> 0x1f2adb165c0b @  107 : 0f                LdaNull 
 1107 S> 0x1f2adb165c0c @  108 : a9                Return 
 1144 S> 0x1f2adb165c0d @  109 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165c0f @  111 : be                Star6 
 1149 E> 0x1f2adb165c10 @  112 : 2d f4 05 1e       GetNamedProperty r6, [5], [30]
         0x1f2adb165c14 @  116 : bf                Star5 
 1149 E> 0x1f2adb165c15 @  117 : 5e f5 f4 04 20    CallProperty1 r5, r6, a1, [32]
 1144 E> 0x1f2adb165c1a @  122 : 25 03             StaCurrentContextSlot [3]
 1185 S> 0x1f2adb165c1c @  124 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1f2adb165c1e @  126 : bf                Star5 
 1203 E> 0x1f2adb165c1f @  127 : 2d 03 04 0e       GetNamedProperty a0, [4], [14]
         0x1f2adb165c23 @  131 : be                Star6 
         0x1f2adb165c24 @  132 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165c26 @  134 : bd                Star7 
 1212 E> 0x1f2adb165c27 @  135 : 2d f3 06 24       GetNamedProperty r7, [6], [36]
 1205 E> 0x1f2adb165c2b @  139 : 3b f4 23          Mul r6, [35]
         0x1f2adb165c2e @  142 : be                Star6 
 1225 E> 0x1f2adb165c2f @  143 : 2d 03 03 0a       GetNamedProperty a0, [3], [10]
 1219 E> 0x1f2adb165c33 @  147 : 39 f4 22          Add r6, [34]
 1198 E> 0x1f2adb165c36 @  150 : 2f f5 26          GetKeyedProperty r5, [38]
         0x1f2adb165c39 @  153 : bf                Star5 
         0x1f2adb165c3a @  154 : 0d ff             LdaSmi [-1]
 1228 E> 0x1f2adb165c3c @  156 : 6c f5 28          TestEqualStrict r5, [40]
         0x1f2adb165c3f @  159 : 99 04             JumpIfFalse [4] (0x1f2adb165c43 @ 163)
 1250 S> 0x1f2adb165c41 @  161 : 0f                LdaNull 
 1262 S> 0x1f2adb165c42 @  162 : a9                Return 
 1294 S> 0x1f2adb165c43 @  163 : 79 07 29 25       CreateArrayLiteral [7], [41], #37
         0x1f2adb165c47 @  167 : be                Star6 
         0x1f2adb165c48 @  168 : 0c                LdaZero 
         0x1f2adb165c49 @  169 : bf                Star5 
         0x1f2adb165c4a @  170 : 0b 03             Ldar a0
 1295 E> 0x1f2adb165c4c @  172 : 36 f4 f5 2a       StaInArrayLiteral r6, r5, [42]
         0x1f2adb165c50 @  176 : 19 f4 fa          Mov r6, r0
 1320 S> 0x1f2adb165c53 @  179 : 19 03 f9          Mov a0, r1
 1348 S> 0x1f2adb165c56 @  182 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1f2adb165c58 @  184 : bf                Star5 
 1362 E> 0x1f2adb165c59 @  185 : 2d f9 04 0e       GetNamedProperty r1, [4], [14]
         0x1f2adb165c5d @  189 : be                Star6 
         0x1f2adb165c5e @  190 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165c60 @  192 : bd                Star7 
 1371 E> 0x1f2adb165c61 @  193 : 2d f3 06 2e       GetNamedProperty r7, [6], [46]
 1364 E> 0x1f2adb165c65 @  197 : 3b f4 2d          Mul r6, [45]
         0x1f2adb165c68 @  200 : be                Star6 
 1384 E> 0x1f2adb165c69 @  201 : 2d f9 03 0a       GetNamedProperty r1, [3], [10]
 1378 E> 0x1f2adb165c6d @  205 : 39 f4 2c          Add r6, [44]
 1357 E> 0x1f2adb165c70 @  208 : 2f f5 30          GetKeyedProperty r5, [48]
 1348 E> 0x1f2adb165c73 @  211 : 25 04             StaCurrentContextSlot [4]
 1409 S> 0x1f2adb165c75 @  213 : 2d f9 08 32       GetNamedProperty r1, [8], [50]
         0x1f2adb165c79 @  217 : bf                Star5 
 1409 E> 0x1f2adb165c7a @  218 : 5e f5 f9 04 34    CallProperty1 r5, r1, a1, [52]
         0x1f2adb165c7f @  223 : 96 36             JumpIfToBooleanTrue [54] (0x1f2adb165cb5 @ 277)
 1456 S> 0x1f2adb165c81 @  225 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165c83 @  227 : be                Star6 
 1461 E> 0x1f2adb165c84 @  228 : 2d f4 09 36       GetNamedProperty r6, [9], [54]
         0x1f2adb165c88 @  232 : bf                Star5 
 1461 E> 0x1f2adb165c89 @  233 : 5e f5 f4 f9 38    CallProperty1 r5, r6, r1, [56]
         0x1f2adb165c8e @  238 : c2                Star2 
 1543 S> 0x1f2adb165c8f @  239 : 2d f8 0a 3a       GetNamedProperty r2, [10], [58]
         0x1f2adb165c93 @  243 : bf                Star5 
         0x1f2adb165c94 @  244 : 80 0b 00 02       CreateClosure [11], [0], #2
         0x1f2adb165c98 @  248 : bd                Star7 
 1543 E> 0x1f2adb165c99 @  249 : 5e f5 f8 f3 3c    CallProperty1 r5, r2, r7, [60]
         0x1f2adb165c9e @  254 : c1                Star3 
 1626 S> 0x1f2adb165c9f @  255 : 2d fa 0c 3e       GetNamedProperty r0, [12], [62]
         0x1f2adb165ca3 @  259 : bf                Star5 
 1626 E> 0x1f2adb165ca4 @  260 : 5e f5 fa f7 40    CallProperty1 r5, r0, r3, [64]
 1675 S> 0x1f2adb165ca9 @  265 : 19 f7 f9          Mov r3, r1
 1725 S> 0x1f2adb165cac @  268 : 16 04             LdaCurrentContextSlot [4]
         0x1f2adb165cae @  270 : 52 42             Dec [66]
 1727 E> 0x1f2adb165cb0 @  272 : 25 04             StaCurrentContextSlot [4]
 1396 E> 0x1f2adb165cb2 @  274 : 89 3d 00          JumpLoop [61], [0] (0x1f2adb165c75 @ 213)
 1755 S> 0x1f2adb165cb5 @  277 : 0b fa             Ldar r0
 1767 S> 0x1f2adb165cb7 @  279 : a9                Return 
Constant pool (size = 13)
0x1f2adb165cb9: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 13
           0: 0x1f2adb165d31 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1f2adb1654a1 <String[15]: #isPositionValid>
           2: 0x1f2adb1656d9 <String[5]: #_grid>
           3: 0x1ee0de298ac9 <String[1]: #x>
           4: 0x1ee0de298ae1 <String[1]: #y>
           5: 0x1f2adb165479 <String[20]: #internalGetDistances>
           6: 0x1f2adb165719 <String[6]: #_width>
           7: 0x1f2adb165e19 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1f2adb165e31 <FixedArray[1]>>
           8: 0x1ee0de287411 <String[6]: #equals>
           9: 0x1f2adb1654c1 <String[13]: #getNeighbours>
          10: 0x1ee0de28a009 <String[4]: #find>
          11: 0x1f2adb165e61 <SharedFunctionInfo>
          12: 0x1ee0de289551 <String[4]: #push>
Handler Table (size = 0)
Source Position Table (size = 141)
0x1f2adb165fe9 <ByteArray[141]>
0x1f2adb165e61 points to: [0x1f2adb165ed0]
=== [0x1f2adb165ed0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1590 S> 0x1f2adb165ed0 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1f2adb165ed2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1f2adb165ed4 @    4 : c4                Star0 
 1567 E> 0x1f2adb165ed5 @    5 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
         0x1f2adb165ed9 @    9 : c3                Star1 
         0x1f2adb165eda @   10 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb165edc @   12 : c2                Star2 
 1576 E> 0x1f2adb165edd @   13 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
 1569 E> 0x1f2adb165ee1 @   17 : 3b f9 01          Mul r1, [1]
         0x1f2adb165ee4 @   20 : c3                Star1 
 1587 E> 0x1f2adb165ee5 @   21 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
 1583 E> 0x1f2adb165ee9 @   25 : 39 f9 00          Add r1, [0]
 1564 E> 0x1f2adb165eec @   28 : 2f fa 08          GetKeyedProperty r0, [8]
         0x1f2adb165eef @   31 : c4                Star0 
         0x1f2adb165ef0 @   32 : 16 04             LdaCurrentContextSlot [4]
 1594 E> 0x1f2adb165ef2 @   34 : aa 04             ThrowReferenceErrorIfHole [4]
 1603 E> 0x1f2adb165ef4 @   36 : 46 01 0a          SubSmi [1], [10]
 1590 E> 0x1f2adb165ef7 @   39 : 6c fa 0b          TestEqualStrict r0, [11]
 1606 S> 0x1f2adb165efa @   42 : a9                Return 
Constant pool (size = 5)
0x1f2adb165f01: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 5
           0: 0x1f2adb165db1 <String[9]: #distances>
           1: 0x1ee0de298ae1 <String[1]: #y>
           2: 0x1f2adb165719 <String[6]: #_width>
           3: 0x1ee0de298ac9 <String[1]: #x>
           4: 0x1f2adb165dd1 <String[8]: #distance>
Handler Table (size = 0)
Source Position Table (size = 26)
0x1f2adb165f39 <ByteArray[26]>
0x1f2adb1660c9 points to: [0x1f2adb166138]
=== [0x1f2adb166138] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1832 S> 0x1f2adb166138 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1f2adb16613c @    4 : bf                Star5 
 1832 E> 0x1f2adb16613d @    5 : 5e f5 02 03 02    CallProperty1 r5, <this>, a0, [2]
         0x1f2adb166142 @   10 : c4                Star0 
 1885 S> 0x1f2adb166143 @   11 : 7b 04             CreateEmptyArrayLiteral [4]
         0x1f2adb166145 @   13 : c3                Star1 
 1910 S> 0x1f2adb166146 @   14 : 0c                LdaZero 
         0x1f2adb166147 @   15 : c2                Star2 
 1922 S> 0x1f2adb166148 @   16 : 2d 02 01 05       GetNamedProperty <this>, [1], [5]
 1915 E> 0x1f2adb16614c @   20 : 6d f8 07          TestLessThan r2, [7]
         0x1f2adb16614f @   23 : 99 53             JumpIfFalse [83] (0x1f2adb1661a2 @ 106)
 1959 S> 0x1f2adb166151 @   25 : 7b 08             CreateEmptyArrayLiteral [8]
 1962 E> 0x1f2adb166153 @   27 : 34 f9 f8 09       SetKeyedProperty r1, r2, [9]
 1993 S> 0x1f2adb166157 @   31 : 0c                LdaZero 
         0x1f2adb166158 @   32 : c1                Star3 
 2005 S> 0x1f2adb166159 @   33 : 2d 02 02 0b       GetNamedProperty <this>, [2], [11]
 1998 E> 0x1f2adb16615d @   37 : 6d f7 0d          TestLessThan r3, [13]
         0x1f2adb166160 @   40 : 99 3a             JumpIfFalse [58] (0x1f2adb16619a @ 98)
 2079 S> 0x1f2adb166162 @   42 : 2d 02 01 10       GetNamedProperty <this>, [1], [16]
 2072 E> 0x1f2adb166166 @   46 : 3b f7 0f          Mul r3, [15]
         0x1f2adb166169 @   49 : be                Star6 
         0x1f2adb16616a @   50 : 0b f8             Ldar r2
 2086 E> 0x1f2adb16616c @   52 : 39 f4 0e          Add r6, [14]
 2069 E> 0x1f2adb16616f @   55 : 2f fa 12          GetKeyedProperty r0, [18]
         0x1f2adb166172 @   58 : c0                Star4 
 2108 S> 0x1f2adb166173 @   59 : 0b f8             Ldar r2
 2117 E> 0x1f2adb166175 @   61 : 2f f9 14          GetKeyedProperty r1, [20]
         0x1f2adb166178 @   64 : bf                Star5 
         0x1f2adb166179 @   65 : 15 ff 03 01       LdaImmutableContextSlot <context>, [3], [1]
 2142 E> 0x1f2adb16617d @   69 : aa 03             ThrowReferenceErrorIfHole [3]
 2138 E> 0x1f2adb16617f @   71 : 6c f6 16          TestEqualStrict r4, [22]
         0x1f2adb166182 @   74 : 19 f7 f4          Mov r3, r6
         0x1f2adb166185 @   77 : 99 07             JumpIfFalse [7] (0x1f2adb16618c @ 84)
 2154 E> 0x1f2adb166187 @   79 : 21 04 17          LdaGlobal [4], [23]
         0x1f2adb16618a @   82 : 8a 04             Jump [4] (0x1f2adb16618e @ 86)
         0x1f2adb16618c @   84 : 0b f6             Ldar r4
 2124 E> 0x1f2adb16618e @   86 : 34 f5 f4 19       SetKeyedProperty r5, r6, [25]
 2016 S> 0x1f2adb166192 @   90 : 0b f7             Ldar r3
         0x1f2adb166194 @   92 : 51 1b             Inc [27]
         0x1f2adb166196 @   94 : c1                Star3 
 1980 E> 0x1f2adb166197 @   95 : 89 3e 01          JumpLoop [62], [1] (0x1f2adb166159 @ 33)
 1932 S> 0x1f2adb16619a @   98 : 0b f8             Ldar r2
         0x1f2adb16619c @  100 : 51 1c             Inc [28]
         0x1f2adb16619e @  102 : c2                Star2 
 1897 E> 0x1f2adb16619f @  103 : 89 57 00          JumpLoop [87], [0] (0x1f2adb166148 @ 16)
 2210 S> 0x1f2adb1661a2 @  106 : 0b f9             Ldar r1
 2227 S> 0x1f2adb1661a4 @  108 : a9                Return 
Constant pool (size = 5)
0x1f2adb1661a9: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 5
           0: 0x1f2adb165479 <String[20]: #internalGetDistances>
           1: 0x1f2adb165719 <String[6]: #_width>
           2: 0x1f2adb165751 <String[7]: #_height>
           3: 0x1f2adb165149 <String[9]: #UNVISITED>
           4: 0x32ad8b405381 <String[8]: #Infinity>
Handler Table (size = 0)
Source Position Table (size = 67)
0x1f2adb1661e1 <ByteArray[67]>
0x1f2adb1662b1 points to: [0x1f2adb166320]
=== [0x1f2adb166320] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2258 E> 0x1f2adb166320 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x1f2adb166323 @    3 : 1a f7             PushContext r3
         0x1f2adb166325 @    5 : 10                LdaTheHole 
         0x1f2adb166326 @    6 : 25 02             StaCurrentContextSlot [2]
         0x1f2adb166328 @    8 : 10                LdaTheHole 
         0x1f2adb166329 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1f2adb16632b @   11 : 10                LdaTheHole 
         0x1f2adb16632c @   12 : 25 04             StaCurrentContextSlot [4]
         0x1f2adb16632e @   14 : 80 01 00 02       CreateClosure [1], [0], #2
         0x1f2adb166332 @   18 : c3                Star1 
 2293 S> 0x1f2adb166333 @   19 : 21 02 00          LdaGlobal [2], [0]
         0x1f2adb166336 @   22 : bf                Star5 
 2313 E> 0x1f2adb166337 @   23 : 2d 02 03 03       GetNamedProperty <this>, [3], [3]
         0x1f2adb16633b @   27 : be                Star6 
 2327 E> 0x1f2adb16633c @   28 : 2d 02 04 05       GetNamedProperty <this>, [4], [5]
 2320 E> 0x1f2adb166340 @   32 : 3b f4 02          Mul r6, [2]
         0x1f2adb166343 @   35 : be                Star6 
         0x1f2adb166344 @   36 : 0b f5             Ldar r5
 2293 E> 0x1f2adb166346 @   38 : 69 f5 f4 01 07    Construct r5, r6-r6, [7]
         0x1f2adb16634b @   43 : bf                Star5 
 2336 E> 0x1f2adb16634c @   44 : 2d f5 05 09       GetNamedProperty r5, [5], [9]
         0x1f2adb166350 @   48 : c0                Star4 
         0x1f2adb166351 @   49 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
 2341 E> 0x1f2adb166355 @   53 : aa 06             ThrowReferenceErrorIfHole [6]
         0x1f2adb166357 @   55 : be                Star6 
 2336 E> 0x1f2adb166358 @   56 : 5e f6 f5 f4 0b    CallProperty1 r4, r5, r6, [11]
 2293 E> 0x1f2adb16635d @   61 : 25 02             StaCurrentContextSlot [2]
 2375 S> 0x1f2adb16635f @   63 : 79 07 0d 04       CreateArrayLiteral [7], [13], #4
         0x1f2adb166363 @   67 : bf                Star5 
         0x1f2adb166364 @   68 : 0c                LdaZero 
         0x1f2adb166365 @   69 : c0                Star4 
         0x1f2adb166366 @   70 : 7c 08 0e 29       CreateObjectLiteral [8], [14], #41
         0x1f2adb16636a @   74 : be                Star6 
         0x1f2adb16636b @   75 : 0b 03             Ldar a0
 2388 E> 0x1f2adb16636d @   77 : 33 f4 09 0f       DefineNamedOwnProperty r6, [9], [15]
         0x1f2adb166371 @   81 : 0b f4             Ldar r6
         0x1f2adb166373 @   83 : 36 f5 f6 11       StaInArrayLiteral r5, r4, [17]
         0x1f2adb166377 @   87 : 0b f5             Ldar r5
 2375 E> 0x1f2adb166379 @   89 : 25 03             StaCurrentContextSlot [3]
 2446 S> 0x1f2adb16637b @   91 : 21 02 00          LdaGlobal [2], [0]
         0x1f2adb16637e @   94 : c0                Star4 
         0x1f2adb16637f @   95 : 0d 10             LdaSmi [16]
         0x1f2adb166381 @   97 : bf                Star5 
         0x1f2adb166382 @   98 : 0b f6             Ldar r4
 2446 E> 0x1f2adb166384 @  100 : 69 f6 f5 01 13    Construct r4, r5-r5, [19]
         0x1f2adb166389 @  105 : c4                Star0 
 2523 S> 0x1f2adb16638a @  106 : 2d 02 03 15       GetNamedProperty <this>, [3], [21]
 2518 E> 0x1f2adb16638e @  110 : 25 04             StaCurrentContextSlot [4]
 2813 S> 0x1f2adb166390 @  112 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1f2adb166392 @  114 : c0                Star4 
 2806 E> 0x1f2adb166393 @  115 : 2d f6 0a 17       GetNamedProperty r4, [10], [23]
         0x1f2adb166397 @  119 : c0                Star4 
         0x1f2adb166398 @  120 : 0c                LdaZero 
 2813 E> 0x1f2adb166399 @  121 : 6e f6 19          TestGreaterThan r4, [25]
         0x1f2adb16639c @  124 : 92 12             JumpIfFalseConstant [18] (0x1f2adb1664ea @ 458)
 2845 S> 0x1f2adb16639e @  126 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1f2adb1663a0 @  128 : bf                Star5 
 2851 E> 0x1f2adb1663a1 @  129 : 2d f5 0b 1a       GetNamedProperty r5, [11], [26]
         0x1f2adb1663a5 @  133 : c0                Star4 
 2851 E> 0x1f2adb1663a6 @  134 : 5d f6 f5 1c       CallProperty0 r4, r5, [28]
         0x1f2adb1663aa @  138 : c2                Star2 
 2895 S> 0x1f2adb1663ab @  139 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb1663ad @  141 : c0                Star4 
 2914 E> 0x1f2adb1663ae @  142 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x1f2adb1663b2 @  146 : bf                Star5 
 2923 E> 0x1f2adb1663b3 @  147 : 2d f5 0c 22       GetNamedProperty r5, [12], [34]
         0x1f2adb1663b7 @  151 : bf                Star5 
 2932 E> 0x1f2adb1663b8 @  152 : 2d 02 03 24       GetNamedProperty <this>, [3], [36]
 2925 E> 0x1f2adb1663bc @  156 : 3b f5 1f          Mul r5, [31]
         0x1f2adb1663bf @  159 : bf                Star5 
 2946 E> 0x1f2adb1663c0 @  160 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x1f2adb1663c4 @  164 : be                Star6 
 2955 E> 0x1f2adb1663c5 @  165 : 2d f4 0d 26       GetNamedProperty r6, [13], [38]
 2939 E> 0x1f2adb1663c9 @  169 : 39 f5 1e          Add r5, [30]
 2908 E> 0x1f2adb1663cc @  172 : 2f f6 28          GetKeyedProperty r4, [40]
         0x1f2adb1663cf @  175 : c0                Star4 
         0x1f2adb1663d0 @  176 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
 2962 E> 0x1f2adb1663d4 @  180 : aa 06             ThrowReferenceErrorIfHole [6]
 2958 E> 0x1f2adb1663d6 @  182 : 6c f6 2a          TestEqualStrict r4, [42]
         0x1f2adb1663d9 @  185 : 98 04             JumpIfTrue [4] (0x1f2adb1663dd @ 189)
 2991 S> 0x1f2adb1663db @  187 : 8b 11             JumpConstant [17] (0x1f2adb1664e4 @ 452)
 3027 S> 0x1f2adb1663dd @  189 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb1663df @  191 : c0                Star4 
 3042 E> 0x1f2adb1663e0 @  192 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x1f2adb1663e4 @  196 : bf                Star5 
 3051 E> 0x1f2adb1663e5 @  197 : 2d f5 0c 2d       GetNamedProperty r5, [12], [45]
         0x1f2adb1663e9 @  201 : bf                Star5 
 3060 E> 0x1f2adb1663ea @  202 : 2d 02 03 2f       GetNamedProperty <this>, [3], [47]
 3053 E> 0x1f2adb1663ee @  206 : 3b f5 2c          Mul r5, [44]
         0x1f2adb1663f1 @  209 : bf                Star5 
 3074 E> 0x1f2adb1663f2 @  210 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x1f2adb1663f6 @  214 : be                Star6 
 3083 E> 0x1f2adb1663f7 @  215 : 2d f4 0d 31       GetNamedProperty r6, [13], [49]
 3067 E> 0x1f2adb1663fb @  219 : 39 f5 2b          Add r5, [43]
         0x1f2adb1663fe @  222 : bf                Star5 
 3093 E> 0x1f2adb1663ff @  223 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3086 E> 0x1f2adb166403 @  227 : 34 f6 f5 35       SetKeyedProperty r4, r5, [53]
 3120 S> 0x1f2adb166407 @  231 : 2d 02 0f 37       GetNamedProperty <this>, [15], [55]
         0x1f2adb16640b @  235 : c0                Star4 
 3143 E> 0x1f2adb16640c @  236 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x1f2adb166410 @  240 : be                Star6 
 3120 E> 0x1f2adb166411 @  241 : 5f f6 02 f4 fa 39 CallProperty2 r4, <this>, r6, r0, [57]
 3187 S> 0x1f2adb166417 @  247 : 0c                LdaZero 
 3230 E> 0x1f2adb166418 @  248 : 2f fa 3b          GetKeyedProperty r0, [59]
         0x1f2adb16641b @  251 : bf                Star5 
         0x1f2adb16641c @  252 : 0d 01             LdaSmi [1]
 3254 E> 0x1f2adb16641e @  254 : 2f fa 3d          GetKeyedProperty r0, [61]
         0x1f2adb166421 @  257 : be                Star6 
 3264 E> 0x1f2adb166422 @  258 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3273 E> 0x1f2adb166426 @  262 : 45 01 3f          AddSmi [1], [63]
         0x1f2adb166429 @  265 : bd                Star7 
 3187 E> 0x1f2adb16642a @  266 : 60 f9 f5 03 40    CallUndefinedReceiver r1, r5-r7, [64]
 3291 S> 0x1f2adb16642f @  271 : 0d 02             LdaSmi [2]
 3334 E> 0x1f2adb166431 @  273 : 2f fa 42          GetKeyedProperty r0, [66]
         0x1f2adb166434 @  276 : bf                Star5 
         0x1f2adb166435 @  277 : 0d 03             LdaSmi [3]
 3358 E> 0x1f2adb166437 @  279 : 2f fa 44          GetKeyedProperty r0, [68]
         0x1f2adb16643a @  282 : be                Star6 
 3368 E> 0x1f2adb16643b @  283 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3377 E> 0x1f2adb16643f @  287 : 45 01 46          AddSmi [1], [70]
         0x1f2adb166442 @  290 : bd                Star7 
 3291 E> 0x1f2adb166443 @  291 : 60 f9 f5 03 47    CallUndefinedReceiver r1, r5-r7, [71]
 3395 S> 0x1f2adb166448 @  296 : 0d 04             LdaSmi [4]
 3438 E> 0x1f2adb16644a @  298 : 2f fa 49          GetKeyedProperty r0, [73]
         0x1f2adb16644d @  301 : bf                Star5 
         0x1f2adb16644e @  302 : 0d 05             LdaSmi [5]
 3462 E> 0x1f2adb166450 @  304 : 2f fa 4b          GetKeyedProperty r0, [75]
         0x1f2adb166453 @  307 : be                Star6 
 3472 E> 0x1f2adb166454 @  308 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3481 E> 0x1f2adb166458 @  312 : 45 01 4d          AddSmi [1], [77]
         0x1f2adb16645b @  315 : bd                Star7 
 3395 E> 0x1f2adb16645c @  316 : 60 f9 f5 03 4e    CallUndefinedReceiver r1, r5-r7, [78]
 3499 S> 0x1f2adb166461 @  321 : 0d 06             LdaSmi [6]
 3542 E> 0x1f2adb166463 @  323 : 2f fa 50          GetKeyedProperty r0, [80]
         0x1f2adb166466 @  326 : bf                Star5 
         0x1f2adb166467 @  327 : 0d 07             LdaSmi [7]
 3566 E> 0x1f2adb166469 @  329 : 2f fa 52          GetKeyedProperty r0, [82]
         0x1f2adb16646c @  332 : be                Star6 
 3576 E> 0x1f2adb16646d @  333 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3585 E> 0x1f2adb166471 @  337 : 45 01 54          AddSmi [1], [84]
         0x1f2adb166474 @  340 : bd                Star7 
 3499 E> 0x1f2adb166475 @  341 : 60 f9 f5 03 55    CallUndefinedReceiver r1, r5-r7, [85]
 3612 S> 0x1f2adb16647a @  346 : 2d 02 10 57       GetNamedProperty <this>, [16], [87]
         0x1f2adb16647e @  350 : 97 66             JumpIfToBooleanFalse [102] (0x1f2adb1664e4 @ 452)
 3653 S> 0x1f2adb166480 @  352 : 0d 08             LdaSmi [8]
 3696 E> 0x1f2adb166482 @  354 : 2f fa 59          GetKeyedProperty r0, [89]
         0x1f2adb166485 @  357 : bf                Star5 
         0x1f2adb166486 @  358 : 0d 09             LdaSmi [9]
 3720 E> 0x1f2adb166488 @  360 : 2f fa 5b          GetKeyedProperty r0, [91]
         0x1f2adb16648b @  363 : be                Star6 
 3730 E> 0x1f2adb16648c @  364 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3739 E> 0x1f2adb166490 @  368 : 45 01 5d          AddSmi [1], [93]
         0x1f2adb166493 @  371 : bd                Star7 
 3653 E> 0x1f2adb166494 @  372 : 60 f9 f5 03 5e    CallUndefinedReceiver r1, r5-r7, [94]
 3761 S> 0x1f2adb166499 @  377 : 0d 0a             LdaSmi [10]
 3804 E> 0x1f2adb16649b @  379 : 2f fa 60          GetKeyedProperty r0, [96]
         0x1f2adb16649e @  382 : bf                Star5 
         0x1f2adb16649f @  383 : 0d 0b             LdaSmi [11]
 3829 E> 0x1f2adb1664a1 @  385 : 2f fa 62          GetKeyedProperty r0, [98]
         0x1f2adb1664a4 @  388 : be                Star6 
 3840 E> 0x1f2adb1664a5 @  389 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3849 E> 0x1f2adb1664a9 @  393 : 45 01 64          AddSmi [1], [100]
         0x1f2adb1664ac @  396 : bd                Star7 
 3761 E> 0x1f2adb1664ad @  397 : 60 f9 f5 03 65    CallUndefinedReceiver r1, r5-r7, [101]
 3871 S> 0x1f2adb1664b2 @  402 : 0d 0c             LdaSmi [12]
 3914 E> 0x1f2adb1664b4 @  404 : 2f fa 67          GetKeyedProperty r0, [103]
         0x1f2adb1664b7 @  407 : bf                Star5 
         0x1f2adb1664b8 @  408 : 0d 0d             LdaSmi [13]
 3939 E> 0x1f2adb1664ba @  410 : 2f fa 69          GetKeyedProperty r0, [105]
         0x1f2adb1664bd @  413 : be                Star6 
 3950 E> 0x1f2adb1664be @  414 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 3959 E> 0x1f2adb1664c2 @  418 : 45 01 6b          AddSmi [1], [107]
         0x1f2adb1664c5 @  421 : bd                Star7 
 3871 E> 0x1f2adb1664c6 @  422 : 60 f9 f5 03 6c    CallUndefinedReceiver r1, r5-r7, [108]
 3981 S> 0x1f2adb1664cb @  427 : 0d 0e             LdaSmi [14]
 4024 E> 0x1f2adb1664cd @  429 : 2f fa 6e          GetKeyedProperty r0, [110]
         0x1f2adb1664d0 @  432 : bf                Star5 
         0x1f2adb1664d1 @  433 : 0d 0f             LdaSmi [15]
 4049 E> 0x1f2adb1664d3 @  435 : 2f fa 70          GetKeyedProperty r0, [112]
         0x1f2adb1664d6 @  438 : be                Star6 
 4060 E> 0x1f2adb1664d7 @  439 : 2d f8 0e 33       GetNamedProperty r2, [14], [51]
 4069 E> 0x1f2adb1664db @  443 : 45 01 72          AddSmi [1], [114]
         0x1f2adb1664de @  446 : bd                Star7 
 3981 E> 0x1f2adb1664df @  447 : 60 f9 f5 03 73    CallUndefinedReceiver r1, r5-r7, [115]
 2793 E> 0x1f2adb1664e4 @  452 : 00 89 55 01 00 00 JumpLoop.Wide [341], [0] (0x1f2adb166390 @ 112)
 4107 S> 0x1f2adb1664ea @  458 : 17 02             LdaImmutableCurrentContextSlot [2]
 4124 S> 0x1f2adb1664ec @  460 : a9                Return 
Constant pool (size = 19)
0x1f2adb1664f1: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 19
           0: 0x1f2adb166599 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1f2adb166651 <SharedFunctionInfo pushNeighbourIfPossible>
           2: 0x32ad8b4053e9 <String[10]: #Int32Array>
           3: 0x1f2adb165719 <String[6]: #_width>
           4: 0x1f2adb165751 <String[7]: #_height>
           5: 0x1ee0de287461 <String[4]: #fill>
           6: 0x1f2adb165149 <String[9]: #UNVISITED>
           7: 0x1f2adb1668c9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1f2adb1668e1 <FixedArray[1]>>
           8: 0x1f2adb1668f9 <ObjectBoilerplateDescription[5]>
           9: 0x32ad8b405c19 <String[8]: #position>
          10: 0x32ad8b4055f9 <String[6]: #length>
          11: 0x1ee0de284e01 <String[5]: #shift>
          12: 0x1ee0de298ae1 <String[1]: #y>
          13: 0x1ee0de298ac9 <String[1]: #x>
          14: 0x1f2adb165dd1 <String[8]: #distance>
          15: 0x1f2adb1654e1 <String[17]: #getNeighboursFast>
          16: 0x1f2adb1656f1 <String[21]: #_withDiagonalMovement>
          17: 265
          18: 334
Handler Table (size = 0)
Source Position Table (size = 243)
0x1f2adb166949 <ByteArray[243]>
0x1f2adb166651 points to: [0x1f2adb1666c0]
=== [0x1f2adb1666c0] DISASSEMBLY ===
Parameter count 4
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 2602 S> 0x1f2adb1666c0 @    0 : 0c                LdaZero 
 2608 E> 0x1f2adb1666c1 @    1 : 70 03 00          TestGreaterThanOrEqual a0, [0]
         0x1f2adb1666c4 @    4 : 99 60             JumpIfFalse [96] (0x1f2adb166724 @ 100)
         0x1f2adb1666c6 @    6 : 0c                LdaZero 
 2618 E> 0x1f2adb1666c7 @    7 : 70 04 01          TestGreaterThanOrEqual a1, [1]
         0x1f2adb1666ca @   10 : 99 5a             JumpIfFalse [90] (0x1f2adb166724 @ 100)
         0x1f2adb1666cc @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
 2626 E> 0x1f2adb1666ce @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1f2adb1666d0 @   16 : c4                Star0 
         0x1f2adb1666d1 @   17 : 17 04             LdaImmutableCurrentContextSlot [4]
 2640 E> 0x1f2adb1666d3 @   19 : aa 01             ThrowReferenceErrorIfHole [1]
 2638 E> 0x1f2adb1666d5 @   21 : 3b 04 03          Mul a1, [3]
         0x1f2adb1666d8 @   24 : c3                Star1 
         0x1f2adb1666d9 @   25 : 0b 03             Ldar a0
 2650 E> 0x1f2adb1666db @   27 : 39 f9 02          Add r1, [2]
 2635 E> 0x1f2adb1666de @   30 : 2f fa 04          GetKeyedProperty r0, [4]
         0x1f2adb1666e1 @   33 : c4                Star0 
         0x1f2adb1666e2 @   34 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
 2659 E> 0x1f2adb1666e6 @   38 : aa 02             ThrowReferenceErrorIfHole [2]
 2655 E> 0x1f2adb1666e8 @   40 : 6c fa 06          TestEqualStrict r0, [6]
         0x1f2adb1666eb @   43 : 99 39             JumpIfFalse [57] (0x1f2adb166724 @ 100)
 2688 S> 0x1f2adb1666ed @   45 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1f2adb1666ef @   47 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1f2adb1666f1 @   49 : c3                Star1 
 2694 E> 0x1f2adb1666f2 @   50 : 2d f9 04 07       GetNamedProperty r1, [4], [7]
         0x1f2adb1666f6 @   54 : c4                Star0 
         0x1f2adb1666f7 @   55 : 7c 05 09 29       CreateObjectLiteral [5], [9], #41
         0x1f2adb1666fb @   59 : c2                Star2 
         0x1f2adb1666fc @   60 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 2715 E> 0x1f2adb166700 @   64 : aa 06             ThrowReferenceErrorIfHole [6]
         0x1f2adb166702 @   66 : c1                Star3 
 2724 E> 0x1f2adb166703 @   67 : 2d f7 07 0a       GetNamedProperty r3, [7], [10]
         0x1f2adb166707 @   71 : c1                Star3 
         0x1f2adb166708 @   72 : 0b f7             Ldar r3
         0x1f2adb16670a @   74 : 19 03 f6          Mov a0, r4
         0x1f2adb16670d @   77 : 19 04 f5          Mov a1, r5
 2711 E> 0x1f2adb166710 @   80 : 69 f7 f6 02 0c    Construct r3, r4-r5, [12]
         0x1f2adb166715 @   85 : 33 f8 08 0e       DefineNamedOwnProperty r2, [8], [14]
         0x1f2adb166719 @   89 : 0b 05             Ldar a2
 2748 E> 0x1f2adb16671b @   91 : 33 f8 09 10       DefineNamedOwnProperty r2, [9], [16]
 2694 E> 0x1f2adb16671f @   95 : 5e fa f9 f8 12    CallProperty1 r0, r1, r2, [18]
         0x1f2adb166724 @  100 : 0e                LdaUndefined 
 2783 S> 0x1f2adb166725 @  101 : a9                Return 
Constant pool (size = 10)
0x1f2adb166729: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 10
           0: 0x1f2adb165db1 <String[9]: #distances>
           1: 0x1f2adb166631 <String[9]: #gridWidth>
           2: 0x1f2adb165149 <String[9]: #UNVISITED>
           3: 0x1ee0de288f01 <String[5]: #queue>
           4: 0x1ee0de289551 <String[4]: #push>
           5: 0x1f2adb166789 <ObjectBoilerplateDescription[5]>
           6: 0x1f2adb165131 <String[8]: #vector_1>
           7: 0x1f2adb1667c1 <String[6]: #Vector>
           8: 0x32ad8b405c19 <String[8]: #position>
           9: 0x1f2adb165dd1 <String[8]: #distance>
Handler Table (size = 0)
Source Position Table (size = 43)
0x1f2adb1667d9 <ByteArray[43]>
Boilerplate at 0x1f2adb166789: 
0x1f2adb166789: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x32ad8b402059 <Map>
 - length: 5
           0: 8
           1: 0x32ad8b405c19 <String[8]: #position>
           2: 0x32ad8b401501 <Odd Oddball: uninitialized>
           3: 0x1f2adb165dd1 <String[8]: #distance>
           4: 0x32ad8b401501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1f2adb1668f9: 
0x1f2adb1668f9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x32ad8b402059 <Map>
 - length: 5
           0: 8
           1: 0x32ad8b405c19 <String[8]: #position>
           2: 0x32ad8b401501 <Odd Oddball: uninitialized>
           3: 0x1f2adb165dd1 <String[8]: #distance>
           4: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1f2adb166ab1 points to: [0x1f2adb166b20]
=== [0x1f2adb166b20] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 4187 S> 0x1f2adb166b20 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb166b24 @    4 : c4                Star0 
         0x1f2adb166b25 @    5 : 0c                LdaZero 
 4189 E> 0x1f2adb166b26 @    6 : 70 fa 02          TestGreaterThanOrEqual r0, [2]
         0x1f2adb166b29 @    9 : 99 27             JumpIfFalse [39] (0x1f2adb166b50 @ 48)
 4206 E> 0x1f2adb166b2b @   11 : 2d 03 01 03       GetNamedProperty a0, [1], [3]
         0x1f2adb166b2f @   15 : c4                Star0 
         0x1f2adb166b30 @   16 : 0c                LdaZero 
 4208 E> 0x1f2adb166b31 @   17 : 70 fa 05          TestGreaterThanOrEqual r0, [5]
         0x1f2adb166b34 @   20 : 99 1c             JumpIfFalse [28] (0x1f2adb166b50 @ 48)
 4225 E> 0x1f2adb166b36 @   22 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb166b3a @   26 : c4                Star0 
 4234 E> 0x1f2adb166b3b @   27 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
 4227 E> 0x1f2adb166b3f @   31 : 6d fa 08          TestLessThan r0, [8]
         0x1f2adb166b42 @   34 : 99 0e             JumpIfFalse [14] (0x1f2adb166b50 @ 48)
 4253 E> 0x1f2adb166b44 @   36 : 2d 03 01 03       GetNamedProperty a0, [1], [3]
         0x1f2adb166b48 @   40 : c4                Star0 
 4262 E> 0x1f2adb166b49 @   41 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
 4255 E> 0x1f2adb166b4d @   45 : 6d fa 0b          TestLessThan r0, [11]
 4270 S> 0x1f2adb166b50 @   48 : a9                Return 
Constant pool (size = 4)
0x1f2adb166b59: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 4
           0: 0x1ee0de298ac9 <String[1]: #x>
           1: 0x1ee0de298ae1 <String[1]: #y>
           2: 0x1f2adb165719 <String[6]: #_width>
           3: 0x1f2adb165751 <String[7]: #_height>
Handler Table (size = 0)
Source Position Table (size = 27)
0x1f2adb166b89 <ByteArray[27]>
0x1f2adb166c21 points to: [0x1f2adb166c90]
=== [0x1f2adb166c90] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 4294 E> 0x1f2adb166c90 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1f2adb166c93 @    3 : 1a fa             PushContext r0
         0x1f2adb166c95 @    5 : 0b 02             Ldar <this>
         0x1f2adb166c97 @    7 : 25 02             StaCurrentContextSlot [2]
 4311 S> 0x1f2adb166c99 @    9 : 79 01 00 25       CreateArrayLiteral [1], [0], #37
         0x1f2adb166c9d @   13 : c0                Star4 
         0x1f2adb166c9e @   14 : 0c                LdaZero 
         0x1f2adb166c9f @   15 : c1                Star3 
         0x1f2adb166ca0 @   16 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 4336 E> 0x1f2adb166ca4 @   20 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1f2adb166ca6 @   22 : bf                Star5 
 4345 E> 0x1f2adb166ca7 @   23 : 2d f5 03 01       GetNamedProperty r5, [3], [1]
         0x1f2adb166cab @   27 : bf                Star5 
 4357 E> 0x1f2adb166cac @   28 : 2d 03 04 04       GetNamedProperty a0, [4], [4]
 4359 E> 0x1f2adb166cb0 @   32 : 46 01 03          SubSmi [1], [3]
         0x1f2adb166cb3 @   35 : be                Star6 
 4369 E> 0x1f2adb166cb4 @   36 : 2d 03 05 06       GetNamedProperty a0, [5], [6]
         0x1f2adb166cb8 @   40 : bd                Star7 
         0x1f2adb166cb9 @   41 : 0b f5             Ldar r5
 4332 E> 0x1f2adb166cbb @   43 : 69 f5 f4 02 08    Construct r5, r6-r7, [8]
         0x1f2adb166cc0 @   48 : 36 f6 f7 0a       StaInArrayLiteral r4, r3, [10]
         0x1f2adb166cc4 @   52 : 0d 01             LdaSmi [1]
         0x1f2adb166cc6 @   54 : c1                Star3 
         0x1f2adb166cc7 @   55 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 4389 E> 0x1f2adb166ccb @   59 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1f2adb166ccd @   61 : bf                Star5 
 4398 E> 0x1f2adb166cce @   62 : 2d f5 03 01       GetNamedProperty r5, [3], [1]
         0x1f2adb166cd2 @   66 : bf                Star5 
 4410 E> 0x1f2adb166cd3 @   67 : 2d 03 04 04       GetNamedProperty a0, [4], [4]
 4412 E> 0x1f2adb166cd7 @   71 : 45 01 0c          AddSmi [1], [12]
         0x1f2adb166cda @   74 : be                Star6 
 4422 E> 0x1f2adb166cdb @   75 : 2d 03 05 06       GetNamedProperty a0, [5], [6]
         0x1f2adb166cdf @   79 : bd                Star7 
         0x1f2adb166ce0 @   80 : 0b f5             Ldar r5
 4385 E> 0x1f2adb166ce2 @   82 : 69 f5 f4 02 0d    Construct r5, r6-r7, [13]
         0x1f2adb166ce7 @   87 : 36 f6 f7 0a       StaInArrayLiteral r4, r3, [10]
         0x1f2adb166ceb @   91 : 0d 02             LdaSmi [2]
         0x1f2adb166ced @   93 : c1                Star3 
         0x1f2adb166cee @   94 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 4442 E> 0x1f2adb166cf2 @   98 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1f2adb166cf4 @  100 : bf                Star5 
 4451 E> 0x1f2adb166cf5 @  101 : 2d f5 03 01       GetNamedProperty r5, [3], [1]
         0x1f2adb166cf9 @  105 : bf                Star5 
 4463 E> 0x1f2adb166cfa @  106 : 2d 03 04 04       GetNamedProperty a0, [4], [4]
         0x1f2adb166cfe @  110 : be                Star6 
 4471 E> 0x1f2adb166cff @  111 : 2d 03 05 06       GetNamedProperty a0, [5], [6]
 4473 E> 0x1f2adb166d03 @  115 : 46 01 0f          SubSmi [1], [15]
         0x1f2adb166d06 @  118 : bd                Star7 
         0x1f2adb166d07 @  119 : 0b f5             Ldar r5
 4438 E> 0x1f2adb166d09 @  121 : 69 f5 f4 02 10    Construct r5, r6-r7, [16]
         0x1f2adb166d0e @  126 : 36 f6 f7 0a       StaInArrayLiteral r4, r3, [10]
         0x1f2adb166d12 @  130 : 0d 03             LdaSmi [3]
         0x1f2adb166d14 @  132 : c1                Star3 
         0x1f2adb166d15 @  133 : 15 ff 02 02       LdaImmutableContextSlot <context>, [2], [2]
 4495 E> 0x1f2adb166d19 @  137 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1f2adb166d1b @  139 : bf                Star5 
 4504 E> 0x1f2adb166d1c @  140 : 2d f5 03 01       GetNamedProperty r5, [3], [1]
         0x1f2adb166d20 @  144 : bf                Star5 
 4516 E> 0x1f2adb166d21 @  145 : 2d 03 04 04       GetNamedProperty a0, [4], [4]
         0x1f2adb166d25 @  149 : be                Star6 
 4524 E> 0x1f2adb166d26 @  150 : 2d 03 05 06       GetNamedProperty a0, [5], [6]
 4526 E> 0x1f2adb166d2a @  154 : 45 01 12          AddSmi [1], [18]
         0x1f2adb166d2d @  157 : bd                Star7 
         0x1f2adb166d2e @  158 : 0b f5             Ldar r5
 4491 E> 0x1f2adb166d30 @  160 : 69 f5 f4 02 13    Construct r5, r6-r7, [19]
         0x1f2adb166d35 @  165 : 36 f6 f7 0a       StaInArrayLiteral r4, r3, [10]
 4555 E> 0x1f2adb166d39 @  169 : 2d f6 06 15       GetNamedProperty r4, [6], [21]
         0x1f2adb166d3d @  173 : c2                Star2 
         0x1f2adb166d3e @  174 : 80 07 00 02       CreateClosure [7], [0], #2
         0x1f2adb166d42 @  178 : 19 f6 f7          Mov r4, r3
         0x1f2adb166d45 @  181 : c0                Star4 
 4555 E> 0x1f2adb166d46 @  182 : 5e f8 f7 f6 17    CallProperty1 r2, r3, r4, [23]
         0x1f2adb166d4b @  187 : c2                Star2 
 4606 E> 0x1f2adb166d4c @  188 : 2d f8 06 19       GetNamedProperty r2, [6], [25]
         0x1f2adb166d50 @  192 : c3                Star1 
         0x1f2adb166d51 @  193 : 80 08 01 02       CreateClosure [8], [1], #2
         0x1f2adb166d55 @  197 : c1                Star3 
 4607 E> 0x1f2adb166d56 @  198 : 5e f9 f8 f7 1b    CallProperty1 r1, r2, r3, [27]
 4649 S> 0x1f2adb166d5b @  203 : a9                Return 
Constant pool (size = 9)
0x1f2adb166d61: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 9
           0: 0x1f2adb166db9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1f2adb166e19 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1f2adb166e31 <FixedArray[4]>>
           2: 0x1f2adb165131 <String[8]: #vector_1>
           3: 0x1f2adb1667c1 <String[6]: #Vector>
           4: 0x1ee0de298ac9 <String[1]: #x>
           5: 0x1ee0de298ae1 <String[1]: #y>
           6: 0x1ee0de289f61 <String[6]: #filter>
           7: 0x1f2adb166e79 <SharedFunctionInfo>
           8: 0x1f2adb166f99 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 76)
0x1f2adb1670e1 <ByteArray[76]>
0x1f2adb166e79 points to: [0x1f2adb166ee8]
=== [0x1f2adb166ee8] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4574 S> 0x1f2adb166ee8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb166eea @    2 : c3                Star1 
 4574 E> 0x1f2adb166eeb @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x1f2adb166eef @    7 : c4                Star0 
 4574 E> 0x1f2adb166ef0 @    8 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
 4592 S> 0x1f2adb166ef5 @   13 : a9                Return 
Constant pool (size = 1)
0x1f2adb166ef9: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 1
           0: 0x1f2adb1654a1 <String[15]: #isPositionValid>
Handler Table (size = 0)
Source Position Table (size = 12)
0x1f2adb166f11 <ByteArray[12]>
0x1f2adb166f99 points to: [0x1f2adb167008]
=== [0x1f2adb167008] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 4642 S> 0x1f2adb167008 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1f2adb16700a @    2 : c4                Star0 
 4626 E> 0x1f2adb16700b @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
         0x1f2adb16700f @    7 : c4                Star0 
 4634 E> 0x1f2adb167010 @    8 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
 4631 E> 0x1f2adb167014 @   12 : 2f fa 04          GetKeyedProperty r0, [4]
         0x1f2adb167017 @   15 : c4                Star0 
 4639 E> 0x1f2adb167018 @   16 : 2d 03 02 06       GetNamedProperty a0, [2], [6]
 4636 E> 0x1f2adb16701c @   20 : 2f fa 08          GetKeyedProperty r0, [8]
         0x1f2adb16701f @   23 : c4                Star0 
         0x1f2adb167020 @   24 : 0c                LdaZero 
 4642 E> 0x1f2adb167021 @   25 : 6c fa 0a          TestEqualStrict r0, [10]
 4647 S> 0x1f2adb167024 @   28 : a9                Return 
Constant pool (size = 3)
0x1f2adb167029: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 3
           0: 0x1f2adb1656d9 <String[5]: #_grid>
           1: 0x1ee0de298ac9 <String[1]: #x>
           2: 0x1ee0de298ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 20)
0x1f2adb167051 <ByteArray[20]>
0x1f2adb167169 points to: [0x1f2adb1671d8]
=== [0x1f2adb1671d8] DISASSEMBLY ===
Parameter count 3
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
 4769 S> 0x1f2adb1671d8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb1671dc @    4 : 18 ea             Star r16
         0x1f2adb1671de @    6 : 0c                LdaZero 
 4771 E> 0x1f2adb1671df @    7 : 6b ea 02          TestEqual r16, [2]
         0x1f2adb1671e2 @   10 : 98 53             JumpIfTrue [83] (0x1f2adb167235 @ 93)
 4806 S> 0x1f2adb1671e4 @   12 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 4808 E> 0x1f2adb1671e8 @   16 : 46 01 03          SubSmi [1], [3]
         0x1f2adb1671eb @   19 : b6                Star14 
 4840 S> 0x1f2adb1671ec @   20 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x1f2adb1671f0 @   24 : b5                Star15 
 4864 S> 0x1f2adb1671f1 @   25 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
         0x1f2adb1671f5 @   29 : 18 ea             Star r16
         0x1f2adb1671f7 @   31 : 0b ec             Ldar r14
 4869 E> 0x1f2adb1671f9 @   33 : 2f ea 08          GetKeyedProperty r16, [8]
         0x1f2adb1671fc @   36 : 18 ea             Star r16
         0x1f2adb1671fe @   38 : 0b eb             Ldar r15
 4872 E> 0x1f2adb167200 @   40 : 2f ea 0a          GetKeyedProperty r16, [10]
         0x1f2adb167203 @   43 : 18 ea             Star r16
         0x1f2adb167205 @   45 : 0c                LdaZero 
 4876 E> 0x1f2adb167206 @   46 : 6c ea 0c          TestEqualStrict r16, [12]
         0x1f2adb167209 @   49 : 99 17             JumpIfFalse [23] (0x1f2adb167220 @ 72)
 4901 S> 0x1f2adb16720b @   51 : 0c                LdaZero 
         0x1f2adb16720c @   52 : 18 e9             Star r17
         0x1f2adb16720e @   54 : 0b ec             Ldar r14
 4908 E> 0x1f2adb167210 @   56 : 34 04 e9 0d       SetKeyedProperty a1, r17, [13]
 4929 S> 0x1f2adb167214 @   60 : 0d 01             LdaSmi [1]
         0x1f2adb167216 @   62 : 18 e9             Star r17
         0x1f2adb167218 @   64 : 0b eb             Ldar r15
 4936 E> 0x1f2adb16721a @   66 : 34 04 e9 0f       SetKeyedProperty a1, r17, [15]
         0x1f2adb16721e @   70 : 8a 15             Jump [21] (0x1f2adb167233 @ 91)
 4990 S> 0x1f2adb167220 @   72 : 0c                LdaZero 
         0x1f2adb167221 @   73 : 18 e9             Star r17
         0x1f2adb167223 @   75 : 0d ff             LdaSmi [-1]
 4997 E> 0x1f2adb167225 @   77 : 34 04 e9 11       SetKeyedProperty a1, r17, [17]
 5019 S> 0x1f2adb167229 @   81 : 0d 01             LdaSmi [1]
         0x1f2adb16722b @   83 : 18 e9             Star r17
         0x1f2adb16722d @   85 : 0d ff             LdaSmi [-1]
 5026 E> 0x1f2adb16722f @   87 : 34 04 e9 13       SetKeyedProperty a1, r17, [19]
         0x1f2adb167233 @   91 : 8a 15             Jump [21] (0x1f2adb167248 @ 112)
 5083 S> 0x1f2adb167235 @   93 : 0c                LdaZero 
         0x1f2adb167236 @   94 : 18 e9             Star r17
         0x1f2adb167238 @   96 : 0d ff             LdaSmi [-1]
 5090 E> 0x1f2adb16723a @   98 : 34 04 e9 15       SetKeyedProperty a1, r17, [21]
 5108 S> 0x1f2adb16723e @  102 : 0d 01             LdaSmi [1]
         0x1f2adb167240 @  104 : 18 e9             Star r17
         0x1f2adb167242 @  106 : 0d ff             LdaSmi [-1]
 5115 E> 0x1f2adb167244 @  108 : 34 04 e9 17       SetKeyedProperty a1, r17, [23]
 5165 S> 0x1f2adb167248 @  112 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb16724c @  116 : 18 ea             Star r16
 5174 E> 0x1f2adb16724e @  118 : 2d 02 03 1a       GetNamedProperty <this>, [3], [26]
 5181 E> 0x1f2adb167252 @  122 : 46 01 19          SubSmi [1], [25]
 5167 E> 0x1f2adb167255 @  125 : 6d ea 1c          TestLessThan r16, [28]
         0x1f2adb167258 @  128 : 99 55             JumpIfFalse [85] (0x1f2adb1672ad @ 213)
 5215 S> 0x1f2adb16725a @  130 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 5217 E> 0x1f2adb16725e @  134 : 45 01 1d          AddSmi [1], [29]
         0x1f2adb167261 @  137 : b8                Star12 
 5249 S> 0x1f2adb167262 @  138 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x1f2adb167266 @  142 : b7                Star13 
 5273 S> 0x1f2adb167267 @  143 : 2d 02 02 1e       GetNamedProperty <this>, [2], [30]
         0x1f2adb16726b @  147 : 18 ea             Star r16
         0x1f2adb16726d @  149 : 0b ee             Ldar r12
 5278 E> 0x1f2adb16726f @  151 : 2f ea 20          GetKeyedProperty r16, [32]
         0x1f2adb167272 @  154 : 18 ea             Star r16
         0x1f2adb167274 @  156 : 0b ed             Ldar r13
 5281 E> 0x1f2adb167276 @  158 : 2f ea 22          GetKeyedProperty r16, [34]
         0x1f2adb167279 @  161 : 18 ea             Star r16
         0x1f2adb16727b @  163 : 0c                LdaZero 
 5285 E> 0x1f2adb16727c @  164 : 6c ea 24          TestEqualStrict r16, [36]
         0x1f2adb16727f @  167 : 99 18             JumpIfFalse [24] (0x1f2adb167297 @ 191)
 5310 S> 0x1f2adb167281 @  169 : 0d 02             LdaSmi [2]
         0x1f2adb167283 @  171 : 18 e9             Star r17
         0x1f2adb167285 @  173 : 0b ee             Ldar r12
 5317 E> 0x1f2adb167287 @  175 : 34 04 e9 25       SetKeyedProperty a1, r17, [37]
 5338 S> 0x1f2adb16728b @  179 : 0d 03             LdaSmi [3]
         0x1f2adb16728d @  181 : 18 e9             Star r17
         0x1f2adb16728f @  183 : 0b ed             Ldar r13
 5345 E> 0x1f2adb167291 @  185 : 34 04 e9 27       SetKeyedProperty a1, r17, [39]
         0x1f2adb167295 @  189 : 8a 16             Jump [22] (0x1f2adb1672ab @ 211)
 5399 S> 0x1f2adb167297 @  191 : 0d 02             LdaSmi [2]
         0x1f2adb167299 @  193 : 18 e9             Star r17
         0x1f2adb16729b @  195 : 0d ff             LdaSmi [-1]
 5406 E> 0x1f2adb16729d @  197 : 34 04 e9 29       SetKeyedProperty a1, r17, [41]
 5428 S> 0x1f2adb1672a1 @  201 : 0d 03             LdaSmi [3]
         0x1f2adb1672a3 @  203 : 18 e9             Star r17
         0x1f2adb1672a5 @  205 : 0d ff             LdaSmi [-1]
 5435 E> 0x1f2adb1672a7 @  207 : 34 04 e9 2b       SetKeyedProperty a1, r17, [43]
         0x1f2adb1672ab @  211 : 8a 16             Jump [22] (0x1f2adb1672c1 @ 233)
 5492 S> 0x1f2adb1672ad @  213 : 0d 02             LdaSmi [2]
         0x1f2adb1672af @  215 : 18 e9             Star r17
         0x1f2adb1672b1 @  217 : 0d ff             LdaSmi [-1]
 5499 E> 0x1f2adb1672b3 @  219 : 34 04 e9 2d       SetKeyedProperty a1, r17, [45]
 5517 S> 0x1f2adb1672b7 @  223 : 0d 03             LdaSmi [3]
         0x1f2adb1672b9 @  225 : 18 e9             Star r17
         0x1f2adb1672bb @  227 : 0d ff             LdaSmi [-1]
 5524 E> 0x1f2adb1672bd @  229 : 34 04 e9 2f       SetKeyedProperty a1, r17, [47]
 5571 S> 0x1f2adb1672c1 @  233 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x1f2adb1672c5 @  237 : 18 ea             Star r16
         0x1f2adb1672c7 @  239 : 0c                LdaZero 
 5573 E> 0x1f2adb1672c8 @  240 : 6b ea 31          TestEqual r16, [49]
         0x1f2adb1672cb @  243 : 98 55             JumpIfTrue [85] (0x1f2adb167320 @ 328)
 5608 S> 0x1f2adb1672cd @  245 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb1672d1 @  249 : ba                Star10 
 5638 S> 0x1f2adb1672d2 @  250 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 5640 E> 0x1f2adb1672d6 @  254 : 46 01 32          SubSmi [1], [50]
         0x1f2adb1672d9 @  257 : b9                Star11 
 5666 S> 0x1f2adb1672da @  258 : 2d 02 02 33       GetNamedProperty <this>, [2], [51]
         0x1f2adb1672de @  262 : 18 ea             Star r16
         0x1f2adb1672e0 @  264 : 0b f0             Ldar r10
 5671 E> 0x1f2adb1672e2 @  266 : 2f ea 35          GetKeyedProperty r16, [53]
         0x1f2adb1672e5 @  269 : 18 ea             Star r16
         0x1f2adb1672e7 @  271 : 0b ef             Ldar r11
 5674 E> 0x1f2adb1672e9 @  273 : 2f ea 37          GetKeyedProperty r16, [55]
         0x1f2adb1672ec @  276 : 18 ea             Star r16
         0x1f2adb1672ee @  278 : 0c                LdaZero 
 5678 E> 0x1f2adb1672ef @  279 : 6c ea 39          TestEqualStrict r16, [57]
         0x1f2adb1672f2 @  282 : 99 18             JumpIfFalse [24] (0x1f2adb16730a @ 306)
 5703 S> 0x1f2adb1672f4 @  284 : 0d 04             LdaSmi [4]
         0x1f2adb1672f6 @  286 : 18 e9             Star r17
         0x1f2adb1672f8 @  288 : 0b f0             Ldar r10
 5710 E> 0x1f2adb1672fa @  290 : 34 04 e9 3a       SetKeyedProperty a1, r17, [58]
 5731 S> 0x1f2adb1672fe @  294 : 0d 05             LdaSmi [5]
         0x1f2adb167300 @  296 : 18 e9             Star r17
         0x1f2adb167302 @  298 : 0b ef             Ldar r11
 5738 E> 0x1f2adb167304 @  300 : 34 04 e9 3c       SetKeyedProperty a1, r17, [60]
         0x1f2adb167308 @  304 : 8a 16             Jump [22] (0x1f2adb16731e @ 326)
 5792 S> 0x1f2adb16730a @  306 : 0d 04             LdaSmi [4]
         0x1f2adb16730c @  308 : 18 e9             Star r17
         0x1f2adb16730e @  310 : 0d ff             LdaSmi [-1]
 5799 E> 0x1f2adb167310 @  312 : 34 04 e9 3e       SetKeyedProperty a1, r17, [62]
 5821 S> 0x1f2adb167314 @  316 : 0d 05             LdaSmi [5]
         0x1f2adb167316 @  318 : 18 e9             Star r17
         0x1f2adb167318 @  320 : 0d ff             LdaSmi [-1]
 5828 E> 0x1f2adb16731a @  322 : 34 04 e9 40       SetKeyedProperty a1, r17, [64]
         0x1f2adb16731e @  326 : 8a 16             Jump [22] (0x1f2adb167334 @ 348)
 5885 S> 0x1f2adb167320 @  328 : 0d 04             LdaSmi [4]
         0x1f2adb167322 @  330 : 18 e9             Star r17
         0x1f2adb167324 @  332 : 0d ff             LdaSmi [-1]
 5892 E> 0x1f2adb167326 @  334 : 34 04 e9 42       SetKeyedProperty a1, r17, [66]
 5910 S> 0x1f2adb16732a @  338 : 0d 05             LdaSmi [5]
         0x1f2adb16732c @  340 : 18 e9             Star r17
         0x1f2adb16732e @  342 : 0d ff             LdaSmi [-1]
 5917 E> 0x1f2adb167330 @  344 : 34 04 e9 44       SetKeyedProperty a1, r17, [68]
 5966 S> 0x1f2adb167334 @  348 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x1f2adb167338 @  352 : 18 ea             Star r16
 5975 E> 0x1f2adb16733a @  354 : 2d 02 04 47       GetNamedProperty <this>, [4], [71]
 5983 E> 0x1f2adb16733e @  358 : 46 01 46          SubSmi [1], [70]
 5968 E> 0x1f2adb167341 @  361 : 6d ea 49          TestLessThan r16, [73]
         0x1f2adb167344 @  364 : 99 55             JumpIfFalse [85] (0x1f2adb167399 @ 449)
 6017 S> 0x1f2adb167346 @  366 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb16734a @  370 : bc                Star8 
 6047 S> 0x1f2adb16734b @  371 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 6049 E> 0x1f2adb16734f @  375 : 45 01 4a          AddSmi [1], [74]
         0x1f2adb167352 @  378 : bb                Star9 
 6075 S> 0x1f2adb167353 @  379 : 2d 02 02 4b       GetNamedProperty <this>, [2], [75]
         0x1f2adb167357 @  383 : 18 ea             Star r16
         0x1f2adb167359 @  385 : 0b f2             Ldar r8
 6080 E> 0x1f2adb16735b @  387 : 2f ea 4d          GetKeyedProperty r16, [77]
         0x1f2adb16735e @  390 : 18 ea             Star r16
         0x1f2adb167360 @  392 : 0b f1             Ldar r9
 6083 E> 0x1f2adb167362 @  394 : 2f ea 4f          GetKeyedProperty r16, [79]
         0x1f2adb167365 @  397 : 18 ea             Star r16
         0x1f2adb167367 @  399 : 0c                LdaZero 
 6087 E> 0x1f2adb167368 @  400 : 6c ea 51          TestEqualStrict r16, [81]
         0x1f2adb16736b @  403 : 99 18             JumpIfFalse [24] (0x1f2adb167383 @ 427)
 6112 S> 0x1f2adb16736d @  405 : 0d 06             LdaSmi [6]
         0x1f2adb16736f @  407 : 18 e9             Star r17
         0x1f2adb167371 @  409 : 0b f2             Ldar r8
 6119 E> 0x1f2adb167373 @  411 : 34 04 e9 52       SetKeyedProperty a1, r17, [82]
 6140 S> 0x1f2adb167377 @  415 : 0d 07             LdaSmi [7]
         0x1f2adb167379 @  417 : 18 e9             Star r17
         0x1f2adb16737b @  419 : 0b f1             Ldar r9
 6147 E> 0x1f2adb16737d @  421 : 34 04 e9 54       SetKeyedProperty a1, r17, [84]
         0x1f2adb167381 @  425 : 8a 16             Jump [22] (0x1f2adb167397 @ 447)
 6201 S> 0x1f2adb167383 @  427 : 0d 06             LdaSmi [6]
         0x1f2adb167385 @  429 : 18 e9             Star r17
         0x1f2adb167387 @  431 : 0d ff             LdaSmi [-1]
 6208 E> 0x1f2adb167389 @  433 : 34 04 e9 56       SetKeyedProperty a1, r17, [86]
 6230 S> 0x1f2adb16738d @  437 : 0d 07             LdaSmi [7]
         0x1f2adb16738f @  439 : 18 e9             Star r17
         0x1f2adb167391 @  441 : 0d ff             LdaSmi [-1]
 6237 E> 0x1f2adb167393 @  443 : 34 04 e9 58       SetKeyedProperty a1, r17, [88]
         0x1f2adb167397 @  447 : 8a 16             Jump [22] (0x1f2adb1673ad @ 469)
 6294 S> 0x1f2adb167399 @  449 : 0d 06             LdaSmi [6]
         0x1f2adb16739b @  451 : 18 e9             Star r17
         0x1f2adb16739d @  453 : 0d ff             LdaSmi [-1]
 6301 E> 0x1f2adb16739f @  455 : 34 04 e9 5a       SetKeyedProperty a1, r17, [90]
 6319 S> 0x1f2adb1673a3 @  459 : 0d 07             LdaSmi [7]
         0x1f2adb1673a5 @  461 : 18 e9             Star r17
         0x1f2adb1673a7 @  463 : 0d ff             LdaSmi [-1]
 6326 E> 0x1f2adb1673a9 @  465 : 34 04 e9 5c       SetKeyedProperty a1, r17, [92]
 6360 S> 0x1f2adb1673ad @  469 : 2d 02 05 5e       GetNamedProperty <this>, [5], [94]
         0x1f2adb1673b1 @  473 : 96 04             JumpIfToBooleanTrue [4] (0x1f2adb1673b5 @ 477)
 6395 S> 0x1f2adb1673b3 @  475 : 0e                LdaUndefined 
 6402 S> 0x1f2adb1673b4 @  476 : a9                Return 
 6439 S> 0x1f2adb1673b5 @  477 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb1673b9 @  481 : 18 ea             Star r16
         0x1f2adb1673bb @  483 : 0c                LdaZero 
 6441 E> 0x1f2adb1673bc @  484 : 6b ea 60          TestEqual r16, [96]
         0x1f2adb1673bf @  487 : 98 64             JumpIfTrue [100] (0x1f2adb167423 @ 587)
 6454 E> 0x1f2adb1673c1 @  489 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x1f2adb1673c5 @  493 : 18 ea             Star r16
         0x1f2adb1673c7 @  495 : 0c                LdaZero 
 6456 E> 0x1f2adb1673c8 @  496 : 6b ea 61          TestEqual r16, [97]
         0x1f2adb1673cb @  499 : 98 58             JumpIfTrue [88] (0x1f2adb167423 @ 587)
 6491 S> 0x1f2adb1673cd @  501 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 6493 E> 0x1f2adb1673d1 @  505 : 46 01 62          SubSmi [1], [98]
         0x1f2adb1673d4 @  508 : be                Star6 
 6525 S> 0x1f2adb1673d5 @  509 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 6527 E> 0x1f2adb1673d9 @  513 : 46 01 63          SubSmi [1], [99]
         0x1f2adb1673dc @  516 : bd                Star7 
 6553 S> 0x1f2adb1673dd @  517 : 2d 02 02 64       GetNamedProperty <this>, [2], [100]
         0x1f2adb1673e1 @  521 : 18 ea             Star r16
         0x1f2adb1673e3 @  523 : 0b f4             Ldar r6
 6558 E> 0x1f2adb1673e5 @  525 : 2f ea 66          GetKeyedProperty r16, [102]
         0x1f2adb1673e8 @  528 : 18 ea             Star r16
         0x1f2adb1673ea @  530 : 0b f3             Ldar r7
 6561 E> 0x1f2adb1673ec @  532 : 2f ea 68          GetKeyedProperty r16, [104]
         0x1f2adb1673ef @  535 : 18 ea             Star r16
         0x1f2adb1673f1 @  537 : 0c                LdaZero 
 6565 E> 0x1f2adb1673f2 @  538 : 6c ea 6a          TestEqualStrict r16, [106]
         0x1f2adb1673f5 @  541 : 99 18             JumpIfFalse [24] (0x1f2adb16740d @ 565)
 6590 S> 0x1f2adb1673f7 @  543 : 0d 08             LdaSmi [8]
         0x1f2adb1673f9 @  545 : 18 e9             Star r17
         0x1f2adb1673fb @  547 : 0b f4             Ldar r6
 6597 E> 0x1f2adb1673fd @  549 : 34 04 e9 6b       SetKeyedProperty a1, r17, [107]
 6618 S> 0x1f2adb167401 @  553 : 0d 09             LdaSmi [9]
         0x1f2adb167403 @  555 : 18 e9             Star r17
         0x1f2adb167405 @  557 : 0b f3             Ldar r7
 6625 E> 0x1f2adb167407 @  559 : 34 04 e9 6d       SetKeyedProperty a1, r17, [109]
         0x1f2adb16740b @  563 : 8a 16             Jump [22] (0x1f2adb167421 @ 585)
 6679 S> 0x1f2adb16740d @  565 : 0d 08             LdaSmi [8]
         0x1f2adb16740f @  567 : 18 e9             Star r17
         0x1f2adb167411 @  569 : 0d ff             LdaSmi [-1]
 6686 E> 0x1f2adb167413 @  571 : 34 04 e9 6f       SetKeyedProperty a1, r17, [111]
 6708 S> 0x1f2adb167417 @  575 : 0d 09             LdaSmi [9]
         0x1f2adb167419 @  577 : 18 e9             Star r17
         0x1f2adb16741b @  579 : 0d ff             LdaSmi [-1]
 6715 E> 0x1f2adb16741d @  581 : 34 04 e9 71       SetKeyedProperty a1, r17, [113]
         0x1f2adb167421 @  585 : 8a 16             Jump [22] (0x1f2adb167437 @ 607)
 6772 S> 0x1f2adb167423 @  587 : 0d 08             LdaSmi [8]
         0x1f2adb167425 @  589 : 18 e9             Star r17
         0x1f2adb167427 @  591 : 0d ff             LdaSmi [-1]
 6779 E> 0x1f2adb167429 @  593 : 34 04 e9 73       SetKeyedProperty a1, r17, [115]
 6797 S> 0x1f2adb16742d @  597 : 0d 09             LdaSmi [9]
         0x1f2adb16742f @  599 : 18 e9             Star r17
         0x1f2adb167431 @  601 : 0d ff             LdaSmi [-1]
 6804 E> 0x1f2adb167433 @  603 : 34 04 e9 75       SetKeyedProperty a1, r17, [117]
 6857 S> 0x1f2adb167437 @  607 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb16743b @  611 : 18 ea             Star r16
 6866 E> 0x1f2adb16743d @  613 : 2d 02 03 78       GetNamedProperty <this>, [3], [120]
 6873 E> 0x1f2adb167441 @  617 : 46 01 77          SubSmi [1], [119]
 6859 E> 0x1f2adb167444 @  620 : 6d ea 7a          TestLessThan r16, [122]
         0x1f2adb167447 @  623 : 99 64             JumpIfFalse [100] (0x1f2adb1674ab @ 723)
 6885 E> 0x1f2adb167449 @  625 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x1f2adb16744d @  629 : 18 ea             Star r16
         0x1f2adb16744f @  631 : 0c                LdaZero 
 6887 E> 0x1f2adb167450 @  632 : 6b ea 7b          TestEqual r16, [123]
         0x1f2adb167453 @  635 : 98 58             JumpIfTrue [88] (0x1f2adb1674ab @ 723)
 6922 S> 0x1f2adb167455 @  637 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 6924 E> 0x1f2adb167459 @  641 : 45 01 7c          AddSmi [1], [124]
         0x1f2adb16745c @  644 : c0                Star4 
 6956 S> 0x1f2adb16745d @  645 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 6958 E> 0x1f2adb167461 @  649 : 46 01 7d          SubSmi [1], [125]
         0x1f2adb167464 @  652 : bf                Star5 
 6984 S> 0x1f2adb167465 @  653 : 2d 02 02 7e       GetNamedProperty <this>, [2], [126]
         0x1f2adb167469 @  657 : 18 ea             Star r16
         0x1f2adb16746b @  659 : 0b f6             Ldar r4
 6989 E> 0x1f2adb16746d @  661 : 2f ea 80          GetKeyedProperty r16, [128]
         0x1f2adb167470 @  664 : 18 ea             Star r16
         0x1f2adb167472 @  666 : 0b f5             Ldar r5
 6992 E> 0x1f2adb167474 @  668 : 2f ea 82          GetKeyedProperty r16, [130]
         0x1f2adb167477 @  671 : 18 ea             Star r16
         0x1f2adb167479 @  673 : 0c                LdaZero 
 6996 E> 0x1f2adb16747a @  674 : 6c ea 84          TestEqualStrict r16, [132]
         0x1f2adb16747d @  677 : 99 18             JumpIfFalse [24] (0x1f2adb167495 @ 701)
 7021 S> 0x1f2adb16747f @  679 : 0d 0a             LdaSmi [10]
         0x1f2adb167481 @  681 : 18 e9             Star r17
         0x1f2adb167483 @  683 : 0b f6             Ldar r4
 7029 E> 0x1f2adb167485 @  685 : 34 04 e9 85       SetKeyedProperty a1, r17, [133]
 7050 S> 0x1f2adb167489 @  689 : 0d 0b             LdaSmi [11]
         0x1f2adb16748b @  691 : 18 e9             Star r17
         0x1f2adb16748d @  693 : 0b f5             Ldar r5
 7058 E> 0x1f2adb16748f @  695 : 34 04 e9 87       SetKeyedProperty a1, r17, [135]
         0x1f2adb167493 @  699 : 8a 16             Jump [22] (0x1f2adb1674a9 @ 721)
 7112 S> 0x1f2adb167495 @  701 : 0d 0a             LdaSmi [10]
         0x1f2adb167497 @  703 : 18 e9             Star r17
         0x1f2adb167499 @  705 : 0d ff             LdaSmi [-1]
 7120 E> 0x1f2adb16749b @  707 : 34 04 e9 89       SetKeyedProperty a1, r17, [137]
 7142 S> 0x1f2adb16749f @  711 : 0d 0b             LdaSmi [11]
         0x1f2adb1674a1 @  713 : 18 e9             Star r17
         0x1f2adb1674a3 @  715 : 0d ff             LdaSmi [-1]
 7150 E> 0x1f2adb1674a5 @  717 : 34 04 e9 8b       SetKeyedProperty a1, r17, [139]
         0x1f2adb1674a9 @  721 : 8a 16             Jump [22] (0x1f2adb1674bf @ 743)
 7207 S> 0x1f2adb1674ab @  723 : 0d 0a             LdaSmi [10]
         0x1f2adb1674ad @  725 : 18 e9             Star r17
         0x1f2adb1674af @  727 : 0d ff             LdaSmi [-1]
 7215 E> 0x1f2adb1674b1 @  729 : 34 04 e9 8d       SetKeyedProperty a1, r17, [141]
 7233 S> 0x1f2adb1674b5 @  733 : 0d 0b             LdaSmi [11]
         0x1f2adb1674b7 @  735 : 18 e9             Star r17
         0x1f2adb1674b9 @  737 : 0d ff             LdaSmi [-1]
 7241 E> 0x1f2adb1674bb @  739 : 34 04 e9 8f       SetKeyedProperty a1, r17, [143]
 7295 S> 0x1f2adb1674bf @  743 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb1674c3 @  747 : 18 ea             Star r16
         0x1f2adb1674c5 @  749 : 0c                LdaZero 
 7297 E> 0x1f2adb1674c6 @  750 : 6b ea 91          TestEqual r16, [145]
         0x1f2adb1674c9 @  753 : 98 6a             JumpIfTrue [106] (0x1f2adb167533 @ 859)
 7310 E> 0x1f2adb1674cb @  755 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x1f2adb1674cf @  759 : 18 ea             Star r16
 7319 E> 0x1f2adb1674d1 @  761 : 2d 02 04 93       GetNamedProperty <this>, [4], [147]
 7327 E> 0x1f2adb1674d5 @  765 : 46 01 92          SubSmi [1], [146]
 7312 E> 0x1f2adb1674d8 @  768 : 6d ea 95          TestLessThan r16, [149]
         0x1f2adb1674db @  771 : 99 58             JumpIfFalse [88] (0x1f2adb167533 @ 859)
 7361 S> 0x1f2adb1674dd @  773 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 7363 E> 0x1f2adb1674e1 @  777 : 46 01 96          SubSmi [1], [150]
         0x1f2adb1674e4 @  780 : c2                Star2 
 7395 S> 0x1f2adb1674e5 @  781 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 7397 E> 0x1f2adb1674e9 @  785 : 45 01 97          AddSmi [1], [151]
         0x1f2adb1674ec @  788 : c1                Star3 
 7423 S> 0x1f2adb1674ed @  789 : 2d 02 02 98       GetNamedProperty <this>, [2], [152]
         0x1f2adb1674f1 @  793 : 18 ea             Star r16
         0x1f2adb1674f3 @  795 : 0b f8             Ldar r2
 7428 E> 0x1f2adb1674f5 @  797 : 2f ea 9a          GetKeyedProperty r16, [154]
         0x1f2adb1674f8 @  800 : 18 ea             Star r16
         0x1f2adb1674fa @  802 : 0b f7             Ldar r3
 7431 E> 0x1f2adb1674fc @  804 : 2f ea 9c          GetKeyedProperty r16, [156]
         0x1f2adb1674ff @  807 : 18 ea             Star r16
         0x1f2adb167501 @  809 : 0c                LdaZero 
 7435 E> 0x1f2adb167502 @  810 : 6c ea 9e          TestEqualStrict r16, [158]
         0x1f2adb167505 @  813 : 99 18             JumpIfFalse [24] (0x1f2adb16751d @ 837)
 7460 S> 0x1f2adb167507 @  815 : 0d 0c             LdaSmi [12]
         0x1f2adb167509 @  817 : 18 e9             Star r17
         0x1f2adb16750b @  819 : 0b f8             Ldar r2
 7468 E> 0x1f2adb16750d @  821 : 34 04 e9 9f       SetKeyedProperty a1, r17, [159]
 7489 S> 0x1f2adb167511 @  825 : 0d 0d             LdaSmi [13]
         0x1f2adb167513 @  827 : 18 e9             Star r17
         0x1f2adb167515 @  829 : 0b f7             Ldar r3
 7497 E> 0x1f2adb167517 @  831 : 34 04 e9 a1       SetKeyedProperty a1, r17, [161]
         0x1f2adb16751b @  835 : 8a 16             Jump [22] (0x1f2adb167531 @ 857)
 7551 S> 0x1f2adb16751d @  837 : 0d 0c             LdaSmi [12]
         0x1f2adb16751f @  839 : 18 e9             Star r17
         0x1f2adb167521 @  841 : 0d ff             LdaSmi [-1]
 7559 E> 0x1f2adb167523 @  843 : 34 04 e9 a3       SetKeyedProperty a1, r17, [163]
 7581 S> 0x1f2adb167527 @  847 : 0d 0d             LdaSmi [13]
         0x1f2adb167529 @  849 : 18 e9             Star r17
         0x1f2adb16752b @  851 : 0d ff             LdaSmi [-1]
 7589 E> 0x1f2adb16752d @  853 : 34 04 e9 a5       SetKeyedProperty a1, r17, [165]
         0x1f2adb167531 @  857 : 8a 16             Jump [22] (0x1f2adb167547 @ 879)
 7646 S> 0x1f2adb167533 @  859 : 0d 0c             LdaSmi [12]
         0x1f2adb167535 @  861 : 18 e9             Star r17
         0x1f2adb167537 @  863 : 0d ff             LdaSmi [-1]
 7654 E> 0x1f2adb167539 @  865 : 34 04 e9 a7       SetKeyedProperty a1, r17, [167]
 7672 S> 0x1f2adb16753d @  869 : 0d 0d             LdaSmi [13]
         0x1f2adb16753f @  871 : 18 e9             Star r17
         0x1f2adb167541 @  873 : 0d ff             LdaSmi [-1]
 7680 E> 0x1f2adb167543 @  875 : 34 04 e9 a9       SetKeyedProperty a1, r17, [169]
 7735 S> 0x1f2adb167547 @  879 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1f2adb16754b @  883 : 18 ea             Star r16
 7744 E> 0x1f2adb16754d @  885 : 2d 02 03 ac       GetNamedProperty <this>, [3], [172]
 7751 E> 0x1f2adb167551 @  889 : 46 01 ab          SubSmi [1], [171]
 7737 E> 0x1f2adb167554 @  892 : 6d ea ae          TestLessThan r16, [174]
         0x1f2adb167557 @  895 : 99 6a             JumpIfFalse [106] (0x1f2adb1675c1 @ 1001)
 7763 E> 0x1f2adb167559 @  897 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
         0x1f2adb16755d @  901 : 18 ea             Star r16
 7772 E> 0x1f2adb16755f @  903 : 2d 02 04 b0       GetNamedProperty <this>, [4], [176]
 7780 E> 0x1f2adb167563 @  907 : 46 01 af          SubSmi [1], [175]
 7765 E> 0x1f2adb167566 @  910 : 6d ea b2          TestLessThan r16, [178]
         0x1f2adb167569 @  913 : 99 58             JumpIfFalse [88] (0x1f2adb1675c1 @ 1001)
 7814 S> 0x1f2adb16756b @  915 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 7816 E> 0x1f2adb16756f @  919 : 45 01 b3          AddSmi [1], [179]
         0x1f2adb167572 @  922 : c4                Star0 
 7848 S> 0x1f2adb167573 @  923 : 2d 03 01 04       GetNamedProperty a0, [1], [4]
 7850 E> 0x1f2adb167577 @  927 : 45 01 b4          AddSmi [1], [180]
         0x1f2adb16757a @  930 : c3                Star1 
 7876 S> 0x1f2adb16757b @  931 : 2d 02 02 b5       GetNamedProperty <this>, [2], [181]
         0x1f2adb16757f @  935 : 18 ea             Star r16
         0x1f2adb167581 @  937 : 0b fa             Ldar r0
 7881 E> 0x1f2adb167583 @  939 : 2f ea b7          GetKeyedProperty r16, [183]
         0x1f2adb167586 @  942 : 18 ea             Star r16
         0x1f2adb167588 @  944 : 0b f9             Ldar r1
 7884 E> 0x1f2adb16758a @  946 : 2f ea b9          GetKeyedProperty r16, [185]
         0x1f2adb16758d @  949 : 18 ea             Star r16
         0x1f2adb16758f @  951 : 0c                LdaZero 
 7888 E> 0x1f2adb167590 @  952 : 6c ea bb          TestEqualStrict r16, [187]
         0x1f2adb167593 @  955 : 99 18             JumpIfFalse [24] (0x1f2adb1675ab @ 979)
 7913 S> 0x1f2adb167595 @  957 : 0d 0e             LdaSmi [14]
         0x1f2adb167597 @  959 : 18 e9             Star r17
         0x1f2adb167599 @  961 : 0b fa             Ldar r0
 7921 E> 0x1f2adb16759b @  963 : 34 04 e9 bc       SetKeyedProperty a1, r17, [188]
 7942 S> 0x1f2adb16759f @  967 : 0d 0f             LdaSmi [15]
         0x1f2adb1675a1 @  969 : 18 e9             Star r17
         0x1f2adb1675a3 @  971 : 0b f9             Ldar r1
 7950 E> 0x1f2adb1675a5 @  973 : 34 04 e9 be       SetKeyedProperty a1, r17, [190]
         0x1f2adb1675a9 @  977 : 8a 16             Jump [22] (0x1f2adb1675bf @ 999)
 8004 S> 0x1f2adb1675ab @  979 : 0d 0e             LdaSmi [14]
         0x1f2adb1675ad @  981 : 18 e9             Star r17
         0x1f2adb1675af @  983 : 0d ff             LdaSmi [-1]
 8012 E> 0x1f2adb1675b1 @  985 : 34 04 e9 c0       SetKeyedProperty a1, r17, [192]
 8034 S> 0x1f2adb1675b5 @  989 : 0d 0f             LdaSmi [15]
         0x1f2adb1675b7 @  991 : 18 e9             Star r17
         0x1f2adb1675b9 @  993 : 0d ff             LdaSmi [-1]
 8042 E> 0x1f2adb1675bb @  995 : 34 04 e9 c2       SetKeyedProperty a1, r17, [194]
         0x1f2adb1675bf @  999 : 8a 16             Jump [22] (0x1f2adb1675d5 @ 1021)
 8099 S> 0x1f2adb1675c1 @ 1001 : 0d 0e             LdaSmi [14]
         0x1f2adb1675c3 @ 1003 : 18 e9             Star r17
         0x1f2adb1675c5 @ 1005 : 0d ff             LdaSmi [-1]
 8107 E> 0x1f2adb1675c7 @ 1007 : 34 04 e9 c4       SetKeyedProperty a1, r17, [196]
 8125 S> 0x1f2adb1675cb @ 1011 : 0d 0f             LdaSmi [15]
         0x1f2adb1675cd @ 1013 : 18 e9             Star r17
         0x1f2adb1675cf @ 1015 : 0d ff             LdaSmi [-1]
 8133 E> 0x1f2adb1675d1 @ 1017 : 34 04 e9 c6       SetKeyedProperty a1, r17, [198]
         0x1f2adb1675d5 @ 1021 : 0e                LdaUndefined 
 8153 S> 0x1f2adb1675d6 @ 1022 : a9                Return 
Constant pool (size = 6)
0x1f2adb1675d9: [FixedArray] in OldSpace
 - map: 0x32ad8b4012e1 <Map>
 - length: 6
           0: 0x1ee0de298ac9 <String[1]: #x>
           1: 0x1ee0de298ae1 <String[1]: #y>
           2: 0x1f2adb1656d9 <String[5]: #_grid>
           3: 0x1f2adb165719 <String[6]: #_width>
           4: 0x1f2adb165751 <String[7]: #_height>
           5: 0x1f2adb1656f1 <String[21]: #_withDiagonalMovement>
Handler Table (size = 0)
Source Position Table (size = 436)
0x1f2adb167619 <ByteArray[436]>
<< OUTPUTTING DISASSEMBLY END >>
