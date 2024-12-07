const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Rotate,
		C3.Behaviors.Platform,
		C3.Behaviors.TileMovement,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.TileMovement.Acts.SimulateControl,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.ScrollToObject,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Поворот: 0},
	{круг: 0},
	{часть_круга: 0},
	{Платформер: 0},
	{мяч: 0},
	{ДвижениеПоКлеткам: 0},
	{прокрутка: 0},
	{Тач: 0},
	{квадрат: 0},
	{часть_квадрата: 0},
	{прокруткаY: 0},
	{Новый_обьект: 0}
];

self.InstanceType = {
	круг: class extends self.ISpriteInstance {},
	часть_круга: class extends self.ISpriteInstance {},
	мяч: class extends self.ISpriteInstance {},
	прокрутка: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	квадрат: class extends self.ISpriteInstance {},
	часть_квадрата: class extends self.ISpriteInstance {}
}