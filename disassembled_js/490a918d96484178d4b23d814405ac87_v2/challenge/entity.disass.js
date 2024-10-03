<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3b98f8e4dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3b98f8e4dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3b98f8e4dcc @    4 : c4                Star0 
  488 S> 0x3b98f8e4dcd @    5 : a9                Return 
Constant pool (size = 1)
0x3b98f8e4dd1: [FixedArray] in OldSpace
 - map: 0x23f0a7b412e1 <Map>
 - length: 1
           0: 0x03b98f8e4de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x03b98f8e56f1 <ByteArray[7]>
0x03b98f8e4de9 points to: [0x3b98f8e4e58]
=== [0x3b98f8e4e58] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0x3b98f8e4e58 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3b98f8e4e5b @    3 : c2                Star2 
   83 E> 0x3b98f8e4e5c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x3b98f8e4e60 @    8 : c3                Star1 
         0x3b98f8e4e61 @    9 : 13 02             LdaConstant [2]
         0x3b98f8e4e63 @   11 : c0                Star4 
   98 E> 0x3b98f8e4e64 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x3b98f8e4e68 @   16 : bf                Star5 
         0x3b98f8e4e69 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x3b98f8e4e6c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x3b98f8e4e71 @   25 : 0e                LdaUndefined 
  154 E> 0x3b98f8e4e72 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x3b98f8e4e76 @   30 : 81 05             CreateBlockContext [5]
         0x3b98f8e4e78 @   32 : 1a f9             PushContext r1
         0x3b98f8e4e7a @   34 : 10                LdaTheHole 
         0x3b98f8e4e7b @   35 : 25 02             StaCurrentContextSlot [2]
         0x3b98f8e4e7d @   37 : 10                LdaTheHole 
         0x3b98f8e4e7e @   38 : bf                Star5 
         0x3b98f8e4e7f @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0x3b98f8e4e83 @   43 : c2                Star2 
         0x3b98f8e4e84 @   44 : 13 06             LdaConstant [6]
         0x3b98f8e4e86 @   46 : c1                Star3 
         0x3b98f8e4e87 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0x3b98f8e4e8b @   51 : be                Star6 
         0x3b98f8e4e8c @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0x3b98f8e4e90 @   56 : bd                Star7 
         0x3b98f8e4e91 @   57 : 19 f8 f6          Mov r2, r4
         0x3b98f8e4e94 @   60 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0x3b98f8e4e99 @   65 : c1                Star3 
         0x3b98f8e4e9a @   66 : 0b f6             Ldar r4
         0x3b98f8e4e9c @   68 : 25 02             StaCurrentContextSlot [2]
         0x3b98f8e4e9e @   70 : 1b f9             PopContext r1
         0x3b98f8e4ea0 @   72 : c4                Star0 
  404 S> 0x3b98f8e4ea1 @   73 : 0b fa             Ldar r0
  419 E> 0x3b98f8e4ea3 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  429 S> 0x3b98f8e4ea7 @   79 : 0d 01             LdaSmi [1]
  445 E> 0x3b98f8e4ea9 @   81 : 32 fa 0a 09       SetNamedProperty r0, [10], [9]
         0x3b98f8e4ead @   85 : 0e                LdaUndefined 
  485 S> 0x3b98f8e4eae @   86 : a9                Return 
Constant pool (size = 11)
0x3b98f8e4eb1: [FixedArray] in OldSpace
 - map: 0x23f0a7b412e1 <Map>
 - length: 11
           0: 0x23f0a7b45ab9 <String[6]: #Object>
           1: 0x23f0a7b44c11 <String[14]: #defineProperty>
           2: 0x03b98f8e4f19 <String[10]: #__esModule>
           3: 0x03b98f8e4f39 <ObjectBoilerplateDescription[3]>
           4: 0x03b98f8e4f61 <String[6]: #Entity>
           5: 0x03b98f8e4f79 <ScopeInfo CLASS_SCOPE>
           6: 0x03b98f8e4fb9 <FixedArray[7]>
           7: 0x03b98f8e5161 <SharedFunctionInfo Entity>
           8: 0x03b98f8e5399 <SharedFunctionInfo serialize>
           9: 0x03b98f8e54e9 <SharedFunctionInfo generate_id>
          10: 0x03b98f8e55a1 <String[8]: #id_index>
Handler Table (size = 0)
Source Position Table (size = 28)
0x03b98f8e5661 <ByteArray[28]>
Object boilerplate at 0x03b98f8e4f39: 
0x3b98f8e4f39: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x23f0a7b42059 <Map>
 - length: 3
           0: 8
           1: 0x23f0a7b46419 <String[5]: #value>
           2: 0x23f0a7b41729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x03b98f8e4fb9 has 7 elements:
0x3b98f8e4fb9: [FixedArray] in OldSpace
 - map: 0x23f0a7b412e1 <Map>
 - length: 7
           0: 5
           1: 0x03b98f8e5001 <DescriptorArray[5]>
           2: 0x23f0a7b43301 <NumberDictionary[7]>
           3: 0x23f0a7b41329 <FixedArray[0]>
           4: 0x03b98f8e50f9 <DescriptorArray[2]>
           5: 0x23f0a7b43301 <NumberDictionary[7]>
           6: 0x23f0a7b41329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0x3b98f8e5001: [DescriptorArray] in OldSpace
 - map: 0x23f0a7b47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x23f0a7b455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x29ac1f674fe1 <AccessorInfo>
  [1]: 0x23f0a7b458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x29ac1f674f71 <AccessorInfo>
  [2]: 0x23f0a7b45cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 0, attrs: [___]) @ 0x29ac1f675051 <AccessorInfo>
  [3]: 0x23f0a7b465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 4, attrs: [W_C]) @ 0x03b98f8e50c1 <ClassPositions 164, 403>
  [4]: 0x3b98f8e50d9: [String] in OldSpace: #generate_id (const data descriptor, p: 2, attrs: [W_C]) @ 4
Element[2]
0x23f0a7b43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x23f0a7b41329: [FixedArray] in ReadOnlySpace
 - map: 0x23f0a7b412e1 <Map>
 - length: 0
Element[4]
0x3b98f8e50f9: [DescriptorArray] in OldSpace
 - map: 0x23f0a7b47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x23f0a7b44a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x29ac1f6501a9: [String] in OldSpace: #serialize (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[5]
0x23f0a7b43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x23f0a7b41329: [FixedArray] in ReadOnlySpace
 - map: 0x23f0a7b412e1 <Map>
 - length: 0
0x03b98f8e5161 points to: [0x3b98f8e51d0]
=== [0x3b98f8e51d0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  207 S> 0x3b98f8e51d0 @    0 : 16 02             LdaCurrentContextSlot [2]
  217 E> 0x3b98f8e51d2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3b98f8e51d4 @    4 : c2                Star2 
  224 E> 0x3b98f8e51d5 @    5 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x3b98f8e51d9 @    9 : c3                Star1 
  224 E> 0x3b98f8e51da @   10 : 5d f9 f8 02       CallProperty0 r1, r2, [2]
  215 E> 0x3b98f8e51de @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0x3b98f8e51e2 @   18 : 0e                LdaUndefined 
  243 S> 0x3b98f8e51e3 @   19 : a9                Return 
Constant pool (size = 3)
0x3b98f8e51e9: [FixedArray] in OldSpace
 - map: 0x23f0a7b412e1 <Map>
 - length: 3
           0: 0x03b98f8e4f61 <String[6]: #Entity>
           1: 0x03b98f8e50d9 <String[11]: #generate_id>
           2: 0x23f0a7b452d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 15)
0x03b98f8e5211 <ByteArray[15]>
0x03b98f8e5399 points to: [0x3b98f8e5408]
=== [0x3b98f8e5408] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  271 S> 0x3b98f8e5408 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x3b98f8e540c @    4 : c4                Star0 
  301 E> 0x3b98f8e540d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3b98f8e5411 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
         0x3b98f8e5415 @   13 : 0b fa             Ldar r0
  315 S> 0x3b98f8e5417 @   15 : a9                Return 
Constant pool (size = 2)
0x3b98f8e5419: [FixedArray] in OldSpace
 - map: 0x23f0a7b412e1 <Map>
 - length: 2
           0: 0x03b98f8e5439 <ObjectBoilerplateDescription[3]>
           1: 0x23f0a7b452d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 9)
0x03b98f8e5461 <ByteArray[9]>
Object boilerplate at 0x03b98f8e5439: 
0x3b98f8e5439: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x23f0a7b42059 <Map>
 - length: 3
           0: 8
           1: 0x23f0a7b452d9 <String[2]: #id>
           2: 0x23f0a7b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x03b98f8e54e9 points to: [0x3b98f8e5558]
=== [0x3b98f8e5558] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  357 S> 0x3b98f8e5558 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x3b98f8e555a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3b98f8e555c @    4 : c3                Star1 
         0x3b98f8e555d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x3b98f8e5561 @    9 : 75 02             ToNumeric [2]
         0x3b98f8e5563 @   11 : c2                Star2 
         0x3b98f8e5564 @   12 : 51 02             Inc [2]
         0x3b98f8e5566 @   14 : c1                Star3 
  380 E> 0x3b98f8e5567 @   15 : 32 f9 01 03       SetNamedProperty r1, [1], [3]
  384 E> 0x3b98f8e556b @   19 : 2d f8 02 05       GetNamedProperty r2, [2], [5]
         0x3b98f8e556f @   23 : c4                Star0 
  384 E> 0x3b98f8e5570 @   24 : 5d fa f8 07       CallProperty0 r0, r2, [7]
  395 S> 0x3b98f8e5574 @   28 : a9                Return 
Constant pool (size = 3)
0x3b98f8e5579: [FixedArray] in OldSpace
 - map: 0x23f0a7b412e1 <Map>
 - length: 3
           0: 0x03b98f8e4f61 <String[6]: #Entity>
           1: 0x03b98f8e55a1 <String[8]: #id_index>
           2: 0x23f0a7b462b9 <String[8]: #toString>
Handler Table (size = 0)
Source Position Table (size = 13)
0x03b98f8e55b9 <ByteArray[13]>
<< OUTPUTTING DISASSEMBLY END >>
