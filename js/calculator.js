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
   * @method showValuesOnHeader show values on calculator header
   */
  function showValuesOnHeader() {
    return $input_S.val(nArg);
  }

  /**
   * @method calculateValues - calculate values
   */
  function calculateValues() {
    var evalRes = eval($input_S.val());
    return $user_summary_input.val(evalRes)
  }

  /**
   * @method resetValues reset values to defaults
   */
  function resetValues() {
    [$user_summary_input, $input_S].forEach(e => {
      e.val('');
    })
    nArg = '';
  }

  /**
   * @method broser - get browser used
   * @returns {string} browser
   */
  var browser = (function (agent) {
    switch (true) {
      case agent.indexOf("edge") > -1: return "edge";
      case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
      case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
      case agent.indexOf("trident") > -1: return "ie";
      case agent.indexOf("firefox") > -1: return "firefox";
      case agent.indexOf("safari") > -1: return "safari";
      default: return "other";
    }
  })(window.navigator.userAgent.toLowerCase());

  /**
   * clear calculator
   */
  $('#ac_bttn > button').on('click', () => {
    resetValues();
  });

  /**
   * @method getCurrentDateTime - get current dateTime 
   * @returns {date} nDate
   */
  function getCurrentDateTime() {
    // get date for current locales
    var nDate = new Date();
    nDate = nDate.toLocaleDateString('en-gb', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    return nDate
  }

  /**
   * perform ajax call 
   * to send obj
   */
  $('#save_bttn > button').on('click', () => {
    var url = "http://localhost/itech/php/itech.php";

    var obj = {
      browser: browser,
      date: getCurrentDateTime(),
      data: $user_summary_input.val()
    };

    $.ajax({
      url: url,
      type: 'POST',
      data: {
        data: obj
      }
    });
  });

});