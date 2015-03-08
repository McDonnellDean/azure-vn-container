/*
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

var bunyan = require('bunyan');

module.exports = function(config, logger) {
  logger = logger || bunyan.createLogger({name: 'azure-vn-container'});

  var build = function build(mode, system, containerDef, out, callback) {
    logger.info('building');
    out.stdout('building');
    callback(null);
  };

  var deploy = function deploy(mode, target, system, containerDef, container, out, callback) {
    logger.info('deploying');
    out.stdout('deploying');
    callback(null);
  };

  var undeploy = function undeploy(mode, target, system, containerDef, container, out, callback) {
    logger.info('undeploying');
    out.stdout('undeploying');
    callback(null);
  };

  var start = function start(mode, target, system, containerDef, container, out, callback) {
    logger.info('starting');
    out.stdout('starting');
    callback(null);
  };

  var stop = function stop(mode, target, system, containerDef, container, out, callback) {
    logger.info('stopping');
    out.stdout('stopping');
    callback(null);
  };

  var link = function link(mode, target, system, containerDef, container, out, callback) {
    logger.info('linking');
    out.stdout('linking');
    callback(null);
  };

  var unlink = function unlink(mode, target, system, containerDef, container, out, callback) {
    logger.info('unlinking');
    out.stdout('unlinking');
    callback(null);
  };

  return {
    build: build,
    deploy: deploy,
    start: start,
    stop: stop,
    link: link,
    unlink: unlink,
    undeploy: undeploy,
    add: deploy,
    remove: undeploy
  };
};
