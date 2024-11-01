const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.aeddEventListener('click', function(){
        consut atual = document.querySelector('.ativo';)
        consut proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementBuId(proximoPasso).classListe.add('ativo');
    })
})