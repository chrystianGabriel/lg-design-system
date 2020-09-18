import { storiesOf } from '@storybook/vue';
import InputText from './InputText.vue';

storiesOf('InputText', module)
.add('padrão', () => ({
    components: { InputText },
    template: '<InputText/>'
}))