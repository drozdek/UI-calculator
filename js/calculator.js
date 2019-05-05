$(function () {
  /**
   * cache variables
   */
  var $calc = $('.calculator'),
    nArg = '', mOper = '', result = '',
    $user_summary_input = $('#user_summary_input'),
    $input_S = $('#u_input_S');

  /**
   * bind target .item click event
   */
  $calc.on('click', '.item', (e) => {
    result = $(e.target).parent().attr('id').replace(/dig-/, '');
    nArg += result;
    showValuesOnHeader();
  });

  /**
   * bind [data-math] elements with click event
   */
  $('[data-math]').on('click', (e) => {
    mOper = $(e.target).attr('data-math');
    if (mOper === '=') {
      calculateValues();
      return
    }
    nArg += mOper;
    showValuesOnHeader();
  });

  /**
   * show values on calculator header
   */
  function showValuesOnHeader() {
    $input_S.val(nArg);
  }

  /**
   * calculate values
   */

  function calculateValues() {
    var evalRes = eval( $input_S.val() );
    $user_summary_input.val(evalRes)
  }

})