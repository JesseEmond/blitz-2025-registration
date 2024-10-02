function func_unknown()
{
    r0 = func_unknown_0000008E8241DD69
    return func_unknown_0000008E8241DD69
}
function func_unknown_0000008E8241DD69(a0, a1, a2, a3, a4)
{
    r1 = Scope[0]
    Scope[1][2] = null
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["Random"] = undefined
    Scope[1][2] = a1("seedrandom")
    r3 = DefineClass([4, DescriptorArray[4], NumberDictionary[7], [], DescriptorArray[2], NumberDictionary[7], []], func_Random_0000008E8241E0D1, null, func_random_0000008E8241E329)
    a0["Random"] = func_Random_0000008E8241E0D1
    return undefined
}
function func_random_0000008E8241E329()
{
    r0 = this["rng"]
    return r0()
}
function func_Random_0000008E8241E0D1(a0)
{
    r2 = a0["toString"]()
    this["rng"] = Scope[1][2](r2)
    return undefined
}
