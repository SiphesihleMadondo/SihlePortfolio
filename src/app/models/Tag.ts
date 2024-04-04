export class Tag{
     
    //creating the new tags
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred');
    static readonly CSHARP = new Tag('C#','green');
    static readonly ASPNETCORE = new Tag('ASP.NET Core','purple');
    static readonly NODEJS = new Tag('Node.JS','brown');
    static readonly JAVASCRIPT = new Tag('JavaScript','orange');
    static readonly AZURE = new Tag('Microsoft Azure','blue');
    static readonly PHP = new Tag('PHP Laravel', 'pink');
    
    private constructor(private readonly key: string, public readonly color: string) {
       
    }

    toString(){
        return this.key;
    }
}