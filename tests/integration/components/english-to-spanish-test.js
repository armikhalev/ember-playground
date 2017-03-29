import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('english-to-spanish', 'Integration | Component | english to spanish', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{english-to-spanish}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#english-to-spanish}}
      template block text
    {{/english-to-spanish}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
