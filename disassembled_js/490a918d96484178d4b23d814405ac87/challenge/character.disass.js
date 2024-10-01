<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x29d7965e4f18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x29d7965e4f18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x29d7965e4f1c @    4 : c4                Star0 
 2238 S> 0x29d7965e4f1d @    5 : a9                Return 
Constant pool (size = 1)
0x29d7965e4f21: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 1
           0: 0x29d7965e4f39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x29d7965e66a9 <ByteArray[7]>
0x29d7965e4f39 points to: [0x29d7965e4fa8]
=== [0x29d7965e4fa8] DISASSEMBLY ===
Parameter count 6
Register count 15
Frame size 120
OSR urgency: 0
Bytecode age: 0
   10 E> 0x29d7965e4fa8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x29d7965e4fab @    3 : 1a f8             PushContext r2
         0x29d7965e4fad @    5 : 80 01 00 02       CreateClosure [1], [0], #2
         0x29d7965e4fb1 @    9 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x29d7965e4fb3 @   11 : 21 02 00          LdaGlobal [2], [0]
         0x29d7965e4fb6 @   14 : c0                Star4 
   83 E> 0x29d7965e4fb7 @   15 : 2d f6 03 02       GetNamedProperty r4, [3], [2]
         0x29d7965e4fbb @   19 : c1                Star3 
         0x29d7965e4fbc @   20 : 13 04             LdaConstant [4]
         0x29d7965e4fbe @   22 : be                Star6 
   98 E> 0x29d7965e4fbf @   23 : 7c 05 04 29       CreateObjectLiteral [5], [4], #41
         0x29d7965e4fc3 @   27 : bd                Star7 
         0x29d7965e4fc4 @   28 : 19 03 f5          Mov a0, r5
   83 E> 0x29d7965e4fc7 @   31 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x29d7965e4fcc @   36 : 0e                LdaUndefined 
  157 E> 0x29d7965e4fcd @   37 : 32 03 06 07       SetNamedProperty a0, [6], [7]
  184 S> 0x29d7965e4fd1 @   41 : 13 07             LdaConstant [7]
         0x29d7965e4fd3 @   43 : c0                Star4 
  184 E> 0x29d7965e4fd4 @   44 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
         0x29d7965e4fd8 @   48 : c4                Star0 
         0x29d7965e4fd9 @   49 : 81 08             CreateBlockContext [8]
         0x29d7965e4fdb @   51 : 1a f7             PushContext r3
         0x29d7965e4fdd @   53 : 10                LdaTheHole 
  184 E> 0x29d7965e4fde @   54 : 25 02             StaCurrentContextSlot [2]
  680 E> 0x29d7965e4fe0 @   56 : 2d fa 0a 0b       GetNamedProperty r0, [10], [11]
         0x29d7965e4fe4 @   60 : bd                Star7 
         0x29d7965e4fe5 @   61 : 80 0b 01 02       CreateClosure [11], [1], #2
         0x29d7965e4fe9 @   65 : c0                Star4 
         0x29d7965e4fea @   66 : 13 09             LdaConstant [9]
         0x29d7965e4fec @   68 : bf                Star5 
         0x29d7965e4fed @   69 : 80 0c 02 02       CreateClosure [12], [2], #2
         0x29d7965e4ff1 @   73 : bc                Star8 
         0x29d7965e4ff2 @   74 : 80 0d 03 02       CreateClosure [13], [3], #2
         0x29d7965e4ff6 @   78 : bb                Star9 
         0x29d7965e4ff7 @   79 : 80 0e 04 02       CreateClosure [14], [4], #2
         0x29d7965e4ffb @   83 : ba                Star10 
         0x29d7965e4ffc @   84 : 80 0f 05 02       CreateClosure [15], [5], #2
         0x29d7965e5000 @   88 : b9                Star11 
         0x29d7965e5001 @   89 : 80 10 06 02       CreateClosure [16], [6], #2
         0x29d7965e5005 @   93 : b8                Star12 
         0x29d7965e5006 @   94 : 80 11 07 02       CreateClosure [17], [7], #2
         0x29d7965e500a @   98 : b7                Star13 
         0x29d7965e500b @   99 : 80 12 08 02       CreateClosure [18], [8], #2
         0x29d7965e500f @  103 : b6                Star14 
         0x29d7965e5010 @  104 : 19 f6 f4          Mov r4, r6
         0x29d7965e5013 @  107 : 65 28 00 f5 0a    CallRuntime [DefineClass], r5-r14
         0x29d7965e5018 @  112 : bf                Star5 
         0x29d7965e5019 @  113 : 0b f4             Ldar r6
         0x29d7965e501b @  115 : 25 02             StaCurrentContextSlot [2]
         0x29d7965e501d @  117 : 1b f7             PopContext r3
         0x29d7965e501f @  119 : c3                Star1 
 2166 S> 0x29d7965e5020 @  120 : 0b f9             Ldar r1
 2184 E> 0x29d7965e5022 @  122 : 32 03 06 07       SetNamedProperty a0, [6], [7]
         0x29d7965e5026 @  126 : 0e                LdaUndefined 
 2235 S> 0x29d7965e5027 @  127 : a9                Return 
Constant pool (size = 19)
0x29d7965e5029: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 19
           0: 0x29d7965e50d1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x29d7965e5159 <SharedFunctionInfo getHumanReadableDirection>
           2: 0x3cfa0c985ab9 <String[6]: #Object>
           3: 0x3cfa0c984c11 <String[14]: #defineProperty>
           4: 0x29d7965e63c9 <String[10]: #__esModule>
           5: 0x29d7965e63e9 <ObjectBoilerplateDescription[3]>
           6: 0x29d7965e56c1 <String[9]: #Character>
           7: 0x29d7965e6411 <String[8]: #./entity>
           8: 0x29d7965e5859 <ScopeInfo CLASS_SCOPE>
           9: 0x29d7965e6429 <FixedArray[7]>
          10: 0x29d7965e6639 <String[6]: #Entity>
          11: 0x29d7965e5579 <SharedFunctionInfo Character>
          12: 0x29d7965e58c1 <SharedFunctionInfo createFreshPlayerCommandsFlags>
          13: 0x29d7965e5a51 <SharedFunctionInfo get teamId>
          14: 0x29d7965e5b81 <SharedFunctionInfo get position>
          15: 0x29d7965e5cb1 <SharedFunctionInfo update>
          16: 0x29d7965e5e01 <SharedFunctionInfo move>
          17: 0x29d7965e5f99 <SharedFunctionInfo serializeForViewer>
          18: 0x29d7965e6179 <SharedFunctionInfo serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 36)
0x29d7965e6651 <ByteArray[36]>
0x29d7965e5159 points to: [0x29d7965e51c8]
=== [0x29d7965e51c8] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  254 S> 0x29d7965e51c8 @    0 : 0b 03             Ldar a0
         0x29d7965e51ca @    2 : 96 05             JumpIfToBooleanTrue [5] (0x29d7965e51cf @ 7)
  277 S> 0x29d7965e51cc @    4 : 13 00             LdaConstant [0]
  289 S> 0x29d7965e51ce @    6 : a9                Return 
  310 S> 0x29d7965e51cf @    7 : 21 01 02          LdaGlobal [1], [2]
         0x29d7965e51d2 @   10 : c2                Star2 
  316 E> 0x29d7965e51d3 @   11 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x29d7965e51d7 @   15 : c3                Star1 
  329 E> 0x29d7965e51d8 @   16 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
         0x29d7965e51dc @   20 : c1                Star3 
  339 E> 0x29d7965e51dd @   21 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
         0x29d7965e51e1 @   25 : c0                Star4 
  316 E> 0x29d7965e51e2 @   26 : 5f f9 f8 f7 f6 0a CallProperty2 r1, r2, r3, r4, [10]
  342 E> 0x29d7965e51e8 @   32 : 00 47 b4 00 01 00 MulSmi.Wide [180], [1]
         0x29d7965e51ee @   38 : c3                Star1 
  351 E> 0x29d7965e51ef @   39 : 21 01 02          LdaGlobal [1], [2]
         0x29d7965e51f2 @   42 : c2                Star2 
  356 E> 0x29d7965e51f3 @   43 : 2d f8 05 0c       GetNamedProperty r2, [5], [12]
  349 E> 0x29d7965e51f7 @   47 : 3c f9 00          Div r1, [0]
         0x29d7965e51fa @   50 : c4                Star0 
  364 S> 0x29d7965e51fb @   51 : 0c                LdaZero 
  372 E> 0x29d7965e51fc @   52 : 6d fa 0e          TestLessThan r0, [14]
         0x29d7965e51ff @   55 : 99 0b             JumpIfFalse [11] (0x29d7965e520a @ 66)
  387 S> 0x29d7965e5201 @   57 : 0b fa             Ldar r0
         0x29d7965e5203 @   59 : 00 45 68 01 0f 00 AddSmi.Wide [360], [15]
         0x29d7965e5209 @   65 : c4                Star0 
  409 S> 0x29d7965e520a @   66 : 0d 2d             LdaSmi [45]
  417 E> 0x29d7965e520c @   68 : 70 fa 10          TestGreaterThanOrEqual r0, [16]
         0x29d7965e520f @   71 : 99 0e             JumpIfFalse [14] (0x29d7965e521d @ 85)
         0x29d7965e5211 @   73 : 00 0d 87 00       LdaSmi.Wide [135]
  430 E> 0x29d7965e5215 @   77 : 6d fa 11          TestLessThan r0, [17]
         0x29d7965e5218 @   80 : 99 05             JumpIfFalse [5] (0x29d7965e521d @ 85)
  447 S> 0x29d7965e521a @   82 : 13 00             LdaConstant [0]
  459 S> 0x29d7965e521c @   84 : a9                Return 
  475 S> 0x29d7965e521d @   85 : 00 0d 87 00       LdaSmi.Wide [135]
  483 E> 0x29d7965e5221 @   89 : 70 fa 12          TestGreaterThanOrEqual r0, [18]
         0x29d7965e5224 @   92 : 99 0e             JumpIfFalse [14] (0x29d7965e5232 @ 106)
         0x29d7965e5226 @   94 : 00 0d e1 00       LdaSmi.Wide [225]
  497 E> 0x29d7965e522a @   98 : 6d fa 13          TestLessThan r0, [19]
         0x29d7965e522d @  101 : 99 05             JumpIfFalse [5] (0x29d7965e5232 @ 106)
  514 S> 0x29d7965e522f @  103 : 13 06             LdaConstant [6]
  528 S> 0x29d7965e5231 @  105 : a9                Return 
  544 S> 0x29d7965e5232 @  106 : 00 0d e1 00       LdaSmi.Wide [225]
  552 E> 0x29d7965e5236 @  110 : 70 fa 14          TestGreaterThanOrEqual r0, [20]
         0x29d7965e5239 @  113 : 99 0e             JumpIfFalse [14] (0x29d7965e5247 @ 127)
         0x29d7965e523b @  115 : 00 0d 3b 01       LdaSmi.Wide [315]
  566 E> 0x29d7965e523f @  119 : 6d fa 15          TestLessThan r0, [21]
         0x29d7965e5242 @  122 : 99 05             JumpIfFalse [5] (0x29d7965e5247 @ 127)
  583 S> 0x29d7965e5244 @  124 : 13 07             LdaConstant [7]
  597 S> 0x29d7965e5246 @  126 : a9                Return 
  623 S> 0x29d7965e5247 @  127 : 13 08             LdaConstant [8]
  638 S> 0x29d7965e5249 @  129 : a9                Return 
Constant pool (size = 9)
0x29d7965e5251: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 9
           0: 0x29d7965e52a9 <String[2]: #up>
           1: 0x0e5ff34da991 <String[4]: #Math>
           2: 0x0e5ff34daa51 <String[5]: #atan2>
           3: 0x0e5ff34d8ae1 <String[1]: #y>
           4: 0x0e5ff34d8ac9 <String[1]: #x>
           5: 0x0e5ff34daca9 <String[2]: #PI>
           6: 0x29d7965e5339 <String[4]: #left>
           7: 0x29d7965e5351 <String[4]: #down>
           8: 0x29d7965e5369 <String[5]: #right>
Handler Table (size = 0)
Source Position Table (size = 67)
0x29d7965e5381 <ByteArray[67]>
Boilerplate at 0x29d7965e63e9: 
0x29d7965e63e9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3cfa0c982059 <Map>
 - length: 3
           0: 8
           1: 0x3cfa0c986419 <String[5]: #value>
           2: 0x3cfa0c981729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x29d7965e6429 has 7 elements:
0x29d7965e6429: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 7
           0: 10
           1: 0x29d7965e6471 <DescriptorArray[5]>
           2: 0x3cfa0c983301 <NumberDictionary[7]>
           3: 0x3cfa0c981329 <FixedArray[0]>
           4: 0x29d7965e6549 <DescriptorArray[7]>
           5: 0x3cfa0c983301 <NumberDictionary[7]>
           6: 0x3cfa0c981329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xa (10)
Element[1]
0x29d7965e6471: [DescriptorArray] in OldSpace
 - map: 0x3cfa0c987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3cfa0c9855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 3, attrs: [__C]) @ 0x0e5ff34f4fe1 <AccessorInfo>
  [1]: 0x3cfa0c9858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x0e5ff34f4f71 <AccessorInfo>
  [2]: 0x3cfa0c985cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 4, attrs: [___]) @ 0x0e5ff34f5051 <AccessorInfo>
  [3]: 0x3cfa0c9865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x29d7965e6531 <ClassPositions 647, 2165>
  [4]: 0x29d7965e56e1: [String] in OldSpace: #createFreshPlayerCommandsFlags (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[2]
0x3cfa0c983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3cfa0c981329: [FixedArray] in ReadOnlySpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 0
Element[4]
0x29d7965e6549: [DescriptorArray] in OldSpace
 - map: 0x3cfa0c987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 7
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3cfa0c984a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x29d7965e62e9: [String] in OldSpace: #teamId (const accessor descriptor, p: 6, attrs: [W_C]) @ 0x29d7965e6609 <AccessorPair>(get: 4, set: 0x3cfa0c981339 <null>)
  [2]: 0x3cfa0c985c19: [String] in ReadOnlySpace: #position (const accessor descriptor, p: 4, attrs: [W_C]) @ 0x29d7965e6621 <AccessorPair>(get: 5, set: 0x3cfa0c981339 <null>)
  [3]: 0xe5ff34c3f01: [String] in OldSpace: #update (const data descriptor, p: 3, attrs: [W_C]) @ 6
  [4]: 0x29d7965e5f61: [String] in OldSpace: #move (const data descriptor, p: 2, attrs: [W_C]) @ 7
  [5]: 0x29d7965e6131: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 1, attrs: [W_C]) @ 8
  [6]: 0x29d7965e6071: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 5, attrs: [W_C]) @ 9
Element[5]
0x3cfa0c983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3cfa0c981329: [FixedArray] in ReadOnlySpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 0
0x29d7965e5579 points to: [0x29d7965e55e8]
=== [0x29d7965e55e8] DISASSEMBLY ===
Parameter count 4
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x29d7965e55e8 @    0 : 19 fe f9          Mov <closure>, r1
  742 S> 0x29d7965e55eb @    3 : 0b f9             Ldar r1
         0x29d7965e55ed @    5 : 5a f7             GetSuperConstructor r3
         0x29d7965e55ef @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x29d7965e55f1 @    9 : 0b fa             Ldar r0
  742 E> 0x29d7965e55f3 @   11 : 69 f7 fa 00 00    Construct r3, r0-r0, [0]
         0x29d7965e55f8 @   16 : c0                Star4 
         0x29d7965e55f9 @   17 : 0b 02             Ldar <this>
         0x29d7965e55fb @   19 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x29d7965e55fc @   20 : 19 f6 02          Mov r4, <this>
  759 S> 0x29d7965e55ff @   23 : 0b 02             Ldar <this>
         0x29d7965e5601 @   25 : ab                ThrowSuperNotCalledIfHole 
         0x29d7965e5602 @   26 : 0b 03             Ldar a0
  772 E> 0x29d7965e5604 @   28 : 32 02 00 02       SetNamedProperty <this>, [0], [2]
  791 S> 0x29d7965e5608 @   32 : 0b 02             Ldar <this>
         0x29d7965e560a @   34 : ab                ThrowSuperNotCalledIfHole 
         0x29d7965e560b @   35 : 16 02             LdaCurrentContextSlot [2]
  818 E> 0x29d7965e560d @   37 : aa 01             ThrowReferenceErrorIfHole [1]
         0x29d7965e560f @   39 : c0                Star4 
  828 E> 0x29d7965e5610 @   40 : 2d f6 02 04       GetNamedProperty r4, [2], [4]
         0x29d7965e5614 @   44 : c1                Star3 
  828 E> 0x29d7965e5615 @   45 : 5d f7 f6 06       CallProperty0 r3, r4, [6]
  816 E> 0x29d7965e5619 @   49 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  870 S> 0x29d7965e561d @   53 : 0b 02             Ldar <this>
         0x29d7965e561f @   55 : ab                ThrowSuperNotCalledIfHole 
         0x29d7965e5620 @   56 : 0b 04             Ldar a1
  883 E> 0x29d7965e5622 @   58 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  901 S> 0x29d7965e5626 @   62 : 0b 02             Ldar <this>
         0x29d7965e5628 @   64 : ab                ThrowSuperNotCalledIfHole 
         0x29d7965e5629 @   65 : 0b 05             Ldar a2
  916 E> 0x29d7965e562b @   67 : 32 02 05 0c       SetNamedProperty <this>, [5], [12]
  936 S> 0x29d7965e562f @   71 : 0b 02             Ldar <this>
         0x29d7965e5631 @   73 : ab                ThrowSuperNotCalledIfHole 
         0x29d7965e5632 @   74 : 0f                LdaNull 
  952 E> 0x29d7965e5633 @   75 : 32 02 06 0e       SetNamedProperty <this>, [6], [14]
  968 S> 0x29d7965e5637 @   79 : 0b 02             Ldar <this>
         0x29d7965e5639 @   81 : ab                ThrowSuperNotCalledIfHole 
         0x29d7965e563a @   82 : 0b 05             Ldar a2
  984 E> 0x29d7965e563c @   84 : 32 02 07 10       SetNamedProperty <this>, [7], [16]
 1004 S> 0x29d7965e5640 @   88 : 0b 02             Ldar <this>
         0x29d7965e5642 @   90 : ab                ThrowSuperNotCalledIfHole 
         0x29d7965e5643 @   91 : 11                LdaTrue 
 1015 E> 0x29d7965e5644 @   92 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
         0x29d7965e5648 @   96 : 0b 02             Ldar <this>
         0x29d7965e564a @   98 : ab                ThrowSuperNotCalledIfHole 
 1027 S> 0x29d7965e564b @   99 : a9                Return 
Constant pool (size = 9)
0x29d7965e5651: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 9
           0: 0x0e5ff34ccbb9 <String[7]: #options>
           1: 0x29d7965e56c1 <String[9]: #Character>
           2: 0x29d7965e56e1 <String[30]: #createFreshPlayerCommandsFlags>
           3: 0x29d7965e5711 <String[19]: #playerCommandsFlags>
           4: 0x29d7965e5739 <String[7]: #_teamId>
           5: 0x29d7965e5751 <String[9]: #_position>
           6: 0x29d7965e5771 <String[10]: #_direction>
           7: 0x29d7965e5791 <String[10]: #spawnPoint>
           8: 0x29d7965e57b1 <String[5]: #alive>
Handler Table (size = 0)
Source Position Table (size = 45)
0x29d7965e57c9 <ByteArray[45]>
0x29d7965e58c1 points to: [0x29d7965e5930]
=== [0x29d7965e5930] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1083 S> 0x29d7965e5930 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
 1177 S> 0x29d7965e5934 @    4 : a9                Return 
Constant pool (size = 1)
0x29d7965e5939: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 1
           0: 0x29d7965e5951 <ObjectBoilerplateDescription[5]>
Handler Table (size = 0)
Source Position Table (size = 8)
0x29d7965e59d1 <ByteArray[8]>
Boilerplate at 0x29d7965e5951: 
0x29d7965e5951: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3cfa0c982059 <Map>
 - length: 5
           0: 8
           1: 0x29d7965e5989 <String[8]: #hasMoved>
           2: 0x3cfa0c981789 <false>
           3: 0x29d7965e59a1 <String[25]: #hasGrabbedOrDroppedPellet>
           4: 0x3cfa0c981789 <false>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x29d7965e5a51 points to: [0x29d7965e5ac0]
=== [0x29d7965e5ac0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1223 S> 0x29d7965e5ac0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1231 S> 0x29d7965e5ac4 @    4 : a9                Return 
Constant pool (size = 1)
0x29d7965e5ac9: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 1
           0: 0x29d7965e5739 <String[7]: #_teamId>
Handler Table (size = 0)
Source Position Table (size = 7)
0x29d7965e5ae1 <ByteArray[7]>
0x29d7965e5b81 points to: [0x29d7965e5bf0]
=== [0x29d7965e5bf0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1279 S> 0x29d7965e5bf0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1289 S> 0x29d7965e5bf4 @    4 : a9                Return 
Constant pool (size = 1)
0x29d7965e5bf9: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 1
           0: 0x29d7965e5751 <String[9]: #_position>
Handler Table (size = 0)
Source Position Table (size = 7)
0x29d7965e5c11 <ByteArray[7]>
0x29d7965e5cb1 points to: [0x29d7965e5d20]
=== [0x29d7965e5d20] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1319 S> 0x29d7965e5d20 @    0 : 16 02             LdaCurrentContextSlot [2]
 1346 E> 0x29d7965e5d22 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x29d7965e5d24 @    4 : c2                Star2 
 1356 E> 0x29d7965e5d25 @    5 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x29d7965e5d29 @    9 : c3                Star1 
 1356 E> 0x29d7965e5d2a @   10 : 5d f9 f8 02       CallProperty0 r1, r2, [2]
 1344 E> 0x29d7965e5d2e @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0x29d7965e5d32 @   18 : 0e                LdaUndefined 
 1394 S> 0x29d7965e5d33 @   19 : a9                Return 
Constant pool (size = 3)
0x29d7965e5d39: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 3
           0: 0x29d7965e56c1 <String[9]: #Character>
           1: 0x29d7965e56e1 <String[30]: #createFreshPlayerCommandsFlags>
           2: 0x29d7965e5711 <String[19]: #playerCommandsFlags>
Handler Table (size = 0)
Source Position Table (size = 16)
0x29d7965e5d61 <ByteArray[16]>
0x29d7965e5e01 points to: [0x29d7965e5e70]
=== [0x29d7965e5e70] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1448 S> 0x29d7965e5e70 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x29d7965e5e74 @    4 : c4                Star0 
 1468 E> 0x29d7965e5e75 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x29d7965e5e79 @    9 : 97 04             JumpIfToBooleanFalse [4] (0x29d7965e5e7d @ 13)
 1492 S> 0x29d7965e5e7b @   11 : 0e                LdaUndefined 
 1499 S> 0x29d7965e5e7c @   12 : a9                Return 
 1543 S> 0x29d7965e5e7d @   13 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x29d7965e5e81 @   17 : 96 04             JumpIfToBooleanTrue [4] (0x29d7965e5e85 @ 21)
 1564 S> 0x29d7965e5e83 @   19 : 0e                LdaUndefined 
 1571 S> 0x29d7965e5e84 @   20 : a9                Return 
 1605 S> 0x29d7965e5e85 @   21 : 0b 03             Ldar a0
 1620 E> 0x29d7965e5e87 @   23 : 32 02 03 06       SetNamedProperty <this>, [3], [6]
 1643 S> 0x29d7965e5e8b @   27 : 0b 04             Ldar a1
 1659 E> 0x29d7965e5e8d @   29 : 32 02 04 08       SetNamedProperty <this>, [4], [8]
 1685 S> 0x29d7965e5e91 @   33 : 2d 02 00 0a       GetNamedProperty <this>, [0], [10]
         0x29d7965e5e95 @   37 : c4                Star0 
         0x29d7965e5e96 @   38 : 11                LdaTrue 
 1714 E> 0x29d7965e5e97 @   39 : 32 fa 01 0c       SetNamedProperty r0, [1], [12]
         0x29d7965e5e9b @   43 : 0e                LdaUndefined 
 1726 S> 0x29d7965e5e9c @   44 : a9                Return 
Constant pool (size = 5)
0x29d7965e5ea1: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 5
           0: 0x29d7965e5711 <String[19]: #playerCommandsFlags>
           1: 0x29d7965e5989 <String[8]: #hasMoved>
           2: 0x29d7965e57b1 <String[5]: #alive>
           3: 0x29d7965e5751 <String[9]: #_position>
           4: 0x29d7965e5771 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 34)
0x29d7965e5ed9 <ByteArray[34]>
0x29d7965e5f99 points to: [0x29d7965e6008]
=== [0x29d7965e6008] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 1792 S> 0x29d7965e6008 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x29d7965e600c @    4 : c3                Star1 
 1792 E> 0x29d7965e600d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x29d7965e6011 @    9 : c3                Star1 
         0x29d7965e6012 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x29d7965e6016 @   14 : c4                Star0 
         0x29d7965e6017 @   15 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x29d7965e601b @   19 : c3                Star1 
 1868 E> 0x29d7965e601c @   20 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x29d7965e6020 @   24 : c1                Star3 
         0x29d7965e6021 @   25 : 9e 0d             JumpIfUndefinedOrNull [13] (0x29d7965e602e @ 38)
 1878 E> 0x29d7965e6023 @   27 : 2d f7 02 08       GetNamedProperty r3, [2], [8]
         0x29d7965e6027 @   31 : c2                Star2 
 1880 E> 0x29d7965e6028 @   32 : 5d f8 f7 0a       CallProperty0 r2, r3, [10]
         0x29d7965e602c @   36 : 8a 03             Jump [3] (0x29d7965e602f @ 39)
         0x29d7965e602e @   38 : 0e                LdaUndefined 
         0x29d7965e602f @   39 : c2                Star2 
 1837 E> 0x29d7965e6030 @   40 : 62 f9 f8 0c       CallUndefinedReceiver1 r1, r2, [12]
         0x29d7965e6034 @   44 : 33 fa 03 0e       DefineNamedOwnProperty r0, [3], [14]
         0x29d7965e6038 @   48 : 0b fa             Ldar r0
 1904 S> 0x29d7965e603a @   50 : a9                Return 
Constant pool (size = 4)
0x29d7965e6041: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 4
           0: 0x29d7965e6071 <String[18]: #serializeForPlayer>
           1: 0x29d7965e5771 <String[10]: #_direction>
           2: 0x0e5ff34d01a9 <String[9]: #serialize>
           3: 0x3cfa0c9839a1 <String[9]: #direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x29d7965e60b9 <ByteArray[21]>
0x29d7965e6179 points to: [0x29d7965e61e8]
=== [0x29d7965e61e8] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1946 S> 0x29d7965e61e8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x29d7965e61ec @    4 : c4                Star0 
 1976 E> 0x29d7965e61ed @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x29d7965e61f1 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 2005 E> 0x29d7965e61f5 @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x29d7965e61f9 @   17 : 33 fa 02 07       DefineNamedOwnProperty r0, [2], [7]
 2040 E> 0x29d7965e61fd @   21 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
         0x29d7965e6201 @   25 : c2                Star2 
 2050 E> 0x29d7965e6202 @   26 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
         0x29d7965e6206 @   30 : c3                Star1 
 2050 E> 0x29d7965e6207 @   31 : 5d f9 f8 0d       CallProperty0 r1, r2, [13]
         0x29d7965e620b @   35 : 33 fa 05 0f       DefineNamedOwnProperty r0, [5], [15]
 2087 E> 0x29d7965e620f @   39 : 2d 02 06 11       GetNamedProperty <this>, [6], [17]
         0x29d7965e6213 @   43 : 33 fa 06 13       DefineNamedOwnProperty r0, [6], [19]
 2123 E> 0x29d7965e6217 @   47 : 2d 02 07 15       GetNamedProperty <this>, [7], [21]
         0x29d7965e621b @   51 : c2                Star2 
 2134 E> 0x29d7965e621c @   52 : 2d f8 04 17       GetNamedProperty r2, [4], [23]
         0x29d7965e6220 @   56 : c3                Star1 
 2134 E> 0x29d7965e6221 @   57 : 5d f9 f8 19       CallProperty0 r1, r2, [25]
         0x29d7965e6225 @   61 : 33 fa 07 1b       DefineNamedOwnProperty r0, [7], [27]
         0x29d7965e6229 @   65 : 0b fa             Ldar r0
 2157 S> 0x29d7965e622b @   67 : a9                Return 
Constant pool (size = 8)
0x29d7965e6231: [FixedArray] in OldSpace
 - map: 0x3cfa0c9812e1 <Map>
 - length: 8
           0: 0x29d7965e6281 <ObjectBoilerplateDescription[11]>
           1: 0x3cfa0c9852d9 <String[2]: #id>
           2: 0x29d7965e62e9 <String[6]: #teamId>
           3: 0x29d7965e5751 <String[9]: #_position>
           4: 0x0e5ff34d01a9 <String[9]: #serialize>
           5: 0x3cfa0c985c19 <String[8]: #position>
           6: 0x29d7965e57b1 <String[5]: #alive>
           7: 0x29d7965e5791 <String[10]: #spawnPoint>
Handler Table (size = 0)
Source Position Table (size = 28)
0x29d7965e6301 <ByteArray[28]>
Boilerplate at 0x29d7965e6281: 
0x29d7965e6281: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3cfa0c982059 <Map>
 - length: 11
           0: 8
           1: 0x3cfa0c9852d9 <String[2]: #id>
           2: 0x3cfa0c981501 <Odd Oddball: uninitialized>
           3: 0x29d7965e62e9 <String[6]: #teamId>
           4: 0x3cfa0c981501 <Odd Oddball: uninitialized>
           5: 0x3cfa0c985c19 <String[8]: #position>
           6: 0x3cfa0c981501 <Odd Oddball: uninitialized>
           7: 0x29d7965e57b1 <String[5]: #alive>
           8: 0x3cfa0c981501 <Odd Oddball: uninitialized>
           9: 0x29d7965e5791 <String[10]: #spawnPoint>
          10: 0x3cfa0c981501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
