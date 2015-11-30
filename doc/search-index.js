var searchIndex = {};
searchIndex["conv"] = {"doc":"This crate provides a number of conversion traits with more specific semantics than those provided by `as` or `From`/`Into`.","items":[[4,"DefaultApprox","conv","The &quot;default&quot; approximation scheme.  This scheme does whatever would generally be expected of a lossy conversion, assuming no additional context or instruction is given.",null,null],[4,"Wrapping","","This scheme is used to convert a value by &quot;wrapping&quot; it into a narrower range.",null,null],[4,"RoundToNearest","","This scheme is used to convert a value by rounding it to the nearest representable value, with ties rounding away from zero.",null,null],[4,"RoundToNegInf","","This scheme is used to convert a value by rounding it toward negative infinity to the nearest representable value.",null,null],[4,"RoundToPosInf","","This scheme is used to convert a value by rounding it toward positive infinity to the nearest representable value.",null,null],[4,"RoundToZero","","This scheme is used to convert a value by rounding it toward zero to the nearest representable value.",null,null],[0,"macros","","This module provides convenience macros to help with implementing the conversion traits.",null,null],[0,"prelude","","Publicly re-exports the most generally useful set of items.",null,null],[0,"errors","","This module defines the various error types that can be produced by a failed conversion.",null,null],[3,"Unrepresentable","conv::errors","Indicates that the conversion failed because the value was not representable.",null,null],[12,"0","","",0,null],[3,"NegOverflow","","Indicates that the conversion failed due to a negative overflow.",null,null],[12,"0","","",1,null],[3,"PosOverflow","","Indicates that the conversion failed due to a positive overflow.",null,null],[12,"0","","",2,null],[4,"GeneralError","","A general error enumeration that subsumes all other conversion errors.",null,null],[13,"NegOverflow","","Input was too negative for the target type.",3,null],[13,"PosOverflow","","Input was too positive for the target type.",3,null],[13,"Unrepresentable","","Input was not representable in the target type.",3,null],[4,"GeneralErrorKind","","A general error enumeration that subsumes all other conversion errors, but discards all input payloads the errors may be carrying.",null,null],[13,"NegOverflow","","Input was too negative for the target type.",4,null],[13,"PosOverflow","","Input was too positive for the target type.",4,null],[13,"Unrepresentable","","Input was not representable in the target type.",4,null],[4,"NoError","","Indicates that it is not possible for the conversion to fail.",null,null],[4,"FloatError","","Indicates that a conversion from a floating point type failed.",null,null],[13,"NegOverflow","","Input was too negative for the target type.",5,null],[13,"PosOverflow","","Input was too positive for the target type.",5,null],[13,"NotANumber","","Input was not-a-number, which the target type could not represent.",5,null],[4,"RangeError","","Indicates that a conversion failed due to a range error.",null,null],[13,"NegOverflow","","Input was too negative for the target type.",6,null],[13,"PosOverflow","","Input was too positive the target type.",6,null],[4,"RangeErrorKind","","Indicates that a conversion failed due to a range error.",null,null],[13,"NegOverflow","","Input was too negative for the target type.",7,null],[13,"PosOverflow","","Input was too positive for the target type.",7,null],[8,"Saturate","","Saturates a `Result`.",null,null],[16,"Output","","The result of saturating.",8,null],[10,"saturate","","Replaces an overflow error with a saturated value.",8,{"inputs":[{"name":"saturate"}],"output":{"name":"output"}}],[8,"UnwrapOk","","Safely unwrap a `Result` that cannot contain an error.",null,null],[10,"unwrap_ok","","Unwraps a `Result` without possibility of failing.",9,{"inputs":[{"name":"unwrapok"}],"output":{"name":"t"}}],[8,"UnwrapOrInf","","Unwrap a conversion by saturating to infinity.",null,null],[16,"Output","","The result of unwrapping.",10,null],[10,"unwrap_or_inf","","Either unwraps the successfully converted value, or saturates to infinity in the &quot;direction&quot; of overflow.",10,{"inputs":[{"name":"unwraporinf"}],"output":{"name":"output"}}],[8,"UnwrapOrInvalid","","Unwrap a conversion by replacing a failure with an invalid sentinel value.",null,null],[16,"Output","","The result of unwrapping.",11,null],[10,"unwrap_or_invalid","","Either unwraps the successfully converted value, or returns the output type&#39;s invalid sentinel value.",11,{"inputs":[{"name":"unwraporinvalid"}],"output":{"name":"output"}}],[8,"UnwrapOrSaturate","","Unwrap a conversion by saturating.",null,null],[16,"Output","","The result of unwrapping.",12,null],[10,"unwrap_or_saturate","","Either unwraps the successfully converted value, or saturates in the &quot;direction&quot; of overflow.",12,{"inputs":[{"name":"unwraporsaturate"}],"output":{"name":"output"}}],[11,"partial_cmp","","",3,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"option"}}],[11,"lt","","",3,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"le","","",3,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"gt","","",3,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"ge","","",3,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"cmp","","",3,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"ordering"}}],[11,"eq","","",3,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"generalerror"}],"output":{"name":"generalerror"}}],[11,"into_inner","","Returns the value stored in this error.",3,{"inputs":[{"name":"generalerror"}],"output":{"name":"t"}}],[11,"fmt","","",3,{"inputs":[{"name":"generalerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",3,{"inputs":[{"name":"generalerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"generalerror"}],"output":{"name":"str"}}],[11,"from","","",3,{"inputs":[{"name":"unrepresentable"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"negoverflow"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"posoverflow"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"rangeerror"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"floaterror"}],"output":{"name":"generalerror"}}],[11,"fmt","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"option"}}],[11,"lt","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"le","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"gt","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"ge","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"cmp","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"ordering"}}],[11,"eq","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"generalerrorkind"}],"output":{"name":"generalerrorkind"}}],[11,"from","","",4,{"inputs":[{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",4,{"inputs":[{"name":"generalerrorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",4,{"inputs":[{"name":"generalerrorkind"}],"output":{"name":"str"}}],[11,"from","","",4,{"inputs":[{"name":"unrepresentable"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"negoverflow"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"posoverflow"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"rangeerrorkind"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"rangeerror"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"generalerror"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"floaterror"}],"output":{"name":"generalerrorkind"}}],[11,"fmt","","",13,{"inputs":[{"name":"noerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",13,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"option"}}],[11,"lt","","",13,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"le","","",13,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"gt","","",13,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"ge","","",13,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"cmp","","",13,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"ordering"}}],[11,"eq","","",13,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"ne","","",13,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"clone","","",13,{"inputs":[{"name":"noerror"}],"output":{"name":"noerror"}}],[11,"fmt","","",13,{"inputs":[{"name":"noerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",13,{"inputs":[{"name":"noerror"}],"output":{"name":"str"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"ordering"}}],[11,"eq","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"unrepresentable"}],"output":{"name":"unrepresentable"}}],[11,"into_inner","","Returns the value stored in this error.",0,{"inputs":[{"name":"unrepresentable"}],"output":{"name":"t"}}],[11,"fmt","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",0,{"inputs":[{"name":"unrepresentable"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"unrepresentable"}],"output":{"name":"str"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"negoverflow"},{"name":"negoverflow"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"negoverflow"},{"name":"negoverflow"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"negoverflow"},{"name":"negoverflow"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"negoverflow"},{"name":"negoverflow"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"negoverflow"},{"name":"negoverflow"}],"output":{"name":"bool"}}],[11,"cmp","","",1,{"inputs":[{"name":"negoverflow"},{"name":"negoverflow"}],"output":{"name":"ordering"}}],[11,"eq","","",1,{"inputs":[{"name":"negoverflow"},{"name":"negoverflow"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"negoverflow"},{"name":"negoverflow"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"negoverflow"}],"output":{"name":"negoverflow"}}],[11,"into_inner","","Returns the value stored in this error.",1,{"inputs":[{"name":"negoverflow"}],"output":{"name":"t"}}],[11,"fmt","","",1,{"inputs":[{"name":"negoverflow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",1,{"inputs":[{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",1,{"inputs":[{"name":"negoverflow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"negoverflow"}],"output":{"name":"str"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"posoverflow"},{"name":"posoverflow"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"posoverflow"},{"name":"posoverflow"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"posoverflow"},{"name":"posoverflow"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"posoverflow"},{"name":"posoverflow"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"posoverflow"},{"name":"posoverflow"}],"output":{"name":"bool"}}],[11,"cmp","","",2,{"inputs":[{"name":"posoverflow"},{"name":"posoverflow"}],"output":{"name":"ordering"}}],[11,"eq","","",2,{"inputs":[{"name":"posoverflow"},{"name":"posoverflow"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"posoverflow"},{"name":"posoverflow"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"posoverflow"}],"output":{"name":"posoverflow"}}],[11,"into_inner","","Returns the value stored in this error.",2,{"inputs":[{"name":"posoverflow"}],"output":{"name":"t"}}],[11,"fmt","","",2,{"inputs":[{"name":"posoverflow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",2,{"inputs":[{"name":"posoverflow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",2,{"inputs":[{"name":"posoverflow"}],"output":{"name":"str"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"option"}}],[11,"lt","","",5,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"le","","",5,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"gt","","",5,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"ge","","",5,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"cmp","","",5,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"ordering"}}],[11,"eq","","",5,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"floaterror"}],"output":{"name":"floaterror"}}],[11,"into_inner","","Returns the value stored in this error.",5,{"inputs":[{"name":"floaterror"}],"output":{"name":"t"}}],[11,"fmt","","",5,{"inputs":[{"name":"floaterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",5,{"inputs":[{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",5,{"inputs":[{"name":"floaterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",5,{"inputs":[{"name":"floaterror"}],"output":{"name":"str"}}],[11,"from","","",5,{"inputs":[{"name":"negoverflow"}],"output":{"name":"self"}}],[11,"from","","",5,{"inputs":[{"name":"posoverflow"}],"output":{"name":"self"}}],[11,"from","","",5,{"inputs":[{"name":"rangeerror"}],"output":{"name":"self"}}],[11,"partial_cmp","","",6,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"option"}}],[11,"lt","","",6,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"le","","",6,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"gt","","",6,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"ge","","",6,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"cmp","","",6,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"ordering"}}],[11,"eq","","",6,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"rangeerror"}],"output":{"name":"rangeerror"}}],[11,"into_inner","","Returns the value stored in this error.",6,{"inputs":[{"name":"rangeerror"}],"output":{"name":"t"}}],[11,"fmt","","",6,{"inputs":[{"name":"rangeerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",6,{"inputs":[{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",6,{"inputs":[{"name":"rangeerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",6,{"inputs":[{"name":"rangeerror"}],"output":{"name":"str"}}],[11,"from","","",6,{"inputs":[{"name":"negoverflow"}],"output":{"name":"self"}}],[11,"from","","",6,{"inputs":[{"name":"posoverflow"}],"output":{"name":"self"}}],[11,"fmt","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"option"}}],[11,"lt","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"le","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"gt","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"ge","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"cmp","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"ordering"}}],[11,"eq","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"rangeerrorkind"}],"output":{"name":"rangeerrorkind"}}],[11,"from","","",7,{"inputs":[{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",7,{"inputs":[{"name":"rangeerrorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",7,{"inputs":[{"name":"rangeerrorkind"}],"output":{"name":"str"}}],[11,"from","","",7,{"inputs":[{"name":"negoverflow"}],"output":{"name":"self"}}],[11,"from","","",7,{"inputs":[{"name":"posoverflow"}],"output":{"name":"self"}}],[11,"from","","",7,{"inputs":[{"name":"rangeerror"}],"output":{"name":"self"}}],[11,"saturate","core::result","",14,{"inputs":[{"name":"result"}],"output":{"name":"output"}}],[11,"saturate","","",14,{"inputs":[{"name":"result"}],"output":{"name":"output"}}],[11,"saturate","","",14,{"inputs":[{"name":"result"}],"output":{"name":"output"}}],[11,"unwrap_ok","","",14,{"inputs":[{"name":"result"}],"output":{"name":"t"}}],[11,"unwrap_or_inf","","",14,{"inputs":[{"name":"result"}],"output":{"name":"t"}}],[11,"unwrap_or_invalid","","",14,{"inputs":[{"name":"result"}],"output":{"name":"t"}}],[11,"unwrap_or_saturate","","",14,{"inputs":[{"name":"result"}],"output":{"name":"t"}}],[0,"misc","conv","This module defines some additional traits not *directly* tied to conversions.",null,null],[8,"Saturated","conv::misc","This trait indicates that values of a type can be logically &quot;saturated&quot;.",null,null],[10,"saturated_max","","Returns the type&#39;s saturated, maximum value.",15,{"inputs":[],"output":{"name":"self"}}],[10,"saturated_min","","Returns the type&#39;s saturated, minimum value.",15,{"inputs":[],"output":{"name":"self"}}],[8,"InvalidSentinel","","This trait indicates that a type has an &quot;invalid&quot; sentinel value.",null,null],[10,"invalid_sentinel","","Returns the type&#39;s &quot;invalid&quot; sentinel value.",16,{"inputs":[],"output":{"name":"self"}}],[8,"SignedInfinity","","This trait indicates that a type has positive and negative &quot;infinity&quot; values.",null,null],[10,"neg_infinity","","Returns the type&#39;s positive infinity value.",17,{"inputs":[],"output":{"name":"self"}}],[10,"pos_infinity","","Returns the type&#39;s negative infinity value.",17,{"inputs":[],"output":{"name":"self"}}],[8,"ApproxFrom","conv","This trait is used to perform a conversion that is permitted to approximate the result, but *not* to wrap or saturate the result to fit into the destination type&#39;s representable range.",null,null],[16,"Err","","The error type produced by a failed conversion.",18,null],[10,"approx_from","","Convert the given value into an approximately equivalent representation.",18,{"inputs":[{"name":"src"}],"output":{"name":"result"}}],[8,"ApproxInto","","This is the dual of `ApproxFrom`; see that trait for information.",null,null],[16,"Err","","The error type produced by a failed conversion.",19,null],[10,"approx_into","","Convert the subject into an approximately equivalent representation.",19,{"inputs":[{"name":"approxinto"}],"output":{"name":"result"}}],[8,"ApproxScheme","","This trait is used to mark approximation scheme types.",null,null],[8,"TryFrom","","This trait is used to perform a conversion between different semantic types which might fail.",null,null],[16,"Err","","The error type produced by a failed conversion.",20,null],[10,"try_from","","Convert the given value into the subject type.",20,{"inputs":[{"name":"src"}],"output":{"name":"result"}}],[8,"TryInto","","This is the dual of `TryFrom`; see that trait for information.",null,null],[16,"Err","","The error type produced by a failed conversion.",21,null],[10,"try_into","","Convert the subject into the destination type.",21,{"inputs":[{"name":"tryinto"}],"output":{"name":"result"}}],[8,"ValueFrom","","This trait is used to perform an exact, value-preserving conversion.",null,null],[16,"Err","","The error type produced by a failed conversion.",22,null],[10,"value_from","","Convert the given value into an exactly equivalent representation.",22,{"inputs":[{"name":"src"}],"output":{"name":"result"}}],[8,"ValueInto","","This is the dual of `ValueFrom`; see that trait for information.",null,null],[16,"Err","","The error type produced by a failed conversion.",23,null],[10,"value_into","","Convert the subject into an exactly equivalent representation.",23,{"inputs":[{"name":"valueinto"}],"output":{"name":"result"}}],[8,"ConvUtil","","This extension trait exists to simplify using various conversions.",null,null],[11,"approx_as","","Approximate the subject to a given type with the default scheme.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"result"}}],[11,"approx_as_by","","Approximate the subject to a given type with a specific scheme.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"result"}}],[11,"into_as","","Convert the subject to a given type.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"dst"}}],[11,"try_as","","Attempt to convert the subject to a given type.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"result"}}],[11,"value_as","","Attempt a value conversion of the subject to a given type.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"result"}}],[8,"ConvAsUtil","","This extension trait exists to simplify using various conversions.",null,null],[11,"approx","","Approximate the subject with the default scheme.",25,{"inputs":[{"name":"convasutil"}],"output":{"name":"result"}}],[11,"approx_by","","Approximate the subject with a specific scheme.",25,{"inputs":[{"name":"convasutil"}],"output":{"name":"result"}}],[14,"TryFrom!","","See the documentation for the [`macros`](./macros/index.html#tryfrom!) module for details.",null,null]],"paths":[[3,"Unrepresentable"],[3,"NegOverflow"],[3,"PosOverflow"],[4,"GeneralError"],[4,"GeneralErrorKind"],[4,"FloatError"],[4,"RangeError"],[4,"RangeErrorKind"],[8,"Saturate"],[8,"UnwrapOk"],[8,"UnwrapOrInf"],[8,"UnwrapOrInvalid"],[8,"UnwrapOrSaturate"],[4,"NoError"],[4,"Result"],[8,"Saturated"],[8,"InvalidSentinel"],[8,"SignedInfinity"],[8,"ApproxFrom"],[8,"ApproxInto"],[8,"TryFrom"],[8,"TryInto"],[8,"ValueFrom"],[8,"ValueInto"],[8,"ConvUtil"],[8,"ConvAsUtil"]]};
initSearch(searchIndex);
