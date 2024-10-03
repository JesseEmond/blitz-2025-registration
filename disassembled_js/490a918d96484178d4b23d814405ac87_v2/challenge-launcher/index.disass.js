<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1b6929ba4f28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1b6929ba4f28 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1b6929ba4f2c @    4 : c4                Star0 
 6877 S> 0x1b6929ba4f2d @    5 : a9                Return 
Constant pool (size = 1)
0x1b6929ba4f31: [FixedArray] in OldSpace
 - map: 0x25c20d0412e1 <Map>
 - length: 1
           0: 0x1b6929ba4f49 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1b6929ba7981 <ByteArray[8]>
0x1b6929ba4f49 points to: [0x1b6929ba4fb8]
=== [0x1b6929ba4fb8] DISASSEMBLY ===
Parameter count 6
Register count 23
Frame size 184
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1b6929ba4fb8 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x1b6929ba4fbb @    3 : 1a f7             PushContext r3
         0x1b6929ba4fbd @    5 : 10                LdaTheHole 
         0x1b6929ba4fbe @    6 : 25 02             StaCurrentContextSlot [2]
         0x1b6929ba4fc0 @    8 : 10                LdaTheHole 
         0x1b6929ba4fc1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1b6929ba4fc3 @   11 : 10                LdaTheHole 
         0x1b6929ba4fc4 @   12 : 25 04             StaCurrentContextSlot [4]
   98 S> 0x1b6929ba4fc6 @   14 : 0b 02             Ldar <this>
         0x1b6929ba4fc8 @   16 : 97 06             JumpIfToBooleanFalse [6] (0x1b6929ba4fce @ 22)
  112 E> 0x1b6929ba4fca @   18 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x1b6929ba4fce @   22 : 96 06             JumpIfToBooleanTrue [6] (0x1b6929ba4fd4 @ 28)
         0x1b6929ba4fd0 @   24 : 80 02 00 02       CreateClosure [2], [0], #2
         0x1b6929ba4fd4 @   28 : c4                Star0 
  215 S> 0x1b6929ba4fd5 @   29 : 21 03 02          LdaGlobal [3], [2]
         0x1b6929ba4fd8 @   32 : bf                Star5 
  222 E> 0x1b6929ba4fd9 @   33 : 2d f5 04 04       GetNamedProperty r5, [4], [4]
         0x1b6929ba4fdd @   37 : c0                Star4 
         0x1b6929ba4fde @   38 : 13 05             LdaConstant [5]
         0x1b6929ba4fe0 @   40 : bd                Star7 
  237 E> 0x1b6929ba4fe1 @   41 : 7c 06 06 29       CreateObjectLiteral [6], [6], #41
         0x1b6929ba4fe5 @   45 : bc                Star8 
         0x1b6929ba4fe6 @   46 : 19 03 f4          Mov a0, r6
  222 E> 0x1b6929ba4fe9 @   49 : 5c f6 f5 04 07    CallProperty r4, r5-r8, [7]
  298 S> 0x1b6929ba4fee @   54 : 13 07             LdaConstant [7]
         0x1b6929ba4ff0 @   56 : bf                Star5 
  298 E> 0x1b6929ba4ff1 @   57 : 62 04 f5 09       CallUndefinedReceiver1 a1, r5, [9]
  298 E> 0x1b6929ba4ff5 @   61 : 25 02             StaCurrentContextSlot [2]
  344 S> 0x1b6929ba4ff7 @   63 : 13 08             LdaConstant [8]
         0x1b6929ba4ff9 @   65 : bf                Star5 
  344 E> 0x1b6929ba4ffa @   66 : 62 04 f5 0b       CallUndefinedReceiver1 a1, r5, [11]
  344 E> 0x1b6929ba4ffe @   70 : 25 03             StaCurrentContextSlot [3]
  386 S> 0x1b6929ba5000 @   72 : 13 09             LdaConstant [9]
         0x1b6929ba5002 @   74 : be                Star6 
  402 E> 0x1b6929ba5003 @   75 : 62 04 f4 0d       CallUndefinedReceiver1 a1, r6, [13]
         0x1b6929ba5007 @   79 : bf                Star5 
  386 E> 0x1b6929ba5008 @   80 : 62 fa f5 0f       CallUndefinedReceiver1 r0, r5, [15]
         0x1b6929ba500c @   84 : c3                Star1 
  501 S> 0x1b6929ba500d @   85 : 13 0a             LdaConstant [10]
         0x1b6929ba500f @   87 : c2                Star2 
 3353 S> 0x1b6929ba5010 @   88 : 2d f9 0b 11       GetNamedProperty r1, [11], [17]
         0x1b6929ba5014 @   92 : 18 e7             Star r19
 3362 E> 0x1b6929ba5016 @   94 : 21 0c 13          LdaGlobal [12], [19]
         0x1b6929ba5019 @   97 : 18 e5             Star r21
 3370 E> 0x1b6929ba501b @   99 : 2d e5 0d 15       GetNamedProperty r21, [13], [21]
         0x1b6929ba501f @  103 : 18 e5             Star r21
 3375 E> 0x1b6929ba5021 @  105 : 2d e5 0e 17       GetNamedProperty r21, [14], [23]
         0x1b6929ba5025 @  109 : 18 e6             Star r20
         0x1b6929ba5027 @  111 : 0d 02             LdaSmi [2]
         0x1b6929ba5029 @  113 : 18 e4             Star r22
 3375 E> 0x1b6929ba502b @  115 : 5e e6 e5 e4 19    CallProperty1 r20, r21, r22, [25]
         0x1b6929ba5030 @  120 : 18 e6             Star r20
 3361 E> 0x1b6929ba5032 @  122 : 62 e7 e6 1b       CallUndefinedReceiver1 r19, r20, [27]
         0x1b6929ba5036 @  126 : 18 e7             Star r19
 3389 E> 0x1b6929ba5038 @  128 : 2d e7 0f 1d       GetNamedProperty r19, [15], [29]
         0x1b6929ba503c @  132 : 18 e8             Star r18
         0x1b6929ba503e @  134 : 7c 10 1f 08       CreateObjectLiteral [16], [31], #8
         0x1b6929ba5042 @  138 : 18 e6             Star r20
 3390 E> 0x1b6929ba5044 @  140 : 5e e8 e7 e6 20    CallProperty1 r18, r19, r20, [32]
         0x1b6929ba5049 @  145 : 18 e8             Star r18
 4664 E> 0x1b6929ba504b @  147 : 2d e8 11 22       GetNamedProperty r18, [17], [34]
         0x1b6929ba504f @  151 : 18 e9             Star r17
 4673 E> 0x1b6929ba5051 @  153 : 21 0c 13          LdaGlobal [12], [19]
         0x1b6929ba5054 @  156 : 18 e7             Star r19
 4681 E> 0x1b6929ba5056 @  158 : 2d e7 12 24       GetNamedProperty r19, [18], [36]
         0x1b6929ba505a @  162 : 18 e7             Star r19
 4685 E> 0x1b6929ba505c @  164 : 2d e7 13 26       GetNamedProperty r19, [19], [38]
         0x1b6929ba5060 @  168 : 96 04             JumpIfToBooleanTrue [4] (0x1b6929ba5064 @ 172)
         0x1b6929ba5062 @  170 : 13 14             LdaConstant [20]
         0x1b6929ba5064 @  172 : 18 e7             Star r19
 4665 E> 0x1b6929ba5066 @  174 : 5e e9 e8 e7 28    CallProperty1 r17, r18, r19, [40]
         0x1b6929ba506b @  179 : 18 e9             Star r17
 4707 E> 0x1b6929ba506d @  181 : 2d e9 15 2a       GetNamedProperty r17, [21], [42]
         0x1b6929ba5071 @  185 : 18 ea             Star r16
         0x1b6929ba5073 @  187 : 13 16             LdaConstant [22]
         0x1b6929ba5075 @  189 : 18 e8             Star r18
 4708 E> 0x1b6929ba5077 @  191 : 5e ea e9 e8 2c    CallProperty1 r16, r17, r18, [44]
         0x1b6929ba507c @  196 : 18 ea             Star r16
 4739 E> 0x1b6929ba507e @  198 : 2d ea 15 2e       GetNamedProperty r16, [21], [46]
         0x1b6929ba5082 @  202 : b5                Star15 
         0x1b6929ba5083 @  203 : 13 17             LdaConstant [23]
         0x1b6929ba5085 @  205 : 18 e9             Star r17
 4740 E> 0x1b6929ba5087 @  207 : 5e eb ea e9 30    CallProperty1 r15, r16, r17, [48]
         0x1b6929ba508c @  212 : b5                Star15 
 4763 E> 0x1b6929ba508d @  213 : 2d eb 15 32       GetNamedProperty r15, [21], [50]
         0x1b6929ba5091 @  217 : b6                Star14 
         0x1b6929ba5092 @  218 : 13 18             LdaConstant [24]
         0x1b6929ba5094 @  220 : 18 ea             Star r16
 4764 E> 0x1b6929ba5096 @  222 : 5e ec eb ea 34    CallProperty1 r14, r15, r16, [52]
         0x1b6929ba509b @  227 : b6                Star14 
 4785 E> 0x1b6929ba509c @  228 : 2d ec 15 36       GetNamedProperty r14, [21], [54]
         0x1b6929ba50a0 @  232 : b7                Star13 
         0x1b6929ba50a1 @  233 : 13 19             LdaConstant [25]
         0x1b6929ba50a3 @  235 : b5                Star15 
 4786 E> 0x1b6929ba50a4 @  236 : 5e ed ec eb 38    CallProperty1 r13, r14, r15, [56]
         0x1b6929ba50a9 @  241 : b7                Star13 
 4805 E> 0x1b6929ba50aa @  242 : 2d ed 15 3a       GetNamedProperty r13, [21], [58]
         0x1b6929ba50ae @  246 : b8                Star12 
         0x1b6929ba50af @  247 : 13 1a             LdaConstant [26]
         0x1b6929ba50b1 @  249 : b6                Star14 
 4806 E> 0x1b6929ba50b2 @  250 : 5e ee ed ec 3c    CallProperty1 r12, r13, r14, [60]
         0x1b6929ba50b7 @  255 : b8                Star12 
 4828 E> 0x1b6929ba50b8 @  256 : 2d ee 15 3e       GetNamedProperty r12, [21], [62]
         0x1b6929ba50bc @  260 : b9                Star11 
         0x1b6929ba50bd @  261 : 13 1b             LdaConstant [27]
         0x1b6929ba50bf @  263 : b7                Star13 
 4829 E> 0x1b6929ba50c0 @  264 : 5e ef ee ed 40    CallProperty1 r11, r12, r13, [64]
         0x1b6929ba50c5 @  269 : b9                Star11 
 4858 E> 0x1b6929ba50c6 @  270 : 2d ef 15 42       GetNamedProperty r11, [21], [66]
         0x1b6929ba50ca @  274 : ba                Star10 
         0x1b6929ba50cb @  275 : 13 1c             LdaConstant [28]
         0x1b6929ba50cd @  277 : b8                Star12 
 4859 E> 0x1b6929ba50ce @  278 : 5e f0 ef ee 44    CallProperty1 r10, r11, r12, [68]
         0x1b6929ba50d3 @  283 : ba                Star10 
 4879 E> 0x1b6929ba50d4 @  284 : 2d f0 15 46       GetNamedProperty r10, [21], [70]
         0x1b6929ba50d8 @  288 : bb                Star9 
         0x1b6929ba50d9 @  289 : 13 1d             LdaConstant [29]
         0x1b6929ba50db @  291 : b9                Star11 
 4880 E> 0x1b6929ba50dc @  292 : 5e f1 f0 ef 48    CallProperty1 r9, r10, r11, [72]
         0x1b6929ba50e1 @  297 : bb                Star9 
 4897 E> 0x1b6929ba50e2 @  298 : 2d f1 15 4a       GetNamedProperty r9, [21], [74]
         0x1b6929ba50e6 @  302 : bc                Star8 
         0x1b6929ba50e7 @  303 : 13 11             LdaConstant [17]
         0x1b6929ba50e9 @  305 : ba                Star10 
 4898 E> 0x1b6929ba50ea @  306 : 5e f2 f1 f0 4c    CallProperty1 r8, r9, r10, [76]
         0x1b6929ba50ef @  311 : bc                Star8 
 4918 E> 0x1b6929ba50f0 @  312 : 2d f2 15 4e       GetNamedProperty r8, [21], [78]
         0x1b6929ba50f4 @  316 : bd                Star7 
         0x1b6929ba50f5 @  317 : 13 1e             LdaConstant [30]
         0x1b6929ba50f7 @  319 : bb                Star9 
 4919 E> 0x1b6929ba50f8 @  320 : 5e f3 f2 f1 50    CallProperty1 r7, r8, r9, [80]
         0x1b6929ba50fd @  325 : bd                Star7 
 4942 E> 0x1b6929ba50fe @  326 : 2d f3 1f 52       GetNamedProperty r7, [31], [82]
         0x1b6929ba5102 @  330 : be                Star6 
         0x1b6929ba5103 @  331 : 13 1e             LdaConstant [30]
         0x1b6929ba5105 @  333 : bc                Star8 
         0x1b6929ba5106 @  334 : 13 20             LdaConstant [32]
         0x1b6929ba5108 @  336 : bb                Star9 
 4943 E> 0x1b6929ba5109 @  337 : 5f f4 f3 f2 f1 54 CallProperty2 r6, r7, r8, r9, [84]
         0x1b6929ba510f @  343 : be                Star6 
 5040 E> 0x1b6929ba5110 @  344 : 2d f4 12 56       GetNamedProperty r6, [18], [86]
         0x1b6929ba5114 @  348 : bf                Star5 
         0x1b6929ba5115 @  349 : 11                LdaTrue 
         0x1b6929ba5116 @  350 : bd                Star7 
 5041 E> 0x1b6929ba5117 @  351 : 5e f5 f4 f3 58    CallProperty1 r5, r6, r7, [88]
         0x1b6929ba511c @  356 : bf                Star5 
 5055 E> 0x1b6929ba511d @  357 : 2d f5 21 5a       GetNamedProperty r5, [33], [90]
         0x1b6929ba5121 @  361 : c0                Star4 
 5056 E> 0x1b6929ba5122 @  362 : 5d f6 f5 5c       CallProperty0 r4, r5, [92]
 3341 E> 0x1b6929ba5126 @  366 : 25 04             StaCurrentContextSlot [4]
 5069 S> 0x1b6929ba5128 @  368 : 80 22 01 02       CreateClosure [34], [1], #2
         0x1b6929ba512c @  372 : bf                Star5 
 6627 E> 0x1b6929ba512d @  373 : 61 f5 5e          CallUndefinedReceiver0 r5, [94]
         0x1b6929ba5130 @  376 : bf                Star5 
 6629 E> 0x1b6929ba5131 @  377 : 2d f5 23 60       GetNamedProperty r5, [35], [96]
         0x1b6929ba5135 @  381 : c0                Star4 
         0x1b6929ba5136 @  382 : 80 24 02 02       CreateClosure [36], [2], #2
         0x1b6929ba513a @  386 : be                Star6 
 6635 E> 0x1b6929ba513b @  387 : 5e f6 f5 f4 62    CallProperty1 r4, r5, r6, [98]
         0x1b6929ba5140 @  392 : 0e                LdaUndefined 
 6874 S> 0x1b6929ba5141 @  393 : a9                Return 
Constant pool (size = 37)
0x1b6929ba5149: [FixedArray] in OldSpace
 - map: 0x25c20d0412e1 <Map>
 - length: 37
           0: 0x1b6929ba5281 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1b6929ba5349 <String[15]: #__importDefault>
           2: 0x1b6929ba5369 <SharedFunctionInfo>
           3: 0x25c20d045ab9 <String[6]: #Object>
           4: 0x25c20d044c11 <String[14]: #defineProperty>
           5: 0x1b6929ba5421 <String[10]: #__esModule>
           6: 0x1b6929ba65e9 <ObjectBoilerplateDescription[3]>
           7: 0x1b6929ba6611 <String[16]: #@blitz/challenge>
           8: 0x1b6929ba6631 <String[13]: #@blitz/engine>
           9: 0x1b6929ba6651 <String[5]: #yargs>
          10: 0x1b6929ba6669 <String[2823]: #...<truncated>>>
          11: 0x25c20d044bf9 <String[7]: #default>
          12: 0x25b166d01939 <String[7]: #process>
          13: 0x108623771881 <String[4]: #argv>
          14: 0x25b166d07319 <String[5]: #slice>
          15: 0x25b166d0cbb9 <String[7]: #options>
          16: 0x1b6929ba71c9 <ObjectBoilerplateDescription[27]>
          17: 0x25b166d19699 <String[7]: #version>
          18: 0x25b166d22b81 <String[3]: #env>
          19: 0x1b6929ba77d9 <String[7]: #VERSION>
          20: 0x1b6929ba77f1 <String[3]: #DEV>
          21: 0x1b6929ba7809 <String[4]: #hide>
          22: 0x1b6929ba5ed1 <String[18]: #gameStartTimeoutMs>
          23: 0x1b6929ba5fb1 <String[10]: #recordPath>
          24: 0x1b6929ba6119 <String[8]: #s3Bucket>
          25: 0x1b6929ba6131 <String[6]: #s3Path>
          26: 0x1b6929ba1811 <String[9]: #keepAlive>
          27: 0x1b6929ba5fd1 <String[16]: #teamNamesByToken>
          28: 0x1b6929ba6041 <String[7]: #serveUi>
          29: 0x25b166d19081 <String[4]: #port>
          30: 0x1b6929ba5cc1 <String[10]: #randomSeed>
          31: 0x1b6929ba7821 <String[5]: #alias>
          32: 0x1b6929ba7839 <String[7]: #mapName>
          33: 0x1b6929ba7851 <String[9]: #parseSync>
          34: 0x1b6929ba5601 <SharedFunctionInfo>
          35: 0x25b166d1b5c9 <String[5]: #catch>
          36: 0x1b6929ba63a1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 140)
0x1b6929ba7889 <ByteArray[140]>
0x1b6929ba5369 points to: [0x1b6929ba53d8]
=== [0x1b6929ba53d8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  153 S> 0x1b6929ba53d8 @    0 : 0b 03             Ldar a0
         0x1b6929ba53da @    2 : 97 0c             JumpIfToBooleanFalse [12] (0x1b6929ba53e6 @ 14)
  172 E> 0x1b6929ba53dc @    4 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1b6929ba53e0 @    8 : 97 06             JumpIfToBooleanFalse [6] (0x1b6929ba53e6 @ 14)
         0x1b6929ba53e2 @   10 : 0b 03             Ldar a0
         0x1b6929ba53e4 @   12 : 8a 0f             Jump [15] (0x1b6929ba53f3 @ 27)
  186 E> 0x1b6929ba53e6 @   14 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
         0x1b6929ba53ea @   18 : c4                Star0 
         0x1b6929ba53eb @   19 : 0b 03             Ldar a0
  205 E> 0x1b6929ba53ed @   21 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x1b6929ba53f1 @   25 : 0b fa             Ldar r0
  211 S> 0x1b6929ba53f3 @   27 : a9                Return 
Constant pool (size = 3)
0x1b6929ba53f9: [FixedArray] in OldSpace
 - map: 0x25c20d0412e1 <Map>
 - length: 3
           0: 0x1b6929ba5421 <String[10]: #__esModule>
           1: 0x1b6929ba5441 <ObjectBoilerplateDescription[3]>
           2: 0x25c20d044bf9 <String[7]: #default>
Handler Table (size = 0)
Source Position Table (size = 13)
0x1b6929ba5469 <ByteArray[13]>
Object boilerplate at 0x1b6929ba5441: 
0x1b6929ba5441: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x25c20d044bf9 <String[7]: #default>
           2: 0x25c20d041501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x1b6929ba65e9: 
0x1b6929ba65e9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x25c20d046419 <String[5]: #value>
           2: 0x25c20d041729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x1b6929ba71c9: 
0x1b6929ba71c9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 27
           0: 8
           1: 0x1b6929ba5eb1 <String[13]: #timePerTickMs>
           2: 0x1b6929ba72b1 <ObjectBoilerplateDescription[7]>
           3: 0x1b6929ba5ef9 <String[19]: #delayBetweenTicksMs>
           4: 0x1b6929ba7351 <ObjectBoilerplateDescription[7]>
           5: 0x1b6929ba5ed1 <String[18]: #gameStartTimeoutMs>
           6: 0x1b6929ba73c9 <ObjectBoilerplateDescription[7]>
           7: 0x1b6929ba5fb1 <String[10]: #recordPath>
           8: 0x1b6929ba7441 <ObjectBoilerplateDescription[5]>
           9: 0x1b6929ba5cc1 <String[10]: #randomSeed>
          10: 0x1b6929ba74a9 <ObjectBoilerplateDescription[3]>
          11: 0x1b6929ba6119 <String[8]: #s3Bucket>
          12: 0x1b6929ba74d1 <ObjectBoilerplateDescription[3]>
          13: 0x1b6929ba6131 <String[6]: #s3Path>
          14: 0x1b6929ba74f9 <ObjectBoilerplateDescription[3]>
          15: 0x1b6929ba1811 <String[9]: #keepAlive>
          16: 0x1b6929ba7521 <ObjectBoilerplateDescription[7]>
          17: 0x1b6929ba5fd1 <String[16]: #teamNamesByToken>
          18: 0x1b6929ba75b9 <ObjectBoilerplateDescription[3]>
          19: 0x1b6929ba6021 <String[14]: #teamIdsByToken>
          20: 0x1b6929ba75e1 <ObjectBoilerplateDescription[3]>
          21: 0x1b6929ba6041 <String[7]: #serveUi>
          22: 0x1b6929ba7609 <ObjectBoilerplateDescription[5]>
          23: 0x25b166d19081 <String[4]: #port>
          24: 0x1b6929ba7641 <ObjectBoilerplateDescription[7]>
          25: 0x1b6929ba5a81 <String[9]: #heartbeat>
          26: 0x1b6929ba76b9 <ObjectBoilerplateDescription[5]>
[start ObjectBoilerplate nested objects]
0x1b6929ba72b1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 7
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d045a81 <String[6]: #number>
           3: 0x25c20d044bf9 <String[7]: #default>
           4: 1000
           5: 0x25b166d1aef1 <String[11]: #description>
           6: 0x1b6929ba7319 <String[38]: #Max time the game will wait for a tick>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba7351: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 7
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d045a81 <String[6]: #number>
           3: 0x25c20d044bf9 <String[7]: #default>
           4: 50
           5: 0x25b166d1aef1 <String[11]: #description>
           6: 0x1b6929ba7399 <String[26]: #Time to wait between ticks>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba73c9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 7
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d045a81 <String[6]: #number>
           3: 0x25c20d044bf9 <String[7]: #default>
           4: 500000
           5: 0x25b166d1aef1 <String[11]: #description>
           6: 0x1b6929ba7411 <String[30]: #Delay before starting the game>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba7441: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 5
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d046159 <String[6]: #string>
           3: 0x25b166d1aef1 <String[11]: #description>
           4: 0x1b6929ba7479 <String[29]: #File path to record replay to>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba74a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d046159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba74d1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d046159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba74f9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d046159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba7521: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 7
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d041771 <String[7]: #boolean>
           3: 0x25c20d044bf9 <String[7]: #default>
           4: 0x25c20d041729 <true>
           5: 0x25b166d1aef1 <String[11]: #description>
           6: 0x1b6929ba7569 <String[59]: #Indicates if the game should close or restart on completion>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba75b9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d046159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba75e1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d046159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba7609: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 5
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d041771 <String[7]: #boolean>
           3: 0x25c20d044bf9 <String[7]: #default>
           4: 0x25c20d041729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba7641: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 7
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d045a81 <String[6]: #number>
           3: 0x25b166d1aef1 <String[11]: #description>
           4: 0x1b6929ba7689 <String[30]: #The port of the server backend>
           5: 0x25c20d044bf9 <String[7]: #default>
           6: 8765
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba76b9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 5
           0: 8
           1: 0x25c20d044469 <String[4]: #type>
           2: 0x25c20d041771 <String[7]: #boolean>
           3: 0x25b166d1aef1 <String[11]: #description>
           4: 0x1b6929ba76f1 <String[165]: #When running with this option, sends a heartbeat to an already running server on localhost and exits. If successful, exit with 0, otherwise, exit with non-zero code.>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba5601 points to: [0x1b6929ba5670]
=== [0x1b6929ba5670] DISASSEMBLY ===
Parameter count 1
Register count 13
Frame size 104
OSR urgency: 0
Bytecode age: 0
         0x1b6929ba5670 @    0 : ae fa 00 03       SwitchOnGeneratorState r0, [0], [3] { 0: @88, 1: @377, 2: @609 }
         0x1b6929ba5674 @    4 : 19 fe f4          Mov <closure>, r6
         0x1b6929ba5677 @    7 : 19 02 f3          Mov <this>, r7
 5070 E> 0x1b6929ba567a @   10 : 68 02 f4 02       InvokeIntrinsic [_AsyncFunctionEnter], r6-r7
         0x1b6929ba567e @   14 : c4                Star0 
         0x1b6929ba567f @   15 : 19 ff f4          Mov <context>, r6
 5088 S> 0x1b6929ba5682 @   18 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x1b6929ba5684 @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5686 @   22 : bd                Star7 
 5097 E> 0x1b6929ba5687 @   23 : 2d f3 04 00       GetNamedProperty r7, [4], [0]
         0x1b6929ba568b @   27 : 97 5e             JumpIfToBooleanFalse [94] (0x1b6929ba56e9 @ 121)
 5118 S> 0x1b6929ba568d @   29 : 21 05 02          LdaGlobal [5], [2]
         0x1b6929ba5690 @   32 : bc                Star8 
 5126 E> 0x1b6929ba5691 @   33 : 2d f2 06 04       GetNamedProperty r8, [6], [4]
         0x1b6929ba5695 @   37 : bd                Star7 
         0x1b6929ba5696 @   38 : 17 03             LdaImmutableCurrentContextSlot [3]
 5138 E> 0x1b6929ba5698 @   40 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1b6929ba569a @   42 : ba                Star10 
 5147 E> 0x1b6929ba569b @   43 : 2d f0 08 06       GetNamedProperty r10, [8], [6]
         0x1b6929ba569f @   47 : ba                Star10 
 5154 E> 0x1b6929ba56a0 @   48 : 2d f0 04 08       GetNamedProperty r10, [4], [8]
         0x1b6929ba56a4 @   52 : bb                Star9 
         0x1b6929ba56a5 @   53 : 13 09             LdaConstant [9]
         0x1b6929ba56a7 @   55 : b9                Star11 
         0x1b6929ba56a8 @   56 : 17 04             LdaImmutableCurrentContextSlot [4]
 5184 E> 0x1b6929ba56aa @   58 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba56ac @   60 : b8                Star12 
 5189 E> 0x1b6929ba56ad @   61 : 2d ee 0a 0b       GetNamedProperty r12, [10], [11]
         0x1b6929ba56b1 @   65 : 77                ToString 
         0x1b6929ba56b2 @   66 : 39 ef 0a          Add r11, [10]
         0x1b6929ba56b5 @   69 : b9                Star11 
 5154 E> 0x1b6929ba56b6 @   70 : 5e f1 f0 ef 0d    CallProperty1 r9, r10, r11, [13]
         0x1b6929ba56bb @   75 : ba                Star10 
         0x1b6929ba56bc @   76 : 19 fa f1          Mov r0, r9
         0x1b6929ba56bf @   79 : 68 01 f1 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r9-r10
 5132 E> 0x1b6929ba56c3 @   83 : af fa fa 09 00    SuspendGenerator r0, r0-r8, [0]
         0x1b6929ba56c8 @   88 : b0 fa fa 09       ResumeGenerator r0, r0-r8
         0x1b6929ba56cc @   92 : bb                Star9 
         0x1b6929ba56cd @   93 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x1b6929ba56d1 @   97 : ba                Star10 
         0x1b6929ba56d2 @   98 : 0c                LdaZero 
         0x1b6929ba56d3 @   99 : 1c f0             TestReferenceEqual r10
         0x1b6929ba56d5 @  101 : 98 05             JumpIfTrue [5] (0x1b6929ba56da @ 106)
         0x1b6929ba56d7 @  103 : 0b f1             Ldar r9
         0x1b6929ba56d9 @  105 : a8                ReThrow 
         0x1b6929ba56da @  106 : 0b f1             Ldar r9
         0x1b6929ba56dc @  108 : 97 05             JumpIfToBooleanFalse [5] (0x1b6929ba56e1 @ 113)
         0x1b6929ba56de @  110 : 0c                LdaZero 
         0x1b6929ba56df @  111 : 8a 04             Jump [4] (0x1b6929ba56e3 @ 115)
         0x1b6929ba56e1 @  113 : 0d 01             LdaSmi [1]
         0x1b6929ba56e3 @  115 : bb                Star9 
 5126 E> 0x1b6929ba56e4 @  116 : 5e f3 f2 f1 0f    CallProperty1 r7, r8, r9, [15]
 5246 S> 0x1b6929ba56e9 @  121 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1b6929ba56eb @  123 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1b6929ba56ed @  125 : bd                Star7 
 5259 E> 0x1b6929ba56ee @  126 : 2d f3 0b 11       GetNamedProperty r7, [11], [17]
         0x1b6929ba56f2 @  130 : bd                Star7 
         0x1b6929ba56f3 @  131 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x1b6929ba56f7 @  135 : bc                Star8 
         0x1b6929ba56f8 @  136 : 7c 0d 13 29       CreateObjectLiteral [13], [19], #41
         0x1b6929ba56fc @  140 : bb                Star9 
         0x1b6929ba56fd @  141 : 17 04             LdaImmutableCurrentContextSlot [4]
 5482 E> 0x1b6929ba56ff @  143 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5701 @  145 : ba                Star10 
 5487 E> 0x1b6929ba5702 @  146 : 2d f0 0e 14       GetNamedProperty r10, [14], [20]
         0x1b6929ba5706 @  150 : 33 f1 0f 16       DefineNamedOwnProperty r9, [15], [22]
         0x1b6929ba570a @  154 : 17 04             LdaImmutableCurrentContextSlot [4]
 5547 E> 0x1b6929ba570c @  156 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba570e @  158 : ba                Star10 
 5552 E> 0x1b6929ba570f @  159 : 2d f0 10 18       GetNamedProperty r10, [16], [24]
         0x1b6929ba5713 @  163 : 33 f1 11 1a       DefineNamedOwnProperty r9, [17], [26]
         0x1b6929ba5717 @  167 : 17 04             LdaImmutableCurrentContextSlot [4]
 5643 E> 0x1b6929ba5719 @  169 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba571b @  171 : ba                Star10 
 5648 E> 0x1b6929ba571c @  172 : 2d f0 12 1c       GetNamedProperty r10, [18], [28]
         0x1b6929ba5720 @  176 : 33 f1 13 1e       DefineNamedOwnProperty r9, [19], [30]
         0x1b6929ba5724 @  180 : 0b f3             Ldar r7
 5246 E> 0x1b6929ba5726 @  182 : 69 f3 f2 02 20    Construct r7, r8-r9, [32]
         0x1b6929ba572b @  187 : c3                Star1 
 5706 S> 0x1b6929ba572c @  188 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1b6929ba572e @  190 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1b6929ba5730 @  192 : bc                Star8 
 5715 E> 0x1b6929ba5731 @  193 : 2d f2 14 22       GetNamedProperty r8, [20], [34]
         0x1b6929ba5735 @  197 : bc                Star8 
 5724 E> 0x1b6929ba5736 @  198 : 2d f2 15 24       GetNamedProperty r8, [21], [36]
         0x1b6929ba573a @  202 : bd                Star7 
 5742 E> 0x1b6929ba573b @  203 : 7c 16 26 29       CreateObjectLiteral [22], [38], #41
         0x1b6929ba573f @  207 : ba                Star10 
         0x1b6929ba5740 @  208 : 17 04             LdaImmutableCurrentContextSlot [4]
 5791 E> 0x1b6929ba5742 @  210 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5744 @  212 : b9                Star11 
 5796 E> 0x1b6929ba5745 @  213 : 2d ef 17 27       GetNamedProperty r11, [23], [39]
         0x1b6929ba5749 @  217 : 55                ToBooleanLogicalNot 
         0x1b6929ba574a @  218 : 56                LogicalNot 
         0x1b6929ba574b @  219 : 33 f0 18 29       DefineNamedOwnProperty r10, [24], [41]
 5724 E> 0x1b6929ba574f @  223 : 5f f3 f2 f9 f0 2b CallProperty2 r7, r8, r1, r10, [43]
         0x1b6929ba5755 @  229 : c2                Star2 
 5853 S> 0x1b6929ba5756 @  230 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x1b6929ba5758 @  232 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba575a @  234 : bd                Star7 
 5858 E> 0x1b6929ba575b @  235 : 2d f3 19 2d       GetNamedProperty r7, [25], [45]
         0x1b6929ba575f @  239 : 97 1c             JumpIfToBooleanFalse [28] (0x1b6929ba577b @ 267)
 5877 E> 0x1b6929ba5761 @  241 : 21 1a 2f          LdaGlobal [26], [47]
         0x1b6929ba5764 @  244 : bc                Star8 
 5882 E> 0x1b6929ba5765 @  245 : 2d f2 1b 31       GetNamedProperty r8, [27], [49]
         0x1b6929ba5769 @  249 : bd                Star7 
         0x1b6929ba576a @  250 : 17 04             LdaImmutableCurrentContextSlot [4]
 5888 E> 0x1b6929ba576c @  252 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba576e @  254 : bb                Star9 
 5893 E> 0x1b6929ba576f @  255 : 2d f1 19 2d       GetNamedProperty r9, [25], [45]
         0x1b6929ba5773 @  259 : bb                Star9 
 5882 E> 0x1b6929ba5774 @  260 : 5e f3 f2 f1 33    CallProperty1 r7, r8, r9, [51]
         0x1b6929ba5779 @  265 : 8a 03             Jump [3] (0x1b6929ba577c @ 268)
         0x1b6929ba577b @  267 : 0f                LdaNull 
         0x1b6929ba577c @  268 : c1                Star3 
 5950 S> 0x1b6929ba577d @  269 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x1b6929ba577f @  271 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5781 @  273 : bd                Star7 
 5955 E> 0x1b6929ba5782 @  274 : 2d f3 1c 35       GetNamedProperty r7, [28], [53]
         0x1b6929ba5786 @  278 : 97 1c             JumpIfToBooleanFalse [28] (0x1b6929ba57a2 @ 306)
 5972 E> 0x1b6929ba5788 @  280 : 21 1a 2f          LdaGlobal [26], [47]
         0x1b6929ba578b @  283 : bc                Star8 
 5977 E> 0x1b6929ba578c @  284 : 2d f2 1b 31       GetNamedProperty r8, [27], [49]
         0x1b6929ba5790 @  288 : bd                Star7 
         0x1b6929ba5791 @  289 : 17 04             LdaImmutableCurrentContextSlot [4]
 5983 E> 0x1b6929ba5793 @  291 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5795 @  293 : bb                Star9 
 5988 E> 0x1b6929ba5796 @  294 : 2d f1 1c 35       GetNamedProperty r9, [28], [53]
         0x1b6929ba579a @  298 : bb                Star9 
 5977 E> 0x1b6929ba579b @  299 : 5e f3 f2 f1 37    CallProperty1 r7, r8, r9, [55]
         0x1b6929ba57a0 @  304 : 8a 03             Jump [3] (0x1b6929ba57a3 @ 307)
         0x1b6929ba57a2 @  306 : 0f                LdaNull 
         0x1b6929ba57a3 @  307 : c0                Star4 
 6035 S> 0x1b6929ba57a4 @  308 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1b6929ba57a6 @  310 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1b6929ba57a8 @  312 : bd                Star7 
 6048 E> 0x1b6929ba57a9 @  313 : 2d f3 08 06       GetNamedProperty r7, [8], [6]
         0x1b6929ba57ad @  317 : bd                Star7 
         0x1b6929ba57ae @  318 : 17 04             LdaImmutableCurrentContextSlot [4]
 6063 E> 0x1b6929ba57b0 @  320 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba57b2 @  322 : bb                Star9 
 6068 E> 0x1b6929ba57b3 @  323 : 2d f1 0a 0b       GetNamedProperty r9, [10], [11]
         0x1b6929ba57b7 @  327 : bb                Star9 
         0x1b6929ba57b8 @  328 : 17 04             LdaImmutableCurrentContextSlot [4]
 6074 E> 0x1b6929ba57ba @  330 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba57bc @  332 : ba                Star10 
 6079 E> 0x1b6929ba57bd @  333 : 2d f0 1d 39       GetNamedProperty r10, [29], [57]
         0x1b6929ba57c1 @  337 : ba                Star10 
         0x1b6929ba57c2 @  338 : 0b f3             Ldar r7
         0x1b6929ba57c4 @  340 : 19 f9 f2          Mov r1, r8
         0x1b6929ba57c7 @  343 : 19 f7 ef          Mov r3, r11
         0x1b6929ba57ca @  346 : 19 f6 ee          Mov r4, r12
 6035 E> 0x1b6929ba57cd @  349 : 69 f3 f2 05 3b    Construct r7, r8-r12, [59]
         0x1b6929ba57d2 @  354 : bf                Star5 
 6144 S> 0x1b6929ba57d3 @  355 : 2d f5 1e 3d       GetNamedProperty r5, [30], [61]
         0x1b6929ba57d7 @  359 : bd                Star7 
 6144 E> 0x1b6929ba57d8 @  360 : 5d f3 f5 3f       CallProperty0 r7, r5, [63]
         0x1b6929ba57dc @  364 : bc                Star8 
         0x1b6929ba57dd @  365 : 19 fa f3          Mov r0, r7
         0x1b6929ba57e0 @  368 : 68 01 f3 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r7-r8
 6131 E> 0x1b6929ba57e4 @  372 : af fa fa 07 01    SuspendGenerator r0, r0-r6, [1]
         0x1b6929ba57e9 @  377 : b0 fa fa 07       ResumeGenerator r0, r0-r6
         0x1b6929ba57ed @  381 : bd                Star7 
         0x1b6929ba57ee @  382 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x1b6929ba57f2 @  386 : bc                Star8 
         0x1b6929ba57f3 @  387 : 0c                LdaZero 
         0x1b6929ba57f4 @  388 : 1c f2             TestReferenceEqual r8
         0x1b6929ba57f6 @  390 : 98 05             JumpIfTrue [5] (0x1b6929ba57fb @ 395)
         0x1b6929ba57f8 @  392 : 0b f3             Ldar r7
         0x1b6929ba57fa @  394 : a8                ReThrow 
 6162 S> 0x1b6929ba57fb @  395 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1b6929ba57fd @  397 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1b6929ba57ff @  399 : bc                Star8 
 6171 E> 0x1b6929ba5800 @  400 : 2d f2 1f 41       GetNamedProperty r8, [31], [65]
         0x1b6929ba5804 @  404 : bc                Star8 
 6178 E> 0x1b6929ba5805 @  405 : 2d f2 20 43       GetNamedProperty r8, [32], [67]
         0x1b6929ba5809 @  409 : bd                Star7 
         0x1b6929ba580a @  410 : 13 21             LdaConstant [33]
         0x1b6929ba580c @  412 : bb                Star9 
 6178 E> 0x1b6929ba580d @  413 : 5e f3 f2 f1 45    CallProperty1 r7, r8, r9, [69]
 6223 S> 0x1b6929ba5812 @  418 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x1b6929ba5814 @  420 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5816 @  422 : bd                Star7 
 6232 E> 0x1b6929ba5817 @  423 : 2d f3 17 27       GetNamedProperty r7, [23], [39]
         0x1b6929ba581b @  427 : 97 3b             JumpIfToBooleanFalse [59] (0x1b6929ba5856 @ 486)
 6258 S> 0x1b6929ba581d @  429 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1b6929ba581f @  431 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1b6929ba5821 @  433 : bc                Star8 
 6267 E> 0x1b6929ba5822 @  434 : 2d f2 1f 41       GetNamedProperty r8, [31], [65]
         0x1b6929ba5826 @  438 : bc                Star8 
 6274 E> 0x1b6929ba5827 @  439 : 2d f2 20 47       GetNamedProperty r8, [32], [71]
         0x1b6929ba582b @  443 : bd                Star7 
         0x1b6929ba582c @  444 : 13 22             LdaConstant [34]
         0x1b6929ba582e @  446 : bb                Star9 
         0x1b6929ba582f @  447 : 17 04             LdaImmutableCurrentContextSlot [4]
 6303 E> 0x1b6929ba5831 @  449 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5833 @  451 : ba                Star10 
 6308 E> 0x1b6929ba5834 @  452 : 2d f0 17 27       GetNamedProperty r10, [23], [39]
         0x1b6929ba5838 @  456 : 77                ToString 
         0x1b6929ba5839 @  457 : 39 f1 49          Add r9, [73]
         0x1b6929ba583c @  460 : bb                Star9 
 6274 E> 0x1b6929ba583d @  461 : 5e f3 f2 f1 4a    CallProperty1 r7, r8, r9, [74]
 6344 S> 0x1b6929ba5842 @  466 : 2d f8 23 4c       GetNamedProperty r2, [35], [76]
         0x1b6929ba5846 @  470 : bd                Star7 
         0x1b6929ba5847 @  471 : 17 04             LdaImmutableCurrentContextSlot [4]
 6355 E> 0x1b6929ba5849 @  473 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba584b @  475 : bb                Star9 
 6360 E> 0x1b6929ba584c @  476 : 2d f1 17 27       GetNamedProperty r9, [23], [39]
         0x1b6929ba5850 @  480 : bb                Star9 
 6344 E> 0x1b6929ba5851 @  481 : 5e f3 f8 f1 4e    CallProperty1 r7, r2, r9, [78]
 6391 S> 0x1b6929ba5856 @  486 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x1b6929ba5858 @  488 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba585a @  490 : bd                Star7 
 6400 E> 0x1b6929ba585b @  491 : 2d f3 24 50       GetNamedProperty r7, [36], [80]
         0x1b6929ba585f @  495 : 97 86             JumpIfToBooleanFalse [134] (0x1b6929ba58e5 @ 629)
         0x1b6929ba5861 @  497 : 17 04             LdaImmutableCurrentContextSlot [4]
 6412 E> 0x1b6929ba5863 @  499 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5865 @  501 : bd                Star7 
 6417 E> 0x1b6929ba5866 @  502 : 2d f3 25 52       GetNamedProperty r7, [37], [82]
         0x1b6929ba586a @  506 : 97 7b             JumpIfToBooleanFalse [123] (0x1b6929ba58e5 @ 629)
 6439 S> 0x1b6929ba586c @  508 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1b6929ba586e @  510 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1b6929ba5870 @  512 : bc                Star8 
 6448 E> 0x1b6929ba5871 @  513 : 2d f2 1f 41       GetNamedProperty r8, [31], [65]
         0x1b6929ba5875 @  517 : bc                Star8 
 6455 E> 0x1b6929ba5876 @  518 : 2d f2 20 54       GetNamedProperty r8, [32], [84]
         0x1b6929ba587a @  522 : bd                Star7 
         0x1b6929ba587b @  523 : 13 26             LdaConstant [38]
         0x1b6929ba587d @  525 : bb                Star9 
         0x1b6929ba587e @  526 : 17 04             LdaImmutableCurrentContextSlot [4]
 6487 E> 0x1b6929ba5880 @  528 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5882 @  530 : ba                Star10 
 6492 E> 0x1b6929ba5883 @  531 : 2d f0 24 50       GetNamedProperty r10, [36], [80]
         0x1b6929ba5887 @  535 : 77                ToString 
         0x1b6929ba5888 @  536 : 39 f1 56          Add r9, [86]
         0x1b6929ba588b @  539 : bb                Star9 
         0x1b6929ba588c @  540 : 13 27             LdaConstant [39]
         0x1b6929ba588e @  542 : 39 f1 56          Add r9, [86]
         0x1b6929ba5891 @  545 : bb                Star9 
         0x1b6929ba5892 @  546 : 17 04             LdaImmutableCurrentContextSlot [4]
 6504 E> 0x1b6929ba5894 @  548 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5896 @  550 : ba                Star10 
 6509 E> 0x1b6929ba5897 @  551 : 2d f0 25 52       GetNamedProperty r10, [37], [82]
         0x1b6929ba589b @  555 : 77                ToString 
         0x1b6929ba589c @  556 : 39 f1 56          Add r9, [86]
         0x1b6929ba589f @  559 : bb                Star9 
 6455 E> 0x1b6929ba58a0 @  560 : 5e f3 f2 f1 57    CallProperty1 r7, r8, r9, [87]
 6547 S> 0x1b6929ba58a5 @  565 : 2d f8 28 59       GetNamedProperty r2, [40], [89]
         0x1b6929ba58a9 @  569 : bd                Star7 
         0x1b6929ba58aa @  570 : 17 04             LdaImmutableCurrentContextSlot [4]
 6556 E> 0x1b6929ba58ac @  572 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba58ae @  574 : bb                Star9 
 6561 E> 0x1b6929ba58af @  575 : 2d f1 24 50       GetNamedProperty r9, [36], [80]
         0x1b6929ba58b3 @  579 : bb                Star9 
         0x1b6929ba58b4 @  580 : 17 04             LdaImmutableCurrentContextSlot [4]
 6571 E> 0x1b6929ba58b6 @  582 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba58b8 @  584 : ba                Star10 
 6576 E> 0x1b6929ba58b9 @  585 : 2d f0 25 52       GetNamedProperty r10, [37], [82]
         0x1b6929ba58bd @  589 : ba                Star10 
 6547 E> 0x1b6929ba58be @  590 : 5f f3 f8 f1 f0 5b CallProperty2 r7, r2, r9, r10, [91]
         0x1b6929ba58c4 @  596 : bc                Star8 
         0x1b6929ba58c5 @  597 : 19 fa f3          Mov r0, r7
         0x1b6929ba58c8 @  600 : 68 01 f3 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r7-r8
 6532 E> 0x1b6929ba58cc @  604 : af fa fa 07 02    SuspendGenerator r0, r0-r6, [2]
         0x1b6929ba58d1 @  609 : b0 fa fa 07       ResumeGenerator r0, r0-r6
         0x1b6929ba58d5 @  613 : bd                Star7 
         0x1b6929ba58d6 @  614 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x1b6929ba58da @  618 : bc                Star8 
         0x1b6929ba58db @  619 : 0c                LdaZero 
         0x1b6929ba58dc @  620 : 1c f2             TestReferenceEqual r8
         0x1b6929ba58de @  622 : 98 05             JumpIfTrue [5] (0x1b6929ba58e3 @ 627)
         0x1b6929ba58e0 @  624 : 0b f3             Ldar r7
         0x1b6929ba58e2 @  626 : a8                ReThrow 
         0x1b6929ba58e3 @  627 : 0b f3             Ldar r7
 6613 S> 0x1b6929ba58e5 @  629 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x1b6929ba58e7 @  631 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba58e9 @  633 : bd                Star7 
 6613 E> 0x1b6929ba58ea @  634 : 2d f3 29 5d       GetNamedProperty r7, [41], [93]
         0x1b6929ba58ee @  638 : 97 08             JumpIfToBooleanFalse [8] (0x1b6929ba58f6 @ 646)
 5218 E> 0x1b6929ba58f0 @  640 : 00 89 08 02 00 00 JumpLoop.Wide [520], [0] (0x1b6929ba56e9 @ 121)
         0x1b6929ba58f6 @  646 : 0e                LdaUndefined 
         0x1b6929ba58f7 @  647 : bc                Star8 
         0x1b6929ba58f8 @  648 : 19 fa f3          Mov r0, r7
         0x1b6929ba58fb @  651 : 68 04 f3 02       InvokeIntrinsic [_AsyncFunctionResolve], r7-r8
 6625 S> 0x1b6929ba58ff @  655 : a9                Return 
         0x1b6929ba5900 @  656 : bd                Star7 
         0x1b6929ba5901 @  657 : 82 f3 2a          CreateCatchContext r7, [42]
         0x1b6929ba5904 @  660 : be                Star6 
         0x1b6929ba5905 @  661 : 10                LdaTheHole 
         0x1b6929ba5906 @  662 : a6                SetPendingMessage 
         0x1b6929ba5907 @  663 : 0b f4             Ldar r6
         0x1b6929ba5909 @  665 : 1a f3             PushContext r7
         0x1b6929ba590b @  667 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1b6929ba590d @  669 : bb                Star9 
         0x1b6929ba590e @  670 : 19 fa f2          Mov r0, r8
         0x1b6929ba5911 @  673 : 68 03 f2 02       InvokeIntrinsic [_AsyncFunctionReject], r8-r9
         0x1b6929ba5915 @  677 : a9                Return 
Constant pool (size = 43)
0x1b6929ba5919: [FixedArray] in OldSpace
 - map: 0x25c20d0412e1 <Map>
 - length: 43
           0: 88
           1: 377
           2: 609
           3: 0x25b166d17f81 <String[4]: #args>
           4: 0x1b6929ba5a81 <String[9]: #heartbeat>
           5: 0x25b166d01939 <String[7]: #process>
           6: 0x25b166d08cd9 <String[4]: #exit>
           7: 0x1b6929ba5319 <String[8]: #engine_1>
           8: 0x0bdb14c97c39 <String[6]: #Server>
           9: 0x1b6929ba5ae9 <String[17]: #http://localhost:>
          10: 0x25b166d19081 <String[4]: #port>
          11: 0x1b6929ba5b29 <String[6]: #Engine>
          12: 0x1b6929ba5b41 <SharedFunctionInfo>
          13: 0x1b6929ba5db1 <ObjectBoilerplateDescription[9]>
          14: 0x1b6929ba5eb1 <String[13]: #timePerTickMs>
          15: 0x1b6929ba5e09 <String[21]: #timeMsAllowedPerTicks>
          16: 0x1b6929ba5ed1 <String[18]: #gameStartTimeoutMs>
          17: 0x1b6929ba5e31 <String[31]: #maxWaitTimeMsBeforeStartingGame>
          18: 0x1b6929ba5ef9 <String[19]: #delayBetweenTicksMs>
          19: 0x1b6929ba5e89 <String[19]: #delayMsBetweenTicks>
          20: 0x1b6929ba5f21 <String[8]: #Recorder>
          21: 0x1b6929ba5f39 <String[17]: #createAndRegister>
          22: 0x1b6929ba5f61 <ObjectBoilerplateDescription[3]>
          23: 0x1b6929ba5fb1 <String[10]: #recordPath>
          24: 0x1b6929ba5f89 <String[23]: #keepAllCommandsAndTicks>
          25: 0x1b6929ba5fd1 <String[16]: #teamNamesByToken>
          26: 0x25b166d1c529 <String[4]: #JSON>
          27: 0x25b166d0cb31 <String[5]: #parse>
          28: 0x1b6929ba6021 <String[14]: #teamIdsByToken>
          29: 0x1b6929ba6041 <String[7]: #serveUi>
          30: 0x0bdb14c9bc41 <String[6]: #listen>
          31: 0x25b166d06461 <String[6]: #logger>
          32: 0x25b166d1c1f9 <String[4]: #info>
          33: 0x1b6929ba60a1 <String[27]: #Game finished, saving state>
          34: 0x1b6929ba60d1 <String[21]: #Saving state file to >
          35: 0x1b6929ba60f9 <String[10]: #saveToFile>
          36: 0x1b6929ba6119 <String[8]: #s3Bucket>
          37: 0x1b6929ba6131 <String[6]: #s3Path>
          38: 0x1b6929ba6149 <String[24]: #Saving state file to S3 >
          39: 0x25b166d01179 <String[1]: #/>
          40: 0x1b6929ba6189 <String[8]: #saveToS3>
          41: 0x1b6929ba1811 <String[9]: #keepAlive>
          42: 0x1b6929ba61c1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 656)  ->   656 (prediction=3, data=6)
Source Position Table (size = 212)
0x1b6929ba6219 <ByteArray[212]>
0x1b6929ba5b41 points to: [0x1b6929ba5bb0]
=== [0x1b6929ba5bb0] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 5292 S> 0x1b6929ba5bb0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1b6929ba5bb2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1b6929ba5bb4 @    4 : c4                Star0 
 5315 E> 0x1b6929ba5bb5 @    5 : 2d fa 01 00       GetNamedProperty r0, [1], [0]
         0x1b6929ba5bb9 @    9 : c4                Star0 
 5334 E> 0x1b6929ba5bba @   10 : 7c 02 02 29       CreateObjectLiteral [2], [2], #41
         0x1b6929ba5bbe @   14 : c2                Star2 
         0x1b6929ba5bbf @   15 : 17 04             LdaImmutableCurrentContextSlot [4]
 5373 E> 0x1b6929ba5bc1 @   17 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1b6929ba5bc3 @   19 : c1                Star3 
 5378 E> 0x1b6929ba5bc4 @   20 : 2d f7 04 03       GetNamedProperty r3, [4], [3]
         0x1b6929ba5bc8 @   24 : 19 03 f9          Mov a0, r1
         0x1b6929ba5bcb @   27 : 9e 04             JumpIfUndefinedOrNull [4] (0x1b6929ba5bcf @ 31)
         0x1b6929ba5bcd @   29 : 8a 19             Jump [25] (0x1b6929ba5be6 @ 54)
 5392 E> 0x1b6929ba5bcf @   31 : 21 05 05          LdaGlobal [5], [5]
         0x1b6929ba5bd2 @   34 : bf                Star5 
 5397 E> 0x1b6929ba5bd3 @   35 : 2d f5 06 07       GetNamedProperty r5, [6], [7]
         0x1b6929ba5bd7 @   39 : c0                Star4 
 5397 E> 0x1b6929ba5bd8 @   40 : 5d f6 f5 09       CallProperty0 r4, r5, [9]
         0x1b6929ba5bdc @   44 : c0                Star4 
 5405 E> 0x1b6929ba5bdd @   45 : 2d f6 07 0b       GetNamedProperty r4, [7], [11]
         0x1b6929ba5be1 @   49 : c1                Star3 
 5406 E> 0x1b6929ba5be2 @   50 : 5d f7 f6 0d       CallProperty0 r3, r4, [13]
         0x1b6929ba5be6 @   54 : 33 f8 08 0f       DefineNamedOwnProperty r2, [8], [15]
         0x1b6929ba5bea @   58 : 0b fa             Ldar r0
 5299 E> 0x1b6929ba5bec @   60 : 69 fa f9 02 11    Construct r0, r1-r2, [17]
 5433 S> 0x1b6929ba5bf1 @   65 : a9                Return 
Constant pool (size = 9)
0x1b6929ba5bf9: [FixedArray] in OldSpace
 - map: 0x25c20d0412e1 <Map>
 - length: 9
           0: 0x1b6929ba52f9 <String[11]: #challenge_1>
           1: 0x1b6929ba5c51 <String[18]: #Blitz2025Challenge>
           2: 0x1b6929ba5c79 <ObjectBoilerplateDescription[3]>
           3: 0x25b166d17f81 <String[4]: #args>
           4: 0x1b6929ba5cc1 <String[10]: #randomSeed>
           5: 0x25b166d1a991 <String[4]: #Math>
           6: 0x25b166d1aba1 <String[6]: #random>
           7: 0x25c20d0462b9 <String[8]: #toString>
           8: 0x1b6929ba5ca1 <String[11]: #RANDOM_SEED>
Handler Table (size = 0)
Source Position Table (size = 31)
0x1b6929ba5d11 <ByteArray[31]>
Object boilerplate at 0x1b6929ba5c79: 
0x1b6929ba5c79: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x1b6929ba5ca1 <String[11]: #RANDOM_SEED>
           2: 0x25c20d041501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x1b6929ba5db1: 
0x1b6929ba5db1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 9
           0: 8
           1: 0x1b6929ba5e09 <String[21]: #timeMsAllowedPerTicks>
           2: 0x25c20d041501 <Odd Oddball: uninitialized>
           3: 0x1b6929ba5e31 <String[31]: #maxWaitTimeMsBeforeStartingGame>
           4: 0x25c20d041501 <Odd Oddball: uninitialized>
           5: 0x1b6929ba5e61 <String[21]: #expectedNumberOfTeams>
           6: 1
           7: 0x1b6929ba5e89 <String[19]: #delayMsBetweenTicks>
           8: 0x25c20d041501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x1b6929ba5f61: 
0x1b6929ba5f61: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x25c20d042059 <Map>
 - length: 3
           0: 8
           1: 0x1b6929ba5f89 <String[23]: #keepAllCommandsAndTicks>
           2: 0x25c20d041501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1b6929ba63a1 points to: [0x1b6929ba6410]
=== [0x1b6929ba6410] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 6651 S> 0x1b6929ba6410 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
 6670 E> 0x1b6929ba6412 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1b6929ba6414 @    4 : c3                Star1 
 6679 E> 0x1b6929ba6415 @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
 6659 E> 0x1b6929ba6419 @    9 : 71 03 02          TestInstanceOf a0, [2]
         0x1b6929ba641c @   12 : 99 17             JumpIfFalse [23] (0x1b6929ba6433 @ 35)
 6704 S> 0x1b6929ba641e @   14 : 21 02 03          LdaGlobal [2], [3]
         0x1b6929ba6421 @   17 : c3                Star1 
 6712 E> 0x1b6929ba6422 @   18 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x1b6929ba6426 @   22 : c4                Star0 
 6720 E> 0x1b6929ba6427 @   23 : 2d 03 04 07       GetNamedProperty a0, [4], [7]
         0x1b6929ba642b @   27 : c2                Star2 
 6712 E> 0x1b6929ba642c @   28 : 5e fa f9 f8 09    CallProperty1 r0, r1, r2, [9]
         0x1b6929ba6431 @   33 : 8a 1a             Jump [26] (0x1b6929ba644b @ 59)
 6755 S> 0x1b6929ba6433 @   35 : 21 02 03          LdaGlobal [2], [3]
         0x1b6929ba6436 @   38 : c3                Star1 
 6763 E> 0x1b6929ba6437 @   39 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x1b6929ba643b @   43 : c4                Star0 
         0x1b6929ba643c @   44 : 13 05             LdaConstant [5]
         0x1b6929ba643e @   46 : c2                Star2 
         0x1b6929ba643f @   47 : 0b 03             Ldar a0
 6801 E> 0x1b6929ba6441 @   49 : 77                ToString 
         0x1b6929ba6442 @   50 : 39 f8 0b          Add r2, [11]
         0x1b6929ba6445 @   53 : c2                Star2 
 6763 E> 0x1b6929ba6446 @   54 : 5e fa f9 f8 0c    CallProperty1 r0, r1, r2, [12]
 6819 S> 0x1b6929ba644b @   59 : 21 06 0e          LdaGlobal [6], [14]
         0x1b6929ba644e @   62 : c3                Star1 
 6827 E> 0x1b6929ba644f @   63 : 2d f9 07 10       GetNamedProperty r1, [7], [16]
         0x1b6929ba6453 @   67 : c4                Star0 
         0x1b6929ba6454 @   68 : 0d 01             LdaSmi [1]
         0x1b6929ba6456 @   70 : c2                Star2 
 6827 E> 0x1b6929ba6457 @   71 : 5e fa f9 f8 12    CallProperty1 r0, r1, r2, [18]
         0x1b6929ba645c @   76 : 0e                LdaUndefined 
 6836 S> 0x1b6929ba645d @   77 : a9                Return 
Constant pool (size = 8)
0x1b6929ba6461: [FixedArray] in OldSpace
 - map: 0x25c20d0412e1 <Map>
 - length: 8
           0: 0x1b6929ba5319 <String[8]: #engine_1>
           1: 0x1b6929ba64b1 <String[13]: #ArgumentError>
           2: 0x25c20d044a09 <String[7]: #console>
           3: 0x25b166d0ac99 <String[3]: #log>
           4: 0x25c20d045721 <String[7]: #message>
           5: 0x1b6929ba64e9 <String[31]: #Something went terribly wrong! >
           6: 0x25b166d01939 <String[7]: #process>
           7: 0x25b166d08cd9 <String[4]: #exit>
Handler Table (size = 0)
Source Position Table (size = 41)
0x1b6929ba6519 <ByteArray[41]>
<< OUTPUTTING DISASSEMBLY END >>
