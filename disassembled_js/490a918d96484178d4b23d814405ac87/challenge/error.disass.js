<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x18ab07ea4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x18ab07ea4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x18ab07ea4dbc @    4 : c4                Star0 
  369 S> 0x18ab07ea4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x18ab07ea4dc1: [FixedArray] in OldSpace
 - map: 0x1e83655412e1 <Map>
 - length: 1
           0: 0x18ab07ea4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x18ab07ea53a9 <ByteArray[7]>
0x18ab07ea4dd9 points to: [0x18ab07ea4e48]
=== [0x18ab07ea4e48] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   76 S> 0x18ab07ea4e48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x18ab07ea4e4b @    3 : c2                Star2 
   83 E> 0x18ab07ea4e4c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x18ab07ea4e50 @    8 : c3                Star1 
         0x18ab07ea4e51 @    9 : 13 02             LdaConstant [2]
         0x18ab07ea4e53 @   11 : c0                Star4 
   98 E> 0x18ab07ea4e54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x18ab07ea4e58 @   16 : bf                Star5 
         0x18ab07ea4e59 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x18ab07ea4e5c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x18ab07ea4e61 @   25 : 0e                LdaUndefined 
  159 E> 0x18ab07ea4e62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  195 E> 0x18ab07ea4e66 @   30 : 21 06 09          LdaGlobal [6], [9]
         0x18ab07ea4e69 @   33 : c0                Star4 
         0x18ab07ea4e6a @   34 : 80 07 00 02       CreateClosure [7], [0], #2
         0x18ab07ea4e6e @   38 : c3                Star1 
         0x18ab07ea4e6f @   39 : 13 05             LdaConstant [5]
         0x18ab07ea4e71 @   41 : c2                Star2 
         0x18ab07ea4e72 @   42 : 19 f9 f7          Mov r1, r3
         0x18ab07ea4e75 @   45 : 65 28 00 f8 03    CallRuntime [DefineClass], r2-r4
         0x18ab07ea4e7a @   50 : c2                Star2 
         0x18ab07ea4e7b @   51 : 19 f7 fa          Mov r3, r0
  297 S> 0x18ab07ea4e7e @   54 : 0b fa             Ldar r0
  317 E> 0x18ab07ea4e80 @   56 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x18ab07ea4e84 @   60 : 0e                LdaUndefined 
  366 S> 0x18ab07ea4e85 @   61 : a9                Return 
Constant pool (size = 8)
0x18ab07ea4e89: [FixedArray] in OldSpace
 - map: 0x1e83655412e1 <Map>
 - length: 8
           0: 0x1e8365545ab9 <String[6]: #Object>
           1: 0x1e8365544c11 <String[14]: #defineProperty>
           2: 0x18ab07ea4ed9 <String[10]: #__esModule>
           3: 0x18ab07ea4ef9 <ObjectBoilerplateDescription[3]>
           4: 0x18ab07ea4f21 <String[11]: #ActionError>
           5: 0x18ab07ea4f41 <FixedArray[7]>
           6: 0x1e8365544de1 <String[5]: #Error>
           7: 0x18ab07ea5079 <SharedFunctionInfo ActionError>
Handler Table (size = 0)
Source Position Table (size = 27)
0x18ab07ea5319 <ByteArray[27]>
Boilerplate at 0x18ab07ea4ef9: 
0x18ab07ea4ef9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1e8365542059 <Map>
 - length: 3
           0: 8
           1: 0x1e8365546419 <String[5]: #value>
           2: 0x1e8365541729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x18ab07ea4f41 has 7 elements:
0x18ab07ea4f41: [FixedArray] in OldSpace
 - map: 0x1e83655412e1 <Map>
 - length: 7
           0: 3
           1: 0x18ab07ea4f89 <DescriptorArray[4]>
           2: 0x1e8365543301 <NumberDictionary[7]>
           3: 0x1e8365541329 <FixedArray[0]>
           4: 0x18ab07ea5049 <DescriptorArray[1]>
           5: 0x1e8365543301 <NumberDictionary[7]>
           6: 0x1e8365541329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x3 (3)
Element[1]
0x18ab07ea4f89: [DescriptorArray] in OldSpace
 - map: 0x1e8365547761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1e83655455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x12dcb6174fe1 <AccessorInfo>
  [1]: 0x1e83655458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x12dcb6174f71 <AccessorInfo>
  [2]: 0x1e8365545cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x12dcb6175051 <AccessorInfo>
  [3]: 0x1e83655465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x18ab07ea5031 <ClassPositions 169, 296>
Element[2]
0x1e8365543301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1e8365541329: [FixedArray] in ReadOnlySpace
 - map: 0x1e83655412e1 <Map>
 - length: 0
Element[4]
0x18ab07ea5049: [DescriptorArray] in OldSpace
 - map: 0x1e8365547761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 1
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1e8365544a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
Element[5]
0x1e8365543301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1e8365541329: [FixedArray] in ReadOnlySpace
 - map: 0x1e83655412e1 <Map>
 - length: 0
0x18ab07ea5079 points to: [0x18ab07ea50e8]
=== [0x18ab07ea50e8] DISASSEMBLY ===
Parameter count 3
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x18ab07ea50e8 @    0 : 19 fe f9          Mov <closure>, r1
  244 S> 0x18ab07ea50eb @    3 : 0b f9             Ldar r1
         0x18ab07ea50ed @    5 : 5a f7             GetSuperConstructor r3
  253 E> 0x18ab07ea50ef @    7 : 21 00 01          LdaGlobal [0], [1]
         0x18ab07ea50f2 @   10 : be                Star6 
  258 E> 0x18ab07ea50f3 @   11 : 2d f4 01 03       GetNamedProperty r6, [1], [3]
         0x18ab07ea50f7 @   15 : bf                Star5 
  258 E> 0x18ab07ea50f8 @   16 : 5e f5 f4 03 05    CallProperty1 r5, r6, a0, [5]
         0x18ab07ea50fd @   21 : 77                ToString 
         0x18ab07ea50fe @   22 : c0                Star4 
         0x18ab07ea50ff @   23 : 13 02             LdaConstant [2]
         0x18ab07ea5101 @   25 : 39 f6 00          Add r4, [0]
         0x18ab07ea5104 @   28 : c0                Star4 
         0x18ab07ea5105 @   29 : 0b 04             Ldar a1
  279 E> 0x18ab07ea5107 @   31 : 77                ToString 
         0x18ab07ea5108 @   32 : 39 f6 00          Add r4, [0]
         0x18ab07ea510b @   35 : ad f7             ThrowIfNotSuperConstructor r3
         0x18ab07ea510d @   37 : c0                Star4 
         0x18ab07ea510e @   38 : 0b fa             Ldar r0
  244 E> 0x18ab07ea5110 @   40 : 69 f7 f6 01 07    Construct r3, r4-r4, [7]
         0x18ab07ea5115 @   45 : bf                Star5 
         0x18ab07ea5116 @   46 : 0b 02             Ldar <this>
         0x18ab07ea5118 @   48 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x18ab07ea5119 @   49 : 19 f5 02          Mov r5, <this>
         0x18ab07ea511c @   52 : 0b 02             Ldar <this>
         0x18ab07ea511e @   54 : ab                ThrowSuperNotCalledIfHole 
  293 S> 0x18ab07ea511f @   55 : a9                Return 
Constant pool (size = 3)
0x18ab07ea5121: [FixedArray] in OldSpace
 - map: 0x1e83655412e1 <Map>
 - length: 3
           0: 0x12dcb615c529 <String[4]: #JSON>
           1: 0x12dcb614ee51 <String[9]: #stringify>
           2: 0x1e8365549f09 <String[1]: # >
Handler Table (size = 0)
Source Position Table (size = 19)
0x18ab07ea5181 <ByteArray[19]>
<< OUTPUTTING DISASSEMBLY END >>
