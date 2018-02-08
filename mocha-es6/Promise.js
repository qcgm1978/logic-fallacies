const main = async (paramsA, paramsB, paramsC) => {  
    const resA = await apiA.create(paramsA)
    const resB = await apiB.delete(paramsB)
    const resC = await apiC.update(paramsC)
  
    return { resA, resB, resC }
  }