<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1eee1f0a4f18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1eee1f0a4f18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1eee1f0a4f1c @    4 : c4                Star0 
 6008 S> 0x1eee1f0a4f1d @    5 : a9                Return 
Constant pool (size = 1)
0x1eee1f0a4f21: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 1
           0: 0x1eee1f0a4f39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1eee1f0a8bb9 <ByteArray[8]>
0x1eee1f0a4f39 points to: [0x1eee1f0a4fa8]
=== [0x1eee1f0a4fa8] DISASSEMBLY ===
Parameter count 6
Register count 16
Frame size 128
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1eee1f0a4fa8 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x1eee1f0a4fab @    3 : 1a f9             PushContext r1
         0x1eee1f0a4fad @    5 : 10                LdaTheHole 
         0x1eee1f0a4fae @    6 : 25 02             StaCurrentContextSlot [2]
         0x1eee1f0a4fb0 @    8 : 10                LdaTheHole 
         0x1eee1f0a4fb1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1eee1f0a4fb3 @   11 : 10                LdaTheHole 
         0x1eee1f0a4fb4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x1eee1f0a4fb6 @   14 : 10                LdaTheHole 
         0x1eee1f0a4fb7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x1eee1f0a4fb9 @   17 : 10                LdaTheHole 
         0x1eee1f0a4fba @   18 : 25 06             StaCurrentContextSlot [6]
         0x1eee1f0a4fbc @   20 : 10                LdaTheHole 
         0x1eee1f0a4fbd @   21 : 25 07             StaCurrentContextSlot [7]
   76 S> 0x1eee1f0a4fbf @   23 : 21 01 00          LdaGlobal [1], [0]
         0x1eee1f0a4fc2 @   26 : c1                Star3 
   83 E> 0x1eee1f0a4fc3 @   27 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x1eee1f0a4fc7 @   31 : c2                Star2 
         0x1eee1f0a4fc8 @   32 : 13 03             LdaConstant [3]
         0x1eee1f0a4fca @   34 : bf                Star5 
   98 E> 0x1eee1f0a4fcb @   35 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x1eee1f0a4fcf @   39 : be                Star6 
         0x1eee1f0a4fd0 @   40 : 19 03 f6          Mov a0, r4
   83 E> 0x1eee1f0a4fd3 @   43 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x1eee1f0a4fd8 @   48 : 0e                LdaUndefined 
  153 E> 0x1eee1f0a4fd9 @   49 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  186 S> 0x1eee1f0a4fdd @   53 : 13 06             LdaConstant [6]
         0x1eee1f0a4fdf @   55 : c1                Star3 
  186 E> 0x1eee1f0a4fe0 @   56 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  186 E> 0x1eee1f0a4fe4 @   60 : 25 02             StaCurrentContextSlot [2]
  241 S> 0x1eee1f0a4fe6 @   62 : 13 07             LdaConstant [7]
         0x1eee1f0a4fe8 @   64 : c1                Star3 
  241 E> 0x1eee1f0a4fe9 @   65 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  241 E> 0x1eee1f0a4fed @   69 : 25 03             StaCurrentContextSlot [3]
  282 S> 0x1eee1f0a4fef @   71 : 13 08             LdaConstant [8]
         0x1eee1f0a4ff1 @   73 : c1                Star3 
  282 E> 0x1eee1f0a4ff2 @   74 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  282 E> 0x1eee1f0a4ff6 @   78 : 25 04             StaCurrentContextSlot [4]
  337 S> 0x1eee1f0a4ff8 @   80 : 13 09             LdaConstant [9]
         0x1eee1f0a4ffa @   82 : c1                Star3 
  337 E> 0x1eee1f0a4ffb @   83 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  337 E> 0x1eee1f0a4fff @   87 : 25 05             StaCurrentContextSlot [5]
  396 S> 0x1eee1f0a5001 @   89 : 13 0a             LdaConstant [10]
         0x1eee1f0a5003 @   91 : c1                Star3 
  396 E> 0x1eee1f0a5004 @   92 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  396 E> 0x1eee1f0a5008 @   96 : 25 06             StaCurrentContextSlot [6]
  452 S> 0x1eee1f0a500a @   98 : 13 0b             LdaConstant [11]
         0x1eee1f0a500c @  100 : c1                Star3 
  452 E> 0x1eee1f0a500d @  101 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  452 E> 0x1eee1f0a5011 @  105 : 25 07             StaCurrentContextSlot [7]
         0x1eee1f0a5013 @  107 : 81 0c             CreateBlockContext [12]
         0x1eee1f0a5015 @  109 : 1a f8             PushContext r2
         0x1eee1f0a5017 @  111 : 10                LdaTheHole 
         0x1eee1f0a5018 @  112 : 25 02             StaCurrentContextSlot [2]
         0x1eee1f0a501a @  114 : 10                LdaTheHole 
         0x1eee1f0a501b @  115 : be                Star6 
         0x1eee1f0a501c @  116 : 80 0e 00 02       CreateClosure [14], [0], #2
         0x1eee1f0a5020 @  120 : c1                Star3 
         0x1eee1f0a5021 @  121 : 13 0d             LdaConstant [13]
         0x1eee1f0a5023 @  123 : c0                Star4 
         0x1eee1f0a5024 @  124 : 80 0f 01 02       CreateClosure [15], [1], #2
         0x1eee1f0a5028 @  128 : bd                Star7 
         0x1eee1f0a5029 @  129 : 80 10 02 02       CreateClosure [16], [2], #2
         0x1eee1f0a502d @  133 : bc                Star8 
         0x1eee1f0a502e @  134 : 80 11 03 02       CreateClosure [17], [3], #2
         0x1eee1f0a5032 @  138 : bb                Star9 
         0x1eee1f0a5033 @  139 : 80 12 04 02       CreateClosure [18], [4], #2
         0x1eee1f0a5037 @  143 : ba                Star10 
         0x1eee1f0a5038 @  144 : 80 13 05 02       CreateClosure [19], [5], #2
         0x1eee1f0a503c @  148 : b9                Star11 
         0x1eee1f0a503d @  149 : 80 14 06 02       CreateClosure [20], [6], #2
         0x1eee1f0a5041 @  153 : b8                Star12 
         0x1eee1f0a5042 @  154 : 80 15 07 02       CreateClosure [21], [7], #2
         0x1eee1f0a5046 @  158 : b7                Star13 
         0x1eee1f0a5047 @  159 : 80 16 08 02       CreateClosure [22], [8], #2
         0x1eee1f0a504b @  163 : b6                Star14 
         0x1eee1f0a504c @  164 : 80 17 09 02       CreateClosure [23], [9], #2
         0x1eee1f0a5050 @  168 : b5                Star15 
         0x1eee1f0a5051 @  169 : 19 f7 f5          Mov r3, r5
         0x1eee1f0a5054 @  172 : 65 28 00 f6 0c    CallRuntime [DefineClass], r4-r15
         0x1eee1f0a5059 @  177 : c0                Star4 
         0x1eee1f0a505a @  178 : 0b f5             Ldar r5
         0x1eee1f0a505c @  180 : 25 02             StaCurrentContextSlot [2]
         0x1eee1f0a505e @  182 : 1b f8             PopContext r2
         0x1eee1f0a5060 @  184 : c4                Star0 
 5948 S> 0x1eee1f0a5061 @  185 : 0b fa             Ldar r0
 5962 E> 0x1eee1f0a5063 @  187 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x1eee1f0a5067 @  191 : 0e                LdaUndefined 
 6005 S> 0x1eee1f0a5068 @  192 : a9                Return 
Constant pool (size = 24)
0x1eee1f0a5071: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 24
           0: 0x1eee1f0a5141 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1a28683c5ab9 <String[6]: #Object>
           2: 0x1a28683c4c11 <String[14]: #defineProperty>
           3: 0x1eee1f0a52a1 <String[10]: #__esModule>
           4: 0x1eee1f0a52c1 <ObjectBoilerplateDescription[3]>
           5: 0x1eee1f0a52e9 <String[5]: #World>
           6: 0x1eee1f0a5301 <String[22]: #./actions/action_types>
           7: 0x1eee1f0a5329 <String[11]: #./character>
           8: 0x1eee1f0a5349 <String[17]: #./geometry/vector>
           9: 0x1eee1f0a5371 <String[24]: #./threats/threat_factory>
          10: 0x1eee1f0a5399 <String[19]: #./utils/pathfinding>
          11: 0x1eee1f0a53c1 <String[25]: #./generated/GameInterface>
          12: 0x1eee1f0a53f1 <ScopeInfo CLASS_SCOPE>
          13: 0x1eee1f0a5439 <FixedArray[7]>
          14: 0x1eee1f0a5781 <SharedFunctionInfo World>
          15: 0x1eee1f0a6971 <SharedFunctionInfo createTiles>
          16: 0x1eee1f0a6e49 <SharedFunctionInfo update>
          17: 0x1eee1f0a71a9 <SharedFunctionInfo applyAction>
          18: 0x1eee1f0a7571 <SharedFunctionInfo moveCharacterAlongPath>
          19: 0x1eee1f0a7861 <SharedFunctionInfo moveCharacter>
          20: 0x1eee1f0a7bf9 <SharedFunctionInfo serializeForViewer>
          21: 0x1eee1f0a7ea9 <SharedFunctionInfo serializeForPlayer>
          22: 0x1eee1f0a8219 <SharedFunctionInfo serializeForThreat>
          23: 0x1eee1f0a8511 <SharedFunctionInfo serializeCommon>
Handler Table (size = 0)
Source Position Table (size = 70)
0x1eee1f0a8b41 <ByteArray[70]>
Boilerplate at 0x1eee1f0a52c1: 
0x1eee1f0a52c1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 3
           0: 8
           1: 0x1a28683c6419 <String[5]: #value>
           2: 0x1a28683c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x1eee1f0a5439 has 7 elements:
0x1eee1f0a5439: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 7
           0: 12
           1: 0x1eee1f0a5481 <DescriptorArray[5]>
           2: 0x1a28683c3301 <NumberDictionary[7]>
           3: 0x1a28683c1329 <FixedArray[0]>
           4: 0x1eee1f0a5579 <DescriptorArray[9]>
           5: 0x1a28683c3301 <NumberDictionary[7]>
           6: 0x1a28683c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xc (12)
Element[1]
0x1eee1f0a5481: [DescriptorArray] in OldSpace
 - map: 0x1a28683c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1a28683c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x30d2d7a74fe1 <AccessorInfo>
  [1]: 0x1a28683c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x30d2d7a74f71 <AccessorInfo>
  [2]: 0x1a28683c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 4, attrs: [___]) @ 0x30d2d7a75051 <AccessorInfo>
  [3]: 0x1a28683c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x1eee1f0a5541 <ClassPositions 641, 5947>
  [4]: 0x1eee1f0a5559: [String] in OldSpace: #createTiles (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[2]
0x1a28683c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1a28683c1329: [FixedArray] in ReadOnlySpace
 - map: 0x1a28683c12e1 <Map>
 - length: 0
Element[4]
0x1eee1f0a5579: [DescriptorArray] in OldSpace
 - map: 0x1a28683c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 9
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1a28683c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 3, attrs: [W_C]) @ 1
  [1]: 0x30d2d7a43f01: [String] in OldSpace: #update (const data descriptor, p: 6, attrs: [W_C]) @ 4
  [2]: 0x1eee1f0a5681: [String] in OldSpace: #applyAction (const data descriptor, p: 1, attrs: [W_C]) @ 5
  [3]: 0x1eee1f0a56a1: [String] in OldSpace: #moveCharacterAlongPath (const data descriptor, p: 2, attrs: [W_C]) @ 6
  [4]: 0x1eee1f0a56c9: [String] in OldSpace: #moveCharacter (const data descriptor, p: 0, attrs: [W_C]) @ 7
  [5]: 0x1eee1f0a56e9: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 8, attrs: [W_C]) @ 8
  [6]: 0x1eee1f0a5711: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 7, attrs: [W_C]) @ 9
  [7]: 0x1eee1f0a5739: [String] in OldSpace: #serializeForThreat (const data descriptor, p: 4, attrs: [W_C]) @ 10
  [8]: 0x1eee1f0a5761: [String] in OldSpace: #serializeCommon (const data descriptor, p: 5, attrs: [W_C]) @ 11
Element[5]
0x1a28683c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1a28683c1329: [FixedArray] in ReadOnlySpace
 - map: 0x1a28683c12e1 <Map>
 - length: 0
0x1eee1f0a5781 points to: [0x1eee1f0a57f0]
=== [0x1eee1f0a57f0] DISASSEMBLY ===
Parameter count 5
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  670 E> 0x1eee1f0a57f0 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x1eee1f0a57f3 @    3 : 1a fa             PushContext r0
         0x1eee1f0a57f5 @    5 : 0b 02             Ldar <this>
         0x1eee1f0a57f7 @    7 : 25 02             StaCurrentContextSlot [2]
         0x1eee1f0a57f9 @    9 : 10                LdaTheHole 
         0x1eee1f0a57fa @   10 : 25 03             StaCurrentContextSlot [3]
  712 S> 0x1eee1f0a57fc @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a57fe @   14 : c3                Star1 
         0x1eee1f0a57ff @   15 : 0b 03             Ldar a0
  725 E> 0x1eee1f0a5801 @   17 : 32 f9 01 00       SetNamedProperty r1, [1], [0]
  744 S> 0x1eee1f0a5805 @   21 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5807 @   23 : c3                Star1 
         0x1eee1f0a5808 @   24 : 0b 04             Ldar a1
  753 E> 0x1eee1f0a580a @   26 : 32 f9 02 02       SetNamedProperty r1, [2], [2]
  768 S> 0x1eee1f0a580e @   30 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5810 @   32 : c3                Star1 
         0x1eee1f0a5811 @   33 : 0b 05             Ldar a2
  784 E> 0x1eee1f0a5813 @   35 : 32 f9 03 04       SetNamedProperty r1, [3], [4]
  806 S> 0x1eee1f0a5817 @   39 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5819 @   41 : c3                Star1 
         0x1eee1f0a581a @   42 : 0b 06             Ldar a3
  815 E> 0x1eee1f0a581c @   44 : 32 f9 04 06       SetNamedProperty r1, [4], [6]
  830 S> 0x1eee1f0a5820 @   48 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5822 @   50 : c3                Star1 
         0x1eee1f0a5823 @   51 : 0c                LdaZero 
  847 E> 0x1eee1f0a5824 @   52 : 32 f9 05 08       SetNamedProperty r1, [5], [8]
  860 S> 0x1eee1f0a5828 @   56 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a582a @   58 : c3                Star1 
         0x1eee1f0a582b @   59 : 7b 0a             CreateEmptyArrayLiteral [10]
  873 E> 0x1eee1f0a582d @   61 : 32 f9 06 0b       SetNamedProperty r1, [6], [11]
  887 S> 0x1eee1f0a5831 @   65 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5833 @   67 : c3                Star1 
         0x1eee1f0a5834 @   68 : 7d                CreateEmptyObjectLiteral 
  902 E> 0x1eee1f0a5835 @   69 : 32 f9 07 0d       SetNamedProperty r1, [7], [13]
  916 S> 0x1eee1f0a5839 @   73 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a583b @   75 : c3                Star1 
         0x1eee1f0a583c @   76 : 80 08 00 01       CreateClosure [8], [0], #1
  942 E> 0x1eee1f0a5840 @   80 : 32 f9 09 0f       SetNamedProperty r1, [9], [15]
 1213 S> 0x1eee1f0a5844 @   84 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5846 @   86 : c3                Star1 
         0x1eee1f0a5847 @   87 : 80 0a 01 01       CreateClosure [10], [1], #1
 1237 E> 0x1eee1f0a584b @   91 : 32 f9 0b 11       SetNamedProperty r1, [11], [17]
 1454 S> 0x1eee1f0a584f @   95 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5851 @   97 : c3                Star1 
 1471 E> 0x1eee1f0a5852 @   98 : 2d 06 0c 13       GetNamedProperty a3, [12], [19]
 1465 E> 0x1eee1f0a5856 @  102 : 32 f9 0c 15       SetNamedProperty r1, [12], [21]
 1486 S> 0x1eee1f0a585a @  106 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a585c @  108 : c3                Star1 
 1504 E> 0x1eee1f0a585d @  109 : 2d 06 0d 17       GetNamedProperty a3, [13], [23]
 1498 E> 0x1eee1f0a5861 @  113 : 32 f9 0d 19       SetNamedProperty r1, [13], [25]
 1520 S> 0x1eee1f0a5865 @  117 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5867 @  119 : c3                Star1 
         0x1eee1f0a5868 @  120 : 14 fa 02 00       LdaContextSlot r0, [2], [0]
 1533 E> 0x1eee1f0a586c @  124 : aa 0e             ThrowReferenceErrorIfHole [14]
         0x1eee1f0a586e @  126 : c1                Star3 
 1539 E> 0x1eee1f0a586f @  127 : 2d f7 0f 1b       GetNamedProperty r3, [15], [27]
         0x1eee1f0a5873 @  131 : c2                Star2 
 1539 E> 0x1eee1f0a5874 @  132 : 5e f8 f7 06 1d    CallProperty1 r2, r3, a3, [29]
 1531 E> 0x1eee1f0a5879 @  137 : 32 f9 10 1f       SetNamedProperty r1, [16], [31]
 1565 S> 0x1eee1f0a587d @  141 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a587f @  143 : c3                Star1 
         0x1eee1f0a5880 @  144 : 0b 05             Ldar a2
 1575 E> 0x1eee1f0a5882 @  146 : 32 f9 11 21       SetNamedProperty r1, [17], [33]
 1624 S> 0x1eee1f0a5886 @  150 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5888 @  152 : c2                Star2 
 1629 E> 0x1eee1f0a5889 @  153 : 2d f8 10 23       GetNamedProperty r2, [16], [35]
         0x1eee1f0a588d @  157 : c2                Star2 
 1635 E> 0x1eee1f0a588e @  158 : 2d f8 04 25       GetNamedProperty r2, [4], [37]
         0x1eee1f0a5892 @  162 : c3                Star1 
         0x1eee1f0a5893 @  163 : 80 12 02 02       CreateClosure [18], [2], #2
         0x1eee1f0a5897 @  167 : c1                Star3 
 1635 E> 0x1eee1f0a5898 @  168 : 5e f9 f8 f7 27    CallProperty1 r1, r2, r3, [39]
 1624 E> 0x1eee1f0a589d @  173 : 25 03             StaCurrentContextSlot [3]
 1731 S> 0x1eee1f0a589f @  175 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a58a1 @  177 : c3                Star1 
         0x1eee1f0a58a2 @  178 : 15 ff 06 02       LdaImmutableContextSlot <context>, [6], [2]
 1754 E> 0x1eee1f0a58a6 @  182 : aa 13             ThrowReferenceErrorIfHole [19]
         0x1eee1f0a58a8 @  184 : c1                Star3 
 1768 E> 0x1eee1f0a58a9 @  185 : 2d f7 14 29       GetNamedProperty r3, [20], [41]
         0x1eee1f0a58ad @  189 : c1                Star3 
 1784 E> 0x1eee1f0a58ae @  190 : 2d f7 15 2b       GetNamedProperty r3, [21], [43]
         0x1eee1f0a58b2 @  194 : c2                Star2 
         0x1eee1f0a58b3 @  195 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a58b5 @  197 : bf                Star5 
 1801 E> 0x1eee1f0a58b6 @  198 : 2d f5 10 2d       GetNamedProperty r5, [16], [45]
         0x1eee1f0a58ba @  202 : bf                Star5 
 1807 E> 0x1eee1f0a58bb @  203 : 2d f5 04 2f       GetNamedProperty r5, [4], [47]
         0x1eee1f0a58bf @  207 : c0                Star4 
         0x1eee1f0a58c0 @  208 : 80 16 03 02       CreateClosure [22], [3], #2
         0x1eee1f0a58c4 @  212 : be                Star6 
 1807 E> 0x1eee1f0a58c5 @  213 : 5e f6 f5 f4 31    CallProperty1 r4, r5, r6, [49]
         0x1eee1f0a58ca @  218 : c0                Star4 
         0x1eee1f0a58cb @  219 : 12                LdaFalse 
         0x1eee1f0a58cc @  220 : bf                Star5 
 1784 E> 0x1eee1f0a58cd @  221 : 5f f8 f7 f6 f5 33 CallProperty2 r2, r3, r4, r5, [51]
 1752 E> 0x1eee1f0a58d3 @  227 : 32 f9 17 35       SetNamedProperty r1, [23], [53]
 1911 S> 0x1eee1f0a58d7 @  231 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a58d9 @  233 : c3                Star1 
 1937 E> 0x1eee1f0a58da @  234 : 2d 06 07 37       GetNamedProperty a3, [7], [55]
 1931 E> 0x1eee1f0a58de @  238 : 32 f9 18 39       SetNamedProperty r1, [24], [57]
 1956 S> 0x1eee1f0a58e2 @  242 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a58e4 @  244 : c3                Star1 
 1965 E> 0x1eee1f0a58e5 @  245 : 2d f9 11 3b       GetNamedProperty r1, [17], [59]
         0x1eee1f0a58e9 @  249 : c3                Star1 
 1970 E> 0x1eee1f0a58ea @  250 : 2d f9 19 3d       GetNamedProperty r1, [25], [61]
         0x1eee1f0a58ee @  254 : 1d                TestUndetectable 
         0x1eee1f0a58ef @  255 : 98 34             JumpIfTrue [52] (0x1eee1f0a5923 @ 307)
 1996 S> 0x1eee1f0a58f1 @  257 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a58f3 @  259 : c3                Star1 
         0x1eee1f0a58f4 @  260 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
 2017 E> 0x1eee1f0a58f8 @  264 : aa 1a             ThrowReferenceErrorIfHole [26]
         0x1eee1f0a58fa @  266 : c2                Star2 
 2029 E> 0x1eee1f0a58fb @  267 : 2d f8 1b 3f       GetNamedProperty r2, [27], [63]
         0x1eee1f0a58ff @  271 : c2                Star2 
         0x1eee1f0a5900 @  272 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5902 @  274 : c0                Star4 
 2053 E> 0x1eee1f0a5903 @  275 : 2d f6 11 41       GetNamedProperty r4, [17], [65]
         0x1eee1f0a5907 @  279 : c0                Star4 
 2058 E> 0x1eee1f0a5908 @  280 : 2d f6 19 43       GetNamedProperty r4, [25], [67]
         0x1eee1f0a590c @  284 : c0                Star4 
         0x1eee1f0a590d @  285 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a590f @  287 : bf                Star5 
 2067 E> 0x1eee1f0a5910 @  288 : 2d f5 18 45       GetNamedProperty r5, [24], [69]
         0x1eee1f0a5914 @  292 : bf                Star5 
         0x1eee1f0a5915 @  293 : 0b f8             Ldar r2
         0x1eee1f0a5917 @  295 : 19 03 f7          Mov a0, r3
 2013 E> 0x1eee1f0a591a @  298 : 69 f8 f7 03 47    Construct r2, r3-r5, [71]
 2011 E> 0x1eee1f0a591f @  303 : 32 f9 07 49       SetNamedProperty r1, [7], [73]
 2102 S> 0x1eee1f0a5923 @  307 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5925 @  309 : c3                Star1 
 2121 E> 0x1eee1f0a5926 @  310 : 2d 06 06 4b       GetNamedProperty a3, [6], [75]
         0x1eee1f0a592a @  314 : c1                Star3 
 2129 E> 0x1eee1f0a592b @  315 : 2d f7 04 4d       GetNamedProperty r3, [4], [77]
         0x1eee1f0a592f @  319 : c2                Star2 
         0x1eee1f0a5930 @  320 : 80 1c 04 02       CreateClosure [28], [4], #2
         0x1eee1f0a5934 @  324 : c0                Star4 
 2129 E> 0x1eee1f0a5935 @  325 : 5e f8 f7 f6 4f    CallProperty1 r2, r3, r4, [79]
 2115 E> 0x1eee1f0a593a @  330 : 32 f9 06 51       SetNamedProperty r1, [6], [81]
         0x1eee1f0a593e @  334 : 0e                LdaUndefined 
 2269 S> 0x1eee1f0a593f @  335 : a9                Return 
Constant pool (size = 29)
0x1eee1f0a5941: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 29
           0: 0x1eee1f0a5a39 <ScopeInfo FUNCTION_SCOPE>
           1: 0x30d2d7a4cbb9 <String[7]: #options>
           2: 0x30d2d7a68a51 <String[3]: #rng>
           3: 0x1eee1f0a5b01 <String[10]: #engineTeam>
           4: 0x30d2d7a49ea9 <String[3]: #map>
           5: 0x1eee1f0a5b39 <String[11]: #tickCounter>
           6: 0x1eee1f0a5b59 <String[7]: #threats>
           7: 0x1a28683c4939 <String[9]: #character>
           8: 0x1eee1f0a5b71 <SharedFunctionInfo>
           9: 0x1eee1f0a8969 <String[20]: #getCharacterPosition>
          10: 0x1eee1f0a5fb1 <SharedFunctionInfo>
          11: 0x1eee1f0a8991 <String[18]: #getThreatPositions>
          12: 0x1eee1f0a6b61 <String[5]: #width>
          13: 0x1eee1f0a6b79 <String[6]: #height>
          14: 0x1eee1f0a52e9 <String[5]: #World>
          15: 0x1eee1f0a5559 <String[11]: #createTiles>
          16: 0x1eee1f0a6b49 <String[5]: #tiles>
          17: 0x1eee1f0a89b9 <String[4]: #team>
          18: 0x1eee1f0a62c1 <SharedFunctionInfo>
          19: 0x1eee1f0a5261 <String[13]: #pathfinding_1>
          20: 0x1eee1f0a89d1 <String[15]: #PathfindingGrid>
          21: 0x1eee1f0a89f1 <String[11]: #from2DArray>
          22: 0x1eee1f0a6561 <SharedFunctionInfo>
          23: 0x1eee1f0a7719 <String[15]: #pathfindingGrid>
          24: 0x1eee1f0a8a11 <String[14]: #characterSpawn>
          25: 0x1a28683c52d9 <String[2]: #id>
          26: 0x1eee1f0a5209 <String[11]: #character_1>
          27: 0x1eee1f0a8a31 <String[9]: #Character>
          28: 0x1eee1f0a67d1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 145)
0x1eee1f0a8a51 <ByteArray[145]>
0x1eee1f0a5b71 points to: [0x1eee1f0a5be0]
=== [0x1eee1f0a5be0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  964 S> 0x1eee1f0a5be0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5be2 @    2 : c4                Star0 
  974 E> 0x1eee1f0a5be3 @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
         0x1eee1f0a5be7 @    7 : 96 07             JumpIfToBooleanTrue [7] (0x1eee1f0a5bee @ 14)
 1003 S> 0x1eee1f0a5be9 @    9 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
 1027 S> 0x1eee1f0a5bed @   13 : a9                Return 
 1054 S> 0x1eee1f0a5bee @   14 : 7c 02 03 29       CreateObjectLiteral [2], [3], #41
         0x1eee1f0a5bf2 @   18 : c4                Star0 
         0x1eee1f0a5bf3 @   19 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5bf5 @   21 : c2                Star2 
 1087 E> 0x1eee1f0a5bf6 @   22 : 2d f8 00 04       GetNamedProperty r2, [0], [4]
         0x1eee1f0a5bfa @   26 : c2                Star2 
 1097 E> 0x1eee1f0a5bfb @   27 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
         0x1eee1f0a5bff @   31 : c2                Star2 
 1106 E> 0x1eee1f0a5c00 @   32 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x1eee1f0a5c04 @   36 : c3                Star1 
 1106 E> 0x1eee1f0a5c05 @   37 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x1eee1f0a5c09 @   41 : c3                Star1 
 1117 E> 0x1eee1f0a5c0a @   42 : 2d f9 05 0c       GetNamedProperty r1, [5], [12]
         0x1eee1f0a5c0e @   46 : 33 fa 05 0e       DefineNamedOwnProperty r0, [5], [14]
         0x1eee1f0a5c12 @   50 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a5c14 @   52 : c2                Star2 
 1145 E> 0x1eee1f0a5c15 @   53 : 2d f8 00 10       GetNamedProperty r2, [0], [16]
         0x1eee1f0a5c19 @   57 : c2                Star2 
 1155 E> 0x1eee1f0a5c1a @   58 : 2d f8 03 12       GetNamedProperty r2, [3], [18]
         0x1eee1f0a5c1e @   62 : c2                Star2 
 1164 E> 0x1eee1f0a5c1f @   63 : 2d f8 04 14       GetNamedProperty r2, [4], [20]
         0x1eee1f0a5c23 @   67 : c3                Star1 
 1164 E> 0x1eee1f0a5c24 @   68 : 5d f9 f8 16       CallProperty0 r1, r2, [22]
         0x1eee1f0a5c28 @   72 : c3                Star1 
 1175 E> 0x1eee1f0a5c29 @   73 : 2d f9 06 18       GetNamedProperty r1, [6], [24]
         0x1eee1f0a5c2d @   77 : 33 fa 06 1a       DefineNamedOwnProperty r0, [6], [26]
         0x1eee1f0a5c31 @   81 : 0b fa             Ldar r0
 1193 S> 0x1eee1f0a5c33 @   83 : a9                Return 
Constant pool (size = 7)
0x1eee1f0a5c39: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 7
           0: 0x1a28683c4939 <String[9]: #character>
           1: 0x1eee1f0a5c81 <ObjectBoilerplateDescription[5]>
           2: 0x1eee1f0a5ce9 <ObjectBoilerplateDescription[5]>
           3: 0x1a28683c5c19 <String[8]: #position>
           4: 0x30d2d7a501a9 <String[9]: #serialize>
           5: 0x30d2d7a58ac9 <String[1]: #x>
           6: 0x30d2d7a58ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 36)
0x1eee1f0a5d41 <ByteArray[36]>
Boilerplate at 0x1eee1f0a5c81: 
0x1eee1f0a5c81: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 5
           0: 8
           1: 0x30d2d7a58ac9 <String[1]: #x>
           2: -1
           3: 0x30d2d7a58ae1 <String[1]: #y>
           4: -1
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1eee1f0a5ce9: 
0x1eee1f0a5ce9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 5
           0: 8
           1: 0x30d2d7a58ac9 <String[1]: #x>
           2: 0x1a28683c1501 <Odd Oddball: uninitialized>
           3: 0x30d2d7a58ae1 <String[1]: #y>
           4: 0x1a28683c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1eee1f0a5fb1 points to: [0x1eee1f0a6020]
=== [0x1eee1f0a6020] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1258 S> 0x1eee1f0a6020 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a6022 @    2 : c3                Star1 
 1250 E> 0x1eee1f0a6023 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x1eee1f0a6027 @    7 : c3                Star1 
 1258 E> 0x1eee1f0a6028 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1eee1f0a602c @   12 : c4                Star0 
         0x1eee1f0a602d @   13 : 80 02 00 02       CreateClosure [2], [0], #2
         0x1eee1f0a6031 @   17 : c2                Star2 
 1258 E> 0x1eee1f0a6032 @   18 : 5e fa f9 f8 04    CallProperty1 r0, r1, r2, [4]
 1444 S> 0x1eee1f0a6037 @   23 : a9                Return 
Constant pool (size = 3)
0x1eee1f0a6039: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 3
           0: 0x1eee1f0a5b59 <String[7]: #threats>
           1: 0x30d2d7a49ea9 <String[3]: #map>
           2: 0x1eee1f0a6061 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 14)
0x1eee1f0a6239 <ByteArray[14]>
0x1eee1f0a6061 points to: [0x1eee1f0a60d0]
=== [0x1eee1f0a60d0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1300 S> 0x1eee1f0a60d0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a60d4 @    4 : 96 07             JumpIfToBooleanTrue [7] (0x1eee1f0a60db @ 11)
 1328 S> 0x1eee1f0a60d6 @    6 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
 1352 S> 0x1eee1f0a60da @   10 : a9                Return 
 1379 S> 0x1eee1f0a60db @   11 : 7c 02 03 29       CreateObjectLiteral [2], [3], #41
         0x1eee1f0a60df @   15 : c4                Star0 
 1398 E> 0x1eee1f0a60e0 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a60e4 @   20 : c3                Star1 
 1407 E> 0x1eee1f0a60e5 @   21 : 2d f9 03 04       GetNamedProperty r1, [3], [4]
         0x1eee1f0a60e9 @   25 : 33 fa 03 06       DefineNamedOwnProperty r0, [3], [6]
 1420 E> 0x1eee1f0a60ed @   29 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a60f1 @   33 : c3                Star1 
 1429 E> 0x1eee1f0a60f2 @   34 : 2d f9 04 08       GetNamedProperty r1, [4], [8]
         0x1eee1f0a60f6 @   38 : 33 fa 04 0a       DefineNamedOwnProperty r0, [4], [10]
         0x1eee1f0a60fa @   42 : 0b fa             Ldar r0
 1433 S> 0x1eee1f0a60fc @   44 : a9                Return 
Constant pool (size = 5)
0x1eee1f0a6101: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 5
           0: 0x1a28683c5c19 <String[8]: #position>
           1: 0x1eee1f0a6139 <ObjectBoilerplateDescription[5]>
           2: 0x1eee1f0a6171 <ObjectBoilerplateDescription[5]>
           3: 0x30d2d7a58ac9 <String[1]: #x>
           4: 0x30d2d7a58ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 22)
0x1eee1f0a61a9 <ByteArray[22]>
Boilerplate at 0x1eee1f0a6139: 
0x1eee1f0a6139: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 5
           0: 8
           1: 0x30d2d7a58ac9 <String[1]: #x>
           2: -1
           3: 0x30d2d7a58ae1 <String[1]: #y>
           4: -1
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1eee1f0a6171: 
0x1eee1f0a6171: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 5
           0: 8
           1: 0x30d2d7a58ac9 <String[1]: #x>
           2: 0x1a28683c1501 <Odd Oddball: uninitialized>
           3: 0x30d2d7a58ae1 <String[1]: #y>
           4: 0x1a28683c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1eee1f0a62c1 points to: [0x1eee1f0a6330]
=== [0x1eee1f0a6330] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1652 S> 0x1eee1f0a6330 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a6334 @    4 : c4                Star0 
         0x1eee1f0a6335 @    5 : 80 01 00 02       CreateClosure [1], [0], #2
         0x1eee1f0a6339 @    9 : c2                Star2 
 1652 E> 0x1eee1f0a633a @   10 : 5e fa 03 f8 02    CallProperty1 r0, a0, r2, [2]
 1720 S> 0x1eee1f0a633f @   15 : a9                Return 
Constant pool (size = 2)
0x1eee1f0a6341: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 2
           0: 0x30d2d7a49ea9 <String[3]: #map>
           1: 0x1eee1f0a6361 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1eee1f0a64d9 <ByteArray[10]>
0x1eee1f0a6361 points to: [0x1eee1f0a63d0]
=== [0x1eee1f0a63d0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1672 S> 0x1eee1f0a63d0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a63d4 @    4 : c4                Star0 
         0x1eee1f0a63d5 @    5 : 15 ff 07 02       LdaImmutableContextSlot <context>, [7], [2]
 1681 E> 0x1eee1f0a63d9 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1eee1f0a63db @   11 : c3                Star1 
 1697 E> 0x1eee1f0a63dc @   12 : 2d f9 02 02       GetNamedProperty r1, [2], [2]
         0x1eee1f0a63e0 @   16 : c3                Star1 
 1706 E> 0x1eee1f0a63e1 @   17 : 2d f9 03 04       GetNamedProperty r1, [3], [4]
 1677 E> 0x1eee1f0a63e5 @   21 : 6c fa 06          TestEqualStrict r0, [6]
         0x1eee1f0a63e8 @   24 : 99 05             JumpIfFalse [5] (0x1eee1f0a63ed @ 29)
         0x1eee1f0a63ea @   26 : 0c                LdaZero 
         0x1eee1f0a63eb @   27 : 8a 04             Jump [4] (0x1eee1f0a63ef @ 31)
         0x1eee1f0a63ed @   29 : 0d 01             LdaSmi [1]
 1719 S> 0x1eee1f0a63ef @   31 : a9                Return 
Constant pool (size = 4)
0x1eee1f0a63f1: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 4
           0: 0x1a28683c4469 <String[4]: #type>
           1: 0x1eee1f0a5281 <String[15]: #GameInterface_1>
           2: 0x1eee1f0a6421 <String[8]: #TileType>
           3: 0x1eee1f0a6439 <String[4]: #WALL>
Handler Table (size = 0)
Source Position Table (size = 16)
0x1eee1f0a6451 <ByteArray[16]>
0x1eee1f0a6561 points to: [0x1eee1f0a65d0]
=== [0x1eee1f0a65d0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1824 S> 0x1eee1f0a65d0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a65d4 @    4 : c4                Star0 
         0x1eee1f0a65d5 @    5 : 80 01 00 02       CreateClosure [1], [0], #2
         0x1eee1f0a65d9 @    9 : c2                Star2 
 1824 E> 0x1eee1f0a65da @   10 : 5e fa 03 f8 02    CallProperty1 r0, a0, r2, [2]
 1892 S> 0x1eee1f0a65df @   15 : a9                Return 
Constant pool (size = 2)
0x1eee1f0a65e1: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 2
           0: 0x30d2d7a49ea9 <String[3]: #map>
           1: 0x1eee1f0a6601 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1eee1f0a6749 <ByteArray[10]>
0x1eee1f0a6601 points to: [0x1eee1f0a6670]
=== [0x1eee1f0a6670] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1844 S> 0x1eee1f0a6670 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a6674 @    4 : c4                Star0 
         0x1eee1f0a6675 @    5 : 15 ff 07 02       LdaImmutableContextSlot <context>, [7], [2]
 1853 E> 0x1eee1f0a6679 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1eee1f0a667b @   11 : c3                Star1 
 1869 E> 0x1eee1f0a667c @   12 : 2d f9 02 02       GetNamedProperty r1, [2], [2]
         0x1eee1f0a6680 @   16 : c3                Star1 
 1878 E> 0x1eee1f0a6681 @   17 : 2d f9 03 04       GetNamedProperty r1, [3], [4]
 1849 E> 0x1eee1f0a6685 @   21 : 6c fa 06          TestEqualStrict r0, [6]
         0x1eee1f0a6688 @   24 : 99 06             JumpIfFalse [6] (0x1eee1f0a668e @ 30)
         0x1eee1f0a668a @   26 : 0d 01             LdaSmi [1]
         0x1eee1f0a668c @   28 : 8a 03             Jump [3] (0x1eee1f0a668f @ 31)
         0x1eee1f0a668e @   30 : 0c                LdaZero 
 1891 S> 0x1eee1f0a668f @   31 : a9                Return 
Constant pool (size = 4)
0x1eee1f0a6691: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 4
           0: 0x1a28683c4469 <String[4]: #type>
           1: 0x1eee1f0a5281 <String[15]: #GameInterface_1>
           2: 0x1eee1f0a6421 <String[8]: #TileType>
           3: 0x1eee1f0a6439 <String[4]: #WALL>
Handler Table (size = 0)
Source Position Table (size = 16)
0x1eee1f0a66c1 <ByteArray[16]>
0x1eee1f0a67d1 points to: [0x1eee1f0a6840]
=== [0x1eee1f0a6840] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 2187 S> 0x1eee1f0a6840 @    0 : 15 ff 05 02       LdaImmutableContextSlot <context>, [5], [2]
         0x1eee1f0a6844 @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1eee1f0a6846 @    6 : c3                Star1 
 2174 E> 0x1eee1f0a6847 @    7 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x1eee1f0a684b @   11 : c4                Star0 
         0x1eee1f0a684c @   12 : 17 03             LdaImmutableCurrentContextSlot [3]
 2188 E> 0x1eee1f0a684e @   14 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1eee1f0a6850 @   16 : c3                Star1 
 2223 E> 0x1eee1f0a6851 @   17 : 2d 03 03 02       GetNamedProperty a0, [3], [2]
         0x1eee1f0a6855 @   21 : c2                Star2 
         0x1eee1f0a6856 @   22 : 13 04             LdaConstant [4]
         0x1eee1f0a6858 @   24 : c1                Star3 
 2256 E> 0x1eee1f0a6859 @   25 : 2d 03 05 04       GetNamedProperty a0, [5], [4]
         0x1eee1f0a685d @   29 : c0                Star4 
 2187 E> 0x1eee1f0a685e @   30 : 60 fa f9 04 06    CallUndefinedReceiver r0, r1-r4, [6]
 2262 S> 0x1eee1f0a6863 @   35 : a9                Return 
Constant pool (size = 6)
0x1eee1f0a6869: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 6
           0: 0x1eee1f0a5241 <String[16]: #threat_factory_1>
           1: 0x1eee1f0a68a9 <String[12]: #createThreat>
           2: 0x1eee1f0a5aa9 <String[18]: #pathfindingRawGrid>
           3: 0x1a28683c5c19 <String[8]: #position>
           4: 0x1eee1f0a68c9 <String[4]: #lazy>
           5: 0x1a28683c4381 <String[5]: #style>
Handler Table (size = 0)
Source Position Table (size = 22)
0x1eee1f0a68e1 <ByteArray[22]>
0x1eee1f0a6971 points to: [0x1eee1f0a69e0]
=== [0x1eee1f0a69e0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 2293 E> 0x1eee1f0a69e0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1eee1f0a69e3 @    3 : 1a f8             PushContext r2
         0x1eee1f0a69e5 @    5 : 10                LdaTheHole 
         0x1eee1f0a69e6 @    6 : 25 02             StaCurrentContextSlot [2]
 2323 S> 0x1eee1f0a69e8 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x1eee1f0a69eb @   11 : c1                Star3 
 2337 E> 0x1eee1f0a69ec @   12 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x1eee1f0a69f0 @   16 : c0                Star4 
         0x1eee1f0a69f1 @   17 : 0b f7             Ldar r3
 2323 E> 0x1eee1f0a69f3 @   19 : 69 f7 f6 01 04    Construct r3, r4-r4, [4]
 2323 E> 0x1eee1f0a69f8 @   24 : 25 02             StaCurrentContextSlot [2]
 2366 S> 0x1eee1f0a69fa @   26 : 0c                LdaZero 
         0x1eee1f0a69fb @   27 : c4                Star0 
 2377 S> 0x1eee1f0a69fc @   28 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
 2371 E> 0x1eee1f0a6a00 @   32 : 6d fa 06          TestLessThan r0, [6]
         0x1eee1f0a6a03 @   35 : 99 5c             JumpIfFalse [92] (0x1eee1f0a6a5f @ 127)
 2403 S> 0x1eee1f0a6a05 @   37 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a6a07 @   39 : c1                Star3 
 2418 E> 0x1eee1f0a6a08 @   40 : 21 01 00          LdaGlobal [1], [0]
         0x1eee1f0a6a0b @   43 : bf                Star5 
 2428 E> 0x1eee1f0a6a0c @   44 : 2d 03 03 07       GetNamedProperty a0, [3], [7]
         0x1eee1f0a6a10 @   48 : be                Star6 
         0x1eee1f0a6a11 @   49 : 0b f5             Ldar r5
 2414 E> 0x1eee1f0a6a13 @   51 : 69 f5 f4 01 09    Construct r5, r6-r6, [9]
 2412 E> 0x1eee1f0a6a18 @   56 : 34 f7 fa 0b       SetKeyedProperty r3, r0, [11]
 2462 S> 0x1eee1f0a6a1c @   60 : 0c                LdaZero 
         0x1eee1f0a6a1d @   61 : c3                Star1 
 2473 S> 0x1eee1f0a6a1e @   62 : 2d 03 03 07       GetNamedProperty a0, [3], [7]
 2467 E> 0x1eee1f0a6a22 @   66 : 6d f9 0d          TestLessThan r1, [13]
         0x1eee1f0a6a25 @   69 : 99 32             JumpIfFalse [50] (0x1eee1f0a6a57 @ 119)
 2504 S> 0x1eee1f0a6a27 @   71 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a6a29 @   73 : c1                Star3 
         0x1eee1f0a6a2a @   74 : 0b fa             Ldar r0
 2509 E> 0x1eee1f0a6a2c @   76 : 2f f7 0e          GetKeyedProperty r3, [14]
         0x1eee1f0a6a2f @   79 : c1                Star3 
 2513 E> 0x1eee1f0a6a30 @   80 : 7c 04 10 29       CreateObjectLiteral [4], [16], #41
         0x1eee1f0a6a34 @   84 : bf                Star5 
         0x1eee1f0a6a35 @   85 : 15 ff 07 02       LdaImmutableContextSlot <context>, [7], [2]
 2526 E> 0x1eee1f0a6a39 @   89 : aa 05             ThrowReferenceErrorIfHole [5]
         0x1eee1f0a6a3b @   91 : be                Star6 
 2542 E> 0x1eee1f0a6a3c @   92 : 2d f4 06 11       GetNamedProperty r6, [6], [17]
         0x1eee1f0a6a40 @   96 : be                Star6 
 2551 E> 0x1eee1f0a6a41 @   97 : 2d f4 07 13       GetNamedProperty r6, [7], [19]
         0x1eee1f0a6a45 @  101 : 33 f5 08 15       DefineNamedOwnProperty r5, [8], [21]
         0x1eee1f0a6a49 @  105 : 0b f5             Ldar r5
 2516 E> 0x1eee1f0a6a4b @  107 : 34 f7 f9 17       SetKeyedProperty r3, r1, [23]
 2482 S> 0x1eee1f0a6a4f @  111 : 0b f9             Ldar r1
         0x1eee1f0a6a51 @  113 : 51 19             Inc [25]
         0x1eee1f0a6a53 @  115 : c3                Star1 
 2449 E> 0x1eee1f0a6a54 @  116 : 89 36 01          JumpLoop [54], [1] (0x1eee1f0a6a1e @ 62)
 2385 S> 0x1eee1f0a6a57 @  119 : 0b fa             Ldar r0
         0x1eee1f0a6a59 @  121 : 51 1a             Inc [26]
         0x1eee1f0a6a5b @  123 : c4                Star0 
 2353 E> 0x1eee1f0a6a5c @  124 : 89 60 00          JumpLoop [96], [0] (0x1eee1f0a69fc @ 28)
 2596 S> 0x1eee1f0a6a5f @  127 : 2d 03 09 1b       GetNamedProperty a0, [9], [27]
         0x1eee1f0a6a63 @  131 : c0                Star4 
 2613 E> 0x1eee1f0a6a64 @  132 : 2d f6 0a 1d       GetNamedProperty r4, [10], [29]
         0x1eee1f0a6a68 @  136 : c1                Star3 
         0x1eee1f0a6a69 @  137 : 80 0b 00 02       CreateClosure [11], [0], #2
         0x1eee1f0a6a6d @  141 : bf                Star5 
 2613 E> 0x1eee1f0a6a6e @  142 : 5e f7 f6 f5 1f    CallProperty1 r3, r4, r5, [31]
 2730 S> 0x1eee1f0a6a73 @  147 : 17 02             LdaImmutableCurrentContextSlot [2]
 2743 S> 0x1eee1f0a6a75 @  149 : a9                Return 
Constant pool (size = 12)
0x1eee1f0a6a79: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 12
           0: 0x1eee1f0a6ae9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1a28683c4681 <String[5]: #Array>
           2: 0x1eee1f0a6b61 <String[5]: #width>
           3: 0x1eee1f0a6b79 <String[6]: #height>
           4: 0x1eee1f0a6b91 <ObjectBoilerplateDescription[3]>
           5: 0x1eee1f0a5281 <String[15]: #GameInterface_1>
           6: 0x1eee1f0a6421 <String[8]: #TileType>
           7: 0x1eee1f0a6bb9 <String[5]: #EMPTY>
           8: 0x1a28683c4469 <String[4]: #type>
           9: 0x1eee1f0a6bd1 <String[16]: #nonWalkableTiles>
          10: 0x30d2d7a4a021 <String[7]: #forEach>
          11: 0x1eee1f0a6c09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 77)
0x1eee1f0a6dc1 <ByteArray[77]>
Boilerplate at 0x1eee1f0a6b91: 
0x1eee1f0a6b91: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 3
           0: 8
           1: 0x1a28683c4469 <String[4]: #type>
           2: 0x1a28683c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1eee1f0a6c09 points to: [0x1eee1f0a6c78]
=== [0x1eee1f0a6c78] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2645 S> 0x1eee1f0a6c78 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a6c7a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1eee1f0a6c7c @    4 : c4                Star0 
 2656 E> 0x1eee1f0a6c7d @    5 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
 2650 E> 0x1eee1f0a6c81 @    9 : 2f fa 02          GetKeyedProperty r0, [2]
         0x1eee1f0a6c84 @   12 : c4                Star0 
 2664 E> 0x1eee1f0a6c85 @   13 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x1eee1f0a6c89 @   17 : c3                Star1 
         0x1eee1f0a6c8a @   18 : 7c 03 06 29       CreateObjectLiteral [3], [6], #41
         0x1eee1f0a6c8e @   22 : c2                Star2 
         0x1eee1f0a6c8f @   23 : 15 ff 07 02       LdaImmutableContextSlot <context>, [7], [2]
 2677 E> 0x1eee1f0a6c93 @   27 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1eee1f0a6c95 @   29 : c1                Star3 
 2693 E> 0x1eee1f0a6c96 @   30 : 2d f7 05 07       GetNamedProperty r3, [5], [7]
         0x1eee1f0a6c9a @   34 : c1                Star3 
 2702 E> 0x1eee1f0a6c9b @   35 : 2d f7 06 09       GetNamedProperty r3, [6], [9]
         0x1eee1f0a6c9f @   39 : 33 f8 07 0b       DefineNamedOwnProperty r2, [7], [11]
         0x1eee1f0a6ca3 @   43 : 0b f8             Ldar r2
 2667 E> 0x1eee1f0a6ca5 @   45 : 34 fa f9 0d       SetKeyedProperty r0, r1, [13]
         0x1eee1f0a6ca9 @   49 : 0e                LdaUndefined 
 2718 S> 0x1eee1f0a6caa @   50 : a9                Return 
Constant pool (size = 8)
0x1eee1f0a6cb1: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 8
           0: 0x1eee1f0a6b49 <String[5]: #tiles>
           1: 0x30d2d7a58ac9 <String[1]: #x>
           2: 0x30d2d7a58ae1 <String[1]: #y>
           3: 0x1eee1f0a6d01 <ObjectBoilerplateDescription[3]>
           4: 0x1eee1f0a5281 <String[15]: #GameInterface_1>
           5: 0x1eee1f0a6421 <String[8]: #TileType>
           6: 0x1eee1f0a6439 <String[4]: #WALL>
           7: 0x1a28683c4469 <String[4]: #type>
Handler Table (size = 0)
Source Position Table (size = 23)
0x1eee1f0a6d29 <ByteArray[23]>
Boilerplate at 0x1eee1f0a6d01: 
0x1eee1f0a6d01: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 3
           0: 8
           1: 0x1a28683c4469 <String[4]: #type>
           2: 0x1a28683c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1eee1f0a6e49 points to: [0x1eee1f0a6eb8]
=== [0x1eee1f0a6eb8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2760 E> 0x1eee1f0a6eb8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1eee1f0a6ebb @    3 : 1a fa             PushContext r0
         0x1eee1f0a6ebd @    5 : 0b 02             Ldar <this>
         0x1eee1f0a6ebf @    7 : 25 02             StaCurrentContextSlot [2]
 2773 S> 0x1eee1f0a6ec1 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a6ec3 @   11 : c2                Star2 
 2778 E> 0x1eee1f0a6ec4 @   12 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x1eee1f0a6ec8 @   16 : c2                Star2 
 2788 E> 0x1eee1f0a6ec9 @   17 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x1eee1f0a6ecd @   21 : c3                Star1 
 2788 E> 0x1eee1f0a6ece @   22 : 5d f9 f8 04       CallProperty0 r1, r2, [4]
 2806 S> 0x1eee1f0a6ed2 @   26 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a6ed4 @   28 : c2                Star2 
 2811 E> 0x1eee1f0a6ed5 @   29 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
         0x1eee1f0a6ed9 @   33 : c2                Star2 
 2819 E> 0x1eee1f0a6eda @   34 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x1eee1f0a6ede @   38 : c3                Star1 
         0x1eee1f0a6edf @   39 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1eee1f0a6ee3 @   43 : c1                Star3 
 2819 E> 0x1eee1f0a6ee4 @   44 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
 2993 S> 0x1eee1f0a6ee9 @   49 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a6eeb @   51 : c3                Star1 
         0x1eee1f0a6eec @   52 : 2d f9 06 0c       GetNamedProperty r1, [6], [12]
         0x1eee1f0a6ef0 @   56 : 51 0e             Inc [14]
 3009 E> 0x1eee1f0a6ef2 @   58 : 32 f9 06 0f       SetNamedProperty r1, [6], [15]
         0x1eee1f0a6ef6 @   62 : 0e                LdaUndefined 
 3058 S> 0x1eee1f0a6ef7 @   63 : a9                Return 
Constant pool (size = 7)
0x1eee1f0a6ef9: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 7
           0: 0x1eee1f0a6f41 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1a28683c4939 <String[9]: #character>
           2: 0x30d2d7a43f01 <String[6]: #update>
           3: 0x1eee1f0a5b59 <String[7]: #threats>
           4: 0x30d2d7a4a021 <String[7]: #forEach>
           5: 0x1eee1f0a6fa1 <SharedFunctionInfo>
           6: 0x1eee1f0a5b39 <String[11]: #tickCounter>
Handler Table (size = 0)
Source Position Table (size = 29)
0x1eee1f0a7159 <ByteArray[29]>
0x1eee1f0a6fa1 points to: [0x1eee1f0a7010]
=== [0x1eee1f0a7010] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2860 S> 0x1eee1f0a7010 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a7014 @    4 : c4                Star0 
         0x1eee1f0a7015 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a7017 @    7 : c1                Star3 
 2872 E> 0x1eee1f0a7018 @    8 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x1eee1f0a701c @   12 : c2                Star2 
 2872 E> 0x1eee1f0a701d @   13 : 5d f8 f7 04       CallProperty0 r2, r3, [4]
         0x1eee1f0a7021 @   17 : c2                Star2 
 2860 E> 0x1eee1f0a7022 @   18 : 5e fa 03 f8 06    CallProperty1 r0, a0, r2, [6]
 2914 S> 0x1eee1f0a7027 @   23 : 2d 03 02 08       GetNamedProperty a0, [2], [8]
         0x1eee1f0a702b @   27 : c4                Star0 
         0x1eee1f0a702c @   28 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a702e @   30 : c1                Star3 
 2940 E> 0x1eee1f0a702f @   31 : 2d f7 03 0a       GetNamedProperty r3, [3], [10]
         0x1eee1f0a7033 @   35 : c1                Star3 
 2950 E> 0x1eee1f0a7034 @   36 : 2d f7 04 0c       GetNamedProperty r3, [4], [12]
         0x1eee1f0a7038 @   40 : c1                Star3 
 2959 E> 0x1eee1f0a7039 @   41 : 2d f7 05 0e       GetNamedProperty r3, [5], [14]
         0x1eee1f0a703d @   45 : c2                Star2 
 2959 E> 0x1eee1f0a703e @   46 : 5d f8 f7 10       CallProperty0 r2, r3, [16]
         0x1eee1f0a7042 @   50 : c2                Star2 
 2914 E> 0x1eee1f0a7043 @   51 : 5e fa 03 f8 12    CallProperty1 r0, a0, r2, [18]
         0x1eee1f0a7048 @   56 : 0e                LdaUndefined 
 2981 S> 0x1eee1f0a7049 @   57 : a9                Return 
Constant pool (size = 6)
0x1eee1f0a7051: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 6
           0: 0x30d2d7a43f01 <String[6]: #update>
           1: 0x1eee1f0a5739 <String[18]: #serializeForThreat>
           2: 0x1eee1f0a7091 <String[20]: #setCharacterPosition>
           3: 0x1a28683c4939 <String[9]: #character>
           4: 0x1a28683c5c19 <String[8]: #position>
           5: 0x30d2d7a501a9 <String[9]: #serialize>
Handler Table (size = 0)
Source Position Table (size = 29)
0x1eee1f0a70b9 <ByteArray[29]>
0x1eee1f0a71a9 points to: [0x1eee1f0a7218]
=== [0x1eee1f0a7218] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 3117 S> 0x1eee1f0a7218 @    0 : 2d 04 00 00       GetNamedProperty a1, [0], [0]
         0x1eee1f0a721c @    4 : c4                Star0 
         0x1eee1f0a721d @    5 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3142 E> 0x1eee1f0a7221 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1eee1f0a7223 @   11 : c3                Star1 
 3157 E> 0x1eee1f0a7224 @   12 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1eee1f0a7228 @   16 : c3                Star1 
 3168 E> 0x1eee1f0a7229 @   17 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x1eee1f0a722d @   21 : 6c fa 02          TestEqualStrict r0, [2]
         0x1eee1f0a7230 @   24 : 98 58             JumpIfTrue [88] (0x1eee1f0a7288 @ 112)
         0x1eee1f0a7232 @   26 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3283 E> 0x1eee1f0a7236 @   30 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1eee1f0a7238 @   32 : c3                Star1 
 3298 E> 0x1eee1f0a7239 @   33 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1eee1f0a723d @   37 : c3                Star1 
 3309 E> 0x1eee1f0a723e @   38 : 2d f9 04 07       GetNamedProperty r1, [4], [7]
         0x1eee1f0a7242 @   42 : 6c fa 02          TestEqualStrict r0, [2]
         0x1eee1f0a7245 @   45 : 98 68             JumpIfTrue [104] (0x1eee1f0a72ad @ 149)
         0x1eee1f0a7247 @   47 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3424 E> 0x1eee1f0a724b @   51 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1eee1f0a724d @   53 : c3                Star1 
 3439 E> 0x1eee1f0a724e @   54 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1eee1f0a7252 @   58 : c3                Star1 
 3450 E> 0x1eee1f0a7253 @   59 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x1eee1f0a7257 @   63 : 6c fa 02          TestEqualStrict r0, [2]
         0x1eee1f0a725a @   66 : 98 78             JumpIfTrue [120] (0x1eee1f0a72d2 @ 186)
         0x1eee1f0a725c @   68 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3563 E> 0x1eee1f0a7260 @   72 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1eee1f0a7262 @   74 : c3                Star1 
 3578 E> 0x1eee1f0a7263 @   75 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1eee1f0a7267 @   79 : c3                Star1 
 3589 E> 0x1eee1f0a7268 @   80 : 2d f9 06 0b       GetNamedProperty r1, [6], [11]
         0x1eee1f0a726c @   84 : 6c fa 02          TestEqualStrict r0, [2]
         0x1eee1f0a726f @   87 : 98 88             JumpIfTrue [136] (0x1eee1f0a72f7 @ 223)
         0x1eee1f0a7271 @   89 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3703 E> 0x1eee1f0a7275 @   93 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1eee1f0a7277 @   95 : c3                Star1 
 3718 E> 0x1eee1f0a7278 @   96 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1eee1f0a727c @  100 : c3                Star1 
 3729 E> 0x1eee1f0a727d @  101 : 2d f9 07 0d       GetNamedProperty r1, [7], [13]
         0x1eee1f0a7281 @  105 : 6c fa 02          TestEqualStrict r0, [2]
         0x1eee1f0a7284 @  108 : 98 98             JumpIfTrue [152] (0x1eee1f0a731c @ 260)
         0x1eee1f0a7286 @  110 : 8a a7             Jump [167] (0x1eee1f0a732d @ 277)
 3200 S> 0x1eee1f0a7288 @  112 : 2d 02 08 0f       GetNamedProperty <this>, [8], [15]
         0x1eee1f0a728c @  116 : c3                Star1 
         0x1eee1f0a728d @  117 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 3218 E> 0x1eee1f0a7291 @  121 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1eee1f0a7293 @  123 : c1                Star3 
 3227 E> 0x1eee1f0a7294 @  124 : 2d f7 0a 11       GetNamedProperty r3, [10], [17]
         0x1eee1f0a7298 @  128 : c1                Star3 
         0x1eee1f0a7299 @  129 : 0d ff             LdaSmi [-1]
         0x1eee1f0a729b @  131 : c0                Star4 
         0x1eee1f0a729c @  132 : 0c                LdaZero 
         0x1eee1f0a729d @  133 : bf                Star5 
         0x1eee1f0a729e @  134 : 0b f7             Ldar r3
 3214 E> 0x1eee1f0a72a0 @  136 : 69 f7 f6 02 13    Construct r3, r4-r5, [19]
         0x1eee1f0a72a5 @  141 : c1                Star3 
 3200 E> 0x1eee1f0a72a6 @  142 : 5e f9 02 f7 15    CallProperty1 r1, <this>, r3, [21]
 3259 S> 0x1eee1f0a72ab @  147 : 8a 82             Jump [130] (0x1eee1f0a732d @ 277)
 3342 S> 0x1eee1f0a72ad @  149 : 2d 02 08 17       GetNamedProperty <this>, [8], [23]
         0x1eee1f0a72b1 @  153 : c3                Star1 
         0x1eee1f0a72b2 @  154 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 3360 E> 0x1eee1f0a72b6 @  158 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1eee1f0a72b8 @  160 : c1                Star3 
 3369 E> 0x1eee1f0a72b9 @  161 : 2d f7 0a 11       GetNamedProperty r3, [10], [17]
         0x1eee1f0a72bd @  165 : c1                Star3 
         0x1eee1f0a72be @  166 : 0d 01             LdaSmi [1]
         0x1eee1f0a72c0 @  168 : c0                Star4 
         0x1eee1f0a72c1 @  169 : 0c                LdaZero 
         0x1eee1f0a72c2 @  170 : bf                Star5 
         0x1eee1f0a72c3 @  171 : 0b f7             Ldar r3
 3356 E> 0x1eee1f0a72c5 @  173 : 69 f7 f6 02 19    Construct r3, r4-r5, [25]
         0x1eee1f0a72ca @  178 : c1                Star3 
 3342 E> 0x1eee1f0a72cb @  179 : 5e f9 02 f7 1b    CallProperty1 r1, <this>, r3, [27]
 3400 S> 0x1eee1f0a72d0 @  184 : 8a 5d             Jump [93] (0x1eee1f0a732d @ 277)
 3480 S> 0x1eee1f0a72d2 @  186 : 2d 02 08 1d       GetNamedProperty <this>, [8], [29]
         0x1eee1f0a72d6 @  190 : c3                Star1 
         0x1eee1f0a72d7 @  191 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 3498 E> 0x1eee1f0a72db @  195 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1eee1f0a72dd @  197 : c1                Star3 
 3507 E> 0x1eee1f0a72de @  198 : 2d f7 0a 11       GetNamedProperty r3, [10], [17]
         0x1eee1f0a72e2 @  202 : c1                Star3 
         0x1eee1f0a72e3 @  203 : 0c                LdaZero 
         0x1eee1f0a72e4 @  204 : c0                Star4 
         0x1eee1f0a72e5 @  205 : 0d ff             LdaSmi [-1]
         0x1eee1f0a72e7 @  207 : bf                Star5 
         0x1eee1f0a72e8 @  208 : 0b f7             Ldar r3
 3494 E> 0x1eee1f0a72ea @  210 : 69 f7 f6 02 1f    Construct r3, r4-r5, [31]
         0x1eee1f0a72ef @  215 : c1                Star3 
 3480 E> 0x1eee1f0a72f0 @  216 : 5e f9 02 f7 21    CallProperty1 r1, <this>, r3, [33]
 3539 S> 0x1eee1f0a72f5 @  221 : 8a 38             Jump [56] (0x1eee1f0a732d @ 277)
 3621 S> 0x1eee1f0a72f7 @  223 : 2d 02 08 23       GetNamedProperty <this>, [8], [35]
         0x1eee1f0a72fb @  227 : c3                Star1 
         0x1eee1f0a72fc @  228 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 3639 E> 0x1eee1f0a7300 @  232 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1eee1f0a7302 @  234 : c1                Star3 
 3648 E> 0x1eee1f0a7303 @  235 : 2d f7 0a 11       GetNamedProperty r3, [10], [17]
         0x1eee1f0a7307 @  239 : c1                Star3 
         0x1eee1f0a7308 @  240 : 0c                LdaZero 
         0x1eee1f0a7309 @  241 : c0                Star4 
         0x1eee1f0a730a @  242 : 0d 01             LdaSmi [1]
         0x1eee1f0a730c @  244 : bf                Star5 
         0x1eee1f0a730d @  245 : 0b f7             Ldar r3
 3635 E> 0x1eee1f0a730f @  247 : 69 f7 f6 02 25    Construct r3, r4-r5, [37]
         0x1eee1f0a7314 @  252 : c1                Star3 
 3621 E> 0x1eee1f0a7315 @  253 : 5e f9 02 f7 27    CallProperty1 r1, <this>, r3, [39]
 3679 S> 0x1eee1f0a731a @  258 : 8a 13             Jump [19] (0x1eee1f0a732d @ 277)
 3759 S> 0x1eee1f0a731c @  260 : 2d 02 0b 29       GetNamedProperty <this>, [11], [41]
         0x1eee1f0a7320 @  264 : c3                Star1 
 3789 E> 0x1eee1f0a7321 @  265 : 2d 04 0c 2b       GetNamedProperty a1, [12], [43]
         0x1eee1f0a7325 @  269 : c1                Star3 
 3759 E> 0x1eee1f0a7326 @  270 : 5e f9 02 f7 2d    CallProperty1 r1, <this>, r3, [45]
 3816 S> 0x1eee1f0a732b @  275 : 8a 02             Jump [2] (0x1eee1f0a732d @ 277)
         0x1eee1f0a732d @  277 : 0e                LdaUndefined 
 3837 S> 0x1eee1f0a732e @  278 : a9                Return 
Constant pool (size = 13)
0x1eee1f0a7331: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 13
           0: 0x1a28683c4469 <String[4]: #type>
           1: 0x1eee1f0a51e9 <String[14]: #action_types_1>
           2: 0x1eee1f0a73a9 <String[10]: #ActionType>
           3: 0x1eee1f0a73c9 <String[9]: #MOVE_LEFT>
           4: 0x1eee1f0a73e9 <String[10]: #MOVE_RIGHT>
           5: 0x1eee1f0a7409 <String[7]: #MOVE_UP>
           6: 0x1eee1f0a7421 <String[9]: #MOVE_DOWN>
           7: 0x1eee1f0a7441 <String[7]: #MOVE_TO>
           8: 0x1eee1f0a56c9 <String[13]: #moveCharacter>
           9: 0x1eee1f0a5229 <String[8]: #vector_1>
          10: 0x1eee1f0a7459 <String[6]: #Vector>
          11: 0x1eee1f0a56a1 <String[22]: #moveCharacterAlongPath>
          12: 0x1a28683c5c19 <String[8]: #position>
Handler Table (size = 0)
Source Position Table (size = 108)
0x1eee1f0a7471 <ByteArray[108]>
0x1eee1f0a7571 points to: [0x1eee1f0a75e0]
=== [0x1eee1f0a75e0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 3893 S> 0x1eee1f0a75e0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1eee1f0a75e4 @    4 : 1d                TestUndetectable 
         0x1eee1f0a75e5 @    5 : 99 15             JumpIfFalse [21] (0x1eee1f0a75fa @ 26)
 3926 S> 0x1eee1f0a75e7 @    7 : 21 01 02          LdaGlobal [1], [2]
         0x1eee1f0a75ea @   10 : c1                Star3 
 3934 E> 0x1eee1f0a75eb @   11 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x1eee1f0a75ef @   15 : c2                Star2 
         0x1eee1f0a75f0 @   16 : 13 03             LdaConstant [3]
         0x1eee1f0a75f2 @   18 : c0                Star4 
 3934 E> 0x1eee1f0a75f3 @   19 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
 3967 S> 0x1eee1f0a75f8 @   24 : 0e                LdaUndefined 
 3974 S> 0x1eee1f0a75f9 @   25 : a9                Return 
 4026 S> 0x1eee1f0a75fa @   26 : 2d 02 04 08       GetNamedProperty <this>, [4], [8]
         0x1eee1f0a75fe @   30 : c1                Star3 
 4042 E> 0x1eee1f0a75ff @   31 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x1eee1f0a7603 @   35 : c2                Star2 
 4055 E> 0x1eee1f0a7604 @   36 : 2d 02 00 0c       GetNamedProperty <this>, [0], [12]
         0x1eee1f0a7608 @   40 : c0                Star4 
 4065 E> 0x1eee1f0a7609 @   41 : 2d f6 06 0e       GetNamedProperty r4, [6], [14]
         0x1eee1f0a760d @   45 : c0                Star4 
 4042 E> 0x1eee1f0a760e @   46 : 5f f8 f7 f6 03 10 CallProperty2 r2, r3, r4, a0, [16]
         0x1eee1f0a7614 @   52 : c4                Star0 
 4092 S> 0x1eee1f0a7615 @   53 : 9a 0d             JumpIfNull [13] (0x1eee1f0a7622 @ 66)
 4118 E> 0x1eee1f0a7617 @   55 : 2d fa 07 12       GetNamedProperty r0, [7], [18]
         0x1eee1f0a761b @   59 : c2                Star2 
         0x1eee1f0a761c @   60 : 0c                LdaZero 
 4125 E> 0x1eee1f0a761d @   61 : 6c f8 14          TestEqualStrict r2, [20]
         0x1eee1f0a7620 @   64 : 99 22             JumpIfFalse [34] (0x1eee1f0a7642 @ 98)
 4146 S> 0x1eee1f0a7622 @   66 : 21 01 02          LdaGlobal [1], [2]
         0x1eee1f0a7625 @   69 : c1                Star3 
 4154 E> 0x1eee1f0a7626 @   70 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x1eee1f0a762a @   74 : c2                Star2 
         0x1eee1f0a762b @   75 : 13 08             LdaConstant [8]
         0x1eee1f0a762d @   77 : c0                Star4 
 4154 E> 0x1eee1f0a762e @   78 : 5e f8 f7 f6 15    CallProperty1 r2, r3, r4, [21]
 4188 S> 0x1eee1f0a7633 @   83 : 21 09 17          LdaGlobal [9], [23]
         0x1eee1f0a7636 @   86 : c2                Star2 
         0x1eee1f0a7637 @   87 : 13 08             LdaConstant [8]
         0x1eee1f0a7639 @   89 : c1                Star3 
         0x1eee1f0a763a @   90 : 0b f8             Ldar r2
 4194 E> 0x1eee1f0a763c @   92 : 69 f8 f7 01 19    Construct r2, r3-r3, [25]
 4188 E> 0x1eee1f0a7641 @   97 : a7                Throw 
 4261 S> 0x1eee1f0a7642 @   98 : 0d 01             LdaSmi [1]
 4265 E> 0x1eee1f0a7644 @  100 : 2f fa 1b          GetKeyedProperty r0, [27]
         0x1eee1f0a7647 @  103 : c3                Star1 
 4283 S> 0x1eee1f0a7648 @  104 : 2d 02 0a 1d       GetNamedProperty <this>, [10], [29]
         0x1eee1f0a764c @  108 : c2                Star2 
 4310 E> 0x1eee1f0a764d @  109 : 2d f9 0b 1f       GetNamedProperty r1, [11], [31]
         0x1eee1f0a7651 @  113 : c0                Star4 
 4324 E> 0x1eee1f0a7652 @  114 : 2d 02 00 21       GetNamedProperty <this>, [0], [33]
         0x1eee1f0a7656 @  118 : be                Star6 
 4334 E> 0x1eee1f0a7657 @  119 : 2d f4 06 23       GetNamedProperty r6, [6], [35]
         0x1eee1f0a765b @  123 : be                Star6 
 4310 E> 0x1eee1f0a765c @  124 : 5e f6 f9 f4 25    CallProperty1 r4, r1, r6, [37]
         0x1eee1f0a7661 @  129 : c0                Star4 
 4283 E> 0x1eee1f0a7662 @  130 : 5e f8 02 f6 27    CallProperty1 r2, <this>, r4, [39]
         0x1eee1f0a7667 @  135 : 0e                LdaUndefined 
 4350 S> 0x1eee1f0a7668 @  136 : a9                Return 
Constant pool (size = 12)
0x1eee1f0a7671: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 12
           0: 0x1a28683c4939 <String[9]: #character>
           1: 0x1a28683c4a09 <String[7]: #console>
           2: 0x30d2d7a4ac99 <String[3]: #log>
           3: 0x1eee1f0a76f9 <String[12]: #no character>
           4: 0x1eee1f0a7719 <String[15]: #pathfindingGrid>
           5: 0x1eee1f0a7739 <String[7]: #getPath>
           6: 0x1a28683c5c19 <String[8]: #position>
           7: 0x1a28683c55f9 <String[6]: #length>
           8: 0x1eee1f0a7751 <String[13]: #No path found>
           9: 0x1a28683c4de1 <String[5]: #Error>
          10: 0x1eee1f0a56c9 <String[13]: #moveCharacter>
          11: 0x1eee1f0a7771 <String[8]: #subtract>
Handler Table (size = 0)
Source Position Table (size = 68)
0x1eee1f0a7789 <ByteArray[68]>
0x1eee1f0a7861 points to: [0x1eee1f0a78d0]
=== [0x1eee1f0a78d0] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4369 E> 0x1eee1f0a78d0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1eee1f0a78d3 @    3 : 1a fa             PushContext r0
         0x1eee1f0a78d5 @    5 : 10                LdaTheHole 
         0x1eee1f0a78d6 @    6 : 25 02             StaCurrentContextSlot [2]
 4400 S> 0x1eee1f0a78d8 @    8 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x1eee1f0a78dc @   12 : 1d                TestUndetectable 
         0x1eee1f0a78dd @   13 : 99 04             JumpIfFalse [4] (0x1eee1f0a78e1 @ 17)
 4433 S> 0x1eee1f0a78df @   15 : 0e                LdaUndefined 
 4440 S> 0x1eee1f0a78e0 @   16 : a9                Return 
 4525 S> 0x1eee1f0a78e1 @   17 : 2d 02 01 02       GetNamedProperty <this>, [1], [2]
         0x1eee1f0a78e5 @   21 : c2                Star2 
 4535 E> 0x1eee1f0a78e6 @   22 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x1eee1f0a78ea @   26 : c2                Star2 
 4544 E> 0x1eee1f0a78eb @   27 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
         0x1eee1f0a78ef @   31 : c3                Star1 
 4544 E> 0x1eee1f0a78f0 @   32 : 5e f9 f8 03 08    CallProperty1 r1, r2, a0, [8]
 4520 E> 0x1eee1f0a78f5 @   37 : 25 02             StaCurrentContextSlot [2]
 4578 S> 0x1eee1f0a78f7 @   39 : 2d 02 04 0a       GetNamedProperty <this>, [4], [10]
         0x1eee1f0a78fb @   43 : c2                Star2 
 4582 E> 0x1eee1f0a78fc @   44 : 2d f8 05 0c       GetNamedProperty r2, [5], [12]
         0x1eee1f0a7900 @   48 : c2                Star2 
 4596 E> 0x1eee1f0a7901 @   49 : 2d f8 06 0e       GetNamedProperty r2, [6], [14]
         0x1eee1f0a7905 @   53 : c3                Star1 
         0x1eee1f0a7906 @   54 : 80 07 00 02       CreateClosure [7], [0], #2
         0x1eee1f0a790a @   58 : c1                Star3 
 4596 E> 0x1eee1f0a790b @   59 : 5e f9 f8 f7 10    CallProperty1 r1, r2, r3, [16]
         0x1eee1f0a7910 @   64 : 96 04             JumpIfToBooleanTrue [4] (0x1eee1f0a7914 @ 68)
 4652 S> 0x1eee1f0a7912 @   66 : 0e                LdaUndefined 
 4659 S> 0x1eee1f0a7913 @   67 : a9                Return 
 4724 S> 0x1eee1f0a7914 @   68 : 2d 02 01 12       GetNamedProperty <this>, [1], [18]
         0x1eee1f0a7918 @   72 : c2                Star2 
 4734 E> 0x1eee1f0a7919 @   73 : 2d f8 08 14       GetNamedProperty r2, [8], [20]
         0x1eee1f0a791d @   77 : c3                Star1 
         0x1eee1f0a791e @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1eee1f0a7920 @   80 : c1                Star3 
 4734 E> 0x1eee1f0a7921 @   81 : 5f f9 f8 f7 03 16 CallProperty2 r1, r2, r3, a0, [22]
         0x1eee1f0a7927 @   87 : 0e                LdaUndefined 
 4768 S> 0x1eee1f0a7928 @   88 : a9                Return 
Constant pool (size = 9)
0x1eee1f0a7931: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 9
           0: 0x1eee1f0a7989 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1a28683c4939 <String[9]: #character>
           2: 0x1a28683c5c19 <String[8]: #position>
           3: 0x1a28683c4569 <String[3]: #add>
           4: 0x30d2d7a49ea9 <String[3]: #map>
           5: 0x1eee1f0a7a09 <String[13]: #walkableTiles>
           6: 0x30d2d7a49f49 <String[4]: #some>
           7: 0x1eee1f0a7a41 <SharedFunctionInfo>
           8: 0x1eee1f0a7b81 <String[4]: #move>
Handler Table (size = 0)
Source Position Table (size = 48)
0x1eee1f0a7b99 <ByteArray[48]>
0x1eee1f0a7a41 points to: [0x1eee1f0a7ab0]
=== [0x1eee1f0a7ab0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 4616 S> 0x1eee1f0a7ab0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a7ab4 @    4 : c4                Star0 
         0x1eee1f0a7ab5 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4623 E> 0x1eee1f0a7ab7 @    7 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1eee1f0a7ab9 @    9 : c2                Star2 
 4616 E> 0x1eee1f0a7aba @   10 : 5e fa 03 f8 02    CallProperty1 r0, a0, r2, [2]
 4635 S> 0x1eee1f0a7abf @   15 : a9                Return 
Constant pool (size = 2)
0x1eee1f0a7ac1: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 2
           0: 0x30d2d7a47411 <String[6]: #equals>
           1: 0x1eee1f0a79e9 <String[11]: #newPosition>
Handler Table (size = 0)
Source Position Table (size = 12)
0x1eee1f0a7af9 <ByteArray[12]>
0x1eee1f0a7bf9 points to: [0x1eee1f0a7c68]
=== [0x1eee1f0a7c68] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4834 S> 0x1eee1f0a7c68 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1eee1f0a7c6c @    4 : c3                Star1 
 4834 E> 0x1eee1f0a7c6d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1eee1f0a7c71 @    9 : c3                Star1 
         0x1eee1f0a7c72 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1eee1f0a7c76 @   14 : c4                Star0 
 4879 E> 0x1eee1f0a7c77 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1eee1f0a7c7b @   19 : c2                Star2 
 4887 E> 0x1eee1f0a7c7c @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x1eee1f0a7c80 @   24 : c3                Star1 
         0x1eee1f0a7c81 @   25 : 80 03 00 02       CreateClosure [3], [0], #2
         0x1eee1f0a7c85 @   29 : c1                Star3 
 4887 E> 0x1eee1f0a7c86 @   30 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
         0x1eee1f0a7c8b @   35 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 4961 E> 0x1eee1f0a7c8f @   39 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x1eee1f0a7c93 @   43 : c2                Star2 
 4971 E> 0x1eee1f0a7c94 @   44 : 2d f8 05 10       GetNamedProperty r2, [5], [16]
         0x1eee1f0a7c98 @   48 : c3                Star1 
 4971 E> 0x1eee1f0a7c99 @   49 : 5d f9 f8 12       CallProperty0 r1, r2, [18]
         0x1eee1f0a7c9d @   53 : 33 fa 04 14       DefineNamedOwnProperty r0, [4], [20]
         0x1eee1f0a7ca1 @   57 : 0b fa             Ldar r0
 5003 S> 0x1eee1f0a7ca3 @   59 : a9                Return 
Constant pool (size = 6)
0x1eee1f0a7ca9: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 6
           0: 0x1eee1f0a5761 <String[15]: #serializeCommon>
           1: 0x1eee1f0a5b59 <String[7]: #threats>
           2: 0x30d2d7a49ea9 <String[3]: #map>
           3: 0x1eee1f0a7ce9 <SharedFunctionInfo>
           4: 0x1a28683c4939 <String[9]: #character>
           5: 0x1eee1f0a56e9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 26)
0x1eee1f0a7e09 <ByteArray[26]>
0x1eee1f0a7ce9 points to: [0x1eee1f0a7d58]
=== [0x1eee1f0a7d58] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 4910 S> 0x1eee1f0a7d58 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a7d5c @    4 : c4                Star0 
 4910 E> 0x1eee1f0a7d5d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 4930 S> 0x1eee1f0a7d61 @    9 : a9                Return 
Constant pool (size = 1)
0x1eee1f0a7d69: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 1
           0: 0x1eee1f0a56e9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1eee1f0a7d81 <ByteArray[10]>
0x1eee1f0a7ea9 points to: [0x1eee1f0a7f18]
=== [0x1eee1f0a7f18] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5074 S> 0x1eee1f0a7f18 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1eee1f0a7f1c @    4 : c3                Star1 
 5074 E> 0x1eee1f0a7f1d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1eee1f0a7f21 @    9 : c3                Star1 
         0x1eee1f0a7f22 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1eee1f0a7f26 @   14 : c4                Star0 
 5119 E> 0x1eee1f0a7f27 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1eee1f0a7f2b @   19 : c2                Star2 
 5127 E> 0x1eee1f0a7f2c @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x1eee1f0a7f30 @   24 : c3                Star1 
         0x1eee1f0a7f31 @   25 : 80 03 00 02       CreateClosure [3], [0], #2
         0x1eee1f0a7f35 @   29 : c1                Star3 
 5127 E> 0x1eee1f0a7f36 @   30 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
         0x1eee1f0a7f3b @   35 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5226 E> 0x1eee1f0a7f3f @   39 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x1eee1f0a7f43 @   43 : c1                Star3 
 5236 E> 0x1eee1f0a7f44 @   44 : 2d f7 05 10       GetNamedProperty r3, [5], [16]
         0x1eee1f0a7f48 @   48 : c2                Star2 
 5236 E> 0x1eee1f0a7f49 @   49 : 5d f8 f7 12       CallProperty0 r2, r3, [18]
         0x1eee1f0a7f4d @   53 : c2                Star2 
         0x1eee1f0a7f4e @   54 : 7e f8 29 14       CloneObject r2, #41, [20]
         0x1eee1f0a7f52 @   58 : c3                Star1 
 5290 E> 0x1eee1f0a7f53 @   59 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x1eee1f0a7f57 @   63 : c1                Star3 
 5306 E> 0x1eee1f0a7f58 @   64 : 2d f7 07 18       GetNamedProperty r3, [7], [24]
         0x1eee1f0a7f5c @   68 : c2                Star2 
 5324 E> 0x1eee1f0a7f5d @   69 : 2d 02 04 1a       GetNamedProperty <this>, [4], [26]
         0x1eee1f0a7f61 @   73 : c0                Star4 
 5334 E> 0x1eee1f0a7f62 @   74 : 2d f6 08 1c       GetNamedProperty r4, [8], [28]
         0x1eee1f0a7f66 @   78 : c0                Star4 
 5306 E> 0x1eee1f0a7f67 @   79 : 5e f8 f7 f6 1e    CallProperty1 r2, r3, r4, [30]
         0x1eee1f0a7f6c @   84 : 33 f9 09 20       DefineNamedOwnProperty r1, [9], [32]
         0x1eee1f0a7f70 @   88 : 0b f9             Ldar r1
         0x1eee1f0a7f72 @   90 : 33 fa 0a 22       DefineNamedOwnProperty r0, [10], [34]
         0x1eee1f0a7f76 @   94 : 0b fa             Ldar r0
 5370 S> 0x1eee1f0a7f78 @   96 : a9                Return 
Constant pool (size = 11)
0x1eee1f0a7f81: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 11
           0: 0x1eee1f0a5761 <String[15]: #serializeCommon>
           1: 0x1eee1f0a5b59 <String[7]: #threats>
           2: 0x30d2d7a49ea9 <String[3]: #map>
           3: 0x1eee1f0a7fe9 <SharedFunctionInfo>
           4: 0x1a28683c4939 <String[9]: #character>
           5: 0x1eee1f0a5711 <String[18]: #serializeForPlayer>
           6: 0x1eee1f0a7719 <String[15]: #pathfindingGrid>
           7: 0x1eee1f0a8109 <String[12]: #getDistances>
           8: 0x1a28683c5c19 <String[8]: #position>
           9: 0x1eee1f0a8129 <String[9]: #distances>
          10: 0x1eee1f0a8149 <String[13]: #yourCharacter>
Handler Table (size = 0)
Source Position Table (size = 37)
0x1eee1f0a8169 <ByteArray[37]>
0x1eee1f0a7fe9 points to: [0x1eee1f0a8058]
=== [0x1eee1f0a8058] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5150 S> 0x1eee1f0a8058 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a805c @    4 : c4                Star0 
 5150 E> 0x1eee1f0a805d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5170 S> 0x1eee1f0a8061 @    9 : a9                Return 
Constant pool (size = 1)
0x1eee1f0a8069: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 1
           0: 0x1eee1f0a5711 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1eee1f0a8081 <ByteArray[10]>
0x1eee1f0a8219 points to: [0x1eee1f0a8288]
=== [0x1eee1f0a8288] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5441 S> 0x1eee1f0a8288 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1eee1f0a828c @    4 : c3                Star1 
 5441 E> 0x1eee1f0a828d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1eee1f0a8291 @    9 : c3                Star1 
         0x1eee1f0a8292 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1eee1f0a8296 @   14 : c4                Star0 
 5483 E> 0x1eee1f0a8297 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1eee1f0a829b @   19 : 33 fa 02 08       DefineNamedOwnProperty r0, [2], [8]
 5522 E> 0x1eee1f0a829f @   23 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x1eee1f0a82a3 @   27 : c2                Star2 
 5530 E> 0x1eee1f0a82a4 @   28 : 2d f8 04 0c       GetNamedProperty r2, [4], [12]
         0x1eee1f0a82a8 @   32 : c3                Star1 
         0x1eee1f0a82a9 @   33 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1eee1f0a82ad @   37 : c1                Star3 
 5530 E> 0x1eee1f0a82ae @   38 : 5e f9 f8 f7 0e    CallProperty1 r1, r2, r3, [14]
         0x1eee1f0a82b3 @   43 : 33 fa 03 10       DefineNamedOwnProperty r0, [3], [16]
 5604 E> 0x1eee1f0a82b7 @   47 : 2d 02 06 12       GetNamedProperty <this>, [6], [18]
         0x1eee1f0a82bb @   51 : c2                Star2 
 5614 E> 0x1eee1f0a82bc @   52 : 2d f8 07 14       GetNamedProperty r2, [7], [20]
         0x1eee1f0a82c0 @   56 : c3                Star1 
 5614 E> 0x1eee1f0a82c1 @   57 : 5d f9 f8 16       CallProperty0 r1, r2, [22]
         0x1eee1f0a82c5 @   61 : 33 fa 06 18       DefineNamedOwnProperty r0, [6], [24]
 5670 E> 0x1eee1f0a82c9 @   65 : 2d 02 08 1a       GetNamedProperty <this>, [8], [26]
         0x1eee1f0a82cd @   69 : 33 fa 08 1c       DefineNamedOwnProperty r0, [8], [28]
         0x1eee1f0a82d1 @   73 : 0b fa             Ldar r0
 5697 S> 0x1eee1f0a82d3 @   75 : a9                Return 
Constant pool (size = 9)
0x1eee1f0a82d9: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 9
           0: 0x1eee1f0a5761 <String[15]: #serializeCommon>
           1: 0x1eee1f0a5b39 <String[11]: #tickCounter>
           2: 0x1eee1f0a8331 <String[4]: #tick>
           3: 0x1eee1f0a5b59 <String[7]: #threats>
           4: 0x30d2d7a49ea9 <String[3]: #map>
           5: 0x1eee1f0a8349 <SharedFunctionInfo>
           6: 0x1a28683c4939 <String[9]: #character>
           7: 0x1eee1f0a56e9 <String[18]: #serializeForViewer>
           8: 0x1eee1f0a7719 <String[15]: #pathfindingGrid>
Handler Table (size = 0)
Source Position Table (size = 31)
0x1eee1f0a8469 <ByteArray[31]>
0x1eee1f0a8349 points to: [0x1eee1f0a83b8]
=== [0x1eee1f0a83b8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5553 S> 0x1eee1f0a83b8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a83bc @    4 : c4                Star0 
 5553 E> 0x1eee1f0a83bd @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5573 S> 0x1eee1f0a83c1 @    9 : a9                Return 
Constant pool (size = 1)
0x1eee1f0a83c9: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 1
           0: 0x1eee1f0a56e9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1eee1f0a83e1 <ByteArray[10]>
0x1eee1f0a8511 points to: [0x1eee1f0a8580]
=== [0x1eee1f0a8580] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5736 S> 0x1eee1f0a8580 @    0 : 7c 00 00 08       CreateObjectLiteral [0], [0], #8
         0x1eee1f0a8584 @    4 : c4                Star0 
 5762 E> 0x1eee1f0a8585 @    5 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x1eee1f0a8589 @    9 : c3                Star1 
 5792 E> 0x1eee1f0a858a @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x1eee1f0a858e @   14 : 33 f9 02 04       DefineNamedOwnProperty r1, [2], [4]
 5828 E> 0x1eee1f0a8592 @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x1eee1f0a8596 @   22 : 33 f9 03 08       DefineNamedOwnProperty r1, [3], [8]
 5864 E> 0x1eee1f0a859a @   26 : 2d 02 04 0a       GetNamedProperty <this>, [4], [10]
         0x1eee1f0a859e @   30 : c1                Star3 
 5870 E> 0x1eee1f0a859f @   31 : 2d f7 05 0c       GetNamedProperty r3, [5], [12]
         0x1eee1f0a85a3 @   35 : c2                Star2 
         0x1eee1f0a85a4 @   36 : 80 06 00 02       CreateClosure [6], [0], #2
         0x1eee1f0a85a8 @   40 : c0                Star4 
 5870 E> 0x1eee1f0a85a9 @   41 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x1eee1f0a85ae @   46 : 33 f9 04 10       DefineNamedOwnProperty r1, [4], [16]
         0x1eee1f0a85b2 @   50 : 0b f9             Ldar r1
         0x1eee1f0a85b4 @   52 : 33 fa 05 12       DefineNamedOwnProperty r0, [5], [18]
         0x1eee1f0a85b8 @   56 : 0b fa             Ldar r0
 5939 S> 0x1eee1f0a85ba @   58 : a9                Return 
Constant pool (size = 7)
0x1eee1f0a85c1: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 7
           0: 0x1eee1f0a8609 <ObjectBoilerplateDescription[3]>
           1: 0x1eee1f0a8631 <ObjectBoilerplateDescription[7]>
           2: 0x1eee1f0a6b61 <String[5]: #width>
           3: 0x1eee1f0a6b79 <String[6]: #height>
           4: 0x1eee1f0a6b49 <String[5]: #tiles>
           5: 0x30d2d7a49ea9 <String[3]: #map>
           6: 0x1eee1f0a8679 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 23)
0x1eee1f0a88b1 <ByteArray[23]>
Boilerplate at 0x1eee1f0a8609: 
0x1eee1f0a8609: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 3
           0: 8
           1: 0x30d2d7a49ea9 <String[3]: #map>
           2: 0x1a28683c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1eee1f0a8631: 
0x1eee1f0a8631: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a28683c2059 <Map>
 - length: 7
           0: 8
           1: 0x1eee1f0a6b61 <String[5]: #width>
           2: 0x1a28683c1501 <Odd Oddball: uninitialized>
           3: 0x1eee1f0a6b79 <String[6]: #height>
           4: 0x1a28683c1501 <Odd Oddball: uninitialized>
           5: 0x1eee1f0a6b49 <String[5]: #tiles>
           6: 0x1a28683c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1eee1f0a8679 points to: [0x1eee1f0a86e8]
=== [0x1eee1f0a86e8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 5887 S> 0x1eee1f0a86e8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1eee1f0a86ec @    4 : c4                Star0 
         0x1eee1f0a86ed @    5 : 80 01 00 02       CreateClosure [1], [0], #2
         0x1eee1f0a86f1 @    9 : c2                Star2 
 5887 E> 0x1eee1f0a86f2 @   10 : 5e fa 03 f8 02    CallProperty1 r0, a0, r2, [2]
 5911 S> 0x1eee1f0a86f7 @   15 : a9                Return 
Constant pool (size = 2)
0x1eee1f0a86f9: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 2
           0: 0x30d2d7a49ea9 <String[3]: #map>
           1: 0x1eee1f0a8719 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1eee1f0a8829 <ByteArray[10]>
0x1eee1f0a8719 points to: [0x1eee1f0a8788]
=== [0x1eee1f0a8788] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5906 S> 0x1eee1f0a8788 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 5910 S> 0x1eee1f0a878c @    4 : a9                Return 
Constant pool (size = 1)
0x1eee1f0a8791: [FixedArray] in OldSpace
 - map: 0x1a28683c12e1 <Map>
 - length: 1
           0: 0x1a28683c4469 <String[4]: #type>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1eee1f0a87a9 <ByteArray[8]>
<< OUTPUTTING DISASSEMBLY END >>
