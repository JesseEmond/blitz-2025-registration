function func_unknown()
{
    r0 = func_unknown_00000209C341DD69
    return func_unknown_00000209C341DD69
}
function func_unknown_00000209C341DD69(a0, a1, a2, a3, a4)
{
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["StraightAheadThreat"] = undefined
    r0 = a1("./threat")
    r3 = DefineClass([4, DescriptorArray[4], NumberDictionary[7], [], DescriptorArray[2], NumberDictionary[7], []], func_StraightAheadThreat_00000209C341E099, r0["Threat"], func_get_next_move_00000209C341E2C9)
    a0["StraightAheadThreat"] = func_StraightAheadThreat_00000209C341E099
    return undefined
}
function func_get_next_move_00000209C341E2C9()
{
    r1 = Scope[0]
    Scope[1][2] = this
    r0 = Scope[1][2]["getPossibleDirections"]()
    r3 = Scope[1][2]["getPossibleDirections"]()
    if (!r3["find"](func_unknown_00000209C341E489) == undefined)
    {
        return Scope[1][2]["direction"]
    }
    return r0["Math"["floor"]((Scope[1][2]["randomNumber"] * r0["length"]))]
}
function func_unknown_00000209C341E489(a0)
{
    return a0 === Scope[1][2]["direction"]
}
function func_StraightAheadThreat_00000209C341E099(a0, a1, a2, a3)
{
    ACCU = <closure>
    r3 = supper
    ACCU = r0
    r4 = a0
    r5 = a1
    r6 = a2
    r7 = a3
    r8 = r3(r4, r5, r6, r7)
    ACCU = this
    this = r8
    return this
}
