<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x74050864dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x74050864dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x74050864dcc @    4 : c4                Star0 
  369 S> 0x74050864dcd @    5 : a9                Return 
Constant pool (size = 1)
0x74050864dd1: [FixedArray] in OldSpace
 - map: 0x1ff0e3e412e1 <Map>
 - length: 1
           0: 0x074050864de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x0740508653b9 <ByteArray[7]>
0x074050864de9 points to: [0x74050864e58]
=== [0x74050864e58] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   76 S> 0x74050864e58 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x74050864e5b @    3 : c2                Star2 
   83 E> 0x74050864e5c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x74050864e60 @    8 : c3                Star1 
         0x74050864e61 @    9 : 13 02             LdaConstant [2]
         0x74050864e63 @   11 : c0                Star4 
   98 E> 0x74050864e64 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x74050864e68 @   16 : bf                Star5 
         0x74050864e69 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x74050864e6c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x74050864e71 @   25 : 0e                LdaUndefined 
  159 E> 0x74050864e72 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  195 E> 0x74050864e76 @   30 : 21 06 09          LdaGlobal [6], [9]
         0x74050864e79 @   33 : c0                Star4 
         0x74050864e7a @   34 : 80 07 00 02       CreateClosure [7], [0], #2
         0x74050864e7e @   38 : c3                Star1 
         0x74050864e7f @   39 : 13 05             LdaConstant [5]
         0x74050864e81 @   41 : c2                Star2 
         0x74050864e82 @   42 : 19 f9 f7          Mov r1, r3
         0x74050864e85 @   45 : 65 28 00 f8 03    CallRuntime [DefineClass], r2-r4
         0x74050864e8a @   50 : c2                Star2 
         0x74050864e8b @   51 : 19 f7 fa          Mov r3, r0
  297 S> 0x74050864e8e @   54 : 0b fa             Ldar r0
  317 E> 0x74050864e90 @   56 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x74050864e94 @   60 : 0e                LdaUndefined 
  366 S> 0x74050864e95 @   61 : a9                Return 
Constant pool (size = 8)
0x74050864e99: [FixedArray] in OldSpace
 - map: 0x1ff0e3e412e1 <Map>
 - length: 8
           0: 0x1ff0e3e45ab9 <String[6]: #Object>
           1: 0x1ff0e3e44c11 <String[14]: #defineProperty>
           2: 0x074050864ee9 <String[10]: #__esModule>
           3: 0x074050864f09 <ObjectBoilerplateDescription[3]>
           4: 0x074050864f31 <String[11]: #ActionError>
           5: 0x074050864f51 <FixedArray[7]>
           6: 0x1ff0e3e44de1 <String[5]: #Error>
           7: 0x074050865089 <SharedFunctionInfo ActionError>
Handler Table (size = 0)
Source Position Table (size = 27)
0x074050865329 <ByteArray[27]>
Object boilerplate at 0x074050864f09: 
0x74050864f09: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1ff0e3e42059 <Map>
 - length: 3
           0: 8
           1: 0x1ff0e3e46419 <String[5]: #value>
           2: 0x1ff0e3e41729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x074050864f51 has 7 elements:
0x74050864f51: [FixedArray] in OldSpace
 - map: 0x1ff0e3e412e1 <Map>
 - length: 7
           0: 3
           1: 0x074050864f99 <DescriptorArray[4]>
           2: 0x1ff0e3e43301 <NumberDictionary[7]>
           3: 0x1ff0e3e41329 <FixedArray[0]>
           4: 0x074050865059 <DescriptorArray[1]>
           5: 0x1ff0e3e43301 <NumberDictionary[7]>
           6: 0x1ff0e3e41329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x3 (3)
Element[1]
0x74050864f99: [DescriptorArray] in OldSpace
 - map: 0x1ff0e3e47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1ff0e3e455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x1b3ff7fb4fe1 <AccessorInfo>
  [1]: 0x1ff0e3e458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x1b3ff7fb4f71 <AccessorInfo>
  [2]: 0x1ff0e3e45cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 0, attrs: [___]) @ 0x1b3ff7fb5051 <AccessorInfo>
  [3]: 0x1ff0e3e465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x074050865041 <ClassPositions 169, 296>
Element[2]
0x1ff0e3e43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1ff0e3e41329: [FixedArray] in ReadOnlySpace
 - map: 0x1ff0e3e412e1 <Map>
 - length: 0
Element[4]
0x74050865059: [DescriptorArray] in OldSpace
 - map: 0x1ff0e3e47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 1
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1ff0e3e44a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
Element[5]
0x1ff0e3e43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1ff0e3e41329: [FixedArray] in ReadOnlySpace
 - map: 0x1ff0e3e412e1 <Map>
 - length: 0
0x074050865089 points to: [0x740508650f8]
=== [0x740508650f8] DISASSEMBLY ===
Parameter count 3
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x740508650f8 @    0 : 19 fe f9          Mov <closure>, r1
  244 S> 0x740508650fb @    3 : 0b f9             Ldar r1
         0x740508650fd @    5 : 5a f7             GetSuperConstructor r3
  253 E> 0x740508650ff @    7 : 21 00 01          LdaGlobal [0], [1]
         0x74050865102 @   10 : be                Star6 
  258 E> 0x74050865103 @   11 : 2d f4 01 03       GetNamedProperty r6, [1], [3]
         0x74050865107 @   15 : bf                Star5 
  258 E> 0x74050865108 @   16 : 5e f5 f4 03 05    CallProperty1 r5, r6, a0, [5]
         0x7405086510d @   21 : 77                ToString 
         0x7405086510e @   22 : c0                Star4 
         0x7405086510f @   23 : 13 02             LdaConstant [2]
         0x74050865111 @   25 : 39 f6 00          Add r4, [0]
         0x74050865114 @   28 : c0                Star4 
         0x74050865115 @   29 : 0b 04             Ldar a1
  279 E> 0x74050865117 @   31 : 77                ToString 
         0x74050865118 @   32 : 39 f6 00          Add r4, [0]
         0x7405086511b @   35 : ad f7             ThrowIfNotSuperConstructor r3
         0x7405086511d @   37 : c0                Star4 
         0x7405086511e @   38 : 0b fa             Ldar r0
  244 E> 0x74050865120 @   40 : 69 f7 f6 01 07    Construct r3, r4-r4, [7]
         0x74050865125 @   45 : bf                Star5 
         0x74050865126 @   46 : 0b 02             Ldar <this>
         0x74050865128 @   48 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x74050865129 @   49 : 19 f5 02          Mov r5, <this>
         0x7405086512c @   52 : 0b 02             Ldar <this>
         0x7405086512e @   54 : ab                ThrowSuperNotCalledIfHole 
  293 S> 0x7405086512f @   55 : a9                Return 
Constant pool (size = 3)
0x74050865131: [FixedArray] in OldSpace
 - map: 0x1ff0e3e412e1 <Map>
 - length: 3
           0: 0x1b3ff7f9c529 <String[4]: #JSON>
           1: 0x1b3ff7f8ee51 <String[9]: #stringify>
           2: 0x1ff0e3e49f09 <String[1]: # >
Handler Table (size = 0)
Source Position Table (size = 19)
0x074050865191 <ByteArray[19]>
<< OUTPUTTING DISASSEMBLY END >>
