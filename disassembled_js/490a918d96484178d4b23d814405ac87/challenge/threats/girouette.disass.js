<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2d9c693e4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2d9c693e4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2d9c693e4dbc @    4 : c4                Star0 
  648 S> 0x2d9c693e4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x2d9c693e4dc1: [FixedArray] in OldSpace
 - map: 0x02bb4aa012e1 <Map>
 - length: 1
           0: 0x2d9c693e4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2d9c693e55a1 <ByteArray[7]>
0x2d9c693e4dd9 points to: [0x2d9c693e4e48]
=== [0x2d9c693e4e48] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   76 S> 0x2d9c693e4e48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x2d9c693e4e4b @    3 : c1                Star3 
   83 E> 0x2d9c693e4e4c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x2d9c693e4e50 @    8 : c2                Star2 
         0x2d9c693e4e51 @    9 : 13 02             LdaConstant [2]
         0x2d9c693e4e53 @   11 : bf                Star5 
   98 E> 0x2d9c693e4e54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x2d9c693e4e58 @   16 : be                Star6 
         0x2d9c693e4e59 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x2d9c693e4e5c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x2d9c693e4e61 @   25 : 0e                LdaUndefined 
  163 E> 0x2d9c693e4e62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  190 S> 0x2d9c693e4e66 @   30 : 13 05             LdaConstant [5]
         0x2d9c693e4e68 @   32 : c1                Star3 
  190 E> 0x2d9c693e4e69 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x2d9c693e4e6d @   37 : c4                Star0 
  250 E> 0x2d9c693e4e6e @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x2d9c693e4e72 @   42 : bf                Star5 
         0x2d9c693e4e73 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x2d9c693e4e77 @   47 : c2                Star2 
         0x2d9c693e4e78 @   48 : 13 06             LdaConstant [6]
         0x2d9c693e4e7a @   50 : c1                Star3 
         0x2d9c693e4e7b @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x2d9c693e4e7f @   55 : be                Star6 
         0x2d9c693e4e80 @   56 : 19 f8 f6          Mov r2, r4
         0x2d9c693e4e83 @   59 : 65 28 00 f7 04    CallRuntime [DefineClass], r3-r6
         0x2d9c693e4e88 @   64 : c1                Star3 
         0x2d9c693e4e89 @   65 : 19 f6 f9          Mov r4, r1
  564 S> 0x2d9c693e4e8c @   68 : 0b f9             Ldar r1
  588 E> 0x2d9c693e4e8e @   70 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x2d9c693e4e92 @   74 : 0e                LdaUndefined 
  645 S> 0x2d9c693e4e93 @   75 : a9                Return 
Constant pool (size = 10)
0x2d9c693e4e99: [FixedArray] in OldSpace
 - map: 0x02bb4aa012e1 <Map>
 - length: 10
           0: 0x02bb4aa05ab9 <String[6]: #Object>
           1: 0x02bb4aa04c11 <String[14]: #defineProperty>
           2: 0x2d9c693e4ef9 <String[10]: #__esModule>
           3: 0x2d9c693e4f19 <ObjectBoilerplateDescription[3]>
           4: 0x2d9c693e4f41 <String[15]: #GirouetteThreat>
           5: 0x2d9c693e4f61 <String[8]: #./threat>
           6: 0x2d9c693e4f79 <FixedArray[7]>
           7: 0x2d9c693e50e9 <String[6]: #Threat>
           8: 0x2d9c693e5101 <SharedFunctionInfo GirouetteThreat>
           9: 0x2d9c693e5319 <SharedFunctionInfo get_next_move>
Handler Table (size = 0)
Source Position Table (size = 31)
0x2d9c693e5509 <ByteArray[31]>
Boilerplate at 0x2d9c693e4f19: 
0x2d9c693e4f19: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x02bb4aa02059 <Map>
 - length: 3
           0: 8
           1: 0x02bb4aa06419 <String[5]: #value>
           2: 0x02bb4aa01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x2d9c693e4f79 has 7 elements:
0x2d9c693e4f79: [FixedArray] in OldSpace
 - map: 0x02bb4aa012e1 <Map>
 - length: 7
           0: 4
           1: 0x2d9c693e4fc1 <DescriptorArray[4]>
           2: 0x02bb4aa03301 <NumberDictionary[7]>
           3: 0x02bb4aa01329 <FixedArray[0]>
           4: 0x2d9c693e5081 <DescriptorArray[2]>
           5: 0x02bb4aa03301 <NumberDictionary[7]>
           6: 0x02bb4aa01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x4 (4)
Element[1]
0x2d9c693e4fc1: [DescriptorArray] in OldSpace
 - map: 0x02bb4aa07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2bb4aa055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x2c2e5db34fe1 <AccessorInfo>
  [1]: 0x2bb4aa058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x2c2e5db34f71 <AccessorInfo>
  [2]: 0x2bb4aa05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x2c2e5db35051 <AccessorInfo>
  [3]: 0x02bb4aa065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x2d9c693e5069 <ClassPositions 211, 563>
Element[2]
0x2bb4aa03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2bb4aa01329: [FixedArray] in ReadOnlySpace
 - map: 0x02bb4aa012e1 <Map>
 - length: 0
Element[4]
0x2d9c693e5081: [DescriptorArray] in OldSpace
 - map: 0x02bb4aa07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2bb4aa04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x2d9c693e50c9: [String] in OldSpace: #get_next_move (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[5]
0x2bb4aa03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2bb4aa01329: [FixedArray] in ReadOnlySpace
 - map: 0x02bb4aa012e1 <Map>
 - length: 0
0x2d9c693e5101 points to: [0x2d9c693e5170]
=== [0x2d9c693e5170] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x2d9c693e5170 @    0 : 19 fe f9          Mov <closure>, r1
  321 S> 0x2d9c693e5173 @    3 : 0b f9             Ldar r1
         0x2d9c693e5175 @    5 : 5a f7             GetSuperConstructor r3
  356 E> 0x2d9c693e5177 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x2d9c693e5179 @    9 : 0b fa             Ldar r0
         0x2d9c693e517b @   11 : 19 03 f6          Mov a0, r4
         0x2d9c693e517e @   14 : 19 04 f5          Mov a1, r5
         0x2d9c693e5181 @   17 : 19 05 f4          Mov a2, r6
         0x2d9c693e5184 @   20 : 19 06 f3          Mov a3, r7
  321 E> 0x2d9c693e5187 @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x2d9c693e518c @   28 : bc                Star8 
         0x2d9c693e518d @   29 : 0b 02             Ldar <this>
         0x2d9c693e518f @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x2d9c693e5190 @   32 : 19 f2 02          Mov r8, <this>
         0x2d9c693e5193 @   35 : 0b 02             Ldar <this>
         0x2d9c693e5195 @   37 : ab                ThrowSuperNotCalledIfHole 
  368 S> 0x2d9c693e5196 @   38 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x2d9c693e5199 <ByteArray[15]>
0x2d9c693e5319 points to: [0x2d9c693e5388]
=== [0x2d9c693e5388] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  437 S> 0x2d9c693e5388 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2d9c693e538c @    4 : c3                Star1 
  437 E> 0x2d9c693e538d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2d9c693e5391 @    9 : c4                Star0 
  496 S> 0x2d9c693e5392 @   10 : 21 01 04          LdaGlobal [1], [4]
         0x2d9c693e5395 @   13 : c1                Star3 
  501 E> 0x2d9c693e5396 @   14 : 2d f7 02 06       GetNamedProperty r3, [2], [6]
         0x2d9c693e539a @   18 : c2                Star2 
  512 E> 0x2d9c693e539b @   19 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
         0x2d9c693e539f @   23 : c0                Star4 
  546 E> 0x2d9c693e53a0 @   24 : 2d fa 04 0b       GetNamedProperty r0, [4], [11]
  525 E> 0x2d9c693e53a4 @   28 : 3b f6 08          Mul r4, [8]
         0x2d9c693e53a7 @   31 : c0                Star4 
  501 E> 0x2d9c693e53a8 @   32 : 5e f8 f7 f6 0d    CallProperty1 r2, r3, r4, [13]
  495 E> 0x2d9c693e53ad @   37 : 2f fa 0f          GetKeyedProperty r0, [15]
  555 S> 0x2d9c693e53b0 @   40 : a9                Return 
Constant pool (size = 5)
0x2d9c693e53b9: [FixedArray] in OldSpace
 - map: 0x02bb4aa012e1 <Map>
 - length: 5
           0: 0x2d9c693e53f1 <String[21]: #getPossibleDirections>
           1: 0x2c2e5db1a991 <String[4]: #Math>
           2: 0x02bb4aa03ae9 <String[5]: #floor>
           3: 0x2d9c693e5431 <String[12]: #randomNumber>
           4: 0x02bb4aa055f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 27)
0x2d9c693e5451 <ByteArray[27]>
<< OUTPUTTING DISASSEMBLY END >>
