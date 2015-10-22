var searchIndex = {};
searchIndex['show_notes'] = {"items":[[0,"","show_notes","Read the show notes, as well as fairly detailed comments on all the code\nsamples referenced in the show.",null,null],[0,"e000","","Hello, world!",null,null],[5,"hello_world","show_notes::e000","Prints \"Hello, world!\" if you import it somewhere and run it.",null,{"inputs":[],"output":null}],[0,"e001","show_notes","Document all the things!",null,null],[3,"TVShow","show_notes::e001","This is a sample structure, to demonstrate `rustdoc`/`cargo doc`.",null,null],[12,"theme","","Here is a string telling us what the theme song was.",0,null],[12,"year","","Here is the year the show premiered.",0,null],[5,"use_members","","This documents a plain-old function.",null,{"inputs":[],"output":null}],[11,"new","","This documents a fairly ho-hum structure constructor.",0,{"inputs":[{"name":"tvshow"},{"name":"str"},{"name":"i32"},{"name":"str"}],"output":{"name":"tvshow"}}],[0,"e002","show_notes","Something borrowed, something... moved?",null,null],[3,"Circle","show_notes::e002","This struct is simple but useful to see how borrowing and moving work.",null,null],[12,"x","","X position of the circle's origin.",1,null],[12,"y","","Y position of the circle's origin",1,null],[12,"r","","Radius of the circle",1,null],[5,"demonstrate_ownership","","Demonstrates how borrowing works with plain old functions.",null,{"inputs":[],"output":null}],[5,"borrow","","Demonstrates general borrowing of an immutable reference.",null,{"inputs":[{"name":"circle"}],"output":null}],[5,"borrow_mut","","Demonstrates general borrowing of a mutable reference.",null,{"inputs":[{"name":"circle"}],"output":null}],[5,"move_circle","","Demonstrates general moving of an instance.",null,{"inputs":[{"name":"circle"}],"output":null}],[5,"demonstrate_method_ownership","","Demonstrates how the same concepts apply when dealing with methods.",null,{"inputs":[],"output":null}],[11,"fmt","","",1,{"inputs":[{"name":"circle"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a `Circle` instance centered on specified x, y values.",1,{"inputs":[{"name":"circle"},{"name":"f64"},{"name":"f64"},{"name":"f64"}],"output":{"name":"circle"}}],[11,"x_by_ref","","Returns the value of `Circle.x`, borrowing an immutable reference to\nthe circle to do it.",1,{"inputs":[{"name":"circle"}],"output":{"name":"f64"}}],[11,"x_by_mut_ref","","",1,{"inputs":[{"name":"circle"}],"output":{"name":"f64"}}],[11,"by_take","","Returns the value of `Circle.x`, taking ownership of the circle. As a\nresult of the change in ownership, the circle goes out of scope after\nthe method returns, so the circle instance will be inaccessible after\nthat.",1,{"inputs":[{"name":"circle"}],"output":{"name":"f64"}}],[11,"by_take_mut","","Returns the value of `Circle.x`, taking ownership of a mutable circle.",1,{"inputs":[{"name":"circle"}],"output":{"name":"f64"}}],[0,"e003","show_notes","No More Nulls",null,null],[3,"PreexistingStruct","show_notes::e003","Just exists to be used as an element in `RelatedishThings`.",null,null],[12,"some_int","","",2,null],[12,"some_string","","",2,null],[4,"RelatedishThings","","An enumeration can *hold* a variety of types. This one shows you a few.",null,null],[13,"Unit","","This doesn't have a value other than being RelatedishThings::Unit.",3,null],[13,"SomeName","","It could be a tuple struct, with basically any value type embedded.",3,null],[13,"SomeValue","","",3,null],[13,"ComplexData","","It can be a full-on struct-type construct.",3,null],[12,"description","show_notes::e003::RelatedishThings","",3,null],[12,"number","","",3,null],[13,"ReusedStructure","show_notes::e003","And it can use other complex data types within those, of course.",3,null],[5,"demonstrate_basic_enumeration","","Shows how the result of an enum comes back as increasingly complex data.",null,{"inputs":[],"output":null}],[5,"demonstrate_match","","Shows in a bit more detail how `match` works.",null,{"inputs":[],"output":null}],[5,"get_an_option","","Shows how this is used in a more meaningful context, with a standard type.",null,{"inputs":[{"name":"bool"}],"output":{"name":"option"}}],[5,"demonstrate_option","","Shows how an option type works in practice.",null,{"inputs":[],"output":null}],[5,"get_a_result","","Shows how to return either a meaningful result or an error as an enum.",null,{"inputs":[{"name":"bool"}],"output":{"name":"result"}}],[5,"demonstrate_result","","Shows how a `Result` type works in practice.",null,{"inputs":[],"output":null}],[11,"fmt","","",2,{"inputs":[{"name":"preexistingstruct"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"relatedishthings"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"TVShow"],[3,"Circle"],[3,"PreexistingStruct"],[4,"RelatedishThings"]]};
initSearch(searchIndex);
