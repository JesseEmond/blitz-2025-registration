<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x26474f4a4dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x26474f4a4dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x26474f4a4dcc @    4 : c4                Star0 
 3181 S> 0x26474f4a4dcd @    5 : a9                Return 
Constant pool (size = 1)
0x26474f4a4dd1: [FixedArray] in OldSpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 1
           0: 0x26474f4a4de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x26474f4a6069 <ByteArray[7]>
0x26474f4a4de9 points to: [0x26474f4a4e58]
=== [0x26474f4a4e58] DISASSEMBLY ===
Parameter count 6
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
   10 E> 0x26474f4a4e58 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x26474f4a4e5b @    3 : 1a f8             PushContext r2
         0x26474f4a4e5d @    5 : 10                LdaTheHole 
         0x26474f4a4e5e @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x26474f4a4e60 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x26474f4a4e63 @   11 : c0                Star4 
   83 E> 0x26474f4a4e64 @   12 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x26474f4a4e68 @   16 : c1                Star3 
         0x26474f4a4e69 @   17 : 13 03             LdaConstant [3]
         0x26474f4a4e6b @   19 : be                Star6 
   98 E> 0x26474f4a4e6c @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x26474f4a4e70 @   24 : bd                Star7 
         0x26474f4a4e71 @   25 : 19 03 f5          Mov a0, r5
   83 E> 0x26474f4a4e74 @   28 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x26474f4a4e79 @   33 : 0e                LdaUndefined 
  166 E> 0x26474f4a4e7a @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  193 S> 0x26474f4a4e7e @   38 : 13 06             LdaConstant [6]
         0x26474f4a4e80 @   40 : c0                Star4 
  193 E> 0x26474f4a4e81 @   41 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
  193 E> 0x26474f4a4e85 @   45 : 25 02             StaCurrentContextSlot [2]
  241 S> 0x26474f4a4e87 @   47 : 13 07             LdaConstant [7]
         0x26474f4a4e89 @   49 : c0                Star4 
  241 E> 0x26474f4a4e8a @   50 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
         0x26474f4a4e8e @   54 : c4                Star0 
  304 E> 0x26474f4a4e8f @   55 : 2d fa 09 0d       GetNamedProperty r0, [9], [13]
         0x26474f4a4e93 @   59 : be                Star6 
         0x26474f4a4e94 @   60 : 80 0a 00 02       CreateClosure [10], [0], #2
         0x26474f4a4e98 @   64 : c1                Star3 
         0x26474f4a4e99 @   65 : 13 08             LdaConstant [8]
         0x26474f4a4e9b @   67 : c0                Star4 
         0x26474f4a4e9c @   68 : 80 0b 01 02       CreateClosure [11], [1], #2
         0x26474f4a4ea0 @   72 : bd                Star7 
         0x26474f4a4ea1 @   73 : 80 0c 02 02       CreateClosure [12], [2], #2
         0x26474f4a4ea5 @   77 : bc                Star8 
         0x26474f4a4ea6 @   78 : 80 0d 03 02       CreateClosure [13], [3], #2
         0x26474f4a4eaa @   82 : bb                Star9 
         0x26474f4a4eab @   83 : 80 0e 04 02       CreateClosure [14], [4], #2
         0x26474f4a4eaf @   87 : ba                Star10 
         0x26474f4a4eb0 @   88 : 19 f7 f5          Mov r3, r5
         0x26474f4a4eb3 @   91 : 65 28 00 f6 07    CallRuntime [DefineClass], r4-r10
         0x26474f4a4eb8 @   96 : c0                Star4 
         0x26474f4a4eb9 @   97 : 19 f5 f9          Mov r5, r1
 3088 S> 0x26474f4a4ebc @  100 : 0b f9             Ldar r1
 3115 E> 0x26474f4a4ebe @  102 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x26474f4a4ec2 @  106 : 0e                LdaUndefined 
 3178 S> 0x26474f4a4ec3 @  107 : a9                Return 
Constant pool (size = 15)
0x26474f4a4ec9: [FixedArray] in OldSpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 15
           0: 0x26474f4a4f51 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2b2fd1f45ab9 <String[6]: #Object>
           2: 0x2b2fd1f44c11 <String[14]: #defineProperty>
           3: 0x26474f4a4fc1 <String[10]: #__esModule>
           4: 0x26474f4a4fe1 <ObjectBoilerplateDescription[3]>
           5: 0x26474f4a5009 <String[18]: #SurveillanceThreat>
           6: 0x26474f4a5031 <String[18]: #../geometry/vector>
           7: 0x26474f4a5059 <String[8]: #./threat>
           8: 0x26474f4a5071 <FixedArray[7]>
           9: 0x26474f4a52a9 <String[6]: #Threat>
          10: 0x26474f4a52c1 <SharedFunctionInfo SurveillanceThreat>
          11: 0x26474f4a5579 <SharedFunctionInfo get_next_move>
          12: 0x26474f4a5771 <SharedFunctionInfo getSurveillancePath>
          13: 0x26474f4a5b21 <SharedFunctionInfo isPlayerInDirectLineOfSight>
          14: 0x26474f4a5d51 <SharedFunctionInfo anyObstacleBetweenPoints>
Handler Table (size = 0)
Source Position Table (size = 40)
0x26474f4a6011 <ByteArray[40]>
Object boilerplate at 0x26474f4a4fe1: 
0x26474f4a4fe1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b2fd1f42059 <Map>
 - length: 3
           0: 8
           1: 0x2b2fd1f46419 <String[5]: #value>
           2: 0x2b2fd1f41729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x26474f4a5071 has 7 elements:
0x26474f4a5071: [FixedArray] in OldSpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 7
           0: 7
           1: 0x26474f4a50b9 <DescriptorArray[4]>
           2: 0x2b2fd1f43301 <NumberDictionary[7]>
           3: 0x2b2fd1f41329 <FixedArray[0]>
           4: 0x26474f4a5179 <DescriptorArray[5]>
           5: 0x2b2fd1f43301 <NumberDictionary[7]>
           6: 0x2b2fd1f41329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x7 (7)
Element[1]
0x26474f4a50b9: [DescriptorArray] in OldSpace
 - map: 0x2b2fd1f47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2b2fd1f455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x011ee8ef4fe1 <AccessorInfo>
  [1]: 0x2b2fd1f458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x011ee8ef4f71 <AccessorInfo>
  [2]: 0x2b2fd1f45cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x011ee8ef5051 <AccessorInfo>
  [3]: 0x2b2fd1f465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x26474f4a5161 <ClassPositions 262, 3087>
Element[2]
0x2b2fd1f43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2b2fd1f41329: [FixedArray] in ReadOnlySpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 0
Element[4]
0x26474f4a5179: [DescriptorArray] in OldSpace
 - map: 0x2b2fd1f47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2b2fd1f44a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 3, attrs: [W_C]) @ 1
  [1]: 0x26474f4a5209: [String] in OldSpace: #get_next_move (const data descriptor, p: 1, attrs: [W_C]) @ 3
  [2]: 0x26474f4a5229: [String] in OldSpace: #getSurveillancePath (const data descriptor, p: 2, attrs: [W_C]) @ 4
  [3]: 0x26474f4a5251: [String] in OldSpace: #isPlayerInDirectLineOfSight (const data descriptor, p: 4, attrs: [W_C]) @ 5
  [4]: 0x26474f4a5281: [String] in OldSpace: #anyObstacleBetweenPoints (const data descriptor, p: 0, attrs: [W_C]) @ 6
Element[5]
0x2b2fd1f43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2b2fd1f41329: [FixedArray] in ReadOnlySpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 0
0x26474f4a52c1 points to: [0x26474f4a5330]
=== [0x26474f4a5330] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x26474f4a5330 @    0 : 19 fe f9          Mov <closure>, r1
  375 S> 0x26474f4a5333 @    3 : 0b f9             Ldar r1
         0x26474f4a5335 @    5 : 5a f7             GetSuperConstructor r3
  410 E> 0x26474f4a5337 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x26474f4a5339 @    9 : 0b fa             Ldar r0
         0x26474f4a533b @   11 : 19 03 f6          Mov a0, r4
         0x26474f4a533e @   14 : 19 04 f5          Mov a1, r5
         0x26474f4a5341 @   17 : 19 05 f4          Mov a2, r6
         0x26474f4a5344 @   20 : 19 06 f3          Mov a3, r7
  375 E> 0x26474f4a5347 @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x26474f4a534c @   28 : bc                Star8 
         0x26474f4a534d @   29 : 0b 02             Ldar <this>
         0x26474f4a534f @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x26474f4a5350 @   32 : 19 f2 02          Mov r8, <this>
  426 S> 0x26474f4a5353 @   35 : 0b 02             Ldar <this>
         0x26474f4a5355 @   37 : ab                ThrowSuperNotCalledIfHole 
         0x26474f4a5356 @   38 : 0f                LdaNull 
  455 E> 0x26474f4a5357 @   39 : 32 02 00 02       SetNamedProperty <this>, [0], [2]
  471 S> 0x26474f4a535b @   43 : 0b 02             Ldar <this>
         0x26474f4a535d @   45 : ab                ThrowSuperNotCalledIfHole 
         0x26474f4a535e @   46 : 0b 03             Ldar a0
  482 E> 0x26474f4a5360 @   48 : 32 02 01 04       SetNamedProperty <this>, [1], [4]
         0x26474f4a5364 @   52 : 0b 02             Ldar <this>
         0x26474f4a5366 @   54 : ab                ThrowSuperNotCalledIfHole 
  494 S> 0x26474f4a5367 @   55 : a9                Return 
Constant pool (size = 2)
0x26474f4a5369: [FixedArray] in OldSpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 2
           0: 0x26474f4a5389 <String[23]: #_lastTargetSeenPosition>
           1: 0x26474f4a53b1 <String[5]: #_grid>
Handler Table (size = 0)
Source Position Table (size = 23)
0x26474f4a53c9 <ByteArray[23]>
0x26474f4a5579 points to: [0x26474f4a55e8]
=== [0x26474f4a55e8] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  705 S> 0x26474f4a55e8 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
  710 E> 0x26474f4a55ec @    4 : 49 3c 00          ModSmi [60], [0]
         0x26474f4a55ef @    7 : c4                Star0 
         0x26474f4a55f0 @    8 : 0d 0a             LdaSmi [10]
  715 E> 0x26474f4a55f2 @   10 : 6d fa 03          TestLessThan r0, [3]
         0x26474f4a55f5 @   13 : 99 24             JumpIfFalse [36] (0x26474f4a5619 @ 49)
  735 S> 0x26474f4a55f7 @   15 : 17 02             LdaImmutableCurrentContextSlot [2]
  766 E> 0x26474f4a55f9 @   17 : aa 01             ThrowReferenceErrorIfHole [1]
         0x26474f4a55fb @   19 : c2                Star2 
  775 E> 0x26474f4a55fc @   20 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x26474f4a5600 @   24 : c2                Star2 
  782 E> 0x26474f4a5601 @   25 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
         0x26474f4a5605 @   29 : c3                Star1 
  801 E> 0x26474f4a5606 @   30 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
         0x26474f4a560a @   34 : c1                Star3 
  811 E> 0x26474f4a560b @   35 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x26474f4a560f @   39 : c1                Star3 
  782 E> 0x26474f4a5610 @   40 : 5e f9 f8 f7 0c    CallProperty1 r1, r2, r3, [12]
  764 E> 0x26474f4a5615 @   45 : 32 02 06 0e       SetNamedProperty <this>, [6], [14]
  852 S> 0x26474f4a5619 @   49 : 2d 02 07 10       GetNamedProperty <this>, [7], [16]
         0x26474f4a561d @   53 : c4                Star0 
  852 E> 0x26474f4a561e @   54 : 5e fa 02 03 12    CallProperty1 r0, <this>, a0, [18]
  879 S> 0x26474f4a5623 @   59 : a9                Return 
Constant pool (size = 8)
0x26474f4a5629: [FixedArray] in OldSpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 8
           0: 0x26474f4a5679 <String[4]: #tick>
           1: 0x26474f4a4fa9 <String[8]: #vector_1>
           2: 0x26474f4a5691 <String[6]: #Vector>
           3: 0x26474f4a56a9 <String[12]: #fromPosition>
           4: 0x2b2fd1f44939 <String[9]: #character>
           5: 0x2b2fd1f45c19 <String[8]: #position>
           6: 0x26474f4a5389 <String[23]: #_lastTargetSeenPosition>
           7: 0x26474f4a5229 <String[19]: #getSurveillancePath>
Handler Table (size = 0)
Source Position Table (size = 33)
0x26474f4a56c9 <ByteArray[33]>
0x26474f4a5771 points to: [0x26474f4a57e0]
=== [0x26474f4a57e0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  936 S> 0x26474f4a57e0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x26474f4a57e4 @    4 : 9b 04             JumpIfNotNull [4] (0x26474f4a57e8 @ 8)
  984 S> 0x26474f4a57e6 @    6 : 0f                LdaNull 
  996 S> 0x26474f4a57e7 @    7 : a9                Return 
 1034 S> 0x26474f4a57e8 @    8 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
         0x26474f4a57ec @   12 : c1                Star3 
 1050 E> 0x26474f4a57ed @   13 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x26474f4a57f1 @   17 : c2                Star2 
         0x26474f4a57f2 @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
 1058 E> 0x26474f4a57f4 @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x26474f4a57f6 @   22 : bf                Star5 
 1067 E> 0x26474f4a57f7 @   23 : 2d f5 04 06       GetNamedProperty r5, [4], [6]
         0x26474f4a57fb @   27 : bf                Star5 
 1074 E> 0x26474f4a57fc @   28 : 2d f5 05 08       GetNamedProperty r5, [5], [8]
         0x26474f4a5800 @   32 : c0                Star4 
 1092 E> 0x26474f4a5801 @   33 : 2d 02 06 0a       GetNamedProperty <this>, [6], [10]
         0x26474f4a5805 @   37 : be                Star6 
 1074 E> 0x26474f4a5806 @   38 : 5e f6 f5 f4 0c    CallProperty1 r4, r5, r6, [12]
         0x26474f4a580b @   43 : c0                Star4 
 1108 E> 0x26474f4a580c @   44 : 2d 02 00 0e       GetNamedProperty <this>, [0], [14]
         0x26474f4a5810 @   48 : bf                Star5 
 1050 E> 0x26474f4a5811 @   49 : 5f f8 f7 f6 f5 10 CallProperty2 r2, r3, r4, r5, [16]
         0x26474f4a5817 @   55 : c4                Star0 
 1142 S> 0x26474f4a5818 @   56 : 9a 0d             JumpIfNull [13] (0x26474f4a5825 @ 69)
 1168 E> 0x26474f4a581a @   58 : 2d fa 07 12       GetNamedProperty r0, [7], [18]
         0x26474f4a581e @   62 : c2                Star2 
         0x26474f4a581f @   63 : 0c                LdaZero 
 1175 E> 0x26474f4a5820 @   64 : 6c f8 14          TestEqualStrict r2, [20]
         0x26474f4a5823 @   67 : 99 15             JumpIfFalse [21] (0x26474f4a5838 @ 88)
 1196 S> 0x26474f4a5825 @   69 : 21 08 15          LdaGlobal [8], [21]
         0x26474f4a5828 @   72 : c1                Star3 
 1204 E> 0x26474f4a5829 @   73 : 2d f7 09 17       GetNamedProperty r3, [9], [23]
         0x26474f4a582d @   77 : c2                Star2 
         0x26474f4a582e @   78 : 13 0a             LdaConstant [10]
         0x26474f4a5830 @   80 : c0                Star4 
 1204 E> 0x26474f4a5831 @   81 : 5e f8 f7 f6 19    CallProperty1 r2, r3, r4, [25]
 1238 S> 0x26474f4a5836 @   86 : 0f                LdaNull 
 1250 S> 0x26474f4a5837 @   87 : a9                Return 
 1290 S> 0x26474f4a5838 @   88 : 0d 01             LdaSmi [1]
 1294 E> 0x26474f4a583a @   90 : 2f fa 1b          GetKeyedProperty r0, [27]
         0x26474f4a583d @   93 : c3                Star1 
 1307 S> 0x26474f4a583e @   94 : 97 47             JumpIfToBooleanFalse [71] (0x26474f4a5885 @ 165)
 1356 S> 0x26474f4a5840 @   96 : 2d f9 0b 1d       GetNamedProperty r1, [11], [29]
         0x26474f4a5844 @  100 : c2                Star2 
 1365 E> 0x26474f4a5845 @  101 : 2d 02 06 1f       GetNamedProperty <this>, [6], [31]
         0x26474f4a5849 @  105 : c1                Star3 
 1374 E> 0x26474f4a584a @  106 : 2d f7 0b 21       GetNamedProperty r3, [11], [33]
 1358 E> 0x26474f4a584e @  110 : 6e f8 23          TestGreaterThan r2, [35]
         0x26474f4a5851 @  113 : 99 05             JumpIfFalse [5] (0x26474f4a5856 @ 118)
 1395 S> 0x26474f4a5853 @  115 : 13 0c             LdaConstant [12]
 1410 S> 0x26474f4a5855 @  117 : a9                Return 
 1459 S> 0x26474f4a5856 @  118 : 2d f9 0b 1d       GetNamedProperty r1, [11], [29]
         0x26474f4a585a @  122 : c2                Star2 
 1468 E> 0x26474f4a585b @  123 : 2d 02 06 24       GetNamedProperty <this>, [6], [36]
         0x26474f4a585f @  127 : c1                Star3 
 1477 E> 0x26474f4a5860 @  128 : 2d f7 0b 26       GetNamedProperty r3, [11], [38]
 1461 E> 0x26474f4a5864 @  132 : 6d f8 28          TestLessThan r2, [40]
         0x26474f4a5867 @  135 : 99 05             JumpIfFalse [5] (0x26474f4a586c @ 140)
 1498 S> 0x26474f4a5869 @  137 : 13 0d             LdaConstant [13]
 1512 S> 0x26474f4a586b @  139 : a9                Return 
 1561 S> 0x26474f4a586c @  140 : 2d f9 0e 29       GetNamedProperty r1, [14], [41]
         0x26474f4a5870 @  144 : c2                Star2 
 1570 E> 0x26474f4a5871 @  145 : 2d 02 06 2b       GetNamedProperty <this>, [6], [43]
         0x26474f4a5875 @  149 : c1                Star3 
 1579 E> 0x26474f4a5876 @  150 : 2d f7 0e 2d       GetNamedProperty r3, [14], [45]
 1563 E> 0x26474f4a587a @  154 : 6e f8 2f          TestGreaterThan r2, [47]
         0x26474f4a587d @  157 : 99 05             JumpIfFalse [5] (0x26474f4a5882 @ 162)
 1600 S> 0x26474f4a587f @  159 : 13 0f             LdaConstant [15]
 1614 S> 0x26474f4a5881 @  161 : a9                Return 
 1664 S> 0x26474f4a5882 @  162 : 13 10             LdaConstant [16]
 1676 S> 0x26474f4a5884 @  164 : a9                Return 
 1709 S> 0x26474f4a5885 @  165 : 0f                LdaNull 
 1721 S> 0x26474f4a5886 @  166 : a9                Return 
Constant pool (size = 17)
0x26474f4a5889: [FixedArray] in OldSpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 17
           0: 0x26474f4a5389 <String[23]: #_lastTargetSeenPosition>
           1: 0x26474f4a5921 <String[15]: #pathfindingGrid>
           2: 0x26474f4a5941 <String[7]: #getPath>
           3: 0x26474f4a4fa9 <String[8]: #vector_1>
           4: 0x26474f4a5691 <String[6]: #Vector>
           5: 0x26474f4a56a9 <String[12]: #fromPosition>
           6: 0x2b2fd1f45c19 <String[8]: #position>
           7: 0x2b2fd1f455f9 <String[6]: #length>
           8: 0x2b2fd1f44a09 <String[7]: #console>
           9: 0x011ee8ecac99 <String[3]: #log>
          10: 0x26474f4a5971 <String[13]: #No path found>
          11: 0x011ee8ed8ac9 <String[1]: #x>
          12: 0x26474f4a59a9 <String[5]: #right>
          13: 0x26474f4a59c1 <String[4]: #left>
          14: 0x011ee8ed8ae1 <String[1]: #y>
          15: 0x26474f4a59f1 <String[4]: #down>
          16: 0x26474f4a5a09 <String[2]: #up>
Handler Table (size = 0)
Source Position Table (size = 108)
0x26474f4a5a21 <ByteArray[108]>
0x26474f4a5b21 points to: [0x26474f4a5b90]
=== [0x26474f4a5b90] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 1800 S> 0x26474f4a5b90 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x26474f4a5b92 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x26474f4a5b94 @    4 : c1                Star3 
 1809 E> 0x26474f4a5b95 @    5 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x26474f4a5b99 @    9 : c1                Star3 
 1816 E> 0x26474f4a5b9a @   10 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x26474f4a5b9e @   14 : c2                Star2 
 1835 E> 0x26474f4a5b9f @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x26474f4a5ba3 @   19 : c0                Star4 
 1845 E> 0x26474f4a5ba4 @   20 : 2d f6 04 06       GetNamedProperty r4, [4], [6]
         0x26474f4a5ba8 @   24 : c0                Star4 
 1816 E> 0x26474f4a5ba9 @   25 : 5e f8 f7 f6 08    CallProperty1 r2, r3, r4, [8]
         0x26474f4a5bae @   30 : c4                Star0 
 1887 S> 0x26474f4a5baf @   31 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x26474f4a5bb1 @   33 : aa 00             ThrowReferenceErrorIfHole [0]
         0x26474f4a5bb3 @   35 : c1                Star3 
 1896 E> 0x26474f4a5bb4 @   36 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x26474f4a5bb8 @   40 : c1                Star3 
 1903 E> 0x26474f4a5bb9 @   41 : 2d f7 02 0a       GetNamedProperty r3, [2], [10]
         0x26474f4a5bbd @   45 : c2                Star2 
 1921 E> 0x26474f4a5bbe @   46 : 2d 02 04 0c       GetNamedProperty <this>, [4], [12]
         0x26474f4a5bc2 @   50 : c0                Star4 
 1903 E> 0x26474f4a5bc3 @   51 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x26474f4a5bc8 @   56 : c3                Star1 
 1959 S> 0x26474f4a5bc9 @   57 : 2d fa 05 10       GetNamedProperty r0, [5], [16]
         0x26474f4a5bcd @   61 : c2                Star2 
 1980 E> 0x26474f4a5bce @   62 : 2d f9 05 12       GetNamedProperty r1, [5], [18]
 1961 E> 0x26474f4a5bd2 @   66 : 6c f8 14          TestEqualStrict r2, [20]
         0x26474f4a5bd5 @   69 : 99 1e             JumpIfFalse [30] (0x26474f4a5bf3 @ 99)
 2009 S> 0x26474f4a5bd7 @   71 : 2d 02 06 15       GetNamedProperty <this>, [6], [21]
         0x26474f4a5bdb @   75 : c2                Star2 
 2039 E> 0x26474f4a5bdc @   76 : 2d 02 07 17       GetNamedProperty <this>, [7], [23]
         0x26474f4a5be0 @   80 : c0                Star4 
         0x26474f4a5be1 @   81 : 13 08             LdaConstant [8]
         0x26474f4a5be3 @   83 : bd                Star7 
         0x26474f4a5be4 @   84 : 19 02 f7          Mov <this>, r3
         0x26474f4a5be7 @   87 : 19 f9 f5          Mov r1, r5
         0x26474f4a5bea @   90 : 19 fa f4          Mov r0, r6
 2009 E> 0x26474f4a5bed @   93 : 5c f8 f7 05 19    CallProperty r2, r3-r7, [25]
 2083 S> 0x26474f4a5bf2 @   98 : a9                Return 
 2121 S> 0x26474f4a5bf3 @   99 : 2d fa 08 1b       GetNamedProperty r0, [8], [27]
         0x26474f4a5bf7 @  103 : c2                Star2 
 2142 E> 0x26474f4a5bf8 @  104 : 2d f9 08 1d       GetNamedProperty r1, [8], [29]
 2123 E> 0x26474f4a5bfc @  108 : 6c f8 1f          TestEqualStrict r2, [31]
         0x26474f4a5bff @  111 : 99 1e             JumpIfFalse [30] (0x26474f4a5c1d @ 141)
 2171 S> 0x26474f4a5c01 @  113 : 2d 02 06 20       GetNamedProperty <this>, [6], [32]
         0x26474f4a5c05 @  117 : c2                Star2 
 2201 E> 0x26474f4a5c06 @  118 : 2d 02 07 22       GetNamedProperty <this>, [7], [34]
         0x26474f4a5c0a @  122 : c0                Star4 
         0x26474f4a5c0b @  123 : 13 05             LdaConstant [5]
         0x26474f4a5c0d @  125 : bd                Star7 
         0x26474f4a5c0e @  126 : 19 02 f7          Mov <this>, r3
         0x26474f4a5c11 @  129 : 19 f9 f5          Mov r1, r5
         0x26474f4a5c14 @  132 : 19 fa f4          Mov r0, r6
 2171 E> 0x26474f4a5c17 @  135 : 5c f8 f7 05 24    CallProperty r2, r3-r7, [36]
 2245 S> 0x26474f4a5c1c @  140 : a9                Return 
 2264 S> 0x26474f4a5c1d @  141 : 12                LdaFalse 
 2277 S> 0x26474f4a5c1e @  142 : a9                Return 
Constant pool (size = 9)
0x26474f4a5c21: [FixedArray] in OldSpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 9
           0: 0x26474f4a4fa9 <String[8]: #vector_1>
           1: 0x26474f4a5691 <String[6]: #Vector>
           2: 0x26474f4a56a9 <String[12]: #fromPosition>
           3: 0x2b2fd1f44939 <String[9]: #character>
           4: 0x2b2fd1f45c19 <String[8]: #position>
           5: 0x011ee8ed8ac9 <String[1]: #x>
           6: 0x26474f4a5281 <String[24]: #anyObstacleBetweenPoints>
           7: 0x26474f4a53b1 <String[5]: #_grid>
           8: 0x011ee8ed8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 65)
0x26474f4a5c79 <ByteArray[65]>
0x26474f4a5d51 points to: [0x26474f4a5dc0]
=== [0x26474f4a5dc0] DISASSEMBLY ===
Parameter count 5
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
 2346 S> 0x26474f4a5dc0 @    0 : 13 00             LdaConstant [0]
 2355 E> 0x26474f4a5dc2 @    2 : 6c 06 00          TestEqualStrict a3, [0]
         0x26474f4a5dc5 @    5 : 99 51             JumpIfFalse [81] (0x26474f4a5e16 @ 86)
 2403 S> 0x26474f4a5dc7 @    7 : 2d 04 00 01       GetNamedProperty a1, [0], [1]
         0x26474f4a5dcb @   11 : c0                Star4 
 2439 S> 0x26474f4a5dcc @   12 : 2d 05 00 03       GetNamedProperty a2, [0], [3]
         0x26474f4a5dd0 @   16 : bf                Star5 
 2475 S> 0x26474f4a5dd1 @   17 : 2d 04 01 05       GetNamedProperty a1, [1], [5]
         0x26474f4a5dd5 @   21 : be                Star6 
 2503 S> 0x26474f4a5dd6 @   22 : 21 02 07          LdaGlobal [2], [7]
         0x26474f4a5dd9 @   25 : bb                Star9 
 2508 E> 0x26474f4a5dda @   26 : 2d f1 03 09       GetNamedProperty r9, [3], [9]
         0x26474f4a5dde @   30 : bc                Star8 
 2508 E> 0x26474f4a5ddf @   31 : 5f f2 f1 f6 f5 0b CallProperty2 r8, r9, r4, r5, [11]
         0x26474f4a5de5 @   37 : bd                Star7 
 2540 S> 0x26474f4a5de6 @   38 : 21 02 07          LdaGlobal [2], [7]
         0x26474f4a5de9 @   41 : ba                Star10 
 2545 E> 0x26474f4a5dea @   42 : 2d f0 04 0d       GetNamedProperty r10, [4], [13]
         0x26474f4a5dee @   46 : bb                Star9 
 2545 E> 0x26474f4a5def @   47 : 5f f1 f0 f6 f5 0f CallProperty2 r9, r10, r4, r5, [15]
 2537 E> 0x26474f4a5df5 @   53 : 6f f3 11          TestLessThanOrEqual r7, [17]
         0x26474f4a5df8 @   56 : 99 1e             JumpIfFalse [30] (0x26474f4a5e16 @ 86)
 2595 S> 0x26474f4a5dfa @   58 : 0b f3             Ldar r7
 2602 E> 0x26474f4a5dfc @   60 : 2f 03 12          GetKeyedProperty a0, [18]
         0x26474f4a5dff @   63 : bc                Star8 
         0x26474f4a5e00 @   64 : 0b f4             Ldar r6
 2605 E> 0x26474f4a5e02 @   66 : 2f f2 14          GetKeyedProperty r8, [20]
         0x26474f4a5e05 @   69 : bc                Star8 
         0x26474f4a5e06 @   70 : 0c                LdaZero 
 2614 E> 0x26474f4a5e07 @   71 : 6c f2 16          TestEqualStrict r8, [22]
         0x26474f4a5e0a @   74 : 99 04             JumpIfFalse [4] (0x26474f4a5e0e @ 78)
 2643 S> 0x26474f4a5e0c @   76 : 11                LdaTrue 
 2655 S> 0x26474f4a5e0d @   77 : a9                Return 
 2573 S> 0x26474f4a5e0e @   78 : 0b f3             Ldar r7
         0x26474f4a5e10 @   80 : 51 17             Inc [23]
         0x26474f4a5e12 @   82 : bd                Star7 
 2490 E> 0x26474f4a5e13 @   83 : 89 2d 00          JumpLoop [45], [0] (0x26474f4a5de6 @ 38)
 2706 S> 0x26474f4a5e16 @   86 : 13 01             LdaConstant [1]
 2715 E> 0x26474f4a5e18 @   88 : 6c 06 18          TestEqualStrict a3, [24]
         0x26474f4a5e1b @   91 : 99 51             JumpIfFalse [81] (0x26474f4a5e6c @ 172)
 2763 S> 0x26474f4a5e1d @   93 : 2d 04 01 05       GetNamedProperty a1, [1], [5]
         0x26474f4a5e21 @   97 : c4                Star0 
 2799 S> 0x26474f4a5e22 @   98 : 2d 05 01 19       GetNamedProperty a2, [1], [25]
         0x26474f4a5e26 @  102 : c3                Star1 
 2835 S> 0x26474f4a5e27 @  103 : 2d 04 00 01       GetNamedProperty a1, [0], [1]
         0x26474f4a5e2b @  107 : c2                Star2 
 2863 S> 0x26474f4a5e2c @  108 : 21 02 07          LdaGlobal [2], [7]
         0x26474f4a5e2f @  111 : bb                Star9 
 2868 E> 0x26474f4a5e30 @  112 : 2d f1 03 09       GetNamedProperty r9, [3], [9]
         0x26474f4a5e34 @  116 : bc                Star8 
 2868 E> 0x26474f4a5e35 @  117 : 5f f2 f1 fa f9 1b CallProperty2 r8, r9, r0, r1, [27]
         0x26474f4a5e3b @  123 : c1                Star3 
 2900 S> 0x26474f4a5e3c @  124 : 21 02 07          LdaGlobal [2], [7]
         0x26474f4a5e3f @  127 : ba                Star10 
 2905 E> 0x26474f4a5e40 @  128 : 2d f0 04 0d       GetNamedProperty r10, [4], [13]
         0x26474f4a5e44 @  132 : bb                Star9 
 2905 E> 0x26474f4a5e45 @  133 : 5f f1 f0 fa f9 1d CallProperty2 r9, r10, r0, r1, [29]
 2897 E> 0x26474f4a5e4b @  139 : 6f f7 1f          TestLessThanOrEqual r3, [31]
         0x26474f4a5e4e @  142 : 99 1e             JumpIfFalse [30] (0x26474f4a5e6c @ 172)
 2955 S> 0x26474f4a5e50 @  144 : 0b f8             Ldar r2
 2962 E> 0x26474f4a5e52 @  146 : 2f 03 20          GetKeyedProperty a0, [32]
         0x26474f4a5e55 @  149 : bc                Star8 
         0x26474f4a5e56 @  150 : 0b f7             Ldar r3
 2970 E> 0x26474f4a5e58 @  152 : 2f f2 22          GetKeyedProperty r8, [34]
         0x26474f4a5e5b @  155 : bc                Star8 
         0x26474f4a5e5c @  156 : 0c                LdaZero 
 2974 E> 0x26474f4a5e5d @  157 : 6c f2 24          TestEqualStrict r8, [36]
         0x26474f4a5e60 @  160 : 99 04             JumpIfFalse [4] (0x26474f4a5e64 @ 164)
 3003 S> 0x26474f4a5e62 @  162 : 11                LdaTrue 
 3015 S> 0x26474f4a5e63 @  163 : a9                Return 
 2933 S> 0x26474f4a5e64 @  164 : 0b f7             Ldar r3
         0x26474f4a5e66 @  166 : 51 25             Inc [37]
         0x26474f4a5e68 @  168 : c1                Star3 
 2850 E> 0x26474f4a5e69 @  169 : 89 2d 00          JumpLoop [45], [0] (0x26474f4a5e3c @ 124)
 3066 S> 0x26474f4a5e6c @  172 : 12                LdaFalse 
 3079 S> 0x26474f4a5e6d @  173 : a9                Return 
Constant pool (size = 5)
0x26474f4a5e71: [FixedArray] in OldSpace
 - map: 0x2b2fd1f412e1 <Map>
 - length: 5
           0: 0x011ee8ed8ac9 <String[1]: #x>
           1: 0x011ee8ed8ae1 <String[1]: #y>
           2: 0x011ee8eda991 <String[4]: #Math>
           3: 0x011ee8eda149 <String[3]: #min>
           4: 0x011ee8eda181 <String[3]: #max>
Handler Table (size = 0)
Source Position Table (size = 104)
0x26474f4a5ef1 <ByteArray[104]>
<< OUTPUTTING DISASSEMBLY END >>
