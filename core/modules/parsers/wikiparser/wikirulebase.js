/*\
title: $:/core/modules/parsers/wikiparser/rules/wikirulebase.js
type: application/javascript
module-type: global

Base class for wiki parser rules

\*/

"use strict";

/*
This constructor is always overridden with a blank constructor, and so shouldn't be used
*/
class WikiRuleBase {
	/*
	To be overridden by individual rules
	*/
	init(parser) {
		this.parser = parser;
	}

	/*
	Default implementation of findNextMatch uses RegExp matching
	*/
	findNextMatch(startPos) {
		this.matchRegExp.lastIndex = startPos;
		this.match = this.matchRegExp.exec(this.parser.source);
		return this.match ? this.match.index : undefined;
	}
}

exports.WikiRuleBase = WikiRuleBase;
