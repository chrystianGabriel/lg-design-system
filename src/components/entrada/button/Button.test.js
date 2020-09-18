import { shallowMount } from '@vue/test-utils';
import { Button } from './Button.vue';

test('lg-aa-botao - Teste de texto', () => {
    const componente = shallowMount(Button);

    componente.setProps({ texto: 'teste' });

    expect(componente.props('texto')).toEqual('teste');
})
