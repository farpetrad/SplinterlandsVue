import { mount, VueWrapper } from '@vue/test-utils'
import Drawer from '../Drawer.vue';

const defineEmits = jest.fn();
const doClick = jest.fn();

describe('It tests the Navigation drawer', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(Drawer, {
            global: {
                mocks: {
                    defineEmits,
                    doClick
                },
                stubs: {
                    FontAwesomeIcon: {
                        template: '<span />'
                    }
                }
            }
        });
    });
    afterEach(() => {
        wrapper.unmount();
    });

    it('Tests that it renders', () => {
        expect(wrapper).not.toBeNull();

        expect(wrapper.find('#drawer').exists()).toBeTruthy();
        const container = wrapper.get('#drawer');
        expect(container).toBeDefined();
    });

    it('Can close the drawer on click', () => {
        const button = wrapper.find('.mobile-indicator');
        expect(button.exists()).toBeTruthy();

        button.trigger('click');
        expect(doClick).toHaveBeenCalled();
    });
});
