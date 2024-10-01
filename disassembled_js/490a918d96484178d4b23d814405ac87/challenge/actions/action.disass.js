<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1d4e54de4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1d4e54de4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1d4e54de4dbc @    4 : c4                Star0 
 1609 S> 0x1d4e54de4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x1d4e54de4dc1: [FixedArray] in OldSpace
 - map: 0x0f879ef412e1 <Map>
 - length: 1
           0: 0x1d4e54de4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1d4e54de5729 <ByteArray[7]>
0x1d4e54de4dd9 points to: [0x1d4e54de4e48]
=== [0x1d4e54de4e48] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1d4e54de4e48 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x1d4e54de4e4b @    3 : 1a f9             PushContext r1
         0x1d4e54de4e4d @    5 : 10                LdaTheHole 
         0x1d4e54de4e4e @    6 : 25 02             StaCurrentContextSlot [2]
         0x1d4e54de4e50 @    8 : 10                LdaTheHole 
         0x1d4e54de4e51 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1d4e54de4e53 @   11 : 80 01 00 02       CreateClosure [1], [0], #2
         0x1d4e54de4e57 @   15 : c4                Star0 
   76 S> 0x1d4e54de4e58 @   16 : 21 02 00          LdaGlobal [2], [0]
         0x1d4e54de4e5b @   19 : c1                Star3 
   83 E> 0x1d4e54de4e5c @   20 : 2d f7 03 02       GetNamedProperty r3, [3], [2]
         0x1d4e54de4e60 @   24 : c2                Star2 
         0x1d4e54de4e61 @   25 : 13 04             LdaConstant [4]
         0x1d4e54de4e63 @   27 : bf                Star5 
   98 E> 0x1d4e54de4e64 @   28 : 7c 05 04 29       CreateObjectLiteral [5], [4], #41
         0x1d4e54de4e68 @   32 : be                Star6 
         0x1d4e54de4e69 @   33 : 19 03 f6          Mov a0, r4
   83 E> 0x1d4e54de4e6c @   36 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x1d4e54de4e71 @   41 : 0b fa             Ldar r0
  161 E> 0x1d4e54de4e73 @   43 : 32 03 06 07       SetNamedProperty a0, [6], [7]
  195 S> 0x1d4e54de4e77 @   47 : 13 07             LdaConstant [7]
         0x1d4e54de4e79 @   49 : c1                Star3 
  195 E> 0x1d4e54de4e7a @   50 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  195 E> 0x1d4e54de4e7e @   54 : 25 02             StaCurrentContextSlot [2]
  249 S> 0x1d4e54de4e80 @   56 : 13 08             LdaConstant [8]
         0x1d4e54de4e82 @   58 : c1                Star3 
  249 E> 0x1d4e54de4e83 @   59 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  249 E> 0x1d4e54de4e87 @   63 : 25 03             StaCurrentContextSlot [3]
         0x1d4e54de4e89 @   65 : 0e                LdaUndefined 
 1606 S> 0x1d4e54de4e8a @   66 : a9                Return 
Constant pool (size = 9)
0x1d4e54de4e91: [FixedArray] in OldSpace
 - map: 0x0f879ef412e1 <Map>
 - length: 9
           0: 0x1d4e54de4ee9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1d4e54de4f89 <SharedFunctionInfo ActionFactory>
           2: 0x0f879ef45ab9 <String[6]: #Object>
           3: 0x0f879ef44c11 <String[14]: #defineProperty>
           4: 0x1d4e54de5641 <String[10]: #__esModule>
           5: 0x1d4e54de5661 <ObjectBoilerplateDescription[3]>
           6: 0x1d4e54de54c9 <String[13]: #ActionFactory>
           7: 0x1d4e54de5689 <String[18]: #../geometry/vector>
           8: 0x1d4e54de56b1 <String[14]: #./action_types>
Handler Table (size = 0)
Source Position Table (size = 35)
0x1d4e54de56d1 <ByteArray[35]>
0x1d4e54de4f89 points to: [0x1d4e54de4ff8]
=== [0x1d4e54de4ff8] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  331 S> 0x1d4e54de4ff8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1d4e54de4ffc @    4 : 20 01             TestTypeOf #1
         0x1d4e54de4ffe @    6 : 99 12             JumpIfFalse [18] (0x1d4e54de5010 @ 24)
  359 E> 0x1d4e54de5000 @    8 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1d4e54de5004 @   12 : c4                Star0 
  364 E> 0x1d4e54de5005 @   13 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1d4e54de5009 @   17 : c4                Star0 
         0x1d4e54de500a @   18 : 0c                LdaZero 
  371 E> 0x1d4e54de500b @   19 : 6c fa 04          TestEqualStrict r0, [4]
         0x1d4e54de500e @   22 : 99 1a             JumpIfFalse [26] (0x1d4e54de5028 @ 48)
  386 S> 0x1d4e54de5010 @   24 : 21 02 05          LdaGlobal [2], [5]
         0x1d4e54de5013 @   27 : c4                Star0 
         0x1d4e54de5014 @   28 : 13 03             LdaConstant [3]
         0x1d4e54de5016 @   30 : c3                Star1 
  432 E> 0x1d4e54de5017 @   31 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1d4e54de501b @   35 : 77                ToString 
         0x1d4e54de501c @   36 : 39 f9 07          Add r1, [7]
         0x1d4e54de501f @   39 : c3                Star1 
         0x1d4e54de5020 @   40 : 0b fa             Ldar r0
  392 E> 0x1d4e54de5022 @   42 : 69 fa f9 01 08    Construct r0, r1-r1, [8]
  386 E> 0x1d4e54de5027 @   47 : a7                Throw 
  460 S> 0x1d4e54de5028 @   48 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1d4e54de502c @   52 : c4                Star0 
         0x1d4e54de502d @   53 : 17 03             LdaImmutableCurrentContextSlot [3]
  481 E> 0x1d4e54de502f @   55 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de5031 @   57 : c3                Star1 
  496 E> 0x1d4e54de5032 @   58 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0x1d4e54de5036 @   62 : c3                Star1 
  507 E> 0x1d4e54de5037 @   63 : 2d f9 06 0d       GetNamedProperty r1, [6], [13]
         0x1d4e54de503b @   67 : 6c fa 0a          TestEqualStrict r0, [10]
         0x1d4e54de503e @   70 : 98 50             JumpIfTrue [80] (0x1d4e54de508e @ 150)
         0x1d4e54de5040 @   72 : 17 03             LdaImmutableCurrentContextSlot [3]
  626 E> 0x1d4e54de5042 @   74 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de5044 @   76 : c3                Star1 
  641 E> 0x1d4e54de5045 @   77 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0x1d4e54de5049 @   81 : c3                Star1 
  652 E> 0x1d4e54de504a @   82 : 2d f9 07 0f       GetNamedProperty r1, [7], [15]
         0x1d4e54de504e @   86 : 6c fa 0a          TestEqualStrict r0, [10]
         0x1d4e54de5051 @   89 : 98 57             JumpIfTrue [87] (0x1d4e54de50a8 @ 176)
         0x1d4e54de5053 @   91 : 17 03             LdaImmutableCurrentContextSlot [3]
  773 E> 0x1d4e54de5055 @   93 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de5057 @   95 : c3                Star1 
  788 E> 0x1d4e54de5058 @   96 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0x1d4e54de505c @  100 : c3                Star1 
  799 E> 0x1d4e54de505d @  101 : 2d f9 08 11       GetNamedProperty r1, [8], [17]
         0x1d4e54de5061 @  105 : 6c fa 0a          TestEqualStrict r0, [10]
         0x1d4e54de5064 @  108 : 98 5e             JumpIfTrue [94] (0x1d4e54de50c2 @ 202)
         0x1d4e54de5066 @  110 : 17 03             LdaImmutableCurrentContextSlot [3]
  914 E> 0x1d4e54de5068 @  112 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de506a @  114 : c3                Star1 
  929 E> 0x1d4e54de506b @  115 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0x1d4e54de506f @  119 : c3                Star1 
  940 E> 0x1d4e54de5070 @  120 : 2d f9 09 13       GetNamedProperty r1, [9], [19]
         0x1d4e54de5074 @  124 : 6c fa 0a          TestEqualStrict r0, [10]
         0x1d4e54de5077 @  127 : 98 65             JumpIfTrue [101] (0x1d4e54de50dc @ 228)
         0x1d4e54de5079 @  129 : 17 03             LdaImmutableCurrentContextSlot [3]
 1059 E> 0x1d4e54de507b @  131 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de507d @  133 : c3                Star1 
 1074 E> 0x1d4e54de507e @  134 : 2d f9 05 0b       GetNamedProperty r1, [5], [11]
         0x1d4e54de5082 @  138 : c3                Star1 
 1085 E> 0x1d4e54de5083 @  139 : 2d f9 0a 15       GetNamedProperty r1, [10], [21]
         0x1d4e54de5087 @  143 : 6c fa 0a          TestEqualStrict r0, [10]
         0x1d4e54de508a @  146 : 98 6c             JumpIfTrue [108] (0x1d4e54de50f6 @ 254)
         0x1d4e54de508c @  148 : 8a a1             Jump [161] (0x1d4e54de512d @ 309)
  530 S> 0x1d4e54de508e @  150 : 7c 0b 17 29       CreateObjectLiteral [11], [23], #41
         0x1d4e54de5092 @  154 : c3                Star1 
         0x1d4e54de5093 @  155 : 17 03             LdaImmutableCurrentContextSlot [3]
  561 E> 0x1d4e54de5095 @  157 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de5097 @  159 : c2                Star2 
  576 E> 0x1d4e54de5098 @  160 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0x1d4e54de509c @  164 : c2                Star2 
  587 E> 0x1d4e54de509d @  165 : 2d f8 06 18       GetNamedProperty r2, [6], [24]
         0x1d4e54de50a1 @  169 : 33 f9 00 1a       DefineNamedOwnProperty r1, [0], [26]
         0x1d4e54de50a5 @  173 : 0b f9             Ldar r1
  612 S> 0x1d4e54de50a7 @  175 : a9                Return 
  676 S> 0x1d4e54de50a8 @  176 : 7c 0c 1c 29       CreateObjectLiteral [12], [28], #41
         0x1d4e54de50ac @  180 : c3                Star1 
         0x1d4e54de50ad @  181 : 17 03             LdaImmutableCurrentContextSlot [3]
  707 E> 0x1d4e54de50af @  183 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de50b1 @  185 : c2                Star2 
  722 E> 0x1d4e54de50b2 @  186 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0x1d4e54de50b6 @  190 : c2                Star2 
  733 E> 0x1d4e54de50b7 @  191 : 2d f8 07 1d       GetNamedProperty r2, [7], [29]
         0x1d4e54de50bb @  195 : 33 f9 00 1f       DefineNamedOwnProperty r1, [0], [31]
         0x1d4e54de50bf @  199 : 0b f9             Ldar r1
  759 S> 0x1d4e54de50c1 @  201 : a9                Return 
  820 S> 0x1d4e54de50c2 @  202 : 7c 0d 21 29       CreateObjectLiteral [13], [33], #41
         0x1d4e54de50c6 @  206 : c3                Star1 
         0x1d4e54de50c7 @  207 : 17 03             LdaImmutableCurrentContextSlot [3]
  851 E> 0x1d4e54de50c9 @  209 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de50cb @  211 : c2                Star2 
  866 E> 0x1d4e54de50cc @  212 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0x1d4e54de50d0 @  216 : c2                Star2 
  877 E> 0x1d4e54de50d1 @  217 : 2d f8 08 22       GetNamedProperty r2, [8], [34]
         0x1d4e54de50d5 @  221 : 33 f9 00 24       DefineNamedOwnProperty r1, [0], [36]
         0x1d4e54de50d9 @  225 : 0b f9             Ldar r1
  900 S> 0x1d4e54de50db @  227 : a9                Return 
  963 S> 0x1d4e54de50dc @  228 : 7c 0e 26 29       CreateObjectLiteral [14], [38], #41
         0x1d4e54de50e0 @  232 : c3                Star1 
         0x1d4e54de50e1 @  233 : 17 03             LdaImmutableCurrentContextSlot [3]
  994 E> 0x1d4e54de50e3 @  235 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de50e5 @  237 : c2                Star2 
 1009 E> 0x1d4e54de50e6 @  238 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0x1d4e54de50ea @  242 : c2                Star2 
 1020 E> 0x1d4e54de50eb @  243 : 2d f8 09 27       GetNamedProperty r2, [9], [39]
         0x1d4e54de50ef @  247 : 33 f9 00 29       DefineNamedOwnProperty r1, [0], [41]
         0x1d4e54de50f3 @  251 : 0b f9             Ldar r1
 1045 S> 0x1d4e54de50f5 @  253 : a9                Return 
 1106 S> 0x1d4e54de50f6 @  254 : 7c 0f 2b 29       CreateObjectLiteral [15], [43], #41
         0x1d4e54de50fa @  258 : c3                Star1 
         0x1d4e54de50fb @  259 : 17 03             LdaImmutableCurrentContextSlot [3]
 1137 E> 0x1d4e54de50fd @  261 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1d4e54de50ff @  263 : c2                Star2 
 1152 E> 0x1d4e54de5100 @  264 : 2d f8 05 0b       GetNamedProperty r2, [5], [11]
         0x1d4e54de5104 @  268 : c2                Star2 
 1163 E> 0x1d4e54de5105 @  269 : 2d f8 0a 2c       GetNamedProperty r2, [10], [44]
         0x1d4e54de5109 @  273 : 33 f9 00 2e       DefineNamedOwnProperty r1, [0], [46]
         0x1d4e54de510d @  277 : 17 02             LdaImmutableCurrentContextSlot [2]
 1198 E> 0x1d4e54de510f @  279 : aa 10             ThrowReferenceErrorIfHole [16]
         0x1d4e54de5111 @  281 : c1                Star3 
 1207 E> 0x1d4e54de5112 @  282 : 2d f7 11 30       GetNamedProperty r3, [17], [48]
         0x1d4e54de5116 @  286 : c1                Star3 
 1214 E> 0x1d4e54de5117 @  287 : 2d f7 12 32       GetNamedProperty r3, [18], [50]
         0x1d4e54de511b @  291 : c2                Star2 
 1234 E> 0x1d4e54de511c @  292 : 2d 03 13 34       GetNamedProperty a0, [19], [52]
         0x1d4e54de5120 @  296 : c0                Star4 
 1214 E> 0x1d4e54de5121 @  297 : 5e f8 f7 f6 36    CallProperty1 r2, r3, r4, [54]
         0x1d4e54de5126 @  302 : 33 f9 13 38       DefineNamedOwnProperty r1, [19], [56]
         0x1d4e54de512a @  306 : 0b f9             Ldar r1
 1259 S> 0x1d4e54de512c @  308 : a9                Return 
 1289 S> 0x1d4e54de512d @  309 : 21 02 05          LdaGlobal [2], [5]
         0x1d4e54de5130 @  312 : c3                Star1 
         0x1d4e54de5131 @  313 : 13 03             LdaConstant [3]
         0x1d4e54de5133 @  315 : c2                Star2 
 1335 E> 0x1d4e54de5134 @  316 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1d4e54de5138 @  320 : 77                ToString 
         0x1d4e54de5139 @  321 : 39 f8 3a          Add r2, [58]
         0x1d4e54de513c @  324 : c2                Star2 
         0x1d4e54de513d @  325 : 0b f9             Ldar r1
 1295 E> 0x1d4e54de513f @  327 : 69 f9 f8 01 3b    Construct r1, r2-r2, [59]
 1289 E> 0x1d4e54de5144 @  332 : a7                Throw 
Constant pool (size = 20)
0x1d4e54de5149: [FixedArray] in OldSpace
 - map: 0x0f879ef412e1 <Map>
 - length: 20
           0: 0x0f879ef44469 <String[4]: #type>
           1: 0x0f879ef455f9 <String[6]: #length>
           2: 0x0f879ef44de1 <String[5]: #Error>
           3: 0x1d4e54de51f9 <String[20]: #invalid action type >
           4: 0x1d4e54de4f69 <String[14]: #action_types_1>
           5: 0x1d4e54de5221 <String[10]: #ActionType>
           6: 0x1d4e54de5241 <String[9]: #MOVE_LEFT>
           7: 0x1d4e54de5261 <String[10]: #MOVE_RIGHT>
           8: 0x1d4e54de5281 <String[7]: #MOVE_UP>
           9: 0x1d4e54de5299 <String[9]: #MOVE_DOWN>
          10: 0x1d4e54de52b9 <String[7]: #MOVE_TO>
          11: 0x1d4e54de52d1 <ObjectBoilerplateDescription[3]>
          12: 0x1d4e54de52f9 <ObjectBoilerplateDescription[3]>
          13: 0x1d4e54de5321 <ObjectBoilerplateDescription[3]>
          14: 0x1d4e54de5349 <ObjectBoilerplateDescription[3]>
          15: 0x1d4e54de5371 <ObjectBoilerplateDescription[5]>
          16: 0x1d4e54de4f51 <String[8]: #vector_1>
          17: 0x1d4e54de53a9 <String[6]: #Vector>
          18: 0x1d4e54de53c1 <String[12]: #fromPosition>
          19: 0x0f879ef45c19 <String[8]: #position>
Handler Table (size = 0)
Source Position Table (size = 136)
0x1d4e54de53e1 <ByteArray[136]>
Boilerplate at 0x1d4e54de52d1: 
0x1d4e54de52d1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0f879ef42059 <Map>
 - length: 3
           0: 8
           1: 0x0f879ef44469 <String[4]: #type>
           2: 0x0f879ef41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1d4e54de52f9: 
0x1d4e54de52f9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0f879ef42059 <Map>
 - length: 3
           0: 8
           1: 0x0f879ef44469 <String[4]: #type>
           2: 0x0f879ef41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1d4e54de5321: 
0x1d4e54de5321: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0f879ef42059 <Map>
 - length: 3
           0: 8
           1: 0x0f879ef44469 <String[4]: #type>
           2: 0x0f879ef41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1d4e54de5349: 
0x1d4e54de5349: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0f879ef42059 <Map>
 - length: 3
           0: 8
           1: 0x0f879ef44469 <String[4]: #type>
           2: 0x0f879ef41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1d4e54de5371: 
0x1d4e54de5371: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0f879ef42059 <Map>
 - length: 5
           0: 8
           1: 0x0f879ef44469 <String[4]: #type>
           2: 0x0f879ef41501 <Odd Oddball: uninitialized>
           3: 0x0f879ef45c19 <String[8]: #position>
           4: 0x0f879ef41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1d4e54de5661: 
0x1d4e54de5661: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0f879ef42059 <Map>
 - length: 3
           0: 8
           1: 0x0f879ef46419 <String[5]: #value>
           2: 0x0f879ef41729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
