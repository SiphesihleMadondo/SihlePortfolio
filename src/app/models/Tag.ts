export class Tag{
     
    //creating the new tags
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly REACT = new Tag('React','blue');
    static readonly MVC = new Tag('MVC','lightblue');
    static readonly MVVM = new Tag('MVVM','lightgreen');
    static readonly HTML = new Tag('HTML5','orange');
    static readonly CSS = new Tag('CSS3','purple');
    static readonly BOOTSTRAP = new Tag('Bootstrap','pink');
    static readonly SQL = new Tag('SQL','yellow');
    static readonly RAZOR = new Tag('Razor','lightgrey');
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