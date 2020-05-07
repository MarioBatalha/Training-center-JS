class App{
    constructor(){
        this.repository = [];

        this.formEl = document.getElementsByClassName('repo-form');
        this.listEl = document.getElementsByClassName('repo-list');


        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.onsubmit = event => addRepository(event);
    }
    addRepository(event){
        this.preventDefault();

        this.repositories.push({
            name: 'dhdfhdfh',
            description: 'dhdhfdh',
            avatar_url: 'hhdshhsfh',
            html_url: 'hfdhsdjfh'
        });

        this.render();
    }
    render(){
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
           let imgEl = document.createElement('img') 
           imgEl.setAttribute('src', repo.avatar_url)

           let titleEl = document.createElement('img') 
           titleEl.appendChild(document.createTextNode(repo.name));

           let descriptionEl = document.createElement('p') 
           descriptionEl.appendChild(document.createTextNode(repo.description));

           let linkEl = documen.createElement(a);
           linkEl.setAttribute('target', '_blank');
           linkEl.appendChild(document.createTextNode('acessar'));

           let listItemEl = document.createElement('li');
           listItemEl.appendChild(imgEl);
           listItemEl.appendChild(titleEl);
           listItemEl.appendChild(descriptionEl);
           listItemEl.appendChild(linkEl);

           this.listEl.appendChild(listItemEl)
        });
    }
}
new App();
