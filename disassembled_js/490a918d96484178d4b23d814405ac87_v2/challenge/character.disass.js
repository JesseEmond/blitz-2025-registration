<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x29b22ade4f28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x29b22ade4f28 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x29b22ade4f2c @    4 : c4                Star0 
 2238 S> 0x29b22ade4f2d @    5 : a9                Return 
Constant pool (size = 1)
0x29b22ade4f31: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 1
           0: 0x29b22ade4f49 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x29b22ade66b9 <ByteArray[7]>
0x29b22ade4f49 points to: [0x29b22ade4fb8]
=== [0x29b22ade4fb8] DISASSEMBLY ===
Parameter count 6
Register count 15
Frame size 120
OSR urgency: 0
Bytecode age: 0
   10 E> 0x29b22ade4fb8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x29b22ade4fbb @    3 : 1a f8             PushContext r2
         0x29b22ade4fbd @    5 : 80 01 00 02       CreateClosure [1], [0], #2
         0x29b22ade4fc1 @    9 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x29b22ade4fc3 @   11 : 21 02 00          LdaGlobal [2], [0]
         0x29b22ade4fc6 @   14 : c0                Star4 
   83 E> 0x29b22ade4fc7 @   15 : 2d f6 03 02       GetNamedProperty r4, [3], [2]
         0x29b22ade4fcb @   19 : c1                Star3 
         0x29b22ade4fcc @   20 : 13 04             LdaConstant [4]
         0x29b22ade4fce @   22 : be                Star6 
   98 E> 0x29b22ade4fcf @   23 : 7c 05 04 29       CreateObjectLiteral [5], [4], #41
         0x29b22ade4fd3 @   27 : bd                Star7 
         0x29b22ade4fd4 @   28 : 19 03 f5          Mov a0, r5
   83 E> 0x29b22ade4fd7 @   31 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x29b22ade4fdc @   36 : 0e                LdaUndefined 
  157 E> 0x29b22ade4fdd @   37 : 32 03 06 07       SetNamedProperty a0, [6], [7]
  184 S> 0x29b22ade4fe1 @   41 : 13 07             LdaConstant [7]
         0x29b22ade4fe3 @   43 : c0                Star4 
  184 E> 0x29b22ade4fe4 @   44 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
         0x29b22ade4fe8 @   48 : c4                Star0 
         0x29b22ade4fe9 @   49 : 81 08             CreateBlockContext [8]
         0x29b22ade4feb @   51 : 1a f7             PushContext r3
         0x29b22ade4fed @   53 : 10                LdaTheHole 
  184 E> 0x29b22ade4fee @   54 : 25 02             StaCurrentContextSlot [2]
  680 E> 0x29b22ade4ff0 @   56 : 2d fa 0a 0b       GetNamedProperty r0, [10], [11]
         0x29b22ade4ff4 @   60 : bd                Star7 
         0x29b22ade4ff5 @   61 : 80 0b 01 02       CreateClosure [11], [1], #2
         0x29b22ade4ff9 @   65 : c0                Star4 
         0x29b22ade4ffa @   66 : 13 09             LdaConstant [9]
         0x29b22ade4ffc @   68 : bf                Star5 
         0x29b22ade4ffd @   69 : 80 0c 02 02       CreateClosure [12], [2], #2
         0x29b22ade5001 @   73 : bc                Star8 
         0x29b22ade5002 @   74 : 80 0d 03 02       CreateClosure [13], [3], #2
         0x29b22ade5006 @   78 : bb                Star9 
         0x29b22ade5007 @   79 : 80 0e 04 02       CreateClosure [14], [4], #2
         0x29b22ade500b @   83 : ba                Star10 
         0x29b22ade500c @   84 : 80 0f 05 02       CreateClosure [15], [5], #2
         0x29b22ade5010 @   88 : b9                Star11 
         0x29b22ade5011 @   89 : 80 10 06 02       CreateClosure [16], [6], #2
         0x29b22ade5015 @   93 : b8                Star12 
         0x29b22ade5016 @   94 : 80 11 07 02       CreateClosure [17], [7], #2
         0x29b22ade501a @   98 : b7                Star13 
         0x29b22ade501b @   99 : 80 12 08 02       CreateClosure [18], [8], #2
         0x29b22ade501f @  103 : b6                Star14 
         0x29b22ade5020 @  104 : 19 f6 f4          Mov r4, r6
         0x29b22ade5023 @  107 : 65 28 00 f5 0a    CallRuntime [DefineClass], r5-r14
         0x29b22ade5028 @  112 : bf                Star5 
         0x29b22ade5029 @  113 : 0b f4             Ldar r6
         0x29b22ade502b @  115 : 25 02             StaCurrentContextSlot [2]
         0x29b22ade502d @  117 : 1b f7             PopContext r3
         0x29b22ade502f @  119 : c3                Star1 
 2166 S> 0x29b22ade5030 @  120 : 0b f9             Ldar r1
 2184 E> 0x29b22ade5032 @  122 : 32 03 06 07       SetNamedProperty a0, [6], [7]
         0x29b22ade5036 @  126 : 0e                LdaUndefined 
 2235 S> 0x29b22ade5037 @  127 : a9                Return 
Constant pool (size = 19)
0x29b22ade5039: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 19
           0: 0x29b22ade50e1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x29b22ade5169 <SharedFunctionInfo getHumanReadableDirection>
           2: 0x35a6d5d05ab9 <String[6]: #Object>
           3: 0x35a6d5d04c11 <String[14]: #defineProperty>
           4: 0x29b22ade63d9 <String[10]: #__esModule>
           5: 0x29b22ade63f9 <ObjectBoilerplateDescription[3]>
           6: 0x29b22ade56d1 <String[9]: #Character>
           7: 0x29b22ade6421 <String[8]: #./entity>
           8: 0x29b22ade5869 <ScopeInfo CLASS_SCOPE>
           9: 0x29b22ade6439 <FixedArray[7]>
          10: 0x29b22ade6649 <String[6]: #Entity>
          11: 0x29b22ade5589 <SharedFunctionInfo Character>
          12: 0x29b22ade58d1 <SharedFunctionInfo createFreshPlayerCommandsFlags>
          13: 0x29b22ade5a61 <SharedFunctionInfo get teamId>
          14: 0x29b22ade5b91 <SharedFunctionInfo get position>
          15: 0x29b22ade5cc1 <SharedFunctionInfo update>
          16: 0x29b22ade5e11 <SharedFunctionInfo move>
          17: 0x29b22ade5fa9 <SharedFunctionInfo serializeForViewer>
          18: 0x29b22ade6189 <SharedFunctionInfo serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 36)
0x29b22ade6661 <ByteArray[36]>
0x29b22ade5169 points to: [0x29b22ade51d8]
=== [0x29b22ade51d8] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  254 S> 0x29b22ade51d8 @    0 : 0b 03             Ldar a0
         0x29b22ade51da @    2 : 96 05             JumpIfToBooleanTrue [5] (0x29b22ade51df @ 7)
  277 S> 0x29b22ade51dc @    4 : 13 00             LdaConstant [0]
  289 S> 0x29b22ade51de @    6 : a9                Return 
  310 S> 0x29b22ade51df @    7 : 21 01 02          LdaGlobal [1], [2]
         0x29b22ade51e2 @   10 : c2                Star2 
  316 E> 0x29b22ade51e3 @   11 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x29b22ade51e7 @   15 : c3                Star1 
  329 E> 0x29b22ade51e8 @   16 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
         0x29b22ade51ec @   20 : c1                Star3 
  339 E> 0x29b22ade51ed @   21 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
         0x29b22ade51f1 @   25 : c0                Star4 
  316 E> 0x29b22ade51f2 @   26 : 5f f9 f8 f7 f6 0a CallProperty2 r1, r2, r3, r4, [10]
  342 E> 0x29b22ade51f8 @   32 : 00 47 b4 00 01 00 MulSmi.Wide [180], [1]
         0x29b22ade51fe @   38 : c3                Star1 
  351 E> 0x29b22ade51ff @   39 : 21 01 02          LdaGlobal [1], [2]
         0x29b22ade5202 @   42 : c2                Star2 
  356 E> 0x29b22ade5203 @   43 : 2d f8 05 0c       GetNamedProperty r2, [5], [12]
  349 E> 0x29b22ade5207 @   47 : 3c f9 00          Div r1, [0]
         0x29b22ade520a @   50 : c4                Star0 
  364 S> 0x29b22ade520b @   51 : 0c                LdaZero 
  372 E> 0x29b22ade520c @   52 : 6d fa 0e          TestLessThan r0, [14]
         0x29b22ade520f @   55 : 99 0b             JumpIfFalse [11] (0x29b22ade521a @ 66)
  387 S> 0x29b22ade5211 @   57 : 0b fa             Ldar r0
         0x29b22ade5213 @   59 : 00 45 68 01 0f 00 AddSmi.Wide [360], [15]
         0x29b22ade5219 @   65 : c4                Star0 
  409 S> 0x29b22ade521a @   66 : 0d 2d             LdaSmi [45]
  417 E> 0x29b22ade521c @   68 : 70 fa 10          TestGreaterThanOrEqual r0, [16]
         0x29b22ade521f @   71 : 99 0e             JumpIfFalse [14] (0x29b22ade522d @ 85)
         0x29b22ade5221 @   73 : 00 0d 87 00       LdaSmi.Wide [135]
  430 E> 0x29b22ade5225 @   77 : 6d fa 11          TestLessThan r0, [17]
         0x29b22ade5228 @   80 : 99 05             JumpIfFalse [5] (0x29b22ade522d @ 85)
  447 S> 0x29b22ade522a @   82 : 13 00             LdaConstant [0]
  459 S> 0x29b22ade522c @   84 : a9                Return 
  475 S> 0x29b22ade522d @   85 : 00 0d 87 00       LdaSmi.Wide [135]
  483 E> 0x29b22ade5231 @   89 : 70 fa 12          TestGreaterThanOrEqual r0, [18]
         0x29b22ade5234 @   92 : 99 0e             JumpIfFalse [14] (0x29b22ade5242 @ 106)
         0x29b22ade5236 @   94 : 00 0d e1 00       LdaSmi.Wide [225]
  497 E> 0x29b22ade523a @   98 : 6d fa 13          TestLessThan r0, [19]
         0x29b22ade523d @  101 : 99 05             JumpIfFalse [5] (0x29b22ade5242 @ 106)
  514 S> 0x29b22ade523f @  103 : 13 06             LdaConstant [6]
  528 S> 0x29b22ade5241 @  105 : a9                Return 
  544 S> 0x29b22ade5242 @  106 : 00 0d e1 00       LdaSmi.Wide [225]
  552 E> 0x29b22ade5246 @  110 : 70 fa 14          TestGreaterThanOrEqual r0, [20]
         0x29b22ade5249 @  113 : 99 0e             JumpIfFalse [14] (0x29b22ade5257 @ 127)
         0x29b22ade524b @  115 : 00 0d 3b 01       LdaSmi.Wide [315]
  566 E> 0x29b22ade524f @  119 : 6d fa 15          TestLessThan r0, [21]
         0x29b22ade5252 @  122 : 99 05             JumpIfFalse [5] (0x29b22ade5257 @ 127)
  583 S> 0x29b22ade5254 @  124 : 13 07             LdaConstant [7]
  597 S> 0x29b22ade5256 @  126 : a9                Return 
  623 S> 0x29b22ade5257 @  127 : 13 08             LdaConstant [8]
  638 S> 0x29b22ade5259 @  129 : a9                Return 
Constant pool (size = 9)
0x29b22ade5261: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 9
           0: 0x29b22ade52b9 <String[2]: #up>
           1: 0x1b9e0fb5a991 <String[4]: #Math>
           2: 0x1b9e0fb5aa51 <String[5]: #atan2>
           3: 0x1b9e0fb58ae1 <String[1]: #y>
           4: 0x1b9e0fb58ac9 <String[1]: #x>
           5: 0x1b9e0fb5aca9 <String[2]: #PI>
           6: 0x29b22ade5349 <String[4]: #left>
           7: 0x29b22ade5361 <String[4]: #down>
           8: 0x29b22ade5379 <String[5]: #right>
Handler Table (size = 0)
Source Position Table (size = 67)
0x29b22ade5391 <ByteArray[67]>
Object boilerplate at 0x29b22ade63f9: 
0x29b22ade63f9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x35a6d5d02059 <Map>
 - length: 3
           0: 8
           1: 0x35a6d5d06419 <String[5]: #value>
           2: 0x35a6d5d01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x29b22ade6439 has 7 elements:
0x29b22ade6439: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 7
           0: 10
           1: 0x29b22ade6481 <DescriptorArray[5]>
           2: 0x35a6d5d03301 <NumberDictionary[7]>
           3: 0x35a6d5d01329 <FixedArray[0]>
           4: 0x29b22ade6559 <DescriptorArray[7]>
           5: 0x35a6d5d03301 <NumberDictionary[7]>
           6: 0x35a6d5d01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xa (10)
Element[1]
0x29b22ade6481: [DescriptorArray] in OldSpace
 - map: 0x35a6d5d07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x35a6d5d055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 4, attrs: [__C]) @ 0x1b9e0fb74fe1 <AccessorInfo>
  [1]: 0x35a6d5d058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x1b9e0fb74f71 <AccessorInfo>
  [2]: 0x35a6d5d05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x1b9e0fb75051 <AccessorInfo>
  [3]: 0x35a6d5d065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x29b22ade6541 <ClassPositions 647, 2165>
  [4]: 0x29b22ade56f1: [String] in OldSpace: #createFreshPlayerCommandsFlags (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[2]
0x35a6d5d03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x35a6d5d01329: [FixedArray] in ReadOnlySpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 0
Element[4]
0x29b22ade6559: [DescriptorArray] in OldSpace
 - map: 0x35a6d5d07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 7
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x35a6d5d04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 4, attrs: [W_C]) @ 1
  [1]: 0x29b22ade62f9: [String] in OldSpace: #teamId (const accessor descriptor, p: 6, attrs: [W_C]) @ 0x29b22ade6619 <AccessorPair>(get: 4, set: 0x35a6d5d01339 <null>)
  [2]: 0x35a6d5d05c19: [String] in ReadOnlySpace: #position (const accessor descriptor, p: 5, attrs: [W_C]) @ 0x29b22ade6631 <AccessorPair>(get: 5, set: 0x35a6d5d01339 <null>)
  [3]: 0x1b9e0fb43f01: [String] in OldSpace: #update (const data descriptor, p: 3, attrs: [W_C]) @ 6
  [4]: 0x29b22ade5f71: [String] in OldSpace: #move (const data descriptor, p: 0, attrs: [W_C]) @ 7
  [5]: 0x29b22ade6141: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 2, attrs: [W_C]) @ 8
  [6]: 0x29b22ade6081: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 1, attrs: [W_C]) @ 9
Element[5]
0x35a6d5d03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x35a6d5d01329: [FixedArray] in ReadOnlySpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 0
0x29b22ade5589 points to: [0x29b22ade55f8]
=== [0x29b22ade55f8] DISASSEMBLY ===
Parameter count 4
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x29b22ade55f8 @    0 : 19 fe f9          Mov <closure>, r1
  742 S> 0x29b22ade55fb @    3 : 0b f9             Ldar r1
         0x29b22ade55fd @    5 : 5a f7             GetSuperConstructor r3
         0x29b22ade55ff @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x29b22ade5601 @    9 : 0b fa             Ldar r0
  742 E> 0x29b22ade5603 @   11 : 69 f7 fa 00 00    Construct r3, r0-r0, [0]
         0x29b22ade5608 @   16 : c0                Star4 
         0x29b22ade5609 @   17 : 0b 02             Ldar <this>
         0x29b22ade560b @   19 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x29b22ade560c @   20 : 19 f6 02          Mov r4, <this>
  759 S> 0x29b22ade560f @   23 : 0b 02             Ldar <this>
         0x29b22ade5611 @   25 : ab                ThrowSuperNotCalledIfHole 
         0x29b22ade5612 @   26 : 0b 03             Ldar a0
  772 E> 0x29b22ade5614 @   28 : 32 02 00 02       SetNamedProperty <this>, [0], [2]
  791 S> 0x29b22ade5618 @   32 : 0b 02             Ldar <this>
         0x29b22ade561a @   34 : ab                ThrowSuperNotCalledIfHole 
         0x29b22ade561b @   35 : 16 02             LdaCurrentContextSlot [2]
  818 E> 0x29b22ade561d @   37 : aa 01             ThrowReferenceErrorIfHole [1]
         0x29b22ade561f @   39 : c0                Star4 
  828 E> 0x29b22ade5620 @   40 : 2d f6 02 04       GetNamedProperty r4, [2], [4]
         0x29b22ade5624 @   44 : c1                Star3 
  828 E> 0x29b22ade5625 @   45 : 5d f7 f6 06       CallProperty0 r3, r4, [6]
  816 E> 0x29b22ade5629 @   49 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  870 S> 0x29b22ade562d @   53 : 0b 02             Ldar <this>
         0x29b22ade562f @   55 : ab                ThrowSuperNotCalledIfHole 
         0x29b22ade5630 @   56 : 0b 04             Ldar a1
  883 E> 0x29b22ade5632 @   58 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  901 S> 0x29b22ade5636 @   62 : 0b 02             Ldar <this>
         0x29b22ade5638 @   64 : ab                ThrowSuperNotCalledIfHole 
         0x29b22ade5639 @   65 : 0b 05             Ldar a2
  916 E> 0x29b22ade563b @   67 : 32 02 05 0c       SetNamedProperty <this>, [5], [12]
  936 S> 0x29b22ade563f @   71 : 0b 02             Ldar <this>
         0x29b22ade5641 @   73 : ab                ThrowSuperNotCalledIfHole 
         0x29b22ade5642 @   74 : 0f                LdaNull 
  952 E> 0x29b22ade5643 @   75 : 32 02 06 0e       SetNamedProperty <this>, [6], [14]
  968 S> 0x29b22ade5647 @   79 : 0b 02             Ldar <this>
         0x29b22ade5649 @   81 : ab                ThrowSuperNotCalledIfHole 
         0x29b22ade564a @   82 : 0b 05             Ldar a2
  984 E> 0x29b22ade564c @   84 : 32 02 07 10       SetNamedProperty <this>, [7], [16]
 1004 S> 0x29b22ade5650 @   88 : 0b 02             Ldar <this>
         0x29b22ade5652 @   90 : ab                ThrowSuperNotCalledIfHole 
         0x29b22ade5653 @   91 : 11                LdaTrue 
 1015 E> 0x29b22ade5654 @   92 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
         0x29b22ade5658 @   96 : 0b 02             Ldar <this>
         0x29b22ade565a @   98 : ab                ThrowSuperNotCalledIfHole 
 1027 S> 0x29b22ade565b @   99 : a9                Return 
Constant pool (size = 9)
0x29b22ade5661: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 9
           0: 0x1b9e0fb4cbb9 <String[7]: #options>
           1: 0x29b22ade56d1 <String[9]: #Character>
           2: 0x29b22ade56f1 <String[30]: #createFreshPlayerCommandsFlags>
           3: 0x29b22ade5721 <String[19]: #playerCommandsFlags>
           4: 0x29b22ade5749 <String[7]: #_teamId>
           5: 0x29b22ade5761 <String[9]: #_position>
           6: 0x29b22ade5781 <String[10]: #_direction>
           7: 0x29b22ade57a1 <String[10]: #spawnPoint>
           8: 0x29b22ade57c1 <String[5]: #alive>
Handler Table (size = 0)
Source Position Table (size = 45)
0x29b22ade57d9 <ByteArray[45]>
0x29b22ade58d1 points to: [0x29b22ade5940]
=== [0x29b22ade5940] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1083 S> 0x29b22ade5940 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
 1177 S> 0x29b22ade5944 @    4 : a9                Return 
Constant pool (size = 1)
0x29b22ade5949: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 1
           0: 0x29b22ade5961 <ObjectBoilerplateDescription[5]>
Handler Table (size = 0)
Source Position Table (size = 8)
0x29b22ade59e1 <ByteArray[8]>
Object boilerplate at 0x29b22ade5961: 
0x29b22ade5961: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x35a6d5d02059 <Map>
 - length: 5
           0: 8
           1: 0x29b22ade5999 <String[8]: #hasMoved>
           2: 0x35a6d5d01789 <false>
           3: 0x29b22ade59b1 <String[25]: #hasGrabbedOrDroppedPellet>
           4: 0x35a6d5d01789 <false>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x29b22ade5a61 points to: [0x29b22ade5ad0]
=== [0x29b22ade5ad0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1223 S> 0x29b22ade5ad0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1231 S> 0x29b22ade5ad4 @    4 : a9                Return 
Constant pool (size = 1)
0x29b22ade5ad9: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 1
           0: 0x29b22ade5749 <String[7]: #_teamId>
Handler Table (size = 0)
Source Position Table (size = 7)
0x29b22ade5af1 <ByteArray[7]>
0x29b22ade5b91 points to: [0x29b22ade5c00]
=== [0x29b22ade5c00] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1279 S> 0x29b22ade5c00 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1289 S> 0x29b22ade5c04 @    4 : a9                Return 
Constant pool (size = 1)
0x29b22ade5c09: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 1
           0: 0x29b22ade5761 <String[9]: #_position>
Handler Table (size = 0)
Source Position Table (size = 7)
0x29b22ade5c21 <ByteArray[7]>
0x29b22ade5cc1 points to: [0x29b22ade5d30]
=== [0x29b22ade5d30] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1319 S> 0x29b22ade5d30 @    0 : 16 02             LdaCurrentContextSlot [2]
 1346 E> 0x29b22ade5d32 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x29b22ade5d34 @    4 : c2                Star2 
 1356 E> 0x29b22ade5d35 @    5 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x29b22ade5d39 @    9 : c3                Star1 
 1356 E> 0x29b22ade5d3a @   10 : 5d f9 f8 02       CallProperty0 r1, r2, [2]
 1344 E> 0x29b22ade5d3e @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0x29b22ade5d42 @   18 : 0e                LdaUndefined 
 1394 S> 0x29b22ade5d43 @   19 : a9                Return 
Constant pool (size = 3)
0x29b22ade5d49: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 3
           0: 0x29b22ade56d1 <String[9]: #Character>
           1: 0x29b22ade56f1 <String[30]: #createFreshPlayerCommandsFlags>
           2: 0x29b22ade5721 <String[19]: #playerCommandsFlags>
Handler Table (size = 0)
Source Position Table (size = 16)
0x29b22ade5d71 <ByteArray[16]>
0x29b22ade5e11 points to: [0x29b22ade5e80]
=== [0x29b22ade5e80] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1448 S> 0x29b22ade5e80 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x29b22ade5e84 @    4 : c4                Star0 
 1468 E> 0x29b22ade5e85 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x29b22ade5e89 @    9 : 97 04             JumpIfToBooleanFalse [4] (0x29b22ade5e8d @ 13)
 1492 S> 0x29b22ade5e8b @   11 : 0e                LdaUndefined 
 1499 S> 0x29b22ade5e8c @   12 : a9                Return 
 1543 S> 0x29b22ade5e8d @   13 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x29b22ade5e91 @   17 : 96 04             JumpIfToBooleanTrue [4] (0x29b22ade5e95 @ 21)
 1564 S> 0x29b22ade5e93 @   19 : 0e                LdaUndefined 
 1571 S> 0x29b22ade5e94 @   20 : a9                Return 
 1605 S> 0x29b22ade5e95 @   21 : 0b 03             Ldar a0
 1620 E> 0x29b22ade5e97 @   23 : 32 02 03 06       SetNamedProperty <this>, [3], [6]
 1643 S> 0x29b22ade5e9b @   27 : 0b 04             Ldar a1
 1659 E> 0x29b22ade5e9d @   29 : 32 02 04 08       SetNamedProperty <this>, [4], [8]
 1685 S> 0x29b22ade5ea1 @   33 : 2d 02 00 0a       GetNamedProperty <this>, [0], [10]
         0x29b22ade5ea5 @   37 : c4                Star0 
         0x29b22ade5ea6 @   38 : 11                LdaTrue 
 1714 E> 0x29b22ade5ea7 @   39 : 32 fa 01 0c       SetNamedProperty r0, [1], [12]
         0x29b22ade5eab @   43 : 0e                LdaUndefined 
 1726 S> 0x29b22ade5eac @   44 : a9                Return 
Constant pool (size = 5)
0x29b22ade5eb1: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 5
           0: 0x29b22ade5721 <String[19]: #playerCommandsFlags>
           1: 0x29b22ade5999 <String[8]: #hasMoved>
           2: 0x29b22ade57c1 <String[5]: #alive>
           3: 0x29b22ade5761 <String[9]: #_position>
           4: 0x29b22ade5781 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 34)
0x29b22ade5ee9 <ByteArray[34]>
0x29b22ade5fa9 points to: [0x29b22ade6018]
=== [0x29b22ade6018] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 1792 S> 0x29b22ade6018 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x29b22ade601c @    4 : c3                Star1 
 1792 E> 0x29b22ade601d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x29b22ade6021 @    9 : c3                Star1 
         0x29b22ade6022 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x29b22ade6026 @   14 : c4                Star0 
         0x29b22ade6027 @   15 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x29b22ade602b @   19 : c3                Star1 
 1868 E> 0x29b22ade602c @   20 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x29b22ade6030 @   24 : c1                Star3 
         0x29b22ade6031 @   25 : 9e 0d             JumpIfUndefinedOrNull [13] (0x29b22ade603e @ 38)
 1878 E> 0x29b22ade6033 @   27 : 2d f7 02 08       GetNamedProperty r3, [2], [8]
         0x29b22ade6037 @   31 : c2                Star2 
 1880 E> 0x29b22ade6038 @   32 : 5d f8 f7 0a       CallProperty0 r2, r3, [10]
         0x29b22ade603c @   36 : 8a 03             Jump [3] (0x29b22ade603f @ 39)
         0x29b22ade603e @   38 : 0e                LdaUndefined 
         0x29b22ade603f @   39 : c2                Star2 
 1837 E> 0x29b22ade6040 @   40 : 62 f9 f8 0c       CallUndefinedReceiver1 r1, r2, [12]
         0x29b22ade6044 @   44 : 33 fa 03 0e       DefineNamedOwnProperty r0, [3], [14]
         0x29b22ade6048 @   48 : 0b fa             Ldar r0
 1904 S> 0x29b22ade604a @   50 : a9                Return 
Constant pool (size = 4)
0x29b22ade6051: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 4
           0: 0x29b22ade6081 <String[18]: #serializeForPlayer>
           1: 0x29b22ade5781 <String[10]: #_direction>
           2: 0x1b9e0fb501a9 <String[9]: #serialize>
           3: 0x35a6d5d039a1 <String[9]: #direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x29b22ade60c9 <ByteArray[21]>
0x29b22ade6189 points to: [0x29b22ade61f8]
=== [0x29b22ade61f8] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1946 S> 0x29b22ade61f8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x29b22ade61fc @    4 : c4                Star0 
 1976 E> 0x29b22ade61fd @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x29b22ade6201 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 2005 E> 0x29b22ade6205 @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x29b22ade6209 @   17 : 33 fa 02 07       DefineNamedOwnProperty r0, [2], [7]
 2040 E> 0x29b22ade620d @   21 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
         0x29b22ade6211 @   25 : c2                Star2 
 2050 E> 0x29b22ade6212 @   26 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
         0x29b22ade6216 @   30 : c3                Star1 
 2050 E> 0x29b22ade6217 @   31 : 5d f9 f8 0d       CallProperty0 r1, r2, [13]
         0x29b22ade621b @   35 : 33 fa 05 0f       DefineNamedOwnProperty r0, [5], [15]
 2087 E> 0x29b22ade621f @   39 : 2d 02 06 11       GetNamedProperty <this>, [6], [17]
         0x29b22ade6223 @   43 : 33 fa 06 13       DefineNamedOwnProperty r0, [6], [19]
 2123 E> 0x29b22ade6227 @   47 : 2d 02 07 15       GetNamedProperty <this>, [7], [21]
         0x29b22ade622b @   51 : c2                Star2 
 2134 E> 0x29b22ade622c @   52 : 2d f8 04 17       GetNamedProperty r2, [4], [23]
         0x29b22ade6230 @   56 : c3                Star1 
 2134 E> 0x29b22ade6231 @   57 : 5d f9 f8 19       CallProperty0 r1, r2, [25]
         0x29b22ade6235 @   61 : 33 fa 07 1b       DefineNamedOwnProperty r0, [7], [27]
         0x29b22ade6239 @   65 : 0b fa             Ldar r0
 2157 S> 0x29b22ade623b @   67 : a9                Return 
Constant pool (size = 8)
0x29b22ade6241: [FixedArray] in OldSpace
 - map: 0x35a6d5d012e1 <Map>
 - length: 8
           0: 0x29b22ade6291 <ObjectBoilerplateDescription[11]>
           1: 0x35a6d5d052d9 <String[2]: #id>
           2: 0x29b22ade62f9 <String[6]: #teamId>
           3: 0x29b22ade5761 <String[9]: #_position>
           4: 0x1b9e0fb501a9 <String[9]: #serialize>
           5: 0x35a6d5d05c19 <String[8]: #position>
           6: 0x29b22ade57c1 <String[5]: #alive>
           7: 0x29b22ade57a1 <String[10]: #spawnPoint>
Handler Table (size = 0)
Source Position Table (size = 28)
0x29b22ade6311 <ByteArray[28]>
Object boilerplate at 0x29b22ade6291: 
0x29b22ade6291: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x35a6d5d02059 <Map>
 - length: 11
           0: 8
           1: 0x35a6d5d052d9 <String[2]: #id>
           2: 0x35a6d5d01501 <Odd Oddball: uninitialized>
           3: 0x29b22ade62f9 <String[6]: #teamId>
           4: 0x35a6d5d01501 <Odd Oddball: uninitialized>
           5: 0x35a6d5d05c19 <String[8]: #position>
           6: 0x35a6d5d01501 <Odd Oddball: uninitialized>
           7: 0x29b22ade57c1 <String[5]: #alive>
           8: 0x35a6d5d01501 <Odd Oddball: uninitialized>
           9: 0x29b22ade57a1 <String[10]: #spawnPoint>
          10: 0x35a6d5d01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
