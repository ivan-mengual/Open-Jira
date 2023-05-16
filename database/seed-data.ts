interface SeedData {
  entries: SeedEntry[]
}


interface SeedEntry{
  description:string
  status:string
  createdAt: number
}


export const seedData = {
  entries: [
    {
      description:'pending: Esto es un ejercicio',
      status:'pending',
      createdAt:Date.now()
    },
    {
      description:'in-progress: Esto es un ejercicio',
      status:'in-progress',
      createdAt:Date.now()-1000000
    },
    {
      description:'finished: Esto es un ejercicio',
      status:'finished',
      createdAt:Date.now()-100000
    }
  ]
}
