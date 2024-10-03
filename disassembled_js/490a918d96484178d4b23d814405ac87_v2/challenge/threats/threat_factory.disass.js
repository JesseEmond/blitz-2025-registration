<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3f49bfce4dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3f49bfce4dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3f49bfce4dcc @    4 : c4                Star0 
 1514 S> 0x3f49bfce4dcd @    5 : a9                Return 
Constant pool (size = 1)
0x3f49bfce4dd1: [FixedArray] in OldSpace
 - map: 0x3c15ddd812e1 <Map>
 - length: 1
           0: 0x3f49bfce4de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3f49bfce5849 <ByteArray[7]>
0x3f49bfce4de9 points to: [0x3f49bfce4e58]
=== [0x3f49bfce4e58] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   10 E> 0x3f49bfce4e58 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x3f49bfce4e5b @    3 : 1a f9             PushContext r1
         0x3f49bfce4e5d @    5 : 10                LdaTheHole 
         0x3f49bfce4e5e @    6 : 25 02             StaCurrentContextSlot [2]
         0x3f49bfce4e60 @    8 : 10                LdaTheHole 
         0x3f49bfce4e61 @    9 : 25 03             StaCurrentContextSlot [3]
         0x3f49bfce4e63 @   11 : 10                LdaTheHole 
         0x3f49bfce4e64 @   12 : 25 04             StaCurrentContextSlot [4]
         0x3f49bfce4e66 @   14 : 10                LdaTheHole 
         0x3f49bfce4e67 @   15 : 25 05             StaCurrentContextSlot [5]
         0x3f49bfce4e69 @   17 : 10                LdaTheHole 
         0x3f49bfce4e6a @   18 : 25 06             StaCurrentContextSlot [6]
         0x3f49bfce4e6c @   20 : 10                LdaTheHole 
         0x3f49bfce4e6d @   21 : 25 07             StaCurrentContextSlot [7]
         0x3f49bfce4e6f @   23 : 80 01 00 02       CreateClosure [1], [0], #2
         0x3f49bfce4e73 @   27 : c4                Star0 
   76 S> 0x3f49bfce4e74 @   28 : 21 02 00          LdaGlobal [2], [0]
         0x3f49bfce4e77 @   31 : c1                Star3 
   83 E> 0x3f49bfce4e78 @   32 : 2d f7 03 02       GetNamedProperty r3, [3], [2]
         0x3f49bfce4e7c @   36 : c2                Star2 
         0x3f49bfce4e7d @   37 : 13 04             LdaConstant [4]
         0x3f49bfce4e7f @   39 : bf                Star5 
   98 E> 0x3f49bfce4e80 @   40 : 7c 05 04 29       CreateObjectLiteral [5], [4], #41
         0x3f49bfce4e84 @   44 : be                Star6 
         0x3f49bfce4e85 @   45 : 19 03 f6          Mov a0, r4
   83 E> 0x3f49bfce4e88 @   48 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x3f49bfce4e8d @   53 : 0b fa             Ldar r0
  160 E> 0x3f49bfce4e8f @   55 : 32 03 06 07       SetNamedProperty a0, [6], [7]
  197 S> 0x3f49bfce4e93 @   59 : 13 07             LdaConstant [7]
         0x3f49bfce4e95 @   61 : c1                Star3 
  197 E> 0x3f49bfce4e96 @   62 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  197 E> 0x3f49bfce4e9a @   66 : 25 02             StaCurrentContextSlot [2]
  242 S> 0x3f49bfce4e9c @   68 : 13 08             LdaConstant [8]
         0x3f49bfce4e9e @   70 : c1                Star3 
  242 E> 0x3f49bfce4e9f @   71 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  242 E> 0x3f49bfce4ea3 @   75 : 25 03             StaCurrentContextSlot [3]
  284 S> 0x3f49bfce4ea5 @   77 : 13 09             LdaConstant [9]
         0x3f49bfce4ea7 @   79 : c1                Star3 
  284 E> 0x3f49bfce4ea8 @   80 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  284 E> 0x3f49bfce4eac @   84 : 25 04             StaCurrentContextSlot [4]
  338 S> 0x3f49bfce4eae @   86 : 13 0a             LdaConstant [10]
         0x3f49bfce4eb0 @   88 : c1                Star3 
  338 E> 0x3f49bfce4eb1 @   89 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  338 E> 0x3f49bfce4eb5 @   93 : 25 05             StaCurrentContextSlot [5]
  397 S> 0x3f49bfce4eb7 @   95 : 13 0b             LdaConstant [11]
         0x3f49bfce4eb9 @   97 : c1                Star3 
  397 E> 0x3f49bfce4eba @   98 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  397 E> 0x3f49bfce4ebe @  102 : 25 06             StaCurrentContextSlot [6]
  468 S> 0x3f49bfce4ec0 @  104 : 13 0c             LdaConstant [12]
         0x3f49bfce4ec2 @  106 : c1                Star3 
  468 E> 0x3f49bfce4ec3 @  107 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  468 E> 0x3f49bfce4ec7 @  111 : 25 07             StaCurrentContextSlot [7]
         0x3f49bfce4ec9 @  113 : 0e                LdaUndefined 
 1511 S> 0x3f49bfce4eca @  114 : a9                Return 
Constant pool (size = 13)
0x3f49bfce4ed1: [FixedArray] in OldSpace
 - map: 0x3c15ddd812e1 <Map>
 - length: 13
           0: 0x3f49bfce4f49 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3f49bfce50d1 <SharedFunctionInfo createThreat>
           2: 0x3c15ddd85ab9 <String[6]: #Object>
           3: 0x3c15ddd84c11 <String[14]: #defineProperty>
           4: 0x3f49bfce56b1 <String[10]: #__esModule>
           5: 0x3f49bfce56d1 <ObjectBoilerplateDescription[3]>
           6: 0x3f49bfce5541 <String[12]: #createThreat>
           7: 0x3f49bfce56f9 <String[12]: #./aggressive>
           8: 0x3f49bfce5719 <String[11]: #./girouette>
           9: 0x3f49bfce5739 <String[9]: #./sheriff>
          10: 0x3f49bfce5759 <String[23]: #./straight_ahead_threat>
          11: 0x3f49bfce5781 <String[14]: #./surveillance>
          12: 0x3f49bfce57a1 <String[35]: #./tse_le_fantome_orange_dans_pacman>
Handler Table (size = 0)
Source Position Table (size = 63)
0x3f49bfce57d9 <ByteArray[63]>
0x3f49bfce50d1 points to: [0x3f49bfce5140]
=== [0x3f49bfce5140] DISASSEMBLY ===
Parameter count 5
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  580 S> 0x3f49bfce5140 @    0 : 13 00             LdaConstant [0]
         0x3f49bfce5142 @    2 : 6c 06 00          TestEqualStrict a3, [0]
         0x3f49bfce5145 @    5 : 19 06 fa          Mov a3, r0
         0x3f49bfce5148 @    8 : 98 27             JumpIfTrue [39] (0x3f49bfce516f @ 47)
         0x3f49bfce514a @   10 : 13 01             LdaConstant [1]
         0x3f49bfce514c @   12 : 6c fa 00          TestEqualStrict r0, [0]
         0x3f49bfce514f @   15 : 98 3e             JumpIfTrue [62] (0x3f49bfce518d @ 77)
         0x3f49bfce5151 @   17 : 13 02             LdaConstant [2]
         0x3f49bfce5153 @   19 : 6c fa 00          TestEqualStrict r0, [0]
         0x3f49bfce5156 @   22 : 98 55             JumpIfTrue [85] (0x3f49bfce51ab @ 107)
         0x3f49bfce5158 @   24 : 13 03             LdaConstant [3]
         0x3f49bfce515a @   26 : 6c fa 00          TestEqualStrict r0, [0]
         0x3f49bfce515d @   29 : 98 6c             JumpIfTrue [108] (0x3f49bfce51c9 @ 137)
         0x3f49bfce515f @   31 : 13 04             LdaConstant [4]
         0x3f49bfce5161 @   33 : 6c fa 00          TestEqualStrict r0, [0]
         0x3f49bfce5164 @   36 : 98 83             JumpIfTrue [131] (0x3f49bfce51e7 @ 167)
         0x3f49bfce5166 @   38 : 13 05             LdaConstant [5]
         0x3f49bfce5168 @   40 : 6c fa 00          TestEqualStrict r0, [0]
         0x3f49bfce516b @   43 : 98 9a             JumpIfTrue [154] (0x3f49bfce5205 @ 197)
         0x3f49bfce516d @   45 : 8a b6             Jump [182] (0x3f49bfce5223 @ 227)
  636 S> 0x3f49bfce516f @   47 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x3f49bfce5171 @   49 : aa 06             ThrowReferenceErrorIfHole [6]
         0x3f49bfce5173 @   51 : c3                Star1 
  671 E> 0x3f49bfce5174 @   52 : 2d f9 07 01       GetNamedProperty r1, [7], [1]
         0x3f49bfce5178 @   56 : c3                Star1 
         0x3f49bfce5179 @   57 : 0b f9             Ldar r1
         0x3f49bfce517b @   59 : 19 03 f8          Mov a0, r2
         0x3f49bfce517e @   62 : 19 04 f7          Mov a1, r3
         0x3f49bfce5181 @   65 : 19 05 f6          Mov a2, r4
         0x3f49bfce5184 @   68 : 19 06 f5          Mov a3, r5
  643 E> 0x3f49bfce5187 @   71 : 69 f9 f8 04 03    Construct r1, r2-r5, [3]
  727 S> 0x3f49bfce518c @   76 : a9                Return 
  766 S> 0x3f49bfce518d @   77 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x3f49bfce518f @   79 : aa 08             ThrowReferenceErrorIfHole [8]
         0x3f49bfce5191 @   81 : c3                Star1 
  789 E> 0x3f49bfce5192 @   82 : 2d f9 09 05       GetNamedProperty r1, [9], [5]
         0x3f49bfce5196 @   86 : c3                Star1 
         0x3f49bfce5197 @   87 : 0b f9             Ldar r1
         0x3f49bfce5199 @   89 : 19 03 f8          Mov a0, r2
         0x3f49bfce519c @   92 : 19 04 f7          Mov a1, r3
         0x3f49bfce519f @   95 : 19 05 f6          Mov a2, r4
         0x3f49bfce51a2 @   98 : 19 06 f5          Mov a3, r5
  773 E> 0x3f49bfce51a5 @  101 : 69 f9 f8 04 07    Construct r1, r2-r5, [7]
  841 S> 0x3f49bfce51aa @  106 : a9                Return 
  881 S> 0x3f49bfce51ab @  107 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3f49bfce51ad @  109 : aa 0a             ThrowReferenceErrorIfHole [10]
         0x3f49bfce51af @  111 : c3                Star1 
  905 E> 0x3f49bfce51b0 @  112 : 2d f9 0b 09       GetNamedProperty r1, [11], [9]
         0x3f49bfce51b4 @  116 : c3                Star1 
         0x3f49bfce51b5 @  117 : 0b f9             Ldar r1
         0x3f49bfce51b7 @  119 : 19 03 f8          Mov a0, r2
         0x3f49bfce51ba @  122 : 19 04 f7          Mov a1, r3
         0x3f49bfce51bd @  125 : 19 05 f6          Mov a2, r4
         0x3f49bfce51c0 @  128 : 19 06 f5          Mov a3, r5
  888 E> 0x3f49bfce51c3 @  131 : 69 f9 f8 04 0b    Construct r1, r2-r5, [11]
  958 S> 0x3f49bfce51c8 @  136 : a9                Return 
 1000 S> 0x3f49bfce51c9 @  137 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x3f49bfce51cb @  139 : aa 0c             ThrowReferenceErrorIfHole [12]
         0x3f49bfce51cd @  141 : c3                Star1 
 1026 E> 0x3f49bfce51ce @  142 : 2d f9 0d 0d       GetNamedProperty r1, [13], [13]
         0x3f49bfce51d2 @  146 : c3                Star1 
         0x3f49bfce51d3 @  147 : 0b f9             Ldar r1
         0x3f49bfce51d5 @  149 : 19 03 f8          Mov a0, r2
         0x3f49bfce51d8 @  152 : 19 04 f7          Mov a1, r3
         0x3f49bfce51db @  155 : 19 05 f6          Mov a2, r4
         0x3f49bfce51de @  158 : 19 06 f5          Mov a3, r5
 1007 E> 0x3f49bfce51e1 @  161 : 69 f9 f8 04 0f    Construct r1, r2-r5, [15]
 1081 S> 0x3f49bfce51e6 @  166 : a9                Return 
 1140 S> 0x3f49bfce51e7 @  167 : 17 07             LdaImmutableCurrentContextSlot [7]
         0x3f49bfce51e9 @  169 : aa 0e             ThrowReferenceErrorIfHole [14]
         0x3f49bfce51eb @  171 : c3                Star1 
 1187 E> 0x3f49bfce51ec @  172 : 2d f9 0f 11       GetNamedProperty r1, [15], [17]
         0x3f49bfce51f0 @  176 : c3                Star1 
         0x3f49bfce51f1 @  177 : 0b f9             Ldar r1
         0x3f49bfce51f3 @  179 : 19 03 f8          Mov a0, r2
         0x3f49bfce51f6 @  182 : 19 04 f7          Mov a1, r3
         0x3f49bfce51f9 @  185 : 19 05 f6          Mov a2, r4
         0x3f49bfce51fc @  188 : 19 06 f5          Mov a3, r5
 1147 E> 0x3f49bfce51ff @  191 : 69 f9 f8 04 13    Construct r1, r2-r5, [19]
 1255 S> 0x3f49bfce5204 @  196 : a9                Return 
 1292 S> 0x3f49bfce5205 @  197 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x3f49bfce5207 @  199 : aa 10             ThrowReferenceErrorIfHole [16]
         0x3f49bfce5209 @  201 : c3                Star1 
 1313 E> 0x3f49bfce520a @  202 : 2d f9 11 15       GetNamedProperty r1, [17], [21]
         0x3f49bfce520e @  206 : c3                Star1 
         0x3f49bfce520f @  207 : 0b f9             Ldar r1
         0x3f49bfce5211 @  209 : 19 03 f8          Mov a0, r2
         0x3f49bfce5214 @  212 : 19 04 f7          Mov a1, r3
         0x3f49bfce5217 @  215 : 19 05 f6          Mov a2, r4
         0x3f49bfce521a @  218 : 19 06 f5          Mov a3, r5
 1299 E> 0x3f49bfce521d @  221 : 69 f9 f8 04 17    Construct r1, r2-r5, [23]
 1363 S> 0x3f49bfce5222 @  226 : a9                Return 
 1374 S> 0x3f49bfce5223 @  227 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x3f49bfce5225 @  229 : aa 06             ThrowReferenceErrorIfHole [6]
         0x3f49bfce5227 @  231 : c4                Star0 
 1409 E> 0x3f49bfce5228 @  232 : 2d fa 07 01       GetNamedProperty r0, [7], [1]
         0x3f49bfce522c @  236 : c4                Star0 
         0x3f49bfce522d @  237 : 0b fa             Ldar r0
         0x3f49bfce522f @  239 : 19 03 f9          Mov a0, r1
         0x3f49bfce5232 @  242 : 19 04 f8          Mov a1, r2
         0x3f49bfce5235 @  245 : 19 05 f7          Mov a2, r3
         0x3f49bfce5238 @  248 : 19 06 f6          Mov a3, r4
 1381 E> 0x3f49bfce523b @  251 : 69 fa f9 04 19    Construct r0, r1-r4, [25]
 1465 S> 0x3f49bfce5240 @  256 : a9                Return 
Constant pool (size = 18)
0x3f49bfce5249: [FixedArray] in OldSpace
 - map: 0x3c15ddd812e1 <Map>
 - length: 18
           0: 0x3f49bfce52e9 <String[10]: #straitHead>
           1: 0x3f49bfce5309 <String[9]: #girouette>
           2: 0x3f49bfce5329 <String[10]: #aggressive>
           3: 0x3f49bfce5349 <String[12]: #surveillance>
           4: 0x3f49bfce5369 <String[29]: #le_fantome_orange_dans_pacman>
           5: 0x3f49bfce5399 <String[7]: #sheriff>
           6: 0x3f49bfce5051 <String[23]: #straight_ahead_threat_1>
           7: 0x3f49bfce53b1 <String[19]: #StraightAheadThreat>
           8: 0x3f49bfce5011 <String[11]: #girouette_1>
           9: 0x3f49bfce53d9 <String[15]: #GirouetteThreat>
          10: 0x3f49bfce4ff1 <String[12]: #aggressive_1>
          11: 0x3f49bfce53f9 <String[16]: #AggressiveThreat>
          12: 0x3f49bfce5079 <String[14]: #surveillance_1>
          13: 0x3f49bfce5419 <String[18]: #SurveillanceThreat>
          14: 0x3f49bfce5099 <String[35]: #tse_le_fantome_orange_dans_pacman_1>
          15: 0x3f49bfce5441 <String[31]: #LeFantomeOrangeDansPacmanThreat>
          16: 0x3f49bfce5031 <String[9]: #sheriff_1>
          17: 0x3f49bfce5471 <String[13]: #SheriffThreat>
Handler Table (size = 0)
Source Position Table (size = 79)
0x3f49bfce5491 <ByteArray[79]>
Object boilerplate at 0x3f49bfce56d1: 
0x3f49bfce56d1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3c15ddd82059 <Map>
 - length: 3
           0: 8
           1: 0x3c15ddd86419 <String[5]: #value>
           2: 0x3c15ddd81729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
