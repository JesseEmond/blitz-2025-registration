<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0xc2908be4dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0xc2908be4dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0xc2908be4dcc @    4 : c4                Star0 
 1609 S> 0xc2908be4dcd @    5 : a9                Return 
Constant pool (size = 1)
0xc2908be4dd1: [FixedArray] in OldSpace
 - map: 0x2ed6265012e1 <Map>
 - length: 1
           0: 0x0c2908be4de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x0c2908be5739 <ByteArray[7]>
0x0c2908be4de9 points to: [0xc2908be4e58]
=== [0xc2908be4e58] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   10 E> 0xc2908be4e58 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0xc2908be4e5b @    3 : 1a f9             PushContext r1
         0xc2908be4e5d @    5 : 10                LdaTheHole 
         0xc2908be4e5e @    6 : 25 02             StaCurrentContextSlot [2]
         0xc2908be4e60 @    8 : 10                LdaTheHole 
         0xc2908be4e61 @    9 : 25 03             StaCurrentContextSlot [3]
         0xc2908be4e63 @   11 : 80 01 00 02       CreateClosure [1], [0], #2
         0xc2908be4e67 @   15 : c4                Star0 
   76 S> 0xc2908be4e68 @   16 : 21 02 00          LdaGlobal [2], [0]
         0xc2908be4e6b @   19 : c1                Star3 
   83 E> 0xc2908be4e6c @   20 : 2d f7 03 02       GetNamedProperty r3, [3], [2]
         0xc2908be4e70 @   24 : c2                Star2 
         0xc2908be4e71 @   25 : 13 04             LdaConstant [4]
         0xc2908be4e73 @   27 : bf                Star5 
   98 E> 0xc2908be4e74 @   28 : 7c 05 04 29       CreateObjectLiteral [5], [4], #41
         0xc2908be4e78 @   32 : be                Star6 
         0xc2908be4e79 @   33 : 19 03 f6          Mov a0, r4
   83 E> 0xc2908be4e7c @   36 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0xc2908be4e81 @   41 : 0b fa             Ldar r0
  161 E> 0xc2908be4e83 @   43 : 32 03 06 07       SetNamedProperty a0, [6], [7]
  195 S> 0xc2908be4e87 @   47 : 13 07             LdaConstant [7]
         0xc2908be4e89 @   49 : c1                Star3 
  195 E> 0xc2908be4e8a @   50 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  195 E> 0xc2908be4e8e @   54 : 25 02             StaCurrentContextSlot [2]
  249 S> 0xc2908be4e90 @   56 : 13 08             LdaConstant [8]
         0xc2908be4e92 @   58 : c1                Star3 
  249 E> 0xc2908be4e93 @   59 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  249 E> 0xc2908be4e97 @   63 : 25 03             StaCurrentContextSlot [3]
         0xc2908be4e99 @   65 : 0e                LdaUndefined 
 1606 S> 0xc2908be4e9a @   66 : a9                Return 
Constant pool (size = 9)
0xc2908be4ea1: [FixedArray] in OldSpace
 - map: 0x2ed6265012e1 <Map>
 - length: 9
           0: 0x0c2908be4ef9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x0c2908be4f99 <SharedFunctionInfo ActionFactory>
           2: 0x2ed626505ab9 <String[6]: #Object>
           3: 0x2ed626504c11 <String[14]: #defineProperty>
           4: 0x0c2908be5651 <String[10]: #__esModule>
           5: 0x0c2908be5671 <ObjectBoilerplateDescription[3]>
           6: 0x0c2908be54d9 <String[13]: #ActionFactory>
           7: 0x0c2908be5699 <String[18]: #../geometry/vector>
           8: 0x0c2908be56c1 <String[14]: #./action_types>
Handler Table (size = 0)
Source Position Table (size = 35)
0x0c2908be56e1 <ByteArray[35]>
0x0c2908be4f99 points to: [0xc2908be5008]
=== [0xc2908be5008] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  331 S> 0xc2908be5008 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0xc2908be500c @    4 : 20 01             TestTypeOf #1
         0xc2908be500e @    6 : 99 12             JumpIfFalse [18] (0xc2908be5020 @ 24)
  359 E> 0xc2908be5010 @    8 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0xc2908be5014 @   12 : c4                Star0 
  364 E> 0xc2908be5015 @   13 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0xc2908be5019 @   17 : c4                Star0 
         0xc2908be501a @   18 : 0c                LdaZero 
  371 E> 0xc2908be501b @   19 : 6c fa 04          TestEqualStrict r0, [4]
         0xc2908be501e @   22 : 99 1a             JumpIfFalse [26] (0xc2908be5038 @ 48)
  386 S> 0xc2908be5020 @   24 : 21 02 05          LdaGlobal [2], [5]
         0xc2908be5023 @   27 : c4                Star0 
         0xc2908be5024 @   28 : 13 03             LdaConstant [3]
         0xc2908be5026 @   30 : c3                Star1 
  432 E> 0xc2908be5027 @   31 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0xc2908be502b @   35 : 77                ToString 
         0xc2908be502c @   36 : 39 f9 07          Add r1, [7]
         0xc2908be502f @   39 : c3                Star1 
         0xc2908be5030 @   40 : 0b fa             Ldar r0
  392 E> 0xc2908be5032 @   42 : 69 fa f9 01 08    Construct r0, r1-r1, [8]
  386 E> 0xc2908be5037 @   47 : a7                Throw 
  460 S> 0xc2908be5038 @   48 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0xc2908be503c @   52 : c4                Star0 
         0xc2908be503d @   53 : 17 03             LdaImmutableCurrentContextSlot [3]
  481 E> 0xc2908be503f @   55 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be5041 @   57 : c3                Star1 
  496 E> 0xc2908be5042 @   58 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0xc2908be5046 @   62 : c3                Star1 
  507 E> 0xc2908be5047 @   63 : 2d f9 06 0d       GetNamedProperty r1, [6], [13]
         0xc2908be504b @   67 : 6c fa 0a          TestEqualStrict r0, [10]
         0xc2908be504e @   70 : 98 50             JumpIfTrue [80] (0xc2908be509e @ 150)
         0xc2908be5050 @   72 : 17 03             LdaImmutableCurrentContextSlot [3]
  626 E> 0xc2908be5052 @   74 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be5054 @   76 : c3                Star1 
  641 E> 0xc2908be5055 @   77 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0xc2908be5059 @   81 : c3                Star1 
  652 E> 0xc2908be505a @   82 : 2d f9 07 0f       GetNamedProperty r1, [7], [15]
         0xc2908be505e @   86 : 6c fa 0a          TestEqualStrict r0, [10]
         0xc2908be5061 @   89 : 98 57             JumpIfTrue [87] (0xc2908be50b8 @ 176)
         0xc2908be5063 @   91 : 17 03             LdaImmutableCurrentContextSlot [3]
  773 E> 0xc2908be5065 @   93 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be5067 @   95 : c3                Star1 
  788 E> 0xc2908be5068 @   96 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0xc2908be506c @  100 : c3                Star1 
  799 E> 0xc2908be506d @  101 : 2d f9 08 11       GetNamedProperty r1, [8], [17]
         0xc2908be5071 @  105 : 6c fa 0a          TestEqualStrict r0, [10]
         0xc2908be5074 @  108 : 98 5e             JumpIfTrue [94] (0xc2908be50d2 @ 202)
         0xc2908be5076 @  110 : 17 03             LdaImmutableCurrentContextSlot [3]
  914 E> 0xc2908be5078 @  112 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be507a @  114 : c3                Star1 
  929 E> 0xc2908be507b @  115 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0xc2908be507f @  119 : c3                Star1 
  940 E> 0xc2908be5080 @  120 : 2d f9 09 13       GetNamedProperty r1, [9], [19]
         0xc2908be5084 @  124 : 6c fa 0a          TestEqualStrict r0, [10]
         0xc2908be5087 @  127 : 98 65             JumpIfTrue [101] (0xc2908be50ec @ 228)
         0xc2908be5089 @  129 : 17 03             LdaImmutableCurrentContextSlot [3]
 1059 E> 0xc2908be508b @  131 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be508d @  133 : c3                Star1 
 1074 E> 0xc2908be508e @  134 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0xc2908be5092 @  138 : c3                Star1 
 1085 E> 0xc2908be5093 @  139 : 2d f9 0a 15       GetNamedProperty r1, [10], [21]
         0xc2908be5097 @  143 : 6c fa 0a          TestEqualStrict r0, [10]
         0xc2908be509a @  146 : 98 6c             JumpIfTrue [108] (0xc2908be5106 @ 254)
         0xc2908be509c @  148 : 8a a1             Jump [161] (0xc2908be513d @ 309)
  530 S> 0xc2908be509e @  150 : 7c 0b 17 29       CreateObjectLiteral [11], [23], #41
         0xc2908be50a2 @  154 : c3                Star1 
         0xc2908be50a3 @  155 : 17 03             LdaImmutableCurrentContextSlot [3]
  561 E> 0xc2908be50a5 @  157 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be50a7 @  159 : c2                Star2 
  576 E> 0xc2908be50a8 @  160 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0xc2908be50ac @  164 : c2                Star2 
  587 E> 0xc2908be50ad @  165 : 2d f8 06 18       GetNamedProperty r2, [6], [24]
         0xc2908be50b1 @  169 : 33 f9 00 1a       DefineNamedOwnProperty r1, [0], [26]
         0xc2908be50b5 @  173 : 0b f9             Ldar r1
  612 S> 0xc2908be50b7 @  175 : a9                Return 
  676 S> 0xc2908be50b8 @  176 : 7c 0c 1c 29       CreateObjectLiteral [12], [28], #41
         0xc2908be50bc @  180 : c3                Star1 
         0xc2908be50bd @  181 : 17 03             LdaImmutableCurrentContextSlot [3]
  707 E> 0xc2908be50bf @  183 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be50c1 @  185 : c2                Star2 
  722 E> 0xc2908be50c2 @  186 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0xc2908be50c6 @  190 : c2                Star2 
  733 E> 0xc2908be50c7 @  191 : 2d f8 07 1d       GetNamedProperty r2, [7], [29]
         0xc2908be50cb @  195 : 33 f9 00 1f       DefineNamedOwnProperty r1, [0], [31]
         0xc2908be50cf @  199 : 0b f9             Ldar r1
  759 S> 0xc2908be50d1 @  201 : a9                Return 
  820 S> 0xc2908be50d2 @  202 : 7c 0d 21 29       CreateObjectLiteral [13], [33], #41
         0xc2908be50d6 @  206 : c3                Star1 
         0xc2908be50d7 @  207 : 17 03             LdaImmutableCurrentContextSlot [3]
  851 E> 0xc2908be50d9 @  209 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be50db @  211 : c2                Star2 
  866 E> 0xc2908be50dc @  212 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0xc2908be50e0 @  216 : c2                Star2 
  877 E> 0xc2908be50e1 @  217 : 2d f8 08 22       GetNamedProperty r2, [8], [34]
         0xc2908be50e5 @  221 : 33 f9 00 24       DefineNamedOwnProperty r1, [0], [36]
         0xc2908be50e9 @  225 : 0b f9             Ldar r1
  900 S> 0xc2908be50eb @  227 : a9                Return 
  963 S> 0xc2908be50ec @  228 : 7c 0e 26 29       CreateObjectLiteral [14], [38], #41
         0xc2908be50f0 @  232 : c3                Star1 
         0xc2908be50f1 @  233 : 17 03             LdaImmutableCurrentContextSlot [3]
  994 E> 0xc2908be50f3 @  235 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be50f5 @  237 : c2                Star2 
 1009 E> 0xc2908be50f6 @  238 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0xc2908be50fa @  242 : c2                Star2 
 1020 E> 0xc2908be50fb @  243 : 2d f8 09 27       GetNamedProperty r2, [9], [39]
         0xc2908be50ff @  247 : 33 f9 00 29       DefineNamedOwnProperty r1, [0], [41]
         0xc2908be5103 @  251 : 0b f9             Ldar r1
 1045 S> 0xc2908be5105 @  253 : a9                Return 
 1106 S> 0xc2908be5106 @  254 : 7c 0f 2b 29       CreateObjectLiteral [15], [43], #41
         0xc2908be510a @  258 : c3                Star1 
         0xc2908be510b @  259 : 17 03             LdaImmutableCurrentContextSlot [3]
 1137 E> 0xc2908be510d @  261 : aa 04             ThrowReferenceErrorIfHole [4]
         0xc2908be510f @  263 : c2                Star2 
 1152 E> 0xc2908be5110 @  264 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0xc2908be5114 @  268 : c2                Star2 
 1163 E> 0xc2908be5115 @  269 : 2d f8 0a 2c       GetNamedProperty r2, [10], [44]
         0xc2908be5119 @  273 : 33 f9 00 2e       DefineNamedOwnProperty r1, [0], [46]
         0xc2908be511d @  277 : 17 02             LdaImmutableCurrentContextSlot [2]
 1198 E> 0xc2908be511f @  279 : aa 10             ThrowReferenceErrorIfHole [16]
         0xc2908be5121 @  281 : c1                Star3 
 1207 E> 0xc2908be5122 @  282 : 2d f7 11 30       GetNamedProperty r3, [17], [48]
         0xc2908be5126 @  286 : c1                Star3 
 1214 E> 0xc2908be5127 @  287 : 2d f7 12 32       GetNamedProperty r3, [18], [50]
         0xc2908be512b @  291 : c2                Star2 
 1234 E> 0xc2908be512c @  292 : 2d 03 13 34       GetNamedProperty a0, [19], [52]
         0xc2908be5130 @  296 : c0                Star4 
 1214 E> 0xc2908be5131 @  297 : 5e f8 f7 f6 36    CallProperty1 r2, r3, r4, [54]
         0xc2908be5136 @  302 : 33 f9 13 38       DefineNamedOwnProperty r1, [19], [56]
         0xc2908be513a @  306 : 0b f9             Ldar r1
 1259 S> 0xc2908be513c @  308 : a9                Return 
 1289 S> 0xc2908be513d @  309 : 21 02 05          LdaGlobal [2], [5]
         0xc2908be5140 @  312 : c3                Star1 
         0xc2908be5141 @  313 : 13 03             LdaConstant [3]
         0xc2908be5143 @  315 : c2                Star2 
 1335 E> 0xc2908be5144 @  316 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0xc2908be5148 @  320 : 77                ToString 
         0xc2908be5149 @  321 : 39 f8 3a          Add r2, [58]
         0xc2908be514c @  324 : c2                Star2 
         0xc2908be514d @  325 : 0b f9             Ldar r1
 1295 E> 0xc2908be514f @  327 : 69 f9 f8 01 3b    Construct r1, r2-r2, [59]
 1289 E> 0xc2908be5154 @  332 : a7                Throw 
Constant pool (size = 20)
0xc2908be5159: [FixedArray] in OldSpace
 - map: 0x2ed6265012e1 <Map>
 - length: 20
           0: 0x2ed626504469 <String[4]: #type>
           1: 0x2ed6265055f9 <String[6]: #length>
           2: 0x2ed626504de1 <String[5]: #Error>
           3: 0x0c2908be5209 <String[20]: #invalid action type >
           4: 0x0c2908be4f79 <String[14]: #action_types_1>
           5: 0x0c2908be5231 <String[10]: #ActionType>
           6: 0x0c2908be5251 <String[9]: #MOVE_LEFT>
           7: 0x0c2908be5271 <String[10]: #MOVE_RIGHT>
           8: 0x0c2908be5291 <String[7]: #MOVE_UP>
           9: 0x0c2908be52a9 <String[9]: #MOVE_DOWN>
          10: 0x0c2908be52c9 <String[7]: #MOVE_TO>
          11: 0x0c2908be52e1 <ObjectBoilerplateDescription[3]>
          12: 0x0c2908be5309 <ObjectBoilerplateDescription[3]>
          13: 0x0c2908be5331 <ObjectBoilerplateDescription[3]>
          14: 0x0c2908be5359 <ObjectBoilerplateDescription[3]>
          15: 0x0c2908be5381 <ObjectBoilerplateDescription[5]>
          16: 0x0c2908be4f61 <String[8]: #vector_1>
          17: 0x0c2908be53b9 <String[6]: #Vector>
          18: 0x0c2908be53d1 <String[12]: #fromPosition>
          19: 0x2ed626505c19 <String[8]: #position>
Handler Table (size = 0)
Source Position Table (size = 136)
0x0c2908be53f1 <ByteArray[136]>
Object boilerplate at 0x0c2908be52e1: 
0xc2908be52e1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2ed626502059 <Map>
 - length: 3
           0: 8
           1: 0x2ed626504469 <String[4]: #type>
           2: 0x2ed626501501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x0c2908be5309: 
0xc2908be5309: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2ed626502059 <Map>
 - length: 3
           0: 8
           1: 0x2ed626504469 <String[4]: #type>
           2: 0x2ed626501501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x0c2908be5331: 
0xc2908be5331: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2ed626502059 <Map>
 - length: 3
           0: 8
           1: 0x2ed626504469 <String[4]: #type>
           2: 0x2ed626501501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x0c2908be5359: 
0xc2908be5359: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2ed626502059 <Map>
 - length: 3
           0: 8
           1: 0x2ed626504469 <String[4]: #type>
           2: 0x2ed626501501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x0c2908be5381: 
0xc2908be5381: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2ed626502059 <Map>
 - length: 5
           0: 8
           1: 0x2ed626504469 <String[4]: #type>
           2: 0x2ed626501501 <Odd Oddball: uninitialized>
           3: 0x2ed626505c19 <String[8]: #position>
           4: 0x2ed626501501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x0c2908be5671: 
0xc2908be5671: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2ed626502059 <Map>
 - length: 3
           0: 8
           1: 0x2ed626506419 <String[5]: #value>
           2: 0x2ed626501729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
