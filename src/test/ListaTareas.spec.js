import { mount } from '@vue/test-utils'
import ListaTareas from '../components/ListaTareas.vue'

describe('ListaTareas.vue', () => {

    test('muestra las tres tareas iniciales', () => {
        const wrapper = mount(ListaTareas)

        expect(wrapper.text()).toContain('Tarea 1')
        expect(wrapper.text()).toContain('Tarea 2')
        expect(wrapper.text()).toContain('Tarea 3')
    })

    test('puede agregar una nueva tarea', async () => {
        const wrapper = mount(ListaTareas)
        const input = wrapper.find('input[type="text"]')

        await input.setValue('Nueva tarea')
        await wrapper.find('form').trigger('submit')

        expect(wrapper.text()).toContain('Nueva tarea')
    })

    test('puede eliminar una tarea', async () => {
        const wrapper = mount(ListaTareas)
        const botones = wrapper.findAll('button')

        await botones[0].trigger('click')

        expect(wrapper.text()).not.toContain('Tarea 1')
    })

})