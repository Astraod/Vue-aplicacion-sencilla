import { mount } from '@vue/test-utils'
import Contador from '../components/ContadorComponent.vue/index.js'

describe('Contador.vue', () => {

    test('muestra el contador inicial en 10', () => {
        const wrapper = mount(Contador)

        expect(wrapper.text()).toContain('Contador: 10')
    })

    test('incrementa el contador al presionar +1', async () => {
        const wrapper = mount(Contador)
        const botones = wrapper.findAll('button')

        await botones[0].trigger('click')

        expect(wrapper.text()).toContain('Contador: 11')
    })

    test('decrementa el contador al presionar -1', async () => {
        const wrapper = mount(Contador)
        const botones = wrapper.findAll('button')

        await botones[1].trigger('click')

        expect(wrapper.text()).toContain('Contador: 9')
    })

    test('reinicia el contador a 0', async () => {
        const wrapper = mount(Contador)
        const botones = wrapper.findAll('button')

        await botones[2].trigger('click')

        expect(wrapper.text()).toContain('Contador: 0')
    })
})