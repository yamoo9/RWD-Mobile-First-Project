'use strict';

/**
 * --------------------------------
 * Require.js 설정
 * --------------------------------
 */
require.config({
	paths: {
		jquery     : 'libs/jquery.min',
		modernizr  : 'libs/modernizr',
		detectizr  : 'libs/detectizr.min',
		toggleGrid : 'guide/toggleGrid'
	},
	shim: {
		modernizr: {
			exports: 'Modernizr'
		},
		detectizr: {
			deps    : ['modernizr'],
			exports : 'Detectizr'
		},
	}
});


/**
 * --------------------------------
 * 모듈 호출 및 처리 코드 작성
 * --------------------------------
 */
require(['detectizr']);

require(['toggleGrid'], function(toggleGrid) {
	// 전달인자(Arguments)
	// arg1: 그리드 시스템 가이드를 적용할 요소
	// arg2: 그리드 가이드 클래스 속성 이름
	toggleGrid('body', 'grid');
});