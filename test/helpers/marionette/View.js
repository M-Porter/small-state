import Marionette from 'backbone.marionette';

export default Marionette.View.extend({
  template: `
    <div class="wrapper">
      <h1>small-state</h1>
      <p>
        Lorem ipsum blah blah blah.
      </p>
    </div>
  `,

  initialize(options) {
    this.foo = options.foo || 'bar';
  }
});
