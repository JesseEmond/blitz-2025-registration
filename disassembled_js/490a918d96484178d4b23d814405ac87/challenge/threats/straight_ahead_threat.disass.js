<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x91f061a4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x91f061a4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x91f061a4dbc @    4 : c4                Star0 
  837 S> 0x91f061a4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x91f061a4dc1: [FixedArray] in OldSpace
 - map: 0x3615bc5012e1 <Map>
 - length: 1
           0: 0x091f061a4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x091f061a5789 <ByteArray[7]>
0x091f061a4dd9 points to: [0x91f061a4e48]
=== [0x91f061a4e48] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   76 S> 0x91f061a4e48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x91f061a4e4b @    3 : c1                Star3 
   83 E> 0x91f061a4e4c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x91f061a4e50 @    8 : c2                Star2 
         0x91f061a4e51 @    9 : 13 02             LdaConstant [2]
         0x91f061a4e53 @   11 : bf                Star5 
   98 E> 0x91f061a4e54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x91f061a4e58 @   16 : be                Star6 
         0x91f061a4e59 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x91f061a4e5c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x91f061a4e61 @   25 : 0e                LdaUndefined 
  167 E> 0x91f061a4e62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  194 S> 0x91f061a4e66 @   30 : 13 05             LdaConstant [5]
         0x91f061a4e68 @   32 : c1                Star3 
  194 E> 0x91f061a4e69 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x91f061a4e6d @   37 : c4                Star0 
  258 E> 0x91f061a4e6e @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x91f061a4e72 @   42 : bf                Star5 
         0x91f061a4e73 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x91f061a4e77 @   47 : c2                Star2 
         0x91f061a4e78 @   48 : 13 06             LdaConstant [6]
         0x91f061a4e7a @   50 : c1                Star3 
         0x91f061a4e7b @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x91f061a4e7f @   55 : be                Star6 
         0x91f061a4e80 @   56 : 19 f8 f6          Mov r2, r4
         0x91f061a4e83 @   59 : 65 28 00 f7 04    CallRuntime [DefineClass], r3-r6
         0x91f061a4e88 @   64 : c1                Star3 
         0x91f061a4e89 @   65 : 19 f6 f9          Mov r4, r1
  733 S> 0x91f061a4e8c @   68 : 0b f9             Ldar r1
  761 E> 0x91f061a4e8e @   70 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x91f061a4e92 @   74 : 0e                LdaUndefined 
  834 S> 0x91f061a4e93 @   75 : a9                Return 
Constant pool (size = 10)
0x91f061a4e99: [FixedArray] in OldSpace
 - map: 0x3615bc5012e1 <Map>
 - length: 10
           0: 0x3615bc505ab9 <String[6]: #Object>
           1: 0x3615bc504c11 <String[14]: #defineProperty>
           2: 0x091f061a4ef9 <String[10]: #__esModule>
           3: 0x091f061a4f19 <ObjectBoilerplateDescription[3]>
           4: 0x091f061a4f41 <String[19]: #StraightAheadThreat>
           5: 0x091f061a4f69 <String[8]: #./threat>
           6: 0x091f061a4f81 <FixedArray[7]>
           7: 0x091f061a50f1 <String[6]: #Threat>
           8: 0x091f061a5109 <SharedFunctionInfo StraightAheadThreat>
           9: 0x091f061a5339 <SharedFunctionInfo get_next_move>
Handler Table (size = 0)
Source Position Table (size = 31)
0x091f061a56f1 <ByteArray[31]>
Boilerplate at 0x091f061a4f19: 
0x91f061a4f19: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3615bc502059 <Map>
 - length: 3
           0: 8
           1: 0x3615bc506419 <String[5]: #value>
           2: 0x3615bc501729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x091f061a4f81 has 7 elements:
0x91f061a4f81: [FixedArray] in OldSpace
 - map: 0x3615bc5012e1 <Map>
 - length: 7
           0: 4
           1: 0x091f061a4fc9 <DescriptorArray[4]>
           2: 0x3615bc503301 <NumberDictionary[7]>
           3: 0x3615bc501329 <FixedArray[0]>
           4: 0x091f061a5089 <DescriptorArray[2]>
           5: 0x3615bc503301 <NumberDictionary[7]>
           6: 0x3615bc501329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x4 (4)
Element[1]
0x91f061a4fc9: [DescriptorArray] in OldSpace
 - map: 0x3615bc507761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3615bc5055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x24ff1c1b4fe1 <AccessorInfo>
  [1]: 0x3615bc5058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 1, attrs: [__C]) @ 0x24ff1c1b4f71 <AccessorInfo>
  [2]: 0x3615bc505cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x24ff1c1b5051 <AccessorInfo>
  [3]: 0x3615bc5065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x091f061a5071 <ClassPositions 215, 732>
Element[2]
0x3615bc503301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3615bc501329: [FixedArray] in ReadOnlySpace
 - map: 0x3615bc5012e1 <Map>
 - length: 0
Element[4]
0x91f061a5089: [DescriptorArray] in OldSpace
 - map: 0x3615bc507761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3615bc504a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x91f061a50d1: [String] in OldSpace: #get_next_move (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[5]
0x3615bc503301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3615bc501329: [FixedArray] in ReadOnlySpace
 - map: 0x3615bc5012e1 <Map>
 - length: 0
0x091f061a5109 points to: [0x91f061a5178]
=== [0x91f061a5178] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x91f061a5178 @    0 : 19 fe f9          Mov <closure>, r1
  329 S> 0x91f061a517b @    3 : 0b f9             Ldar r1
         0x91f061a517d @    5 : 5a f7             GetSuperConstructor r3
  364 E> 0x91f061a517f @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x91f061a5181 @    9 : 0b fa             Ldar r0
         0x91f061a5183 @   11 : 19 03 f6          Mov a0, r4
         0x91f061a5186 @   14 : 19 04 f5          Mov a1, r5
         0x91f061a5189 @   17 : 19 05 f4          Mov a2, r6
         0x91f061a518c @   20 : 19 06 f3          Mov a3, r7
  329 E> 0x91f061a518f @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x91f061a5194 @   28 : bc                Star8 
         0x91f061a5195 @   29 : 0b 02             Ldar <this>
         0x91f061a5197 @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x91f061a5198 @   32 : 19 f2 02          Mov r8, <this>
         0x91f061a519b @   35 : 0b 02             Ldar <this>
         0x91f061a519d @   37 : ab                ThrowSuperNotCalledIfHole 
  376 S> 0x91f061a519e @   38 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x091f061a51a1 <ByteArray[15]>
0x091f061a5339 points to: [0x91f061a53a8]
=== [0x91f061a53a8] DISASSEMBLY ===
Parameter count 1
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  395 E> 0x91f061a53a8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x91f061a53ab @    3 : 1a f9             PushContext r1
         0x91f061a53ad @    5 : 0b 02             Ldar <this>
         0x91f061a53af @    7 : 25 02             StaCurrentContextSlot [2]
  435 S> 0x91f061a53b1 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x91f061a53b3 @   11 : c1                Star3 
  440 E> 0x91f061a53b4 @   12 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x91f061a53b8 @   16 : c2                Star2 
  440 E> 0x91f061a53b9 @   17 : 5d f8 f7 02       CallProperty0 r2, r3, [2]
         0x91f061a53bd @   21 : c4                Star0 
  473 S> 0x91f061a53be @   22 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x91f061a53c0 @   24 : c0                Star4 
  482 E> 0x91f061a53c1 @   25 : 2d f6 01 04       GetNamedProperty r4, [1], [4]
         0x91f061a53c5 @   29 : c1                Star3 
  482 E> 0x91f061a53c6 @   30 : 5d f7 f6 06       CallProperty0 r3, r4, [6]
         0x91f061a53ca @   34 : c1                Star3 
  505 E> 0x91f061a53cb @   35 : 2d f7 02 08       GetNamedProperty r3, [2], [8]
         0x91f061a53cf @   39 : c2                Star2 
         0x91f061a53d0 @   40 : 80 03 00 02       CreateClosure [3], [0], #2
         0x91f061a53d4 @   44 : c0                Star4 
  506 E> 0x91f061a53d5 @   45 : 5e f8 f7 f6 0a    CallProperty1 r2, r3, r4, [10]
         0x91f061a53da @   50 : 9c 0a             JumpIfUndefined [10] (0x91f061a53e4 @ 60)
  569 S> 0x91f061a53dc @   52 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x91f061a53de @   54 : c2                Star2 
  581 E> 0x91f061a53df @   55 : 2d f8 04 0c       GetNamedProperty r2, [4], [12]
  591 S> 0x91f061a53e3 @   59 : a9                Return 
  655 S> 0x91f061a53e4 @   60 : 21 05 0e          LdaGlobal [5], [14]
         0x91f061a53e7 @   63 : c0                Star4 
  660 E> 0x91f061a53e8 @   64 : 2d f6 06 10       GetNamedProperty r4, [6], [16]
         0x91f061a53ec @   68 : c1                Star3 
         0x91f061a53ed @   69 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x91f061a53ef @   71 : bf                Star5 
  671 E> 0x91f061a53f0 @   72 : 2d f5 07 13       GetNamedProperty r5, [7], [19]
         0x91f061a53f4 @   76 : bf                Star5 
  705 E> 0x91f061a53f5 @   77 : 2d fa 08 15       GetNamedProperty r0, [8], [21]
  684 E> 0x91f061a53f9 @   81 : 3b f5 12          Mul r5, [18]
         0x91f061a53fc @   84 : bf                Star5 
  660 E> 0x91f061a53fd @   85 : 5e f7 f6 f5 17    CallProperty1 r3, r4, r5, [23]
  654 E> 0x91f061a5402 @   90 : 2f fa 19          GetKeyedProperty r0, [25]
  714 S> 0x91f061a5405 @   93 : a9                Return 
Constant pool (size = 9)
0x91f061a5409: [FixedArray] in OldSpace
 - map: 0x3615bc5012e1 <Map>
 - length: 9
           0: 0x091f061a5461 <ScopeInfo FUNCTION_SCOPE>
           1: 0x091f061a54b9 <String[21]: #getPossibleDirections>
           2: 0x24ff1c18a009 <String[4]: #find>
           3: 0x091f061a54f9 <SharedFunctionInfo>
           4: 0x3615bc5039a1 <String[9]: #direction>
           5: 0x24ff1c19a991 <String[4]: #Math>
           6: 0x3615bc503ae9 <String[5]: #floor>
           7: 0x091f061a5631 <String[12]: #randomNumber>
           8: 0x3615bc5055f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 49)
0x091f061a5651 <ByteArray[49]>
0x091f061a54f9 points to: [0x91f061a5568]
=== [0x91f061a5568] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
  520 S> 0x91f061a5568 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x91f061a556a @    2 : c3                Star1 
  529 E> 0x91f061a556b @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
  520 E> 0x91f061a556f @    7 : 6c 03 02          TestEqualStrict a0, [2]
  538 S> 0x91f061a5572 @   10 : a9                Return 
Constant pool (size = 1)
0x91f061a5579: [FixedArray] in OldSpace
 - map: 0x3615bc5012e1 <Map>
 - length: 1
           0: 0x3615bc5039a1 <String[9]: #direction>
Handler Table (size = 0)
Source Position Table (size = 11)
0x091f061a5591 <ByteArray[11]>
<< OUTPUTTING DISASSEMBLY END >>
