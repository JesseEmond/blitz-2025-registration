<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x37fe24a24dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x37fe24a24dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x37fe24a24dcc @    4 : c4                Star0 
  837 S> 0x37fe24a24dcd @    5 : a9                Return 
Constant pool (size = 1)
0x37fe24a24dd1: [FixedArray] in OldSpace
 - map: 0x2b8ec80412e1 <Map>
 - length: 1
           0: 0x37fe24a24de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x37fe24a25799 <ByteArray[7]>
0x37fe24a24de9 points to: [0x37fe24a24e58]
=== [0x37fe24a24e58] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   76 S> 0x37fe24a24e58 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x37fe24a24e5b @    3 : c1                Star3 
   83 E> 0x37fe24a24e5c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x37fe24a24e60 @    8 : c2                Star2 
         0x37fe24a24e61 @    9 : 13 02             LdaConstant [2]
         0x37fe24a24e63 @   11 : bf                Star5 
   98 E> 0x37fe24a24e64 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x37fe24a24e68 @   16 : be                Star6 
         0x37fe24a24e69 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x37fe24a24e6c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x37fe24a24e71 @   25 : 0e                LdaUndefined 
  167 E> 0x37fe24a24e72 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  194 S> 0x37fe24a24e76 @   30 : 13 05             LdaConstant [5]
         0x37fe24a24e78 @   32 : c1                Star3 
  194 E> 0x37fe24a24e79 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x37fe24a24e7d @   37 : c4                Star0 
  258 E> 0x37fe24a24e7e @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x37fe24a24e82 @   42 : bf                Star5 
         0x37fe24a24e83 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x37fe24a24e87 @   47 : c2                Star2 
         0x37fe24a24e88 @   48 : 13 06             LdaConstant [6]
         0x37fe24a24e8a @   50 : c1                Star3 
         0x37fe24a24e8b @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x37fe24a24e8f @   55 : be                Star6 
         0x37fe24a24e90 @   56 : 19 f8 f6          Mov r2, r4
         0x37fe24a24e93 @   59 : 65 28 00 f7 04    CallRuntime [DefineClass], r3-r6
         0x37fe24a24e98 @   64 : c1                Star3 
         0x37fe24a24e99 @   65 : 19 f6 f9          Mov r4, r1
  733 S> 0x37fe24a24e9c @   68 : 0b f9             Ldar r1
  761 E> 0x37fe24a24e9e @   70 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x37fe24a24ea2 @   74 : 0e                LdaUndefined 
  834 S> 0x37fe24a24ea3 @   75 : a9                Return 
Constant pool (size = 10)
0x37fe24a24ea9: [FixedArray] in OldSpace
 - map: 0x2b8ec80412e1 <Map>
 - length: 10
           0: 0x2b8ec8045ab9 <String[6]: #Object>
           1: 0x2b8ec8044c11 <String[14]: #defineProperty>
           2: 0x37fe24a24f09 <String[10]: #__esModule>
           3: 0x37fe24a24f29 <ObjectBoilerplateDescription[3]>
           4: 0x37fe24a24f51 <String[19]: #StraightAheadThreat>
           5: 0x37fe24a24f79 <String[8]: #./threat>
           6: 0x37fe24a24f91 <FixedArray[7]>
           7: 0x37fe24a25101 <String[6]: #Threat>
           8: 0x37fe24a25119 <SharedFunctionInfo StraightAheadThreat>
           9: 0x37fe24a25349 <SharedFunctionInfo get_next_move>
Handler Table (size = 0)
Source Position Table (size = 31)
0x37fe24a25701 <ByteArray[31]>
Object boilerplate at 0x37fe24a24f29: 
0x37fe24a24f29: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2b8ec8042059 <Map>
 - length: 3
           0: 8
           1: 0x2b8ec8046419 <String[5]: #value>
           2: 0x2b8ec8041729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x37fe24a24f91 has 7 elements:
0x37fe24a24f91: [FixedArray] in OldSpace
 - map: 0x2b8ec80412e1 <Map>
 - length: 7
           0: 4
           1: 0x37fe24a24fd9 <DescriptorArray[4]>
           2: 0x2b8ec8043301 <NumberDictionary[7]>
           3: 0x2b8ec8041329 <FixedArray[0]>
           4: 0x37fe24a25099 <DescriptorArray[2]>
           5: 0x2b8ec8043301 <NumberDictionary[7]>
           6: 0x2b8ec8041329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x4 (4)
Element[1]
0x37fe24a24fd9: [DescriptorArray] in OldSpace
 - map: 0x2b8ec8047761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2b8ec80455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x36abcf474fe1 <AccessorInfo>
  [1]: 0x2b8ec80458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x36abcf474f71 <AccessorInfo>
  [2]: 0x2b8ec8045cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x36abcf475051 <AccessorInfo>
  [3]: 0x2b8ec80465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 3, attrs: [W_C]) @ 0x37fe24a25081 <ClassPositions 215, 732>
Element[2]
0x2b8ec8043301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2b8ec8041329: [FixedArray] in ReadOnlySpace
 - map: 0x2b8ec80412e1 <Map>
 - length: 0
Element[4]
0x37fe24a25099: [DescriptorArray] in OldSpace
 - map: 0x2b8ec8047761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2b8ec8044a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x37fe24a250e1: [String] in OldSpace: #get_next_move (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[5]
0x2b8ec8043301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2b8ec8041329: [FixedArray] in ReadOnlySpace
 - map: 0x2b8ec80412e1 <Map>
 - length: 0
0x37fe24a25119 points to: [0x37fe24a25188]
=== [0x37fe24a25188] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x37fe24a25188 @    0 : 19 fe f9          Mov <closure>, r1
  329 S> 0x37fe24a2518b @    3 : 0b f9             Ldar r1
         0x37fe24a2518d @    5 : 5a f7             GetSuperConstructor r3
  364 E> 0x37fe24a2518f @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x37fe24a25191 @    9 : 0b fa             Ldar r0
         0x37fe24a25193 @   11 : 19 03 f6          Mov a0, r4
         0x37fe24a25196 @   14 : 19 04 f5          Mov a1, r5
         0x37fe24a25199 @   17 : 19 05 f4          Mov a2, r6
         0x37fe24a2519c @   20 : 19 06 f3          Mov a3, r7
  329 E> 0x37fe24a2519f @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x37fe24a251a4 @   28 : bc                Star8 
         0x37fe24a251a5 @   29 : 0b 02             Ldar <this>
         0x37fe24a251a7 @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x37fe24a251a8 @   32 : 19 f2 02          Mov r8, <this>
         0x37fe24a251ab @   35 : 0b 02             Ldar <this>
         0x37fe24a251ad @   37 : ab                ThrowSuperNotCalledIfHole 
  376 S> 0x37fe24a251ae @   38 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x37fe24a251b1 <ByteArray[15]>
0x37fe24a25349 points to: [0x37fe24a253b8]
=== [0x37fe24a253b8] DISASSEMBLY ===
Parameter count 1
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  395 E> 0x37fe24a253b8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x37fe24a253bb @    3 : 1a f9             PushContext r1
         0x37fe24a253bd @    5 : 0b 02             Ldar <this>
         0x37fe24a253bf @    7 : 25 02             StaCurrentContextSlot [2]
  435 S> 0x37fe24a253c1 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x37fe24a253c3 @   11 : c1                Star3 
  440 E> 0x37fe24a253c4 @   12 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x37fe24a253c8 @   16 : c2                Star2 
  440 E> 0x37fe24a253c9 @   17 : 5d f8 f7 02       CallProperty0 r2, r3, [2]
         0x37fe24a253cd @   21 : c4                Star0 
  473 S> 0x37fe24a253ce @   22 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x37fe24a253d0 @   24 : c0                Star4 
  482 E> 0x37fe24a253d1 @   25 : 2d f6 01 04       GetNamedProperty r4, [1], [4]
         0x37fe24a253d5 @   29 : c1                Star3 
  482 E> 0x37fe24a253d6 @   30 : 5d f7 f6 06       CallProperty0 r3, r4, [6]
         0x37fe24a253da @   34 : c1                Star3 
  505 E> 0x37fe24a253db @   35 : 2d f7 02 08       GetNamedProperty r3, [2], [8]
         0x37fe24a253df @   39 : c2                Star2 
         0x37fe24a253e0 @   40 : 80 03 00 02       CreateClosure [3], [0], #2
         0x37fe24a253e4 @   44 : c0                Star4 
  506 E> 0x37fe24a253e5 @   45 : 5e f8 f7 f6 0a    CallProperty1 r2, r3, r4, [10]
         0x37fe24a253ea @   50 : 9c 0a             JumpIfUndefined [10] (0x37fe24a253f4 @ 60)
  569 S> 0x37fe24a253ec @   52 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x37fe24a253ee @   54 : c2                Star2 
  581 E> 0x37fe24a253ef @   55 : 2d f8 04 0c       GetNamedProperty r2, [4], [12]
  591 S> 0x37fe24a253f3 @   59 : a9                Return 
  655 S> 0x37fe24a253f4 @   60 : 21 05 0e          LdaGlobal [5], [14]
         0x37fe24a253f7 @   63 : c0                Star4 
  660 E> 0x37fe24a253f8 @   64 : 2d f6 06 10       GetNamedProperty r4, [6], [16]
         0x37fe24a253fc @   68 : c1                Star3 
         0x37fe24a253fd @   69 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x37fe24a253ff @   71 : bf                Star5 
  671 E> 0x37fe24a25400 @   72 : 2d f5 07 13       GetNamedProperty r5, [7], [19]
         0x37fe24a25404 @   76 : bf                Star5 
  705 E> 0x37fe24a25405 @   77 : 2d fa 08 15       GetNamedProperty r0, [8], [21]
  684 E> 0x37fe24a25409 @   81 : 3b f5 12          Mul r5, [18]
         0x37fe24a2540c @   84 : bf                Star5 
  660 E> 0x37fe24a2540d @   85 : 5e f7 f6 f5 17    CallProperty1 r3, r4, r5, [23]
  654 E> 0x37fe24a25412 @   90 : 2f fa 19          GetKeyedProperty r0, [25]
  714 S> 0x37fe24a25415 @   93 : a9                Return 
Constant pool (size = 9)
0x37fe24a25419: [FixedArray] in OldSpace
 - map: 0x2b8ec80412e1 <Map>
 - length: 9
           0: 0x37fe24a25471 <ScopeInfo FUNCTION_SCOPE>
           1: 0x37fe24a254c9 <String[21]: #getPossibleDirections>
           2: 0x36abcf44a009 <String[4]: #find>
           3: 0x37fe24a25509 <SharedFunctionInfo>
           4: 0x2b8ec80439a1 <String[9]: #direction>
           5: 0x36abcf45a991 <String[4]: #Math>
           6: 0x2b8ec8043ae9 <String[5]: #floor>
           7: 0x37fe24a25641 <String[12]: #randomNumber>
           8: 0x2b8ec80455f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 49)
0x37fe24a25661 <ByteArray[49]>
0x37fe24a25509 points to: [0x37fe24a25578]
=== [0x37fe24a25578] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
  520 S> 0x37fe24a25578 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x37fe24a2557a @    2 : c3                Star1 
  529 E> 0x37fe24a2557b @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
  520 E> 0x37fe24a2557f @    7 : 6c 03 02          TestEqualStrict a0, [2]
  538 S> 0x37fe24a25582 @   10 : a9                Return 
Constant pool (size = 1)
0x37fe24a25589: [FixedArray] in OldSpace
 - map: 0x2b8ec80412e1 <Map>
 - length: 1
           0: 0x2b8ec80439a1 <String[9]: #direction>
Handler Table (size = 0)
Source Position Table (size = 11)
0x37fe24a255a1 <ByteArray[11]>
<< OUTPUTTING DISASSEMBLY END >>
