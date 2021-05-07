import { h, ComponentType } from 'preact'
import { localised } from '../../locales'
import { asyncComponent } from '~utils/components'
import style from './style.scss'

const Loading = localised(({ translate }) => (
  <div className={style.loading}>
    {translate('generic.lazy_load_placeholder')}
  </div>
))

const AsyncCrossDevice = asyncComponent(
  () => import(/* webpackChunkName: "authVendor" */ './Auth.js'),
  Loading
)

const AuthLazy = (props: ComponentType<Element>) => (
  <AsyncCrossDevice {...props} />
)

export default localised(AuthLazy)
