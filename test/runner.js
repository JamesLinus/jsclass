if (typeof CWD === 'undefined') this.CWD = '.'

JS.Packages(function() { with(this) {
    autoload(/^(.*)Spec$/, {from: CWD + '/test/specs', require: 'JS.$1'})
    
    pkg('Test.UnitSpec').requires('JS.Set', 'JS.Observable', 'JS.Range')
    pkg('ClassSpec').requires('ModuleSpec')
    
    file(CWD + '/test/specs/test/test_spec_helpers.js').provides('TestSpecHelpers')
    
    pkg('Test.UnitSpec').requires('TestSpecHelpers')
    pkg('Test.MockingSpec').requires('TestSpecHelpers')
}})

JS.require('JS.Test', 'JS.MethodChain', function() {
    JS.require( 'Test.UnitSpec',
                'Test.ContextSpec',
                'Test.MockingSpec',
                'Test.Mocking.ClockSpec',
                'ModuleSpec',
                'ClassSpec',
                'MethodSpec',
                'KernelSpec',
                'SingletonSpec',
                'InterfaceSpec',
                'CommandSpec',
                'ComparableSpec',
                'ConstantScopeSpec',
                'DecoratorSpec',
                'EnumerableSpec',
                'ForwardableSpec',
                'HashSpec',
                'MethodChainSpec',
                'ObservableSpec',
                'PackageSpec',
                'ProxySpec',
                'RangeSpec',
                'SetSpec',
                'StateSpec',
            
    JS.Test.method('autorun'))
})
