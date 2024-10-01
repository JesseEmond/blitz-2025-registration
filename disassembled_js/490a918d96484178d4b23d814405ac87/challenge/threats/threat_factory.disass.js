<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3c6677ce4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3c6677ce4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3c6677ce4dbc @    4 : c4                Star0 
 1514 S> 0x3c6677ce4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x3c6677ce4dc1: [FixedArray] in OldSpace
 - map: 0x335af7c012e1 <Map>
 - length: 1
           0: 0x3c6677ce4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3c6677ce5839 <ByteArray[7]>
0x3c6677ce4dd9 points to: [0x3c6677ce4e48]
=== [0x3c6677ce4e48] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   10 E> 0x3c6677ce4e48 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x3c6677ce4e4b @    3 : 1a f9             PushContext r1
         0x3c6677ce4e4d @    5 : 10                LdaTheHole 
         0x3c6677ce4e4e @    6 : 25 02             StaCurrentContextSlot [2]
         0x3c6677ce4e50 @    8 : 10                LdaTheHole 
         0x3c6677ce4e51 @    9 : 25 03             StaCurrentContextSlot [3]
         0x3c6677ce4e53 @   11 : 10                LdaTheHole 
         0x3c6677ce4e54 @   12 : 25 04             StaCurrentContextSlot [4]
         0x3c6677ce4e56 @   14 : 10                LdaTheHole 
         0x3c6677ce4e57 @   15 : 25 05             StaCurrentContextSlot [5]
         0x3c6677ce4e59 @   17 : 10                LdaTheHole 
         0x3c6677ce4e5a @   18 : 25 06             StaCurrentContextSlot [6]
         0x3c6677ce4e5c @   20 : 10                LdaTheHole 
         0x3c6677ce4e5d @   21 : 25 07             StaCurrentContextSlot [7]
         0x3c6677ce4e5f @   23 : 80 01 00 02       CreateClosure [1], [0], #2
         0x3c6677ce4e63 @   27 : c4                Star0 
   76 S> 0x3c6677ce4e64 @   28 : 21 02 00          LdaGlobal [2], [0]
         0x3c6677ce4e67 @   31 : c1                Star3 
   83 E> 0x3c6677ce4e68 @   32 : 2d f7 03 02       GetNamedProperty r3, [3], [2]
         0x3c6677ce4e6c @   36 : c2                Star2 
         0x3c6677ce4e6d @   37 : 13 04             LdaConstant [4]
         0x3c6677ce4e6f @   39 : bf                Star5 
   98 E> 0x3c6677ce4e70 @   40 : 7c 05 04 29       CreateObjectLiteral [5], [4], #41
         0x3c6677ce4e74 @   44 : be                Star6 
         0x3c6677ce4e75 @   45 : 19 03 f6          Mov a0, r4
   83 E> 0x3c6677ce4e78 @   48 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x3c6677ce4e7d @   53 : 0b fa             Ldar r0
  160 E> 0x3c6677ce4e7f @   55 : 32 03 06 07       SetNamedProperty a0, [6], [7]
  197 S> 0x3c6677ce4e83 @   59 : 13 07             LdaConstant [7]
         0x3c6677ce4e85 @   61 : c1                Star3 
  197 E> 0x3c6677ce4e86 @   62 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  197 E> 0x3c6677ce4e8a @   66 : 25 02             StaCurrentContextSlot [2]
  242 S> 0x3c6677ce4e8c @   68 : 13 08             LdaConstant [8]
         0x3c6677ce4e8e @   70 : c1                Star3 
  242 E> 0x3c6677ce4e8f @   71 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  242 E> 0x3c6677ce4e93 @   75 : 25 03             StaCurrentContextSlot [3]
  284 S> 0x3c6677ce4e95 @   77 : 13 09             LdaConstant [9]
         0x3c6677ce4e97 @   79 : c1                Star3 
  284 E> 0x3c6677ce4e98 @   80 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  284 E> 0x3c6677ce4e9c @   84 : 25 04             StaCurrentContextSlot [4]
  338 S> 0x3c6677ce4e9e @   86 : 13 0a             LdaConstant [10]
         0x3c6677ce4ea0 @   88 : c1                Star3 
  338 E> 0x3c6677ce4ea1 @   89 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  338 E> 0x3c6677ce4ea5 @   93 : 25 05             StaCurrentContextSlot [5]
  397 S> 0x3c6677ce4ea7 @   95 : 13 0b             LdaConstant [11]
         0x3c6677ce4ea9 @   97 : c1                Star3 
  397 E> 0x3c6677ce4eaa @   98 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  397 E> 0x3c6677ce4eae @  102 : 25 06             StaCurrentContextSlot [6]
  468 S> 0x3c6677ce4eb0 @  104 : 13 0c             LdaConstant [12]
         0x3c6677ce4eb2 @  106 : c1                Star3 
  468 E> 0x3c6677ce4eb3 @  107 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  468 E> 0x3c6677ce4eb7 @  111 : 25 07             StaCurrentContextSlot [7]
         0x3c6677ce4eb9 @  113 : 0e                LdaUndefined 
 1511 S> 0x3c6677ce4eba @  114 : a9                Return 
Constant pool (size = 13)
0x3c6677ce4ec1: [FixedArray] in OldSpace
 - map: 0x335af7c012e1 <Map>
 - length: 13
           0: 0x3c6677ce4f39 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3c6677ce50c1 <SharedFunctionInfo createThreat>
           2: 0x335af7c05ab9 <String[6]: #Object>
           3: 0x335af7c04c11 <String[14]: #defineProperty>
           4: 0x3c6677ce56a1 <String[10]: #__esModule>
           5: 0x3c6677ce56c1 <ObjectBoilerplateDescription[3]>
           6: 0x3c6677ce5531 <String[12]: #createThreat>
           7: 0x3c6677ce56e9 <String[12]: #./aggressive>
           8: 0x3c6677ce5709 <String[11]: #./girouette>
           9: 0x3c6677ce5729 <String[9]: #./sheriff>
          10: 0x3c6677ce5749 <String[23]: #./straight_ahead_threat>
          11: 0x3c6677ce5771 <String[14]: #./surveillance>
          12: 0x3c6677ce5791 <String[35]: #./tse_le_fantome_orange_dans_pacman>
Handler Table (size = 0)
Source Position Table (size = 63)
0x3c6677ce57c9 <ByteArray[63]>
0x3c6677ce50c1 points to: [0x3c6677ce5130]
=== [0x3c6677ce5130] DISASSEMBLY ===
Parameter count 5
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  580 S> 0x3c6677ce5130 @    0 : 13 00             LdaConstant [0]
         0x3c6677ce5132 @    2 : 6c 06 00          TestEqualStrict a3, [0]
         0x3c6677ce5135 @    5 : 19 06 fa          Mov a3, r0
         0x3c6677ce5138 @    8 : 98 27             JumpIfTrue [39] (0x3c6677ce515f @ 47)
         0x3c6677ce513a @   10 : 13 01             LdaConstant [1]
         0x3c6677ce513c @   12 : 6c fa 00          TestEqualStrict r0, [0]
         0x3c6677ce513f @   15 : 98 3e             JumpIfTrue [62] (0x3c6677ce517d @ 77)
         0x3c6677ce5141 @   17 : 13 02             LdaConstant [2]
         0x3c6677ce5143 @   19 : 6c fa 00          TestEqualStrict r0, [0]
         0x3c6677ce5146 @   22 : 98 55             JumpIfTrue [85] (0x3c6677ce519b @ 107)
         0x3c6677ce5148 @   24 : 13 03             LdaConstant [3]
         0x3c6677ce514a @   26 : 6c fa 00          TestEqualStrict r0, [0]
         0x3c6677ce514d @   29 : 98 6c             JumpIfTrue [108] (0x3c6677ce51b9 @ 137)
         0x3c6677ce514f @   31 : 13 04             LdaConstant [4]
         0x3c6677ce5151 @   33 : 6c fa 00          TestEqualStrict r0, [0]
         0x3c6677ce5154 @   36 : 98 83             JumpIfTrue [131] (0x3c6677ce51d7 @ 167)
         0x3c6677ce5156 @   38 : 13 05             LdaConstant [5]
         0x3c6677ce5158 @   40 : 6c fa 00          TestEqualStrict r0, [0]
         0x3c6677ce515b @   43 : 98 9a             JumpIfTrue [154] (0x3c6677ce51f5 @ 197)
         0x3c6677ce515d @   45 : 8a b6             Jump [182] (0x3c6677ce5213 @ 227)
  636 S> 0x3c6677ce515f @   47 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x3c6677ce5161 @   49 : aa 06             ThrowReferenceErrorIfHole [6]
         0x3c6677ce5163 @   51 : c3                Star1 
  671 E> 0x3c6677ce5164 @   52 : 2d f9 07 01       GetNamedProperty r1, [7], [1]
         0x3c6677ce5168 @   56 : c3                Star1 
         0x3c6677ce5169 @   57 : 0b f9             Ldar r1
         0x3c6677ce516b @   59 : 19 03 f8          Mov a0, r2
         0x3c6677ce516e @   62 : 19 04 f7          Mov a1, r3
         0x3c6677ce5171 @   65 : 19 05 f6          Mov a2, r4
         0x3c6677ce5174 @   68 : 19 06 f5          Mov a3, r5
  643 E> 0x3c6677ce5177 @   71 : 69 f9 f8 04 03    Construct r1, r2-r5, [3]
  727 S> 0x3c6677ce517c @   76 : a9                Return 
  766 S> 0x3c6677ce517d @   77 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x3c6677ce517f @   79 : aa 08             ThrowReferenceErrorIfHole [8]
         0x3c6677ce5181 @   81 : c3                Star1 
  789 E> 0x3c6677ce5182 @   82 : 2d f9 09 05       GetNamedProperty r1, [9], [5]
         0x3c6677ce5186 @   86 : c3                Star1 
         0x3c6677ce5187 @   87 : 0b f9             Ldar r1
         0x3c6677ce5189 @   89 : 19 03 f8          Mov a0, r2
         0x3c6677ce518c @   92 : 19 04 f7          Mov a1, r3
         0x3c6677ce518f @   95 : 19 05 f6          Mov a2, r4
         0x3c6677ce5192 @   98 : 19 06 f5          Mov a3, r5
  773 E> 0x3c6677ce5195 @  101 : 69 f9 f8 04 07    Construct r1, r2-r5, [7]
  841 S> 0x3c6677ce519a @  106 : a9                Return 
  881 S> 0x3c6677ce519b @  107 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3c6677ce519d @  109 : aa 0a             ThrowReferenceErrorIfHole [10]
         0x3c6677ce519f @  111 : c3                Star1 
  905 E> 0x3c6677ce51a0 @  112 : 2d f9 0b 09       GetNamedProperty r1, [11], [9]
         0x3c6677ce51a4 @  116 : c3                Star1 
         0x3c6677ce51a5 @  117 : 0b f9             Ldar r1
         0x3c6677ce51a7 @  119 : 19 03 f8          Mov a0, r2
         0x3c6677ce51aa @  122 : 19 04 f7          Mov a1, r3
         0x3c6677ce51ad @  125 : 19 05 f6          Mov a2, r4
         0x3c6677ce51b0 @  128 : 19 06 f5          Mov a3, r5
  888 E> 0x3c6677ce51b3 @  131 : 69 f9 f8 04 0b    Construct r1, r2-r5, [11]
  958 S> 0x3c6677ce51b8 @  136 : a9                Return 
 1000 S> 0x3c6677ce51b9 @  137 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x3c6677ce51bb @  139 : aa 0c             ThrowReferenceErrorIfHole [12]
         0x3c6677ce51bd @  141 : c3                Star1 
 1026 E> 0x3c6677ce51be @  142 : 2d f9 0d 0d       GetNamedProperty r1, [13], [13]
         0x3c6677ce51c2 @  146 : c3                Star1 
         0x3c6677ce51c3 @  147 : 0b f9             Ldar r1
         0x3c6677ce51c5 @  149 : 19 03 f8          Mov a0, r2
         0x3c6677ce51c8 @  152 : 19 04 f7          Mov a1, r3
         0x3c6677ce51cb @  155 : 19 05 f6          Mov a2, r4
         0x3c6677ce51ce @  158 : 19 06 f5          Mov a3, r5
 1007 E> 0x3c6677ce51d1 @  161 : 69 f9 f8 04 0f    Construct r1, r2-r5, [15]
 1081 S> 0x3c6677ce51d6 @  166 : a9                Return 
 1140 S> 0x3c6677ce51d7 @  167 : 17 07             LdaImmutableCurrentContextSlot [7]
         0x3c6677ce51d9 @  169 : aa 0e             ThrowReferenceErrorIfHole [14]
         0x3c6677ce51db @  171 : c3                Star1 
 1187 E> 0x3c6677ce51dc @  172 : 2d f9 0f 11       GetNamedProperty r1, [15], [17]
         0x3c6677ce51e0 @  176 : c3                Star1 
         0x3c6677ce51e1 @  177 : 0b f9             Ldar r1
         0x3c6677ce51e3 @  179 : 19 03 f8          Mov a0, r2
         0x3c6677ce51e6 @  182 : 19 04 f7          Mov a1, r3
         0x3c6677ce51e9 @  185 : 19 05 f6          Mov a2, r4
         0x3c6677ce51ec @  188 : 19 06 f5          Mov a3, r5
 1147 E> 0x3c6677ce51ef @  191 : 69 f9 f8 04 13    Construct r1, r2-r5, [19]
 1255 S> 0x3c6677ce51f4 @  196 : a9                Return 
 1292 S> 0x3c6677ce51f5 @  197 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x3c6677ce51f7 @  199 : aa 10             ThrowReferenceErrorIfHole [16]
         0x3c6677ce51f9 @  201 : c3                Star1 
 1313 E> 0x3c6677ce51fa @  202 : 2d f9 11 15       GetNamedProperty r1, [17], [21]
         0x3c6677ce51fe @  206 : c3                Star1 
         0x3c6677ce51ff @  207 : 0b f9             Ldar r1
         0x3c6677ce5201 @  209 : 19 03 f8          Mov a0, r2
         0x3c6677ce5204 @  212 : 19 04 f7          Mov a1, r3
         0x3c6677ce5207 @  215 : 19 05 f6          Mov a2, r4
         0x3c6677ce520a @  218 : 19 06 f5          Mov a3, r5
 1299 E> 0x3c6677ce520d @  221 : 69 f9 f8 04 17    Construct r1, r2-r5, [23]
 1363 S> 0x3c6677ce5212 @  226 : a9                Return 
 1374 S> 0x3c6677ce5213 @  227 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x3c6677ce5215 @  229 : aa 06             ThrowReferenceErrorIfHole [6]
         0x3c6677ce5217 @  231 : c4                Star0 
 1409 E> 0x3c6677ce5218 @  232 : 2d fa 07 01       GetNamedProperty r0, [7], [1]
         0x3c6677ce521c @  236 : c4                Star0 
         0x3c6677ce521d @  237 : 0b fa             Ldar r0
         0x3c6677ce521f @  239 : 19 03 f9          Mov a0, r1
         0x3c6677ce5222 @  242 : 19 04 f8          Mov a1, r2
         0x3c6677ce5225 @  245 : 19 05 f7          Mov a2, r3
         0x3c6677ce5228 @  248 : 19 06 f6          Mov a3, r4
 1381 E> 0x3c6677ce522b @  251 : 69 fa f9 04 19    Construct r0, r1-r4, [25]
 1465 S> 0x3c6677ce5230 @  256 : a9                Return 
Constant pool (size = 18)
0x3c6677ce5239: [FixedArray] in OldSpace
 - map: 0x335af7c012e1 <Map>
 - length: 18
           0: 0x3c6677ce52d9 <String[10]: #straitHead>
           1: 0x3c6677ce52f9 <String[9]: #girouette>
           2: 0x3c6677ce5319 <String[10]: #aggressive>
           3: 0x3c6677ce5339 <String[12]: #surveillance>
           4: 0x3c6677ce5359 <String[29]: #le_fantome_orange_dans_pacman>
           5: 0x3c6677ce5389 <String[7]: #sheriff>
           6: 0x3c6677ce5041 <String[23]: #straight_ahead_threat_1>
           7: 0x3c6677ce53a1 <String[19]: #StraightAheadThreat>
           8: 0x3c6677ce5001 <String[11]: #girouette_1>
           9: 0x3c6677ce53c9 <String[15]: #GirouetteThreat>
          10: 0x3c6677ce4fe1 <String[12]: #aggressive_1>
          11: 0x3c6677ce53e9 <String[16]: #AggressiveThreat>
          12: 0x3c6677ce5069 <String[14]: #surveillance_1>
          13: 0x3c6677ce5409 <String[18]: #SurveillanceThreat>
          14: 0x3c6677ce5089 <String[35]: #tse_le_fantome_orange_dans_pacman_1>
          15: 0x3c6677ce5431 <String[31]: #LeFantomeOrangeDansPacmanThreat>
          16: 0x3c6677ce5021 <String[9]: #sheriff_1>
          17: 0x3c6677ce5461 <String[13]: #SheriffThreat>
Handler Table (size = 0)
Source Position Table (size = 79)
0x3c6677ce5481 <ByteArray[79]>
Boilerplate at 0x3c6677ce56c1: 
0x3c6677ce56c1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x335af7c02059 <Map>
 - length: 3
           0: 8
           1: 0x335af7c06419 <String[5]: #value>
           2: 0x335af7c01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
