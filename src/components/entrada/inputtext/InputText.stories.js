import { storiesOf } from '@storybook/vue';
import InputText from './InputText.vue';

storiesOf('InputText', module)
.add('Primário', () => ({
    components: { InputText },
    template: '<InputText/>'
}))