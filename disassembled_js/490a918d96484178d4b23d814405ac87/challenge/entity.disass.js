<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2ce060664db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2ce060664db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2ce060664dbc @    4 : c4                Star0 
  488 S> 0x2ce060664dbd @    5 : a9                Return 
Constant pool (size = 1)
0x2ce060664dc1: [FixedArray] in OldSpace
 - map: 0x1bb41c9812e1 <Map>
 - length: 1
           0: 0x2ce060664dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2ce0606656e1 <ByteArray[7]>
0x2ce060664dd9 points to: [0x2ce060664e48]
=== [0x2ce060664e48] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0x2ce060664e48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x2ce060664e4b @    3 : c2                Star2 
   83 E> 0x2ce060664e4c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x2ce060664e50 @    8 : c3                Star1 
         0x2ce060664e51 @    9 : 13 02             LdaConstant [2]
         0x2ce060664e53 @   11 : c0                Star4 
   98 E> 0x2ce060664e54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x2ce060664e58 @   16 : bf                Star5 
         0x2ce060664e59 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x2ce060664e5c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x2ce060664e61 @   25 : 0e                LdaUndefined 
  154 E> 0x2ce060664e62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x2ce060664e66 @   30 : 81 05             CreateBlockContext [5]
         0x2ce060664e68 @   32 : 1a f9             PushContext r1
         0x2ce060664e6a @   34 : 10                LdaTheHole 
         0x2ce060664e6b @   35 : 25 02             StaCurrentContextSlot [2]
         0x2ce060664e6d @   37 : 10                LdaTheHole 
         0x2ce060664e6e @   38 : bf                Star5 
         0x2ce060664e6f @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0x2ce060664e73 @   43 : c2                Star2 
         0x2ce060664e74 @   44 : 13 06             LdaConstant [6]
         0x2ce060664e76 @   46 : c1                Star3 
         0x2ce060664e77 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0x2ce060664e7b @   51 : be                Star6 
         0x2ce060664e7c @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0x2ce060664e80 @   56 : bd                Star7 
         0x2ce060664e81 @   57 : 19 f8 f6          Mov r2, r4
         0x2ce060664e84 @   60 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0x2ce060664e89 @   65 : c1                Star3 
         0x2ce060664e8a @   66 : 0b f6             Ldar r4
         0x2ce060664e8c @   68 : 25 02             StaCurrentContextSlot [2]
         0x2ce060664e8e @   70 : 1b f9             PopContext r1
         0x2ce060664e90 @   72 : c4                Star0 
  404 S> 0x2ce060664e91 @   73 : 0b fa             Ldar r0
  419 E> 0x2ce060664e93 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  429 S> 0x2ce060664e97 @   79 : 0d 01             LdaSmi [1]
  445 E> 0x2ce060664e99 @   81 : 32 fa 0a 09       SetNamedProperty r0, [10], [9]
         0x2ce060664e9d @   85 : 0e                LdaUndefined 
  485 S> 0x2ce060664e9e @   86 : a9                Return 
Constant pool (size = 11)
0x2ce060664ea1: [FixedArray] in OldSpace
 - map: 0x1bb41c9812e1 <Map>
 - length: 11
           0: 0x1bb41c985ab9 <String[6]: #Object>
           1: 0x1bb41c984c11 <String[14]: #defineProperty>
           2: 0x2ce060664f09 <String[10]: #__esModule>
           3: 0x2ce060664f29 <ObjectBoilerplateDescription[3]>
           4: 0x2ce060664f51 <String[6]: #Entity>
           5: 0x2ce060664f69 <ScopeInfo CLASS_SCOPE>
           6: 0x2ce060664fa9 <FixedArray[7]>
           7: 0x2ce060665151 <SharedFunctionInfo Entity>
           8: 0x2ce060665389 <SharedFunctionInfo serialize>
           9: 0x2ce0606654d9 <SharedFunctionInfo generate_id>
          10: 0x2ce060665591 <String[8]: #id_index>
Handler Table (size = 0)
Source Position Table (size = 28)
0x2ce060665651 <ByteArray[28]>
Boilerplate at 0x2ce060664f29: 
0x2ce060664f29: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1bb41c982059 <Map>
 - length: 3
           0: 8
           1: 0x1bb41c986419 <String[5]: #value>
           2: 0x1bb41c981729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x2ce060664fa9 has 7 elements:
0x2ce060664fa9: [FixedArray] in OldSpace
 - map: 0x1bb41c9812e1 <Map>
 - length: 7
           0: 5
           1: 0x2ce060664ff1 <DescriptorArray[5]>
           2: 0x1bb41c983301 <NumberDictionary[7]>
           3: 0x1bb41c981329 <FixedArray[0]>
           4: 0x2ce0606650e9 <DescriptorArray[2]>
           5: 0x1bb41c983301 <NumberDictionary[7]>
           6: 0x1bb41c981329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0x2ce060664ff1: [DescriptorArray] in OldSpace
 - map: 0x1bb41c987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1bb41c9855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x378ced7b4fe1 <AccessorInfo>
  [1]: 0x1bb41c9858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x378ced7b4f71 <AccessorInfo>
  [2]: 0x1bb41c985cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 0, attrs: [___]) @ 0x378ced7b5051 <AccessorInfo>
  [3]: 0x1bb41c9865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x2ce0606650b1 <ClassPositions 164, 403>
  [4]: 0x2ce0606650c9: [String] in OldSpace: #generate_id (const data descriptor, p: 4, attrs: [W_C]) @ 4
Element[2]
0x1bb41c983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1bb41c981329: [FixedArray] in ReadOnlySpace
 - map: 0x1bb41c9812e1 <Map>
 - length: 0
Element[4]
0x2ce0606650e9: [DescriptorArray] in OldSpace
 - map: 0x1bb41c987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1bb41c984a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x378ced7901a9: [String] in OldSpace: #serialize (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[5]
0x1bb41c983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1bb41c981329: [FixedArray] in ReadOnlySpace
 - map: 0x1bb41c9812e1 <Map>
 - length: 0
0x2ce060665151 points to: [0x2ce0606651c0]
=== [0x2ce0606651c0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  207 S> 0x2ce0606651c0 @    0 : 16 02             LdaCurrentContextSlot [2]
  217 E> 0x2ce0606651c2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2ce0606651c4 @    4 : c2                Star2 
  224 E> 0x2ce0606651c5 @    5 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x2ce0606651c9 @    9 : c3                Star1 
  224 E> 0x2ce0606651ca @   10 : 5d f9 f8 02       CallProperty0 r1, r2, [2]
  215 E> 0x2ce0606651ce @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0x2ce0606651d2 @   18 : 0e                LdaUndefined 
  243 S> 0x2ce0606651d3 @   19 : a9                Return 
Constant pool (size = 3)
0x2ce0606651d9: [FixedArray] in OldSpace
 - map: 0x1bb41c9812e1 <Map>
 - length: 3
           0: 0x2ce060664f51 <String[6]: #Entity>
           1: 0x2ce0606650c9 <String[11]: #generate_id>
           2: 0x1bb41c9852d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 15)
0x2ce060665201 <ByteArray[15]>
0x2ce060665389 points to: [0x2ce0606653f8]
=== [0x2ce0606653f8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  271 S> 0x2ce0606653f8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x2ce0606653fc @    4 : c4                Star0 
  301 E> 0x2ce0606653fd @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x2ce060665401 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
         0x2ce060665405 @   13 : 0b fa             Ldar r0
  315 S> 0x2ce060665407 @   15 : a9                Return 
Constant pool (size = 2)
0x2ce060665409: [FixedArray] in OldSpace
 - map: 0x1bb41c9812e1 <Map>
 - length: 2
           0: 0x2ce060665429 <ObjectBoilerplateDescription[3]>
           1: 0x1bb41c9852d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2ce060665451 <ByteArray[9]>
Boilerplate at 0x2ce060665429: 
0x2ce060665429: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1bb41c982059 <Map>
 - length: 3
           0: 8
           1: 0x1bb41c9852d9 <String[2]: #id>
           2: 0x1bb41c981501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2ce0606654d9 points to: [0x2ce060665548]
=== [0x2ce060665548] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  357 S> 0x2ce060665548 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x2ce06066554a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2ce06066554c @    4 : c3                Star1 
         0x2ce06066554d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x2ce060665551 @    9 : 75 02             ToNumeric [2]
         0x2ce060665553 @   11 : c2                Star2 
         0x2ce060665554 @   12 : 51 02             Inc [2]
         0x2ce060665556 @   14 : c1                Star3 
  380 E> 0x2ce060665557 @   15 : 32 f9 01 03       SetNamedProperty r1, [1], [3]
  384 E> 0x2ce06066555b @   19 : 2d f8 02 05       GetNamedProperty r2, [2], [5]
         0x2ce06066555f @   23 : c4                Star0 
  384 E> 0x2ce060665560 @   24 : 5d fa f8 07       CallProperty0 r0, r2, [7]
  395 S> 0x2ce060665564 @   28 : a9                Return 
Constant pool (size = 3)
0x2ce060665569: [FixedArray] in OldSpace
 - map: 0x1bb41c9812e1 <Map>
 - length: 3
           0: 0x2ce060664f51 <String[6]: #Entity>
           1: 0x2ce060665591 <String[8]: #id_index>
           2: 0x1bb41c9862b9 <String[8]: #toString>
Handler Table (size = 0)
Source Position Table (size = 13)
0x2ce0606655a9 <ByteArray[13]>
<< OUTPUTTING DISASSEMBLY END >>
