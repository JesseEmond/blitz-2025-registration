<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x6393b924f28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x6393b924f28 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x6393b924f2c @    4 : c4                Star0 
 6564 S> 0x6393b924f2d @    5 : a9                Return 
Constant pool (size = 1)
0x6393b924f31: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 1
           0: 0x06393b924f49 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x06393b928999 <ByteArray[8]>
0x06393b924f49 points to: [0x6393b924fb8]
=== [0x6393b924fb8] DISASSEMBLY ===
Parameter count 6
Register count 28
Frame size 224
OSR urgency: 0
Bytecode age: 0
   76 S> 0x6393b924fb8 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x6393b924fbb @    3 : c1                Star3 
   83 E> 0x6393b924fbc @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x6393b924fc0 @    8 : c2                Star2 
         0x6393b924fc1 @    9 : 13 02             LdaConstant [2]
         0x6393b924fc3 @   11 : bf                Star5 
   98 E> 0x6393b924fc4 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x6393b924fc8 @   16 : be                Star6 
         0x6393b924fc9 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x6393b924fcc @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x6393b924fd1 @   25 : 0e                LdaUndefined 
  154 E> 0x6393b924fd2 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  181 S> 0x6393b924fd6 @   30 : 13 05             LdaConstant [5]
         0x6393b924fd8 @   32 : c1                Star3 
  181 E> 0x6393b924fd9 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x6393b924fdd @   37 : c4                Star0 
  233 E> 0x6393b924fde @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x6393b924fe2 @   42 : bf                Star5 
         0x6393b924fe3 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x6393b924fe7 @   47 : c2                Star2 
         0x6393b924fe8 @   48 : 13 06             LdaConstant [6]
         0x6393b924fea @   50 : c1                Star3 
         0x6393b924feb @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x6393b924fef @   55 : be                Star6 
         0x6393b924ff0 @   56 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x6393b924ff4 @   60 : bd                Star7 
         0x6393b924ff5 @   61 : 80 0b 03 02       CreateClosure [11], [3], #2
         0x6393b924ff9 @   65 : bc                Star8 
         0x6393b924ffa @   66 : 80 0c 04 02       CreateClosure [12], [4], #2
         0x6393b924ffe @   70 : bb                Star9 
         0x6393b924fff @   71 : 80 0d 05 02       CreateClosure [13], [5], #2
         0x6393b925003 @   75 : ba                Star10 
         0x6393b925004 @   76 : 80 0e 06 02       CreateClosure [14], [6], #2
         0x6393b925008 @   80 : b9                Star11 
         0x6393b925009 @   81 : 80 0f 07 02       CreateClosure [15], [7], #2
         0x6393b92500d @   85 : b8                Star12 
         0x6393b92500e @   86 : 80 10 08 02       CreateClosure [16], [8], #2
         0x6393b925012 @   90 : b7                Star13 
         0x6393b925013 @   91 : 80 11 09 02       CreateClosure [17], [9], #2
         0x6393b925017 @   95 : b6                Star14 
         0x6393b925018 @   96 : 80 12 0a 02       CreateClosure [18], [10], #2
         0x6393b92501c @  100 : b5                Star15 
         0x6393b92501d @  101 : 80 13 0b 02       CreateClosure [19], [11], #2
         0x6393b925021 @  105 : 18 ea             Star r16
         0x6393b925023 @  107 : 80 14 0c 02       CreateClosure [20], [12], #2
         0x6393b925027 @  111 : 18 e9             Star r17
         0x6393b925029 @  113 : 80 15 0d 02       CreateClosure [21], [13], #2
         0x6393b92502d @  117 : 18 e8             Star r18
         0x6393b92502f @  119 : 80 16 0e 02       CreateClosure [22], [14], #2
         0x6393b925033 @  123 : 18 e7             Star r19
         0x6393b925035 @  125 : 80 17 0f 02       CreateClosure [23], [15], #2
         0x6393b925039 @  129 : 18 e6             Star r20
         0x6393b92503b @  131 : 80 18 10 02       CreateClosure [24], [16], #2
         0x6393b92503f @  135 : 18 e5             Star r21
         0x6393b925041 @  137 : 80 19 11 02       CreateClosure [25], [17], #2
         0x6393b925045 @  141 : 18 e4             Star r22
         0x6393b925047 @  143 : 80 1a 12 02       CreateClosure [26], [18], #2
         0x6393b92504b @  147 : 18 e3             Star r23
         0x6393b92504d @  149 : 80 1b 13 02       CreateClosure [27], [19], #2
         0x6393b925051 @  153 : 18 e2             Star r24
         0x6393b925053 @  155 : 80 1c 14 02       CreateClosure [28], [20], #2
         0x6393b925057 @  159 : 18 e1             Star r25
         0x6393b925059 @  161 : 80 1d 15 02       CreateClosure [29], [21], #2
         0x6393b92505d @  165 : 18 e0             Star r26
         0x6393b92505f @  167 : 80 1e 16 02       CreateClosure [30], [22], #2
         0x6393b925063 @  171 : 18 df             Star r27
         0x6393b925065 @  173 : 19 f8 f6          Mov r2, r4
         0x6393b925068 @  176 : 65 28 00 f7 19    CallRuntime [DefineClass], r3-r27
         0x6393b92506d @  181 : c1                Star3 
         0x6393b92506e @  182 : 19 f6 f9          Mov r4, r1
 6501 S> 0x6393b925071 @  185 : 0b f9             Ldar r1
 6516 E> 0x6393b925073 @  187 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x6393b925077 @  191 : 0e                LdaUndefined 
 6561 S> 0x6393b925078 @  192 : a9                Return 
Constant pool (size = 31)
0x6393b925081: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 31
           0: 0x1899c7685ab9 <String[6]: #Object>
           1: 0x1899c7684c11 <String[14]: #defineProperty>
           2: 0x06393b925189 <String[10]: #__esModule>
           3: 0x06393b9251a9 <ObjectBoilerplateDescription[3]>
           4: 0x06393b9251d1 <String[6]: #Threat>
           5: 0x06393b9251e9 <String[9]: #../entity>
           6: 0x06393b925209 <FixedArray[7]>
           7: 0x06393b925859 <String[6]: #Entity>
           8: 0x06393b925871 <SharedFunctionInfo Threat>
           9: 0x06393b9261f9 <SharedFunctionInfo get direction>
          10: 0x06393b926321 <SharedFunctionInfo get map>
          11: 0x06393b926441 <SharedFunctionInfo get characterPosition>
          12: 0x06393b926571 <SharedFunctionInfo get randomNumber>
          13: 0x06393b926729 <SharedFunctionInfo setCharacterPosition>
          14: 0x06393b926839 <SharedFunctionInfo getRandomDirection>
          15: 0x06393b926bc9 <SharedFunctionInfo canMoveUp>
          16: 0x06393b926d39 <SharedFunctionInfo canMoveDown>
          17: 0x06393b926ee1 <SharedFunctionInfo canMoveLeft>
          18: 0x06393b927051 <SharedFunctionInfo canMoveRight>
          19: 0x06393b9271e9 <SharedFunctionInfo computeNewPositionAfterMove>
          20: 0x06393b927531 <SharedFunctionInfo moveUp>
          21: 0x06393b927689 <SharedFunctionInfo moveDown>
          22: 0x06393b9277e1 <SharedFunctionInfo moveLeft>
          23: 0x06393b927939 <SharedFunctionInfo moveRight>
          24: 0x06393b927a91 <SharedFunctionInfo getPossibleDirections>
          25: 0x06393b927ef9 <SharedFunctionInfo move>
          26: 0x06393b9280d9 <SharedFunctionInfo update>
          27: 0x06393b928301 <SharedFunctionInfo get position>
          28: 0x06393b928429 <SharedFunctionInfo serializeCommon>
          29: 0x06393b9285f9 <SharedFunctionInfo serializeForViewer>
          30: 0x06393b928761 <SharedFunctionInfo serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 33)
0x06393b9288f9 <ByteArray[33]>
Object boilerplate at 0x06393b9251a9: 
0x6393b9251a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 3
           0: 8
           1: 0x1899c7686419 <String[5]: #value>
           2: 0x1899c7681729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x06393b925209 has 7 elements:
0x6393b925209: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 7
           0: 25
           1: 0x06393b925251 <DescriptorArray[4]>
           2: 0x1899c7683301 <NumberDictionary[7]>
           3: 0x1899c7681329 <FixedArray[0]>
           4: 0x06393b925311 <DescriptorArray[23]>
           5: 0x1899c7683301 <NumberDictionary[7]>
           6: 0x1899c7681329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x19 (25)
Element[1]
0x6393b925251: [DescriptorArray] in OldSpace
 - map: 0x1899c7687761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1899c76855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x0b6bd1034fe1 <AccessorInfo>
  [1]: 0x1899c76858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x0b6bd1034f71 <AccessorInfo>
  [2]: 0x1899c7685cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 0, attrs: [___]) @ 0x0b6bd1035051 <AccessorInfo>
  [3]: 0x1899c76865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x06393b9252f9 <ClassPositions 203, 6500>
Element[2]
0x1899c7683301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1899c7681329: [FixedArray] in ReadOnlySpace
 - map: 0x1899c76812e1 <Map>
 - length: 0
Element[4]
0x6393b925311: [DescriptorArray] in OldSpace
 - map: 0x1899c7687761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 23
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1899c7684a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 12, attrs: [W_C]) @ 1
  [1]: 0x1899c76839a1: [String] in ReadOnlySpace: #direction (const accessor descriptor, p: 17, attrs: [W_C]) @ 0x06393b925551 <AccessorPair>(get: 3, set: 0x1899c7681339 <null>)
  [2]: 0xb6bd1009ea9: [String] in OldSpace: #map (const accessor descriptor, p: 10, attrs: [W_C]) @ 0x06393b925581 <AccessorPair>(get: 4, set: 0x1899c7681339 <null>)
  [3]: 0x6393b925599: [String] in OldSpace: #characterPosition (const accessor descriptor, p: 11, attrs: [W_C]) @ 0x06393b9255c1 <AccessorPair>(get: 5, set: 0x1899c7681339 <null>)
  [4]: 0x6393b9255d9: [String] in OldSpace: #randomNumber (const accessor descriptor, p: 8, attrs: [W_C]) @ 0x06393b9255f9 <AccessorPair>(get: 6, set: 0x1899c7681339 <null>)
  [5]: 0x6393b925611: [String] in OldSpace: #setCharacterPosition (const data descriptor, p: 0, attrs: [W_C]) @ 7
  [6]: 0x6393b925639: [String] in OldSpace: #getRandomDirection (const data descriptor, p: 13, attrs: [W_C]) @ 8
  [7]: 0x6393b925661: [String] in OldSpace: #canMoveUp (const data descriptor, p: 5, attrs: [W_C]) @ 9
  [8]: 0x6393b925681: [String] in OldSpace: #canMoveDown (const data descriptor, p: 2, attrs: [W_C]) @ 10
  [9]: 0x6393b9256a1: [String] in OldSpace: #canMoveLeft (const data descriptor, p: 19, attrs: [W_C]) @ 11
  [10]: 0x6393b9256c1: [String] in OldSpace: #canMoveRight (const data descriptor, p: 9, attrs: [W_C]) @ 12
  [11]: 0x6393b9256e1: [String] in OldSpace: #computeNewPositionAfterMove (const data descriptor, p: 7, attrs: [W_C]) @ 13
  [12]: 0x6393b925711: [String] in OldSpace: #moveUp (const data descriptor, p: 15, attrs: [W_C]) @ 14
  [13]: 0x6393b925729: [String] in OldSpace: #moveDown (const data descriptor, p: 14, attrs: [W_C]) @ 15
  [14]: 0x6393b925741: [String] in OldSpace: #moveLeft (const data descriptor, p: 20, attrs: [W_C]) @ 16
  [15]: 0x6393b925759: [String] in OldSpace: #moveRight (const data descriptor, p: 6, attrs: [W_C]) @ 17
  [16]: 0x6393b925779: [String] in OldSpace: #getPossibleDirections (const data descriptor, p: 21, attrs: [W_C]) @ 18
  [17]: 0x6393b9257a1: [String] in OldSpace: #move (const data descriptor, p: 1, attrs: [W_C]) @ 19
  [18]: 0xb6bd1003f01: [String] in OldSpace: #update (const data descriptor, p: 3, attrs: [W_C]) @ 20
  [19]: 0x1899c7685c19: [String] in ReadOnlySpace: #position (const accessor descriptor, p: 18, attrs: [W_C]) @ 0x06393b9257d1 <AccessorPair>(get: 21, set: 0x1899c7681339 <null>)
  [20]: 0x6393b9257e9: [String] in OldSpace: #serializeCommon (const data descriptor, p: 22, attrs: [W_C]) @ 22
  [21]: 0x6393b925809: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 16, attrs: [W_C]) @ 23
  [22]: 0x6393b925831: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 4, attrs: [W_C]) @ 24
Element[5]
0x1899c7683301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1899c7681329: [FixedArray] in ReadOnlySpace
 - map: 0x1899c76812e1 <Map>
 - length: 0
0x06393b925871 points to: [0x6393b9258e0]
=== [0x6393b9258e0] DISASSEMBLY ===
Parameter count 5
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x6393b9258e0 @    0 : 19 fe f9          Mov <closure>, r1
  304 S> 0x6393b9258e3 @    3 : 0b f9             Ldar r1
         0x6393b9258e5 @    5 : 5a f7             GetSuperConstructor r3
         0x6393b9258e7 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x6393b9258e9 @    9 : 0b fa             Ldar r0
  304 E> 0x6393b9258eb @   11 : 69 f7 fa 00 00    Construct r3, r0-r0, [0]
         0x6393b9258f0 @   16 : c0                Star4 
         0x6393b9258f1 @   17 : 0b 02             Ldar <this>
         0x6393b9258f3 @   19 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x6393b9258f4 @   20 : 19 f6 02          Mov r4, <this>
  321 S> 0x6393b9258f7 @   23 : 0b 02             Ldar <this>
         0x6393b9258f9 @   25 : ab                ThrowSuperNotCalledIfHole 
         0x6393b9258fa @   26 : 0c                LdaZero 
  349 E> 0x6393b9258fb @   27 : 32 02 00 02       SetNamedProperty <this>, [0], [2]
  362 S> 0x6393b9258ff @   31 : 0b 02             Ldar <this>
         0x6393b925901 @   33 : ab                ThrowSuperNotCalledIfHole 
         0x6393b925902 @   34 : 13 01             LdaConstant [1]
  379 E> 0x6393b925904 @   36 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
  397 S> 0x6393b925908 @   40 : 0b 02             Ldar <this>
         0x6393b92590a @   42 : ab                ThrowSuperNotCalledIfHole 
         0x6393b92590b @   43 : 13 03             LdaConstant [3]
  408 E> 0x6393b92590d @   45 : 32 02 04 06       SetNamedProperty <this>, [4], [6]
  432 S> 0x6393b925911 @   49 : 0b 02             Ldar <this>
         0x6393b925913 @   51 : ab                ThrowSuperNotCalledIfHole 
         0x6393b925914 @   52 : 7c 05 08 29       CreateObjectLiteral [5], [8], #41
  456 E> 0x6393b925918 @   56 : 32 02 06 09       SetNamedProperty <this>, [6], [9]
  581 S> 0x6393b92591c @   60 : 0b 02             Ldar <this>
         0x6393b92591e @   62 : ab                ThrowSuperNotCalledIfHole 
         0x6393b92591f @   63 : 0c                LdaZero 
  592 E> 0x6393b925920 @   64 : 32 02 07 0b       SetNamedProperty <this>, [7], [11]
  605 S> 0x6393b925924 @   68 : 0b 02             Ldar <this>
         0x6393b925926 @   70 : ab                ThrowSuperNotCalledIfHole 
         0x6393b925927 @   71 : 7c 08 0d 29       CreateObjectLiteral [8], [13], #41
  623 E> 0x6393b92592b @   75 : 32 02 09 0e       SetNamedProperty <this>, [9], [14]
  757 S> 0x6393b92592f @   79 : 0b 02             Ldar <this>
         0x6393b925931 @   81 : ab                ThrowSuperNotCalledIfHole 
         0x6393b925932 @   82 : 7c 0a 10 29       CreateObjectLiteral [10], [16], #41
  786 E> 0x6393b925936 @   86 : 32 02 0b 11       SetNamedProperty <this>, [11], [17]
 1022 S> 0x6393b92593a @   90 : 0b 02             Ldar <this>
         0x6393b92593c @   92 : ab                ThrowSuperNotCalledIfHole 
         0x6393b92593d @   93 : 0b 04             Ldar a1
 1037 E> 0x6393b92593f @   95 : 32 02 0c 13       SetNamedProperty <this>, [12], [19]
 1057 S> 0x6393b925943 @   99 : 0b 02             Ldar <this>
         0x6393b925945 @  101 : ab                ThrowSuperNotCalledIfHole 
         0x6393b925946 @  102 : 0b 04             Ldar a1
 1076 E> 0x6393b925948 @  104 : 32 02 0d 15       SetNamedProperty <this>, [13], [21]
 1096 S> 0x6393b92594c @  108 : 0b 02             Ldar <this>
         0x6393b92594e @  110 : ab                ThrowSuperNotCalledIfHole 
         0x6393b92594f @  111 : ab                ThrowSuperNotCalledIfHole 
 1119 E> 0x6393b925950 @  112 : 2d 02 0e 17       GetNamedProperty <this>, [14], [23]
         0x6393b925954 @  116 : c1                Star3 
 1119 E> 0x6393b925955 @  117 : 5d f7 02 19       CallProperty0 r3, <this>, [25]
 1112 E> 0x6393b925959 @  121 : 32 02 0f 1b       SetNamedProperty <this>, [15], [27]
 1149 S> 0x6393b92595d @  125 : 0b 02             Ldar <this>
         0x6393b92595f @  127 : ab                ThrowSuperNotCalledIfHole 
         0x6393b925960 @  128 : 0b 05             Ldar a2
 1166 E> 0x6393b925962 @  130 : 32 02 02 1d       SetNamedProperty <this>, [2], [29]
 1189 S> 0x6393b925966 @  134 : 0b 02             Ldar <this>
         0x6393b925968 @  136 : ab                ThrowSuperNotCalledIfHole 
         0x6393b925969 @  137 : 0b 06             Ldar a3
 1200 E> 0x6393b92596b @  139 : 32 02 04 1f       SetNamedProperty <this>, [4], [31]
 1217 S> 0x6393b92596f @  143 : 0b 02             Ldar <this>
         0x6393b925971 @  145 : ab                ThrowSuperNotCalledIfHole 
         0x6393b925972 @  146 : 0b 03             Ldar a0
 1227 E> 0x6393b925974 @  148 : 32 02 10 21       SetNamedProperty <this>, [16], [33]
 1243 S> 0x6393b925978 @  152 : 0b 02             Ldar <this>
         0x6393b92597a @  154 : ab                ThrowSuperNotCalledIfHole 
         0x6393b92597b @  155 : 7c 11 23 29       CreateObjectLiteral [17], [35], #41
 1267 E> 0x6393b92597f @  159 : 32 02 12 24       SetNamedProperty <this>, [18], [36]
         0x6393b925983 @  163 : 0b 02             Ldar <this>
         0x6393b925985 @  165 : ab                ThrowSuperNotCalledIfHole 
 1291 S> 0x6393b925986 @  166 : a9                Return 
Constant pool (size = 19)
0x6393b925989: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 19
           0: 0x06393b925a31 <String[22]: #nbOfTicksSinceLastMove>
           1: 0x06393b925a59 <String[4]: #lazy>
           2: 0x06393b925a71 <String[11]: #personality>
           3: 0x06393b925a91 <String[10]: #straitHead>
           4: 0x1899c7684381 <String[5]: #style>
           5: 0x06393b925ab1 <ObjectBoilerplateDescription[9]>
           6: 0x06393b925b69 <String[18]: #oppositeDirections>
           7: 0x06393b925b91 <String[5]: #_seed>
           8: 0x06393b925ba9 <ObjectBoilerplateDescription[11]>
           9: 0x06393b925c71 <String[12]: #tickSpeedMap>
          10: 0x06393b925c91 <ObjectBoilerplateDescription[13]>
          11: 0x06393b925e41 <String[23]: #threatStyleHumanizedMap>
          12: 0x06393b925e69 <String[9]: #_position>
          13: 0x06393b925e89 <String[13]: #spawnPosition>
          14: 0x06393b925639 <String[18]: #getRandomDirection>
          15: 0x06393b925ea9 <String[10]: #_direction>
          16: 0x06393b925ec9 <String[4]: #_map>
          17: 0x06393b925ee1 <ObjectBoilerplateDescription[5]>
          18: 0x06393b925f49 <String[18]: #_characterPosition>
Handler Table (size = 0)
Source Position Table (size = 74)
0x06393b925f71 <ByteArray[74]>
Object boilerplate at 0x06393b925ab1: 
0x6393b925ab1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 9
           0: 8
           1: 0x06393b925b09 <String[4]: #left>
         2-3: 0x06393b925b21 <String[5]: #right>
           4: 0x06393b925b09 <String[4]: #left>
           5: 0x06393b925b39 <String[2]: #up>
         6-7: 0x06393b925b51 <String[4]: #down>
           8: 0x06393b925b39 <String[2]: #up>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x06393b925ba9: 
0x6393b925ba9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 11
           0: 8
           1: 0x06393b925a59 <String[4]: #lazy>
           2: 5
           3: 0x06393b925c11 <String[5]: #tease>
           4: 4
           5: 0x06393b925c29 <String[5]: #awake>
           6: 3
           7: 0x06393b925c41 <String[6]: #hungry>
           8: 2
           9: 0x06393b925c59 <String[6]: #insane>
          10: 1
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x06393b925c91: 
0x6393b925c91: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 13
           0: 8
           1: 0x06393b925a91 <String[10]: #straitHead>
           2: 0x06393b925d09 <String[4]: #bull>
           3: 0x06393b925d21 <String[9]: #girouette>
           4: 0x06393b925d41 <String[8]: #goldfish>
           5: 0x06393b925d59 <String[10]: #aggressive>
           6: 0x06393b925d79 <String[5]: #shark>
           7: 0x06393b925d91 <String[12]: #surveillance>
           8: 0x06393b925db1 <String[3]: #owl>
           9: 0x06393b925dc9 <String[29]: #le_fantome_orange_dans_pacman>
          10: 0x06393b925df9 <String[4]: #deer>
          11: 0x06393b925e11 <String[7]: #sheriff>
          12: 0x06393b925e29 <String[4]: #hawk>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x06393b925ee1: 
0x6393b925ee1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 5
           0: 8
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: -1
           3: 0x0b6bd1018ae1 <String[1]: #y>
           4: -1
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x06393b9261f9 points to: [0x6393b926268]
=== [0x6393b926268] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1335 S> 0x6393b926268 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1346 S> 0x6393b92626c @    4 : a9                Return 
Constant pool (size = 1)
0x6393b926271: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 1
           0: 0x06393b925ea9 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 7)
0x06393b926289 <ByteArray[7]>
0x06393b926321 points to: [0x6393b926390]
=== [0x6393b926390] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1389 S> 0x6393b926390 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1394 S> 0x6393b926394 @    4 : a9                Return 
Constant pool (size = 1)
0x6393b926399: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 1
           0: 0x06393b925ec9 <String[4]: #_map>
Handler Table (size = 0)
Source Position Table (size = 7)
0x06393b9263b1 <ByteArray[7]>
0x06393b926441 points to: [0x6393b9264b0]
=== [0x6393b9264b0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1451 S> 0x6393b9264b0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1470 S> 0x6393b9264b4 @    4 : a9                Return 
Constant pool (size = 1)
0x6393b9264b9: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 1
           0: 0x06393b925f49 <String[18]: #_characterPosition>
Handler Table (size = 0)
Source Position Table (size = 7)
0x06393b9264d1 <ByteArray[7]>
0x06393b926571 points to: [0x6393b9265e0]
=== [0x6393b9265e0] DISASSEMBLY ===
Parameter count 1
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 1520 S> 0x6393b9265e0 @    0 : 21 00 01          LdaGlobal [0], [1]
         0x6393b9265e3 @    3 : c2                Star2 
 1525 E> 0x6393b9265e4 @    4 : 2d f8 01 03       GetNamedProperty r2, [1], [3]
         0x6393b9265e8 @    8 : c3                Star1 
         0x6393b9265e9 @    9 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x6393b9265ed @   13 : 75 07             ToNumeric [7]
         0x6393b9265ef @   15 : c0                Star4 
         0x6393b9265f0 @   16 : 51 07             Inc [7]
         0x6393b9265f2 @   18 : bf                Star5 
 1539 E> 0x6393b9265f3 @   19 : 32 02 02 08       SetNamedProperty <this>, [2], [8]
 1525 E> 0x6393b9265f7 @   23 : 5e f9 f8 f6 0a    CallProperty1 r1, r2, r4, [10]
 1543 E> 0x6393b9265fc @   28 : 00 47 10 27 00 00 MulSmi.Wide [10000], [0]
         0x6393b926602 @   34 : c4                Star0 
 1571 S> 0x6393b926603 @   35 : 21 00 01          LdaGlobal [0], [1]
         0x6393b926606 @   38 : c1                Star3 
 1576 E> 0x6393b926607 @   39 : 2d f7 03 0d       GetNamedProperty r3, [3], [13]
         0x6393b92660b @   43 : c2                Star2 
 1576 E> 0x6393b92660c @   44 : 5e f8 f7 fa 0f    CallProperty1 r2, r3, r0, [15]
 1569 E> 0x6393b926611 @   49 : 3a fa 0c          Sub r0, [12]
 1585 S> 0x6393b926614 @   52 : a9                Return 
Constant pool (size = 4)
0x6393b926619: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 4
           0: 0x0b6bd101a991 <String[4]: #Math>
           1: 0x0b6bd101abd1 <String[3]: #sin>
           2: 0x06393b925b91 <String[5]: #_seed>
           3: 0x1899c7683ae9 <String[5]: #floor>
Handler Table (size = 0)
Source Position Table (size = 23)
0x06393b926679 <ByteArray[23]>
0x06393b926729 points to: [0x6393b926798]
=== [0x6393b926798] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1637 S> 0x6393b926798 @    0 : 0b 03             Ldar a0
 1661 E> 0x6393b92679a @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x6393b92679e @    6 : 0e                LdaUndefined 
 1677 S> 0x6393b92679f @    7 : a9                Return 
Constant pool (size = 1)
0x6393b9267a1: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 1
           0: 0x06393b925f49 <String[18]: #_characterPosition>
Handler Table (size = 0)
Source Position Table (size = 9)
0x06393b9267b9 <ByteArray[9]>
0x06393b926839 points to: [0x6393b9268a8]
=== [0x6393b9268a8] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 1701 E> 0x6393b9268a8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x6393b9268ab @    3 : 1a f8             PushContext r2
         0x6393b9268ad @    5 : 10                LdaTheHole 
         0x6393b9268ae @    6 : 25 02             StaCurrentContextSlot [2]
         0x6393b9268b0 @    8 : 0b 03             Ldar a0
         0x6393b9268b2 @   10 : 9d 06             JumpIfNotUndefined [6] (0x6393b9268b8 @ 16)
         0x6393b9268b4 @   12 : 7b 00             CreateEmptyArrayLiteral [0]
         0x6393b9268b6 @   14 : 8a 04             Jump [4] (0x6393b9268ba @ 18)
         0x6393b9268b8 @   16 : 0b 03             Ldar a0
         0x6393b9268ba @   18 : 25 02             StaCurrentContextSlot [2]
 1754 S> 0x6393b9268bc @   20 : 79 01 01 25       CreateArrayLiteral [1], [1], #37
         0x6393b9268c0 @   24 : c4                Star0 
 1819 S> 0x6393b9268c1 @   25 : 2d fa 02 02       GetNamedProperty r0, [2], [2]
         0x6393b9268c5 @   29 : c1                Star3 
         0x6393b9268c6 @   30 : 80 03 00 02       CreateClosure [3], [0], #2
         0x6393b9268ca @   34 : bf                Star5 
 1819 E> 0x6393b9268cb @   35 : 5e f7 fa f5 04    CallProperty1 r3, r0, r5, [4]
         0x6393b9268d0 @   40 : c4                Star0 
 1911 S> 0x6393b9268d1 @   41 : 21 04 06          LdaGlobal [4], [6]
         0x6393b9268d4 @   44 : c0                Star4 
 1916 E> 0x6393b9268d5 @   45 : 2d f6 05 08       GetNamedProperty r4, [5], [8]
         0x6393b9268d9 @   49 : c1                Star3 
 1927 E> 0x6393b9268da @   50 : 2d 02 06 0b       GetNamedProperty <this>, [6], [11]
         0x6393b9268de @   54 : bf                Star5 
 1953 E> 0x6393b9268df @   55 : 2d fa 07 0d       GetNamedProperty r0, [7], [13]
 1940 E> 0x6393b9268e3 @   59 : 3b f5 0a          Mul r5, [10]
         0x6393b9268e6 @   62 : bf                Star5 
 1916 E> 0x6393b9268e7 @   63 : 5e f7 f6 f5 0f    CallProperty1 r3, r4, r5, [15]
         0x6393b9268ec @   68 : c3                Star1 
 1970 S> 0x6393b9268ed @   69 : 0b f9             Ldar r1
 1987 E> 0x6393b9268ef @   71 : 2f fa 11          GetKeyedProperty r0, [17]
 2001 S> 0x6393b9268f2 @   74 : a9                Return 
Constant pool (size = 8)
0x6393b9268f9: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 8
           0: 0x06393b926949 <ScopeInfo FUNCTION_SCOPE>
           1: 0x06393b9269c9 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x06393b9269e1 <FixedArray[4]>>
           2: 0x0b6bd1009f61 <String[6]: #filter>
           3: 0x06393b926a29 <SharedFunctionInfo>
           4: 0x0b6bd101a991 <String[4]: #Math>
           5: 0x1899c7683ae9 <String[5]: #floor>
           6: 0x06393b9255d9 <String[12]: #randomNumber>
           7: 0x1899c76855f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 33)
0x06393b926b71 <ByteArray[33]>
Array boilerplate at 0x06393b9269c9: 
0x6393b9269c9: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x1899c7683291 <Map[24]>
 - elements kind: PACKED_ELEMENTS
 - constant elements: 0x06393b9269e1 <FixedArray[4]>
           0: 0x06393b925b39 <String[2]: #up>
           1: 0x06393b925b51 <String[4]: #down>
           2: 0x06393b925b09 <String[4]: #left>
           3: 0x06393b925b21 <String[5]: #right>
0x06393b926a29 points to: [0x6393b926a98]
=== [0x6393b926a98] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1841 S> 0x6393b926a98 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x6393b926a9a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x6393b926a9c @    4 : c3                Star1 
 1861 E> 0x6393b926a9d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x6393b926aa1 @    9 : c4                Star0 
 1861 E> 0x6393b926aa2 @   10 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
         0x6393b926aa7 @   15 : 55                ToBooleanLogicalNot 
 1880 S> 0x6393b926aa8 @   16 : a9                Return 
Constant pool (size = 2)
0x6393b926ab1: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 2
           0: 0x06393b9269a1 <String[18]: #excludedDirections>
           1: 0x0b6bd1007449 <String[8]: #includes>
Handler Table (size = 0)
Source Position Table (size = 11)
0x06393b926ae9 <ByteArray[11]>
0x06393b926bc9 points to: [0x6393b926c38]
=== [0x6393b926c38] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2046 S> 0x6393b926c38 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b926c3c @    4 : c4                Star0 
 2056 E> 0x6393b926c3d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x6393b926c41 @    9 : c4                Star0 
         0x6393b926c42 @   10 : 0c                LdaZero 
 2058 E> 0x6393b926c43 @   11 : 6e fa 04          TestGreaterThan r0, [4]
         0x6393b926c46 @   14 : 99 29             JumpIfFalse [41] (0x6393b926c6f @ 55)
 2070 E> 0x6393b926c48 @   16 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x6393b926c4c @   20 : c4                Star0 
 2080 E> 0x6393b926c4d @   21 : 2d 02 00 07       GetNamedProperty <this>, [0], [7]
         0x6393b926c51 @   25 : c3                Star1 
 2090 E> 0x6393b926c52 @   26 : 2d f9 03 09       GetNamedProperty r1, [3], [9]
 2074 E> 0x6393b926c56 @   30 : 2f fa 0b          GetKeyedProperty r0, [11]
         0x6393b926c59 @   33 : c4                Star0 
 2098 E> 0x6393b926c5a @   34 : 2d 02 00 0e       GetNamedProperty <this>, [0], [14]
         0x6393b926c5e @   38 : c3                Star1 
 2108 E> 0x6393b926c5f @   39 : 2d f9 01 10       GetNamedProperty r1, [1], [16]
 2110 E> 0x6393b926c63 @   43 : 46 01 0d          SubSmi [1], [13]
 2092 E> 0x6393b926c66 @   46 : 2f fa 12          GetKeyedProperty r0, [18]
         0x6393b926c69 @   49 : c4                Star0 
         0x6393b926c6a @   50 : 0d 01             LdaSmi [1]
 2115 E> 0x6393b926c6c @   52 : 6c fa 14          TestEqualStrict r0, [20]
 2121 S> 0x6393b926c6f @   55 : a9                Return 
Constant pool (size = 4)
0x6393b926c71: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 4
           0: 0x06393b925e69 <String[9]: #_position>
           1: 0x0b6bd1018ae1 <String[1]: #y>
           2: 0x06393b925ec9 <String[4]: #_map>
           3: 0x0b6bd1018ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 29)
0x06393b926ca1 <ByteArray[29]>
0x06393b926d39 points to: [0x6393b926da8]
=== [0x6393b926da8] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2168 S> 0x6393b926da8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b926dac @    4 : c4                Star0 
 2178 E> 0x6393b926dad @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x6393b926db1 @    9 : c4                Star0 
 2187 E> 0x6393b926db2 @   10 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x6393b926db6 @   14 : c3                Star1 
 2197 E> 0x6393b926db7 @   15 : 2d 02 00 07       GetNamedProperty <this>, [0], [7]
         0x6393b926dbb @   19 : c2                Star2 
 2207 E> 0x6393b926dbc @   20 : 2d f8 03 09       GetNamedProperty r2, [3], [9]
 2191 E> 0x6393b926dc0 @   24 : 2f f9 0b          GetKeyedProperty r1, [11]
         0x6393b926dc3 @   27 : c3                Star1 
 2210 E> 0x6393b926dc4 @   28 : 2d f9 04 0d       GetNamedProperty r1, [4], [13]
 2217 E> 0x6393b926dc8 @   32 : 46 01 04          SubSmi [1], [4]
 2180 E> 0x6393b926dcb @   35 : 6d fa 0f          TestLessThan r0, [15]
         0x6393b926dce @   38 : 99 29             JumpIfFalse [41] (0x6393b926df7 @ 79)
 2229 E> 0x6393b926dd0 @   40 : 2d 02 02 10       GetNamedProperty <this>, [2], [16]
         0x6393b926dd4 @   44 : c4                Star0 
 2239 E> 0x6393b926dd5 @   45 : 2d 02 00 12       GetNamedProperty <this>, [0], [18]
         0x6393b926dd9 @   49 : c3                Star1 
 2249 E> 0x6393b926dda @   50 : 2d f9 03 14       GetNamedProperty r1, [3], [20]
 2233 E> 0x6393b926dde @   54 : 2f fa 16          GetKeyedProperty r0, [22]
         0x6393b926de1 @   57 : c4                Star0 
 2257 E> 0x6393b926de2 @   58 : 2d 02 00 19       GetNamedProperty <this>, [0], [25]
         0x6393b926de6 @   62 : c3                Star1 
 2267 E> 0x6393b926de7 @   63 : 2d f9 01 1b       GetNamedProperty r1, [1], [27]
 2269 E> 0x6393b926deb @   67 : 45 01 18          AddSmi [1], [24]
 2251 E> 0x6393b926dee @   70 : 2f fa 1d          GetKeyedProperty r0, [29]
         0x6393b926df1 @   73 : c4                Star0 
         0x6393b926df2 @   74 : 0d 01             LdaSmi [1]
 2274 E> 0x6393b926df4 @   76 : 6c fa 1f          TestEqualStrict r0, [31]
 2280 S> 0x6393b926df7 @   79 : a9                Return 
Constant pool (size = 5)
0x6393b926df9: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 5
           0: 0x06393b925e69 <String[9]: #_position>
           1: 0x0b6bd1018ae1 <String[1]: #y>
           2: 0x06393b925ec9 <String[4]: #_map>
           3: 0x0b6bd1018ac9 <String[1]: #x>
           4: 0x1899c76855f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 43)
0x06393b926e31 <ByteArray[43]>
0x06393b926ee1 points to: [0x6393b926f50]
=== [0x6393b926f50] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2327 S> 0x6393b926f50 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b926f54 @    4 : c4                Star0 
 2337 E> 0x6393b926f55 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x6393b926f59 @    9 : c4                Star0 
         0x6393b926f5a @   10 : 0c                LdaZero 
 2339 E> 0x6393b926f5b @   11 : 6e fa 04          TestGreaterThan r0, [4]
         0x6393b926f5e @   14 : 99 29             JumpIfFalse [41] (0x6393b926f87 @ 55)
 2351 E> 0x6393b926f60 @   16 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x6393b926f64 @   20 : c4                Star0 
 2361 E> 0x6393b926f65 @   21 : 2d 02 00 08       GetNamedProperty <this>, [0], [8]
         0x6393b926f69 @   25 : c3                Star1 
 2371 E> 0x6393b926f6a @   26 : 2d f9 01 0a       GetNamedProperty r1, [1], [10]
 2373 E> 0x6393b926f6e @   30 : 46 01 07          SubSmi [1], [7]
 2355 E> 0x6393b926f71 @   33 : 2f fa 0c          GetKeyedProperty r0, [12]
         0x6393b926f74 @   36 : c4                Star0 
 2383 E> 0x6393b926f75 @   37 : 2d 02 00 0e       GetNamedProperty <this>, [0], [14]
         0x6393b926f79 @   41 : c3                Star1 
 2393 E> 0x6393b926f7a @   42 : 2d f9 03 10       GetNamedProperty r1, [3], [16]
 2377 E> 0x6393b926f7e @   46 : 2f fa 12          GetKeyedProperty r0, [18]
         0x6393b926f81 @   49 : c4                Star0 
         0x6393b926f82 @   50 : 0d 01             LdaSmi [1]
 2396 E> 0x6393b926f84 @   52 : 6c fa 14          TestEqualStrict r0, [20]
 2402 S> 0x6393b926f87 @   55 : a9                Return 
Constant pool (size = 4)
0x6393b926f89: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 4
           0: 0x06393b925e69 <String[9]: #_position>
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: 0x06393b925ec9 <String[4]: #_map>
           3: 0x0b6bd1018ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 29)
0x06393b926fb9 <ByteArray[29]>
0x06393b927051 points to: [0x6393b9270c0]
=== [0x6393b9270c0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2450 S> 0x6393b9270c0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b9270c4 @    4 : c4                Star0 
 2460 E> 0x6393b9270c5 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x6393b9270c9 @    9 : c4                Star0 
 2469 E> 0x6393b9270ca @   10 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x6393b9270ce @   14 : c3                Star1 
 2474 E> 0x6393b9270cf @   15 : 2d f9 03 07       GetNamedProperty r1, [3], [7]
 2481 E> 0x6393b9270d3 @   19 : 46 01 04          SubSmi [1], [4]
 2462 E> 0x6393b9270d6 @   22 : 6d fa 09          TestLessThan r0, [9]
         0x6393b9270d9 @   25 : 99 29             JumpIfFalse [41] (0x6393b927102 @ 66)
 2493 E> 0x6393b9270db @   27 : 2d 02 02 0a       GetNamedProperty <this>, [2], [10]
         0x6393b9270df @   31 : c4                Star0 
 2503 E> 0x6393b9270e0 @   32 : 2d 02 00 0d       GetNamedProperty <this>, [0], [13]
         0x6393b9270e4 @   36 : c3                Star1 
 2513 E> 0x6393b9270e5 @   37 : 2d f9 01 0f       GetNamedProperty r1, [1], [15]
 2515 E> 0x6393b9270e9 @   41 : 45 01 0c          AddSmi [1], [12]
 2497 E> 0x6393b9270ec @   44 : 2f fa 11          GetKeyedProperty r0, [17]
         0x6393b9270ef @   47 : c4                Star0 
 2525 E> 0x6393b9270f0 @   48 : 2d 02 00 13       GetNamedProperty <this>, [0], [19]
         0x6393b9270f4 @   52 : c3                Star1 
 2535 E> 0x6393b9270f5 @   53 : 2d f9 04 15       GetNamedProperty r1, [4], [21]
 2519 E> 0x6393b9270f9 @   57 : 2f fa 17          GetKeyedProperty r0, [23]
         0x6393b9270fc @   60 : c4                Star0 
         0x6393b9270fd @   61 : 0d 01             LdaSmi [1]
 2538 E> 0x6393b9270ff @   63 : 6c fa 19          TestEqualStrict r0, [25]
 2544 S> 0x6393b927102 @   66 : a9                Return 
Constant pool (size = 5)
0x6393b927109: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 5
           0: 0x06393b925e69 <String[9]: #_position>
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: 0x06393b925ec9 <String[4]: #_map>
           3: 0x1899c76855f9 <String[6]: #length>
           4: 0x0b6bd1018ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 35)
0x06393b927141 <ByteArray[35]>
0x06393b9271e9 points to: [0x6393b927258]
=== [0x6393b927258] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2604 S> 0x6393b927258 @    0 : 13 00             LdaConstant [0]
         0x6393b92725a @    2 : 6c 03 00          TestEqualStrict a0, [0]
         0x6393b92725d @    5 : 19 03 fa          Mov a0, r0
         0x6393b927260 @    8 : 98 19             JumpIfTrue [25] (0x6393b927279 @ 33)
         0x6393b927262 @   10 : 13 01             LdaConstant [1]
         0x6393b927264 @   12 : 6c fa 00          TestEqualStrict r0, [0]
         0x6393b927267 @   15 : 98 37             JumpIfTrue [55] (0x6393b92729e @ 70)
         0x6393b927269 @   17 : 13 02             LdaConstant [2]
         0x6393b92726b @   19 : 6c fa 00          TestEqualStrict r0, [0]
         0x6393b92726e @   22 : 98 55             JumpIfTrue [85] (0x6393b9272c3 @ 107)
         0x6393b927270 @   24 : 13 03             LdaConstant [3]
         0x6393b927272 @   26 : 6c fa 00          TestEqualStrict r0, [0]
         0x6393b927275 @   29 : 98 73             JumpIfTrue [115] (0x6393b9272e8 @ 144)
         0x6393b927277 @   31 : 8a 96             Jump [150] (0x6393b92730d @ 181)
 2664 S> 0x6393b927279 @   33 : 7c 04 01 29       CreateObjectLiteral [4], [1], #41
         0x6393b92727d @   37 : c3                Star1 
 2681 E> 0x6393b92727e @   38 : 2d 02 05 02       GetNamedProperty <this>, [5], [2]
         0x6393b927282 @   42 : c2                Star2 
 2691 E> 0x6393b927283 @   43 : 2d f8 06 04       GetNamedProperty r2, [6], [4]
         0x6393b927287 @   47 : 33 f9 06 06       DefineNamedOwnProperty r1, [6], [6]
 2702 E> 0x6393b92728b @   51 : 2d 02 05 09       GetNamedProperty <this>, [5], [9]
         0x6393b92728f @   55 : c2                Star2 
 2712 E> 0x6393b927290 @   56 : 2d f8 07 0b       GetNamedProperty r2, [7], [11]
 2714 E> 0x6393b927294 @   60 : 46 01 08          SubSmi [1], [8]
         0x6393b927297 @   63 : 33 f9 07 0d       DefineNamedOwnProperty r1, [7], [13]
         0x6393b92729b @   67 : 0b f9             Ldar r1
 2720 S> 0x6393b92729d @   69 : a9                Return 
 2762 S> 0x6393b92729e @   70 : 7c 08 0f 29       CreateObjectLiteral [8], [15], #41
         0x6393b9272a2 @   74 : c3                Star1 
 2779 E> 0x6393b9272a3 @   75 : 2d 02 05 10       GetNamedProperty <this>, [5], [16]
         0x6393b9272a7 @   79 : c2                Star2 
 2789 E> 0x6393b9272a8 @   80 : 2d f8 06 12       GetNamedProperty r2, [6], [18]
         0x6393b9272ac @   84 : 33 f9 06 14       DefineNamedOwnProperty r1, [6], [20]
 2800 E> 0x6393b9272b0 @   88 : 2d 02 05 17       GetNamedProperty <this>, [5], [23]
         0x6393b9272b4 @   92 : c2                Star2 
 2810 E> 0x6393b9272b5 @   93 : 2d f8 07 19       GetNamedProperty r2, [7], [25]
 2812 E> 0x6393b9272b9 @   97 : 45 01 16          AddSmi [1], [22]
         0x6393b9272bc @  100 : 33 f9 07 1b       DefineNamedOwnProperty r1, [7], [27]
         0x6393b9272c0 @  104 : 0b f9             Ldar r1
 2818 S> 0x6393b9272c2 @  106 : a9                Return 
 2860 S> 0x6393b9272c3 @  107 : 7c 09 1d 29       CreateObjectLiteral [9], [29], #41
         0x6393b9272c7 @  111 : c3                Star1 
 2877 E> 0x6393b9272c8 @  112 : 2d 02 05 1f       GetNamedProperty <this>, [5], [31]
         0x6393b9272cc @  116 : c2                Star2 
 2887 E> 0x6393b9272cd @  117 : 2d f8 06 21       GetNamedProperty r2, [6], [33]
 2889 E> 0x6393b9272d1 @  121 : 46 01 1e          SubSmi [1], [30]
         0x6393b9272d4 @  124 : 33 f9 06 23       DefineNamedOwnProperty r1, [6], [35]
 2902 E> 0x6393b9272d8 @  128 : 2d 02 05 25       GetNamedProperty <this>, [5], [37]
         0x6393b9272dc @  132 : c2                Star2 
 2912 E> 0x6393b9272dd @  133 : 2d f8 07 27       GetNamedProperty r2, [7], [39]
         0x6393b9272e1 @  137 : 33 f9 07 29       DefineNamedOwnProperty r1, [7], [41]
         0x6393b9272e5 @  141 : 0b f9             Ldar r1
 2916 S> 0x6393b9272e7 @  143 : a9                Return 
 2959 S> 0x6393b9272e8 @  144 : 7c 0a 2b 29       CreateObjectLiteral [10], [43], #41
         0x6393b9272ec @  148 : c3                Star1 
 2976 E> 0x6393b9272ed @  149 : 2d 02 05 2d       GetNamedProperty <this>, [5], [45]
         0x6393b9272f1 @  153 : c2                Star2 
 2986 E> 0x6393b9272f2 @  154 : 2d f8 06 2f       GetNamedProperty r2, [6], [47]
 2988 E> 0x6393b9272f6 @  158 : 45 01 2c          AddSmi [1], [44]
         0x6393b9272f9 @  161 : 33 f9 06 31       DefineNamedOwnProperty r1, [6], [49]
 3001 E> 0x6393b9272fd @  165 : 2d 02 05 33       GetNamedProperty <this>, [5], [51]
         0x6393b927301 @  169 : c2                Star2 
 3011 E> 0x6393b927302 @  170 : 2d f8 07 35       GetNamedProperty r2, [7], [53]
         0x6393b927306 @  174 : 33 f9 07 37       DefineNamedOwnProperty r1, [7], [55]
         0x6393b92730a @  178 : 0b f9             Ldar r1
 3015 S> 0x6393b92730c @  180 : a9                Return 
         0x6393b92730d @  181 : 0e                LdaUndefined 
 3030 S> 0x6393b92730e @  182 : a9                Return 
Constant pool (size = 11)
0x6393b927311: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 11
           0: 0x06393b925b39 <String[2]: #up>
           1: 0x06393b925b51 <String[4]: #down>
           2: 0x06393b925b09 <String[4]: #left>
           3: 0x06393b925b21 <String[5]: #right>
           4: 0x06393b927379 <ObjectBoilerplateDescription[5]>
           5: 0x06393b925e69 <String[9]: #_position>
           6: 0x0b6bd1018ac9 <String[1]: #x>
           7: 0x0b6bd1018ae1 <String[1]: #y>
           8: 0x06393b9273b1 <ObjectBoilerplateDescription[5]>
           9: 0x06393b9273e9 <ObjectBoilerplateDescription[5]>
          10: 0x06393b927421 <ObjectBoilerplateDescription[5]>
Handler Table (size = 0)
Source Position Table (size = 67)
0x06393b927459 <ByteArray[67]>
Object boilerplate at 0x06393b927379: 
0x6393b927379: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 5
           0: 8
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: 0x1899c7681501 <Odd Oddball: uninitialized>
           3: 0x0b6bd1018ae1 <String[1]: #y>
           4: 0x1899c7681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x06393b9273b1: 
0x6393b9273b1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 5
           0: 8
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: 0x1899c7681501 <Odd Oddball: uninitialized>
           3: 0x0b6bd1018ae1 <String[1]: #y>
           4: 0x1899c7681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x06393b9273e9: 
0x6393b9273e9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 5
           0: 8
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: 0x1899c7681501 <Odd Oddball: uninitialized>
           3: 0x0b6bd1018ae1 <String[1]: #y>
           4: 0x1899c7681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x06393b927421: 
0x6393b927421: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 5
           0: 8
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: 0x1899c7681501 <Odd Oddball: uninitialized>
           3: 0x0b6bd1018ae1 <String[1]: #y>
           4: 0x1899c7681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x06393b927531 points to: [0x6393b9275a0]
=== [0x6393b9275a0] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3064 S> 0x6393b9275a0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b9275a4 @    4 : c4                Star0 
 3064 E> 0x6393b9275a5 @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
         0x6393b9275a9 @    9 : 97 19             JumpIfToBooleanFalse [25] (0x6393b9275c2 @ 34)
 3113 S> 0x6393b9275ab @   11 : 2d 02 01 04       GetNamedProperty <this>, [1], [4]
         0x6393b9275af @   15 : c3                Star1 
         0x6393b9275b0 @   16 : 13 02             LdaConstant [2]
         0x6393b9275b2 @   18 : c1                Star3 
 3113 E> 0x6393b9275b3 @   19 : 5e f9 02 f7 06    CallProperty1 r1, <this>, r3, [6]
 3106 E> 0x6393b9275b8 @   24 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
 3160 S> 0x6393b9275bc @   28 : 13 02             LdaConstant [2]
 3176 E> 0x6393b9275be @   30 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x6393b9275c2 @   34 : 0e                LdaUndefined 
 3198 S> 0x6393b9275c3 @   35 : a9                Return 
Constant pool (size = 5)
0x6393b9275c9: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 5
           0: 0x06393b925661 <String[9]: #canMoveUp>
           1: 0x06393b9256e1 <String[27]: #computeNewPositionAfterMove>
           2: 0x06393b925b39 <String[2]: #up>
           3: 0x06393b925e69 <String[9]: #_position>
           4: 0x06393b925ea9 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x06393b927601 <ByteArray[21]>
0x06393b927689 points to: [0x6393b9276f8]
=== [0x6393b9276f8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3234 S> 0x6393b9276f8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b9276fc @    4 : c4                Star0 
 3234 E> 0x6393b9276fd @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
         0x6393b927701 @    9 : 97 19             JumpIfToBooleanFalse [25] (0x6393b92771a @ 34)
 3285 S> 0x6393b927703 @   11 : 2d 02 01 04       GetNamedProperty <this>, [1], [4]
         0x6393b927707 @   15 : c3                Star1 
         0x6393b927708 @   16 : 13 02             LdaConstant [2]
         0x6393b92770a @   18 : c1                Star3 
 3285 E> 0x6393b92770b @   19 : 5e f9 02 f7 06    CallProperty1 r1, <this>, r3, [6]
 3278 E> 0x6393b927710 @   24 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
 3334 S> 0x6393b927714 @   28 : 13 02             LdaConstant [2]
 3350 E> 0x6393b927716 @   30 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x6393b92771a @   34 : 0e                LdaUndefined 
 3374 S> 0x6393b92771b @   35 : a9                Return 
Constant pool (size = 5)
0x6393b927721: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 5
           0: 0x06393b925681 <String[11]: #canMoveDown>
           1: 0x06393b9256e1 <String[27]: #computeNewPositionAfterMove>
           2: 0x06393b925b51 <String[4]: #down>
           3: 0x06393b925e69 <String[9]: #_position>
           4: 0x06393b925ea9 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x06393b927759 <ByteArray[21]>
0x06393b9277e1 points to: [0x6393b927850]
=== [0x6393b927850] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3410 S> 0x6393b927850 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b927854 @    4 : c4                Star0 
 3410 E> 0x6393b927855 @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
         0x6393b927859 @    9 : 97 19             JumpIfToBooleanFalse [25] (0x6393b927872 @ 34)
 3461 S> 0x6393b92785b @   11 : 2d 02 01 04       GetNamedProperty <this>, [1], [4]
         0x6393b92785f @   15 : c3                Star1 
         0x6393b927860 @   16 : 13 02             LdaConstant [2]
         0x6393b927862 @   18 : c1                Star3 
 3461 E> 0x6393b927863 @   19 : 5e f9 02 f7 06    CallProperty1 r1, <this>, r3, [6]
 3454 E> 0x6393b927868 @   24 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
 3510 S> 0x6393b92786c @   28 : 13 02             LdaConstant [2]
 3526 E> 0x6393b92786e @   30 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x6393b927872 @   34 : 0e                LdaUndefined 
 3550 S> 0x6393b927873 @   35 : a9                Return 
Constant pool (size = 5)
0x6393b927879: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 5
           0: 0x06393b9256a1 <String[11]: #canMoveLeft>
           1: 0x06393b9256e1 <String[27]: #computeNewPositionAfterMove>
           2: 0x06393b925b09 <String[4]: #left>
           3: 0x06393b925e69 <String[9]: #_position>
           4: 0x06393b925ea9 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x06393b9278b1 <ByteArray[21]>
0x06393b927939 points to: [0x6393b9279a8]
=== [0x6393b9279a8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3587 S> 0x6393b9279a8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b9279ac @    4 : c4                Star0 
 3587 E> 0x6393b9279ad @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
         0x6393b9279b1 @    9 : 97 19             JumpIfToBooleanFalse [25] (0x6393b9279ca @ 34)
 3639 S> 0x6393b9279b3 @   11 : 2d 02 01 04       GetNamedProperty <this>, [1], [4]
         0x6393b9279b7 @   15 : c3                Star1 
         0x6393b9279b8 @   16 : 13 02             LdaConstant [2]
         0x6393b9279ba @   18 : c1                Star3 
 3639 E> 0x6393b9279bb @   19 : 5e f9 02 f7 06    CallProperty1 r1, <this>, r3, [6]
 3632 E> 0x6393b9279c0 @   24 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
 3689 S> 0x6393b9279c4 @   28 : 13 02             LdaConstant [2]
 3705 E> 0x6393b9279c6 @   30 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x6393b9279ca @   34 : 0e                LdaUndefined 
 3730 S> 0x6393b9279cb @   35 : a9                Return 
Constant pool (size = 5)
0x6393b9279d1: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 5
           0: 0x06393b9256c1 <String[12]: #canMoveRight>
           1: 0x06393b9256e1 <String[27]: #computeNewPositionAfterMove>
           2: 0x06393b925b21 <String[5]: #right>
           3: 0x06393b925e69 <String[9]: #_position>
           4: 0x06393b925ea9 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x06393b927a09 <ByteArray[21]>
0x06393b927a91 points to: [0x6393b927b00]
=== [0x6393b927b00] DISASSEMBLY ===
Parameter count 1
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
 3785 S> 0x6393b927b00 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b927b04 @    4 : bd                Star7 
 3795 E> 0x6393b927b05 @    5 : 2d f3 01 02       GetNamedProperty r7, [1], [2]
         0x6393b927b09 @    9 : c4                Star0 
 3821 S> 0x6393b927b0a @   10 : 2d 02 00 04       GetNamedProperty <this>, [0], [4]
         0x6393b927b0e @   14 : bd                Star7 
 3831 E> 0x6393b927b0f @   15 : 2d f3 02 06       GetNamedProperty r7, [2], [6]
         0x6393b927b13 @   19 : c3                Star1 
 3861 S> 0x6393b927b14 @   20 : 79 03 08 25       CreateArrayLiteral [3], [8], #37
         0x6393b927b18 @   24 : c2                Star2 
 3929 S> 0x6393b927b19 @   25 : 7b 09             CreateEmptyArrayLiteral [9]
         0x6393b927b1b @   27 : c1                Star3 
 3997 S> 0x6393b927b1c @   28 : b1 f8 0a 0c       GetIterator r2, [10], [12]
         0x6393b927b20 @   32 : 9f 07             JumpIfJSReceiver [7] (0x6393b927b27 @ 39)
         0x6393b927b22 @   34 : 65 c7 00 fa 00    CallRuntime [ThrowSymbolIteratorInvalid], r0-r0
         0x6393b927b27 @   39 : bc                Star8 
         0x6393b927b28 @   40 : 2d f2 04 0e       GetNamedProperty r8, [4], [14]
         0x6393b927b2c @   44 : bd                Star7 
         0x6393b927b2d @   45 : 12                LdaFalse 
         0x6393b927b2e @   46 : bb                Star9 
         0x6393b927b2f @   47 : 19 ff ee          Mov <context>, r12
         0x6393b927b32 @   50 : 11                LdaTrue 
         0x6393b927b33 @   51 : bb                Star9 
 3984 S> 0x6393b927b34 @   52 : 5d f3 f2 10       CallProperty0 r7, r8, [16]
         0x6393b927b38 @   56 : b7                Star13 
         0x6393b927b39 @   57 : 9f 07             JumpIfJSReceiver [7] (0x6393b927b40 @ 64)
         0x6393b927b3b @   59 : 65 be 00 ed 01    CallRuntime [ThrowIteratorResultNotAnObject], r13-r13
         0x6393b927b40 @   64 : 2d ed 05 12       GetNamedProperty r13, [5], [18]
         0x6393b927b44 @   68 : 94 0e             JumpIfToBooleanTrueConstant [14] (0x6393b927c5c @ 348)
         0x6393b927b46 @   70 : 2d ed 06 14       GetNamedProperty r13, [6], [20]
         0x6393b927b4a @   74 : b7                Star13 
         0x6393b927b4b @   75 : 12                LdaFalse 
         0x6393b927b4c @   76 : bb                Star9 
         0x6393b927b4d @   77 : 19 ed f6          Mov r13, r4
 3984 S> 0x6393b927b50 @   80 : 19 f6 f4          Mov r4, r6
 4023 S> 0x6393b927b53 @   83 : 13 07             LdaConstant [7]
         0x6393b927b55 @   85 : 6c f4 16          TestEqualStrict r6, [22]
         0x6393b927b58 @   88 : 19 ed ec          Mov r13, r14
         0x6393b927b5b @   91 : 98 19             JumpIfTrue [25] (0x6393b927b74 @ 116)
         0x6393b927b5d @   93 : 13 08             LdaConstant [8]
         0x6393b927b5f @   95 : 6c ec 16          TestEqualStrict r14, [22]
         0x6393b927b62 @   98 : 98 43             JumpIfTrue [67] (0x6393b927ba5 @ 165)
         0x6393b927b64 @  100 : 13 09             LdaConstant [9]
         0x6393b927b66 @  102 : 6c ec 16          TestEqualStrict r14, [22]
         0x6393b927b69 @  105 : 98 79             JumpIfTrue [121] (0x6393b927be2 @ 226)
         0x6393b927b6b @  107 : 13 0a             LdaConstant [10]
         0x6393b927b6d @  109 : 6c ec 16          TestEqualStrict r14, [22]
         0x6393b927b70 @  112 : 98 a3             JumpIfTrue [163] (0x6393b927c13 @ 275)
         0x6393b927b72 @  114 : 8a e4             Jump [228] (0x6393b927c56 @ 342)
 4093 S> 0x6393b927b74 @  116 : 0c                LdaZero 
 4099 E> 0x6393b927b75 @  117 : 6e fa 17          TestGreaterThan r0, [23]
         0x6393b927b78 @  120 : 99 2b             JumpIfFalse [43] (0x6393b927ba3 @ 163)
 4111 E> 0x6393b927b7a @  122 : 2d 02 0b 18       GetNamedProperty <this>, [11], [24]
         0x6393b927b7e @  126 : b5                Star15 
         0x6393b927b7f @  127 : 0b fa             Ldar r0
 4118 E> 0x6393b927b81 @  129 : 46 01 1a          SubSmi [1], [26]
 4115 E> 0x6393b927b84 @  132 : 2f eb 1b          GetKeyedProperty r15, [27]
         0x6393b927b87 @  135 : b5                Star15 
         0x6393b927b88 @  136 : 0b f9             Ldar r1
 4122 E> 0x6393b927b8a @  138 : 2f eb 1d          GetKeyedProperty r15, [29]
         0x6393b927b8d @  141 : b5                Star15 
         0x6393b927b8e @  142 : 0d 01             LdaSmi [1]
 4126 E> 0x6393b927b90 @  144 : 6c eb 1f          TestEqualStrict r15, [31]
         0x6393b927b93 @  147 : 99 10             JumpIfFalse [16] (0x6393b927ba3 @ 163)
 4178 S> 0x6393b927b95 @  149 : 2d f7 0c 20       GetNamedProperty r3, [12], [32]
         0x6393b927b99 @  153 : b5                Star15 
         0x6393b927b9a @  154 : 13 07             LdaConstant [7]
         0x6393b927b9c @  156 : 18 e9             Star r17
 4178 E> 0x6393b927b9e @  158 : 5e eb f7 e9 22    CallProperty1 r15, r3, r17, [34]
 4234 S> 0x6393b927ba3 @  163 : 8a b3             Jump [179] (0x6393b927c56 @ 342)
 4304 S> 0x6393b927ba5 @  165 : 2d 02 0b 25       GetNamedProperty <this>, [11], [37]
         0x6393b927ba9 @  169 : 18 ea             Star r16
 4309 E> 0x6393b927bab @  171 : 2d ea 0d 27       GetNamedProperty r16, [13], [39]
 4316 E> 0x6393b927baf @  175 : 46 01 24          SubSmi [1], [36]
 4297 E> 0x6393b927bb2 @  178 : 6d fa 29          TestLessThan r0, [41]
         0x6393b927bb5 @  181 : 99 2b             JumpIfFalse [43] (0x6393b927be0 @ 224)
 4328 E> 0x6393b927bb7 @  183 : 2d 02 0b 2a       GetNamedProperty <this>, [11], [42]
         0x6393b927bbb @  187 : b5                Star15 
         0x6393b927bbc @  188 : 0b fa             Ldar r0
 4335 E> 0x6393b927bbe @  190 : 45 01 2c          AddSmi [1], [44]
 4332 E> 0x6393b927bc1 @  193 : 2f eb 2d          GetKeyedProperty r15, [45]
         0x6393b927bc4 @  196 : b5                Star15 
         0x6393b927bc5 @  197 : 0b f9             Ldar r1
 4339 E> 0x6393b927bc7 @  199 : 2f eb 2f          GetKeyedProperty r15, [47]
         0x6393b927bca @  202 : b5                Star15 
         0x6393b927bcb @  203 : 0d 01             LdaSmi [1]
 4343 E> 0x6393b927bcd @  205 : 6c eb 31          TestEqualStrict r15, [49]
         0x6393b927bd0 @  208 : 99 10             JumpIfFalse [16] (0x6393b927be0 @ 224)
 4395 S> 0x6393b927bd2 @  210 : 2d f7 0c 20       GetNamedProperty r3, [12], [32]
         0x6393b927bd6 @  214 : b5                Star15 
         0x6393b927bd7 @  215 : 13 08             LdaConstant [8]
         0x6393b927bd9 @  217 : 18 e9             Star r17
 4395 E> 0x6393b927bdb @  219 : 5e eb f7 e9 32    CallProperty1 r15, r3, r17, [50]
 4452 S> 0x6393b927be0 @  224 : 8a 76             Jump [118] (0x6393b927c56 @ 342)
 4506 S> 0x6393b927be2 @  226 : 0c                LdaZero 
 4512 E> 0x6393b927be3 @  227 : 6e f9 34          TestGreaterThan r1, [52]
         0x6393b927be6 @  230 : 99 2b             JumpIfFalse [43] (0x6393b927c11 @ 273)
 4524 E> 0x6393b927be8 @  232 : 2d 02 0b 35       GetNamedProperty <this>, [11], [53]
         0x6393b927bec @  236 : b5                Star15 
         0x6393b927bed @  237 : 0b fa             Ldar r0
 4528 E> 0x6393b927bef @  239 : 2f eb 37          GetKeyedProperty r15, [55]
         0x6393b927bf2 @  242 : b5                Star15 
         0x6393b927bf3 @  243 : 0b f9             Ldar r1
 4534 E> 0x6393b927bf5 @  245 : 46 01 39          SubSmi [1], [57]
 4531 E> 0x6393b927bf8 @  248 : 2f eb 3a          GetKeyedProperty r15, [58]
         0x6393b927bfb @  251 : b5                Star15 
         0x6393b927bfc @  252 : 0d 01             LdaSmi [1]
 4539 E> 0x6393b927bfe @  254 : 6c eb 3c          TestEqualStrict r15, [60]
         0x6393b927c01 @  257 : 99 10             JumpIfFalse [16] (0x6393b927c11 @ 273)
 4591 S> 0x6393b927c03 @  259 : 2d f7 0c 20       GetNamedProperty r3, [12], [32]
         0x6393b927c07 @  263 : b5                Star15 
         0x6393b927c08 @  264 : 13 09             LdaConstant [9]
         0x6393b927c0a @  266 : 18 e9             Star r17
 4591 E> 0x6393b927c0c @  268 : 5e eb f7 e9 3d    CallProperty1 r15, r3, r17, [61]
 4645 S> 0x6393b927c11 @  273 : 8a 45             Jump [69] (0x6393b927c56 @ 342)
 4714 S> 0x6393b927c13 @  275 : 2d 02 0b 40       GetNamedProperty <this>, [11], [64]
         0x6393b927c17 @  279 : 18 ea             Star r16
         0x6393b927c19 @  281 : 0c                LdaZero 
 4718 E> 0x6393b927c1a @  282 : 2f ea 42          GetKeyedProperty r16, [66]
         0x6393b927c1d @  285 : 18 ea             Star r16
 4722 E> 0x6393b927c1f @  287 : 2d ea 0d 44       GetNamedProperty r16, [13], [68]
 4729 E> 0x6393b927c23 @  291 : 46 01 3f          SubSmi [1], [63]
 4707 E> 0x6393b927c26 @  294 : 6d f9 46          TestLessThan r1, [70]
         0x6393b927c29 @  297 : 99 2b             JumpIfFalse [43] (0x6393b927c54 @ 340)
 4741 E> 0x6393b927c2b @  299 : 2d 02 0b 47       GetNamedProperty <this>, [11], [71]
         0x6393b927c2f @  303 : b5                Star15 
         0x6393b927c30 @  304 : 0b fa             Ldar r0
 4745 E> 0x6393b927c32 @  306 : 2f eb 49          GetKeyedProperty r15, [73]
         0x6393b927c35 @  309 : b5                Star15 
         0x6393b927c36 @  310 : 0b f9             Ldar r1
 4751 E> 0x6393b927c38 @  312 : 45 01 4b          AddSmi [1], [75]
 4748 E> 0x6393b927c3b @  315 : 2f eb 4c          GetKeyedProperty r15, [76]
         0x6393b927c3e @  318 : b5                Star15 
         0x6393b927c3f @  319 : 0d 01             LdaSmi [1]
 4756 E> 0x6393b927c41 @  321 : 6c eb 4e          TestEqualStrict r15, [78]
         0x6393b927c44 @  324 : 99 10             JumpIfFalse [16] (0x6393b927c54 @ 340)
 4808 S> 0x6393b927c46 @  326 : 2d f7 0c 20       GetNamedProperty r3, [12], [32]
         0x6393b927c4a @  330 : b5                Star15 
         0x6393b927c4b @  331 : 13 0a             LdaConstant [10]
         0x6393b927c4d @  333 : 18 e9             Star r17
 4808 E> 0x6393b927c4f @  335 : 5e eb f7 e9 4f    CallProperty1 r15, r3, r17, [79]
 4864 S> 0x6393b927c54 @  340 : 8a 02             Jump [2] (0x6393b927c56 @ 342)
 3973 E> 0x6393b927c56 @  342 : 00 89 25 01 00 00 JumpLoop.Wide [293], [0] (0x6393b927b32 @ 50)
         0x6393b927c5c @  348 : 0d ff             LdaSmi [-1]
         0x6393b927c5e @  350 : b9                Star11 
         0x6393b927c5f @  351 : ba                Star10 
         0x6393b927c60 @  352 : 8a 05             Jump [5] (0x6393b927c65 @ 357)
         0x6393b927c62 @  354 : b9                Star11 
         0x6393b927c63 @  355 : 0c                LdaZero 
         0x6393b927c64 @  356 : ba                Star10 
         0x6393b927c65 @  357 : 10                LdaTheHole 
         0x6393b927c66 @  358 : a6                SetPendingMessage 
         0x6393b927c67 @  359 : b8                Star12 
         0x6393b927c68 @  360 : 0b f1             Ldar r9
         0x6393b927c6a @  362 : 96 24             JumpIfToBooleanTrue [36] (0x6393b927c8e @ 398)
         0x6393b927c6c @  364 : 19 ff ec          Mov <context>, r14
         0x6393b927c6f @  367 : 2d f2 0f 51       GetNamedProperty r8, [15], [81]
         0x6393b927c73 @  371 : 9e 1b             JumpIfUndefinedOrNull [27] (0x6393b927c8e @ 398)
         0x6393b927c75 @  373 : b5                Star15 
         0x6393b927c76 @  374 : 5d eb f2 53       CallProperty0 r15, r8, [83]
         0x6393b927c7a @  378 : 9f 14             JumpIfJSReceiver [20] (0x6393b927c8e @ 398)
         0x6393b927c7c @  380 : 18 ea             Star r16
         0x6393b927c7e @  382 : 65 be 00 ea 01    CallRuntime [ThrowIteratorResultNotAnObject], r16-r16
         0x6393b927c83 @  387 : 8a 0b             Jump [11] (0x6393b927c8e @ 398)
         0x6393b927c85 @  389 : b6                Star14 
         0x6393b927c86 @  390 : 0c                LdaZero 
         0x6393b927c87 @  391 : 1c f0             TestReferenceEqual r10
         0x6393b927c89 @  393 : 98 05             JumpIfTrue [5] (0x6393b927c8e @ 398)
         0x6393b927c8b @  395 : 0b ec             Ldar r14
         0x6393b927c8d @  397 : a8                ReThrow 
         0x6393b927c8e @  398 : 0b ee             Ldar r12
         0x6393b927c90 @  400 : a6                SetPendingMessage 
         0x6393b927c91 @  401 : 0c                LdaZero 
         0x6393b927c92 @  402 : 1c f0             TestReferenceEqual r10
         0x6393b927c94 @  404 : 99 05             JumpIfFalse [5] (0x6393b927c99 @ 409)
         0x6393b927c96 @  406 : 0b ef             Ldar r11
         0x6393b927c98 @  408 : a8                ReThrow 
 4903 S> 0x6393b927c99 @  409 : 0b f7             Ldar r3
 4929 S> 0x6393b927c9b @  411 : a9                Return 
Constant pool (size = 16)
0x6393b927ca1: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 16
           0: 0x06393b925e69 <String[9]: #_position>
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: 0x0b6bd1018ae1 <String[1]: #y>
           3: 0x06393b927d31 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x06393b927d49 <FixedArray[4]>>
           4: 0x1899c76859b1 <String[4]: #next>
           5: 0x1899c7684c71 <String[4]: #done>
           6: 0x1899c7686419 <String[5]: #value>
           7: 0x06393b925b09 <String[4]: #left>
           8: 0x06393b925b21 <String[5]: #right>
           9: 0x06393b925b39 <String[2]: #up>
          10: 0x06393b925b51 <String[4]: #down>
          11: 0x06393b925ec9 <String[4]: #_map>
          12: 0x0b6bd1009551 <String[4]: #push>
          13: 0x1899c76855f9 <String[6]: #length>
          14: 280
          15: 0x1899c7685e81 <String[6]: #return>
Handler Table (size = 32)
   from   to       hdlr (prediction,   data)
  (  50, 348)  ->   354 (prediction=0, data=12)
  ( 367, 387)  ->   389 (prediction=0, data=14)
Source Position Table (size = 138)
0x06393b927dc1 <ByteArray[138]>
Array boilerplate at 0x06393b927d31: 
0x6393b927d31: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x1899c7683291 <Map[24]>
 - elements kind: PACKED_ELEMENTS
 - constant elements: 0x06393b927d49 <FixedArray[4]>
           0: 0x06393b925b09 <String[4]: #left>
           1: 0x06393b925b21 <String[5]: #right>
           2: 0x06393b925b39 <String[2]: #up>
           3: 0x06393b925b51 <String[4]: #down>
0x06393b927ef9 points to: [0x6393b927f68]
=== [0x6393b927f68] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4975 S> 0x6393b927f68 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b927f6c @    4 : c4                Star0 
 4975 E> 0x6393b927f6d @    5 : 5e fa 02 03 02    CallProperty1 r0, <this>, a0, [2]
         0x6393b927f72 @   10 : c4                Star0 
         0x6393b927f73 @   11 : 13 01             LdaConstant [1]
         0x6393b927f75 @   13 : 6c fa 04          TestEqualStrict r0, [4]
         0x6393b927f78 @   16 : 98 19             JumpIfTrue [25] (0x6393b927f91 @ 41)
         0x6393b927f7a @   18 : 13 02             LdaConstant [2]
         0x6393b927f7c @   20 : 6c fa 04          TestEqualStrict r0, [4]
         0x6393b927f7f @   23 : 98 1d             JumpIfTrue [29] (0x6393b927f9c @ 52)
         0x6393b927f81 @   25 : 13 03             LdaConstant [3]
         0x6393b927f83 @   27 : 6c fa 04          TestEqualStrict r0, [4]
         0x6393b927f86 @   30 : 98 21             JumpIfTrue [33] (0x6393b927fa7 @ 63)
         0x6393b927f88 @   32 : 13 04             LdaConstant [4]
         0x6393b927f8a @   34 : 6c fa 04          TestEqualStrict r0, [4]
         0x6393b927f8d @   37 : 98 25             JumpIfTrue [37] (0x6393b927fb2 @ 74)
         0x6393b927f8f @   39 : 8a 2e             Jump [46] (0x6393b927fbd @ 85)
 5043 S> 0x6393b927f91 @   41 : 2d 02 05 05       GetNamedProperty <this>, [5], [5]
         0x6393b927f95 @   45 : c3                Star1 
 5043 E> 0x6393b927f96 @   46 : 5d f9 02 07       CallProperty0 r1, <this>, [7]
 5069 S> 0x6393b927f9a @   50 : 8a 23             Jump [35] (0x6393b927fbd @ 85)
 5122 S> 0x6393b927f9c @   52 : 2d 02 06 09       GetNamedProperty <this>, [6], [9]
         0x6393b927fa0 @   56 : c3                Star1 
 5122 E> 0x6393b927fa1 @   57 : 5d f9 02 0b       CallProperty0 r1, <this>, [11]
 5150 S> 0x6393b927fa5 @   61 : 8a 18             Jump [24] (0x6393b927fbd @ 85)
 5203 S> 0x6393b927fa7 @   63 : 2d 02 07 0d       GetNamedProperty <this>, [7], [13]
         0x6393b927fab @   67 : c3                Star1 
 5203 E> 0x6393b927fac @   68 : 5d f9 02 0f       CallProperty0 r1, <this>, [15]
 5231 S> 0x6393b927fb0 @   72 : 8a 0d             Jump [13] (0x6393b927fbd @ 85)
 5285 S> 0x6393b927fb2 @   74 : 2d 02 08 11       GetNamedProperty <this>, [8], [17]
         0x6393b927fb6 @   78 : c3                Star1 
 5285 E> 0x6393b927fb7 @   79 : 5d f9 02 13       CallProperty0 r1, <this>, [19]
 5314 S> 0x6393b927fbb @   83 : 8a 02             Jump [2] (0x6393b927fbd @ 85)
         0x6393b927fbd @   85 : 0e                LdaUndefined 
 5335 S> 0x6393b927fbe @   86 : a9                Return 
Constant pool (size = 9)
0x6393b927fc1: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 9
           0: 0x06393b928019 <String[13]: #get_next_move>
           1: 0x06393b925b39 <String[2]: #up>
           2: 0x06393b925b51 <String[4]: #down>
           3: 0x06393b925b09 <String[4]: #left>
           4: 0x06393b925b21 <String[5]: #right>
           5: 0x06393b925711 <String[6]: #moveUp>
           6: 0x06393b925729 <String[8]: #moveDown>
           7: 0x06393b925741 <String[8]: #moveLeft>
           8: 0x06393b925759 <String[9]: #moveRight>
Handler Table (size = 0)
Source Position Table (size = 38)
0x06393b928039 <ByteArray[38]>
0x06393b9280d9 points to: [0x6393b928148]
=== [0x6393b928148] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 5375 S> 0x6393b928148 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x6393b92814c @    4 : c4                Star0 
         0x6393b92814d @    5 : 00 0d 84 03       LdaSmi.Wide [900]
 5380 E> 0x6393b928151 @    9 : 6e fa 02          TestGreaterThan r0, [2]
         0x6393b928154 @   12 : 99 0a             JumpIfFalse [10] (0x6393b92815e @ 22)
 5401 S> 0x6393b928156 @   14 : 13 01             LdaConstant [1]
 5418 E> 0x6393b928158 @   16 : 32 02 02 03       SetNamedProperty <this>, [2], [3]
         0x6393b92815c @   20 : 8a 42             Jump [66] (0x6393b92819e @ 86)
 5463 S> 0x6393b92815e @   22 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x6393b928162 @   26 : c4                Star0 
         0x6393b928163 @   27 : 00 0d bc 02       LdaSmi.Wide [700]
 5468 E> 0x6393b928167 @   31 : 6e fa 05          TestGreaterThan r0, [5]
         0x6393b92816a @   34 : 99 0a             JumpIfFalse [10] (0x6393b928174 @ 44)
 5489 S> 0x6393b92816c @   36 : 13 03             LdaConstant [3]
 5506 E> 0x6393b92816e @   38 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
         0x6393b928172 @   42 : 8a 2c             Jump [44] (0x6393b92819e @ 86)
 5551 S> 0x6393b928174 @   44 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x6393b928178 @   48 : c4                Star0 
         0x6393b928179 @   49 : 00 0d f4 01       LdaSmi.Wide [500]
 5556 E> 0x6393b92817d @   53 : 6e fa 08          TestGreaterThan r0, [8]
         0x6393b928180 @   56 : 99 0a             JumpIfFalse [10] (0x6393b92818a @ 66)
 5577 S> 0x6393b928182 @   58 : 13 04             LdaConstant [4]
 5594 E> 0x6393b928184 @   60 : 32 02 02 09       SetNamedProperty <this>, [2], [9]
         0x6393b928188 @   64 : 8a 16             Jump [22] (0x6393b92819e @ 86)
 5638 S> 0x6393b92818a @   66 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x6393b92818e @   70 : c4                Star0 
         0x6393b92818f @   71 : 00 0d 2c 01       LdaSmi.Wide [300]
 5643 E> 0x6393b928193 @   75 : 6e fa 0b          TestGreaterThan r0, [11]
         0x6393b928196 @   78 : 99 08             JumpIfFalse [8] (0x6393b92819e @ 86)
 5664 S> 0x6393b928198 @   80 : 13 05             LdaConstant [5]
 5681 E> 0x6393b92819a @   82 : 32 02 02 0c       SetNamedProperty <this>, [2], [12]
 5710 S> 0x6393b92819e @   86 : 2d 02 06 0e       GetNamedProperty <this>, [6], [14]
         0x6393b9281a2 @   90 : 51 10             Inc [16]
 5737 E> 0x6393b9281a4 @   92 : 32 02 06 11       SetNamedProperty <this>, [6], [17]
 5758 S> 0x6393b9281a8 @   96 : 2d 02 06 13       GetNamedProperty <this>, [6], [19]
         0x6393b9281ac @  100 : c4                Star0 
 5789 E> 0x6393b9281ad @  101 : 2d 02 07 15       GetNamedProperty <this>, [7], [21]
         0x6393b9281b1 @  105 : c3                Star1 
 5807 E> 0x6393b9281b2 @  106 : 2d 02 02 17       GetNamedProperty <this>, [2], [23]
 5801 E> 0x6393b9281b6 @  110 : 2f f9 19          GetKeyedProperty r1, [25]
 5781 E> 0x6393b9281b9 @  113 : 70 fa 1b          TestGreaterThanOrEqual r0, [27]
         0x6393b9281bc @  116 : 99 11             JumpIfFalse [17] (0x6393b9281cd @ 133)
 5835 S> 0x6393b9281be @  118 : 0c                LdaZero 
 5863 E> 0x6393b9281bf @  119 : 32 02 06 1c       SetNamedProperty <this>, [6], [28]
 5885 S> 0x6393b9281c3 @  123 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x6393b9281c7 @  127 : c4                Star0 
 5885 E> 0x6393b9281c8 @  128 : 5e fa 02 03 20    CallProperty1 r0, <this>, a0, [32]
         0x6393b9281cd @  133 : 0e                LdaUndefined 
 5912 S> 0x6393b9281ce @  134 : a9                Return 
Constant pool (size = 9)
0x6393b9281d1: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 9
           0: 0x06393b928229 <String[4]: #tick>
           1: 0x06393b925c59 <String[6]: #insane>
           2: 0x06393b925a71 <String[11]: #personality>
           3: 0x06393b925c41 <String[6]: #hungry>
           4: 0x06393b925c29 <String[5]: #awake>
           5: 0x06393b925c11 <String[5]: #tease>
           6: 0x06393b925a31 <String[22]: #nbOfTicksSinceLastMove>
           7: 0x06393b925c71 <String[12]: #tickSpeedMap>
           8: 0x06393b9257a1 <String[4]: #move>
Handler Table (size = 0)
Source Position Table (size = 64)
0x06393b928241 <ByteArray[64]>
0x06393b928301 points to: [0x6393b928370]
=== [0x6393b928370] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5955 S> 0x6393b928370 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 5965 S> 0x6393b928374 @    4 : a9                Return 
Constant pool (size = 1)
0x6393b928379: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 1
           0: 0x06393b925e69 <String[9]: #_position>
Handler Table (size = 0)
Source Position Table (size = 8)
0x06393b928391 <ByteArray[8]>
0x06393b928429 points to: [0x6393b928498]
=== [0x6393b928498] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 6004 S> 0x6393b928498 @    0 : 7c 00 00 08       CreateObjectLiteral [0], [0], #8
         0x6393b92849c @    4 : c4                Star0 
 6035 E> 0x6393b92849d @    5 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x6393b9284a1 @    9 : c3                Star1 
 6045 E> 0x6393b9284a2 @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x6393b9284a6 @   14 : c2                Star2 
 6055 E> 0x6393b9284a7 @   15 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x6393b9284ab @   19 : 33 f9 03 06       DefineNamedOwnProperty r1, [3], [6]
 6066 E> 0x6393b9284af @   23 : 2d 02 02 08       GetNamedProperty <this>, [2], [8]
         0x6393b9284b3 @   27 : c2                Star2 
 6076 E> 0x6393b9284b4 @   28 : 2d f8 04 0a       GetNamedProperty r2, [4], [10]
         0x6393b9284b8 @   32 : 33 f9 04 0c       DefineNamedOwnProperty r1, [4], [12]
         0x6393b9284bc @   36 : 0b f9             Ldar r1
         0x6393b9284be @   38 : 33 fa 05 0e       DefineNamedOwnProperty r0, [5], [14]
         0x6393b9284c2 @   42 : 0b fa             Ldar r0
 6091 S> 0x6393b9284c4 @   44 : a9                Return 
Constant pool (size = 6)
0x6393b9284c9: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 6
           0: 0x06393b928509 <ObjectBoilerplateDescription[3]>
           1: 0x06393b928531 <ObjectBoilerplateDescription[5]>
           2: 0x06393b925e69 <String[9]: #_position>
           3: 0x0b6bd1018ac9 <String[1]: #x>
           4: 0x0b6bd1018ae1 <String[1]: #y>
           5: 0x1899c7685c19 <String[8]: #position>
Handler Table (size = 0)
Source Position Table (size = 18)
0x06393b928569 <ByteArray[18]>
Object boilerplate at 0x06393b928509: 
0x6393b928509: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 3
           0: 8
           1: 0x1899c7685c19 <String[8]: #position>
           2: 0x1899c7681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x06393b928531: 
0x6393b928531: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1899c7682059 <Map>
 - length: 5
           0: 8
           1: 0x0b6bd1018ac9 <String[1]: #x>
           2: 0x1899c7681501 <Odd Oddball: uninitialized>
           3: 0x0b6bd1018ae1 <String[1]: #y>
           4: 0x1899c7681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x06393b9285f9 points to: [0x6393b928668]
=== [0x6393b928668] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 6150 S> 0x6393b928668 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b92866c @    4 : c3                Star1 
 6150 E> 0x6393b92866d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x6393b928671 @    9 : c3                Star1 
         0x6393b928672 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x6393b928676 @   14 : c4                Star0 
 6185 E> 0x6393b928677 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x6393b92867b @   19 : 33 fa 02 08       DefineNamedOwnProperty r0, [2], [8]
 6215 E> 0x6393b92867f @   23 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x6393b928683 @   27 : 33 fa 03 0c       DefineNamedOwnProperty r0, [3], [12]
 6240 E> 0x6393b928687 @   31 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x6393b92868b @   35 : 33 fa 04 10       DefineNamedOwnProperty r0, [4], [16]
         0x6393b92868f @   39 : 0b fa             Ldar r0
 6248 S> 0x6393b928691 @   41 : a9                Return 
Constant pool (size = 5)
0x6393b928699: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 5
           0: 0x06393b9257e9 <String[15]: #serializeCommon>
           1: 0x06393b925ea9 <String[10]: #_direction>
           2: 0x1899c76839a1 <String[9]: #direction>
           3: 0x06393b925a71 <String[11]: #personality>
           4: 0x1899c7684381 <String[5]: #style>
Handler Table (size = 0)
Source Position Table (size = 17)
0x06393b9286d1 <ByteArray[17]>
0x06393b928761 points to: [0x6393b9287d0]
=== [0x6393b9287d0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 6319 S> 0x6393b9287d0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x6393b9287d4 @    4 : c3                Star1 
 6319 E> 0x6393b9287d5 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x6393b9287d9 @    9 : c3                Star1 
         0x6393b9287da @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x6393b9287de @   14 : c4                Star0 
 6366 E> 0x6393b9287df @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x6393b9287e3 @   19 : 33 fa 02 08       DefineNamedOwnProperty r0, [2], [8]
 6408 E> 0x6393b9287e7 @   23 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x6393b9287eb @   27 : 33 fa 03 0c       DefineNamedOwnProperty r0, [3], [12]
 6445 E> 0x6393b9287ef @   31 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x6393b9287f3 @   35 : c3                Star1 
 6474 E> 0x6393b9287f4 @   36 : 2d 02 05 10       GetNamedProperty <this>, [5], [16]
 6468 E> 0x6393b9287f8 @   40 : 2f f9 12          GetKeyedProperty r1, [18]
         0x6393b9287fb @   43 : 33 fa 05 14       DefineNamedOwnProperty r0, [5], [20]
         0x6393b9287ff @   47 : 0b fa             Ldar r0
 6492 S> 0x6393b928801 @   49 : a9                Return 
Constant pool (size = 6)
0x6393b928809: [FixedArray] in OldSpace
 - map: 0x1899c76812e1 <Map>
 - length: 6
           0: 0x06393b9257e9 <String[15]: #serializeCommon>
           1: 0x06393b925ea9 <String[10]: #_direction>
           2: 0x1899c76839a1 <String[9]: #direction>
           3: 0x06393b925a71 <String[11]: #personality>
           4: 0x06393b925e41 <String[23]: #threatStyleHumanizedMap>
           5: 0x1899c7684381 <String[5]: #style>
Handler Table (size = 0)
Source Position Table (size = 24)
0x06393b928849 <ByteArray[24]>
<< OUTPUTTING DISASSEMBLY END >>
