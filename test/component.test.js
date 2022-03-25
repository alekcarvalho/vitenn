import { mount } from '@vue/test-utils'
import { describe, expect, it, fn } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import ContentLoader from '../src/components/atoms/ContentLoader.vue'
import ActionButtons from '../src/components/molecules/ActionButtons.vue'

describe('ContentLoader.vue', () => {
  it('should render', () => {
    const wrapper = mount(ContentLoader, {
      props: { lines: 4, header: true, text: true, image: true, avatar: true },
    })
    expect(wrapper.find('.vue-content-placeholders').exists())
    expect(wrapper.props().lines).toBe(4)
    expect(wrapper.props().header).toBe(true)
    expect(wrapper.props().text).toBe(true)
    expect(wrapper.props().image).toBe(true)
    expect(wrapper.props().avatar).toBe(true)
  })
})

describe('ActionButtons.vue', () => {
  it('should be interactive', async () => {
    const wrapper = mount(ActionButtons, {
      global: { plugins: [createTestingPinia({ createSpy: fn })] },
      props: {},
    })
    expect(wrapper.text()).toContain('0')

    expect(wrapper.find('.button').exists()).toBe(true)

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')
  })
})
